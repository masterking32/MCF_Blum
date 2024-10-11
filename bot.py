# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot

import importlib
import random
import sys
import os
import json
import asyncio
from pathlib import Path
import threading
import hashlib
import time

import utilities.utilities as utilities
from FarmBot.FarmBot import FarmBot

# Constants
CHECK_INTERVAL = utilities.getConfig("check_interval", 3600)
MASTER_CRYPTO_FARM_BOT_DIR = Path(__file__).resolve().parents[2]
MODULE_DIR = Path(__file__).resolve().parent

PYROGRAM_ACCOUNTS_FILE = os.path.join(
    MASTER_CRYPTO_FARM_BOT_DIR, "telegram_accounts/accounts.json"
)
MODULE_ACCOUNTS_FILE = os.path.join(MODULE_DIR, "accounts.json")
MODULE_DISABLED_SESSIONS_FILE = os.path.join(MODULE_DIR, "disabled_sessions.json")

CONFIG_ERROR_MSG = (
    "\033[31mThis module is designed for MasterCryptoFarmBot.\033[0m\n"
    "\033[31mYou cannot run this module as a standalone application.\033[0m\n"
    "\033[31mPlease install MasterCryptoFarmBot first, then place this module inside the modules directory.\033[0m\n"
    "\033[31mGitHub: \033[0m\033[32mhttps://github.com/masterking32/MasterCryptoFarmBot\033[0m"
)

sys.path.append(str(MASTER_CRYPTO_FARM_BOT_DIR))

try:
    if sys.stdout.encoding.lower() != "utf-8":
        sys.stdout.reconfigure(encoding="utf-8")
except Exception as e:
    pass

try:
    import mcf_utils.logColors as lc
    from mcf_utils.tgAccount import tgAccount

    config_path = os.path.join(MASTER_CRYPTO_FARM_BOT_DIR, "config.py")
    if not os.path.exists(config_path):
        print(CONFIG_ERROR_MSG)
        exit(1)

    spec = importlib.util.spec_from_file_location("config", config_path)
    cfg = importlib.util.module_from_spec(spec)
    sys.modules["config"] = cfg
    spec.loader.exec_module(cfg)

    from mcf_utils.database import Database
    from mcf_utils import utils
    from mcf_utils.api import API as MCF_API
except Exception as e:
    print(CONFIG_ERROR_MSG)
    print(f"Error: {e}")
    exit(1)


async def check_cd(log):
    log.info(f"<y>💤 Checking again in </y><c>{CHECK_INTERVAL}</c><y> seconds ...</y>")
    time.sleep(CHECK_INTERVAL)
    random_wait = random.randint(60, 120)
    log.info(f"<y>💤 Random wait for </y><c>{random_wait}</c><y> seconds ...</y>")
    await asyncio.sleep(random_wait)


# Edit the following variables
BOT_ID = "blumcryptobot"
REFERRAL_TOKEN = "ref_Gl4KRgUmpb"
SHORT_APP_NAME = "app"
APP_URL = None
# End of variables to edit


def load_json_file(file_path, default=None):
    try:
        if not os.path.exists(file_path):
            return default

        with open(file_path, "r", encoding="utf-8") as f:
            json_result = json.load(f)
            if not json_result or len(json_result) == 0:
                return default
            return json_result

    except Exception as e:
        pass

    return default


