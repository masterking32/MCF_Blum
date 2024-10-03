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
except Exception as e:
    print(CONFIG_ERROR_MSG)
    exit(1)


async def check_cd(log):
    log.info(f"<y>💤 Checking again in </y><c>{CHECK_INTERVAL}</c><y> seconds ...</y>")
    await asyncio.sleep(CHECK_INTERVAL)
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

        with open(file_path, "r") as f:
            json_result = json.load(f)
            if not json_result or len(json_result) == 0:
                return default
            return json_result

    except Exception as e:
        pass

    return default


async def process_pg_account(account, bot_globals, log):
    try:
        if "disabled" in account and account["disabled"]:
            log.info(f"<y>🟨 Account {account['session_name']} is disabled!</y>")
            return

        if account.get("proxy") == "":
            account["proxy"] = None

        tg = tgAccount(
            bot_globals,
            log,
            account["session_name"],
            account["proxy"],
            BOT_ID,
            REFERRAL_TOKEN,
            SHORT_APP_NAME,
            APP_URL,
        )
        web_app_data = await tg.run()
        if not web_app_data:
            log.error(
                f"<r>└─ ❌ Account {account['session_name']} is not ready! Unable to retrieve WebApp data.</r>"
            )
            return

        web_app_query = tg.getTGWebQuery(web_app_data)
        if not web_app_query:
            log.error(
                f"<r>└─ ❌ Account {account['session_name']} WebApp query is not valid!</r>"
            )
            return

        log.info(f"<g>└─ ✅ Account {account['session_name']} is ready!</g>")
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
        log.error(f"<r>❌ Error processing Pyrogram account: {e}</r>")
        return False


async def handle_pyrogram_accounts(accounts, bot_globals, log):
    try:
        log.info(
            f"<g>🖥️ Start processing <c>{len(accounts)}</c> Pyrogram accounts ...</g>"
        )

        if (
            bot_globals["telegram_api_id"] == 1234
            or bot_globals["telegram_api_hash"] == ""
        ):
            log.error(
                "<r>❌ Telegram API ID and API Hash are not set in the config file!</r>"
            )
            return False

        disabled_sessions = load_json_file(MODULE_DISABLED_SESSIONS_FILE, [])
        for account in accounts:
            try:
                if account["session_name"] in disabled_sessions:
                    log.info(
                        f"<y>🟨 Account {account['session_name']} is disabled!</y>"
                    )
                    continue
                await process_pg_account(account, bot_globals, log)
            except Exception as e:
                log.error(f"<r>❌ Error processing Pyrogram account: {e}</r>")
                continue

        return True
    except Exception as e:
        log.error(f"<r>❌ Error processing Pyrogram accounts: {e}</r>")
        return False


async def handle_module_accounts(accounts, bot_globals, log):
    try:
        log.info(
            f"<g>🖥️ Start processing <c>{len(accounts)}</c> module accounts ...</g>"
        )
        tg_tmp = tgAccount()
        for account in accounts:
            try:
                proxy = account.get("proxy")
                if proxy == "":
                    proxy = None

                account_name = account.get("session_name")
                web_app_data = account.get("web_app_data")

                user_agent = account.get("user_agent")
                if account.get("disabled"):
                    log.info(f"<y>❌ Account {account_name} is disabled!</y>")
                    continue

                if not web_app_data:
                    log.error(f"<r>❌ Account {account_name} WebApp data is empty!</r>")
                    continue

                web_app_query = tg_tmp.getTGWebQuery(web_app_data)
                if not web_app_query:
                    log.error(
                        f"<r>❌ Account {account_name} WebApp query is not valid!</r>"
                    )
                    continue

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
                log.error(f"<r>❌ Error processing module account: {e}</r>")
                continue

        return True
    except Exception as e:
        log.error(f"<r>❌ Error processing module accounts: {e}</r>")
        return False


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

    if utilities.is_module_disabled(bot_globals, log):
        log.info(f"<r>🚫 {module_name} module is disabled!</r>")
        exit(0)

    bot_globals["telegram_api_id"] = cfg.config["telegram_api"]["api_id"]
    bot_globals["telegram_api_hash"] = cfg.config["telegram_api"]["api_hash"]

    while True:
        try:
            log.info("<g>🔍 Checking for accounts ...</g>")
            pyrogram_accounts = load_json_file(PYROGRAM_ACCOUNTS_FILE, None)
            if pyrogram_accounts is not None:
                await handle_pyrogram_accounts(pyrogram_accounts, bot_globals, log)
            else:
                log.info(
                    "<y>🟠 No Pyrogram accounts found.</y> <g>Ignore this if you are using module accounts.</g>"
                )

            module_accounts = load_json_file(MODULE_ACCOUNTS_FILE, None)
            if module_accounts is None:
                log.info(
                    "<y>🟠 No module accounts found.</y> <g>Ignore this if you are using Pyrogram accounts.</g>"
                )
                await check_cd(log)
                continue

            await handle_module_accounts(module_accounts, bot_globals, log)
            await check_cd(log)
        except Exception as e:
            log.error(f"<r>❌ Error processing Pyrogram accounts: {e}</r>")
            await check_cd(log)
        except KeyboardInterrupt:
            log.info(f"<r>🛑 Bot Module interrupted by user ...</r>")
            break


if __name__ == "__main__":
    try:
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