async def process_pg_account(account, bot_globals, log, group_id=None):
    try:
        if "disabled" in account and account["disabled"]:
            log.info(
                f"<y>🟨 Account <c>{account['session_name']}</c> from group <c>{group_id}</c> is disabled!</y>"
            )
            return

        log.info(
            f"<g>🔆 Start processing Pyrogram/Telethon account <c>{account['session_name']}</c> from group <c>{group_id}</c> ...</g>"
        )

        if account.get("proxy") == "":
            account["proxy"] = None

        tg = tgAccount(
            bot_globals=bot_globals,
            log=log,
            accountName=account["session_name"],
            proxy=account["proxy"],
            BotID=BOT_ID,
            ReferralToken=REFERRAL_TOKEN,
            ShortAppName=SHORT_APP_NAME,
            AppURL=APP_URL,
        )

        web_app_data = await tg.run()
        if not web_app_data:
            log.error(
                f"<r>└─ ❌ Account <c>{account['session_name']}</c> from group <c>{group_id}</c> is not ready! Unable to retrieve WebApp data.</r>"
            )
            return

        web_app_query = utils.extract_tg_query_from_url(web_app_data)
        if not web_app_query:
            log.error(
                f"<r>└─ ❌ Account <c>{account['session_name']}</c> from group <c>{group_id}</c> WebApp query is not valid!</r>"
            )
            return

        log.info(
            f"<g>└─ ✅ Account <c>{account['session_name']}</c> from group <c>{group_id}</c> is ready!</g>"
        )
        fb = FarmBot(
            log=log,
            bot_globals=bot_globals,
            account_name=account["session_name"],
            web_app_query=web_app_query,
            proxy=account["proxy"],
            user_agent=account["user_agent"],
            isPyrogram=True,
            tgAccount=tg,
        )

        await fb.run()
    except Exception as e:
        log.error(
            f"<r>❌ Account <c>{account['session_name']}</c> from group <c>{group_id}</c>, Error processing Pyrogram/Telethon account: {e}</r>"
        )
        return False
    finally:
        log.info(
            f"<g>✅ Pyrogram/Telethon account <c>{account['session_name']}</c> from group <c>{group_id}</c> has been processed.</g>"
        )


async def process_module_account(account, bot_globals, log, group_id=None):
    try:
        proxy = account.get("proxy")
        if proxy == "":
            proxy = None

        account_name = account.get("session_name")
        web_app_data = account.get("web_app_data")

        log.info(
            f"<g>🔆 Start processing module account <c>{account_name}</c> from group <c>{group_id}</c></g>"
        )

        user_agent = account.get("user_agent")
        if account.get("disabled"):
            log.info(
                f"<y>❌ Account <c>{account_name}</c> from group <c>{group_id}</c> is disabled!</y>"
            )
            return

        if not web_app_data:
            log.error(
                f"<r>❌ Account <c>{account_name}</c> from group <c>{group_id}</c> WebApp data is empty!</r>"
            )
            return

        web_app_query = utils.extract_tg_query_from_url(web_app_data)
        if not web_app_query:
            log.error(
                f"<r>❌ Account {account_name} from group <c>{group_id}</c> WebApp query is not valid!</r>"
            )
            return

        fb = FarmBot(
            log=log,
            bot_globals=bot_globals,
            account_name=account_name,
            web_app_query=web_app_query,
            proxy=proxy,
            user_agent=user_agent,
            isPyrogram=False,
        )
        await fb.run()
    except Exception as e:
        log.error(
            f"<r>❌ Account {account_name} from group <c>{group_id}</c> Error processing module account: {e}</r>"
        )
        return False
    finally:
        log.info(
            f"<g>✅ Module account <c>{account_name}</c> from group <c>{group_id}</c> has been processed.</g>"
        )


async def handle_accounts(group_id, accounts, bot_globals, log):
    try:
        log.info(
            f"<g>🖥️ Starting to process group <c>{group_id}</c> with <c>{len(accounts)}</c> accounts ...</g>"
        )

        for account in accounts:
            try:
                if account["is_pyrogram"]:
                    await process_pg_account(account, bot_globals, log, group_id)
                else:
                    await process_module_account(account, bot_globals, log, group_id)
            except Exception as e:
                log.error(
                    f"<r>❌ Error processing group <c>{group_id}</c> account: {e}</r>"
                )
                continue
    except Exception as e:
        log.error(f"<r>❌ Error processing group <c>{group_id}</c> accounts: {e}</r>")
    finally:
        log.info(
            f"<g>🔚 Group <c>{group_id}</c> with <c>{len(accounts)}</c> accounts has been processed. Waiting for other groups' tasks to finish</g>"
        )

    await asyncio.sleep(5)


def load_accounts():
    pyrogram_accounts_count = 0
    module_accounts_count = 0
    all_accounts = []
    disabled_accounts = load_json_file(MODULE_DISABLED_SESSIONS_FILE, [])

    try:
        pyrogram_accounts = load_json_file(PYROGRAM_ACCOUNTS_FILE, None)
        if pyrogram_accounts is not None:
            for account in pyrogram_accounts:
                if account.get("disabled", False):
                    continue

                if account["session_name"] in disabled_accounts:
                    continue

                pyrogram_accounts_count += 1
                account["is_pyrogram"] = True
                all_accounts.append(account)

        module_accounts = load_json_file(MODULE_ACCOUNTS_FILE, None)
        if module_accounts is not None:
            for account in module_accounts:
                if account.get("disabled", False):
                    continue

                module_accounts_count += 1
                account["is_pyrogram"] = False
                all_accounts.append(account)
    except Exception as e:
        pass

    return pyrogram_accounts_count, module_accounts_count, all_accounts


def group_by_proxy(accounts):
    proxies = {}
    for account in accounts:
        proxy = account.get("proxy")
        if proxy is None:
            proxy = "None"

        proxy_hash = hashlib.md5(proxy.encode()).hexdigest()

        if proxy_hash not in proxies:
            proxies[proxy_hash] = []
        proxies[proxy_hash].append(account)

    return proxies


async def main():
    utilities.clean_logs()
    module_dir = Path(__file__).resolve().parent
    module_name = module_dir.name
    log = lc.getLogger(str(module_dir / "bot.log"), module_name)

    mcf_pid = None
    if len(sys.argv) > 1:
        mcf_pid = sys.argv[1]
        threading.Thread(
            target=utilities.check_mcf_status, args=(log, mcf_pid, module_name)
        ).start()
    else:
        log.error(
            "<red>❌ Please run the bot with the MasterCryptoFarmBot script!❌</red>"
        )

    log.info(f"<g>🔧 {module_name} module is starting ...</g>")

    bot_globals = {
        "module_name": module_name,
        "mcf_dir": str(MASTER_CRYPTO_FARM_BOT_DIR),
        "module_dir": str(module_dir),
    }

    db_location = os.path.join(MASTER_CRYPTO_FARM_BOT_DIR, "database.db")
    db = Database(db_location, log)
    license_key = db.getSettings("license", None)
    if license_key is None or license_key == "":
        log.error("<r>❌ License key is not set!</r>")
        exit(1)
    else:
        log.info(f"<g>🔑 License key: </g><c>{utils.hide_text(license_key)}</c>")

    bot_globals["license"] = license_key
    bot_globals["config"] = cfg.config
    apiObj = MCF_API(log)
    modules = apiObj.get_modules(license_key)

    if modules is None or "error" in modules:
        log.error(f"<r>❌ Unable to get modules: {modules['error']}</r>")
        exit(1)

    if "modules" not in modules:
        log.error("<r>❌ Unable to get modules: Modules key not found!</r>")
        exit(1)

    module_found = False
    for module in modules["modules"]:
        if module["name"] == module_name:
            module_found = True
            break

    if not module_found:
        log.error(f"<r>❌ {module_name} module is not found in the license!</r>")
        exit(1)

    log.info(f"<g>📦 {module_name} module is found in the license!</g>")

    if utilities.is_module_disabled(bot_globals, log):
        log.info(f"<r>🚫 {module_name} module is disabled!</r>")
        exit(0)

    bot_globals["telegram_api_id"] = cfg.config["telegram_api"]["api_id"]
    bot_globals["telegram_api_hash"] = cfg.config["telegram_api"]["api_hash"]

    while True:
        try:
            log.info("<g>🔍 Checking for accounts ...</g>")
            pyrogram_accounts, module_accounts, all_accounts = load_accounts()
            if all_accounts is None or len(all_accounts) == 0:
                log.info("<y>🟠 No accounts found!</y>")
                await check_cd(log)
                continue

            log.info(
                f"<g>👥 Found <c>{len(all_accounts)}</c> accounts: <c>{pyrogram_accounts}</c> Pyrogram/Telethon accounts, <c>{module_accounts}</c> module accounts.</g>"
            )

            if pyrogram_accounts > 0 and (
                bot_globals["telegram_api_id"] == 1234
                or bot_globals["telegram_api_hash"] == ""
            ):
                log.error(
                    "<r>❌ Telegram API ID and API Hash are not set in the config file!</r>"
                )
                return False

            grouped_accounts = group_by_proxy(all_accounts)

            log.info(
                f"<g>🔄 Accounts have been grouped into <c>{len(grouped_accounts)}</c> based on their proxies. Each group will run in a separate thread.</g>"
            )

            group_id = 1
            log.info("<g>👥 Details of account groups:</g>")
            log.info(
                "<g>└──────────────────────────────────────────────────────────────</g>"
            )
            try:
                for _, accounts in grouped_accounts.items():
                    first_account_proxy = accounts[0].get("proxy", "UNSET")
                    if first_account_proxy is None or first_account_proxy == "":
                        first_account_proxy = "UNSET"

                    hide_chars = (
                        0
                        if first_account_proxy == "UNSET"
                        else min(10, int(len(first_account_proxy) / 2))
                    )

                    log.info(
                        f"<g>└─🔗 Group <c>{group_id}</c> has <c>{len(accounts)}</c> accounts with <c>{utils.hide_text(first_account_proxy,hide_chars)}</c> proxy:</g>"
                    )
                    for account in accounts:
                        log.info(f"<g>│  ├─ <c>{account['session_name']}</c></g>")

                    group_id += 1

                    log.info(
                        "<g>└──────────────────────────────────────────────────────────────</g>"
                    )
            except Exception as e:
                log.error(f"<r>❌ Error grouping accounts: {e}</r>")
                await check_cd(log)
                continue

            tasks = []
            max_threads = min(
                utilities.getConfig("max_threads", 5), len(grouped_accounts)
            )
            log.info(
                f"<g>🚀 Starting to process accounts with a maximum of <c>{max_threads}</c> threads ...</g>"
            )

            await asyncio.sleep(5)
            group_id = 1
            for _, accounts in grouped_accounts.items():
                try:
                    while len(tasks) >= max_threads:
                        for task in tasks:
                            if not task.is_alive():
                                tasks.remove(task)
                                break

                        await asyncio.sleep(5)

                except Exception as e:
                    log.error(f"<r>❌ Error waiting for tasks: {e}</r>")
                    await asyncio.sleep(30)
                    continue

                try:
                    task = threading.Thread(
                        target=lambda: asyncio.run(
                            handle_accounts(group_id, accounts, bot_globals, log)
                        )
                    )
                    task.start()
                    tasks.append(task)
                    group_id += 1
                except Exception as e:
                    log.error(f"<r>❌ Error creating task: {e}</r>")
                    await asyncio.sleep(30)
                    continue

            try:
                for task in tasks:
                    task.join()
            except Exception as e:
                log.error(f"<r>❌ Error waiting for tasks: {e}</r>")
                await asyncio.sleep(30)
                continue

            log.info(
                "<g>✅ All accounts and groups have been processed successfully. Waiting for the next check ...</g>"
            )
            await check_cd(log)
        except Exception as e:
            log.error(f"<r>❌ Error processing Pyrogram/Telethon accounts: {e}</r>")
            await check_cd(log)
        except KeyboardInterrupt:
            log.info(f"<r>🛑 Bot Module interrupted by user ...</r>")
            break


if __name__ == "__main__":
    try:
        if sys.platform == "win32":
            asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
        asyncio.run(main())
    except KeyboardInterrupt:
        print(f"{lc.r}🛑 Bot Module interrupted by user ... {lc.rs}")
    except Exception as e:
        print(f"{lc.r}🛑 Bot Module stopped with an error: {e} ... {lc.rs}")

    try:
        os._exit(0)
    except Exception as e:
        print(f"{lc.r}🛑 Error while stopping the bot: {e} ... {lc.rs}")
        exit()
