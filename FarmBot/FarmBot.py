# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot
import random
import sys
import os
import time

from utilities.BL import get_tz_offset
from utilities.utilities import getConfig
from .core.HttpRequest import HttpRequest
from .core.Auth import Auth
from .core.User import User
from .core.Game import Game
from .core.Wallet import Wallet
from .core.Tribe import Tribe
from .core.Tasks import Tasks

MasterCryptoFarmBot_Dir = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__ + "/../../"))
)
sys.path.append(MasterCryptoFarmBot_Dir)

from mcf_utils.utils import hide_text


class FarmBot:
    def __init__(
        self,
        log,
        bot_globals,
        account_name,
        web_app_query,
        proxy=None,
        user_agent=None,
        isPyrogram=False,
        tgAccount=None,
    ):
        self.log = log
        self.bot_globals = bot_globals
        self.account_name = account_name
        self.display_name = None
        self.web_app_query = web_app_query
        self.proxy = proxy
        self.user_agent = user_agent
        self.isPyrogram = isPyrogram
        self.tgAccount = tgAccount
        self.http = None

    async def run(self):
        self.display_name = self.account_name.replace("ma_", "")
        self.log.info(
            f"<g>🤖 Starting Blum farming for account <cyan>{self.display_name}</cyan>...</g>"
        )

        try:
            self.http = HttpRequest(
                self.log,
                self.proxy,
                self.user_agent,
                self.web_app_query,
                self.account_name,
            )

            auth = Auth(self.log, self.http, self.account_name, self.web_app_query)
            access_token, refresh_token = auth.login()
            if access_token is None:
                return

            self.http.authToken = access_token
            self.http.RefreshToken = refresh_token

            user = User(self.log, self.http, self.account_name)
            user_info = user.get_me()
            if user_info is None or "id" not in user_info:
                return

            user_id = user_info.get("id").get("id", 0)
            username = user_info.get("username", "")

            self.log.info(
                f"<g>👤 User info for <c>{self.display_name}</c>: ID: <c>{hide_text(user_id, 2)}</c>, Username: <c>{hide_text(username, 3)}</c></g>"
            )

            game = Game(self.log, self.http, self.account_name)
            now = game.get_now()
            if now is None:
                return

            game_balance = game.get_balance()
            if game_balance is None:
                return

            available_balance = game_balance.get("availableBalance", 0).split(".")[0]
            play_passes = game_balance.get("playPasses")

            self.log.info(
                f"<g>💰 Balance for <c>{self.display_name}</c>: Available balance: <c>{available_balance}Ḅ</c>, Play passes: <c>{play_passes}</c> 🎮</g>"
            )

            wallet = Wallet(self.log, self.http, self.account_name)
            self.log.info(
                f"<g>💳 Checking wallet for <c>{self.display_name}</c>...</g>"
            )
            wallet_info = wallet.get_my()
            if wallet_info is None:
                self.log.info(
                    f"<y>💳 The wallet is not connected to {self.display_name}</y>"
                )
            else:
                self.log.info(
                    f"<g>💳 The wallet is connected to {self.display_name}</g>"
                )

            self.log.info(
                f"<g>🎁 Checking daily reward for <c>{self.display_name}</c>...</g>"
            )
            tz_offset = str(get_tz_offset())
            daily_reward = game.get_daily_reward(tz_offset)
            if daily_reward is None:
                self.log.info(
                    f"<g>🎁 Daily reward for <c>{self.display_name}</c> is not available</g>"
                )
            elif "days" in daily_reward:
                game.claim_daily_reward(tz_offset)
                day_1 = daily_reward.get("days", [])
                if len(day_1) >= 1:
                    day_1 = day_1[1]
                    ordinal = day_1.get("ordinal", 0)
                    reward = day_1.get("reward", {})
                    passes = reward.get("passes", 0)
                    points = reward.get("points", 0)

                    self.log.info(
                        f"<g>🎁 Daily reward for <c>{self.display_name}</c>: Day: <c>{ordinal}</c>, Passes: <c>{passes}</c>, Points: <c>{points}</c></g>"
                    )
                    time.sleep(1)
                    self.log.info(
                        f"<g>🎁 Claimed daily reward for <c>{self.display_name}</c></g>"
                    )
                    time.sleep(1)

            user_balance = user.get_balance()
            # if user_balance is None:
            #     return

            wallet_balance = wallet.get_balance()
            # if wallet_balance is None:
            #     return

            self.log.info(f"<g>🏞️ Checking tribe for <c>{self.display_name}</c>...</g>")
            tribe = Tribe(self.log, self.http, self.account_name)
            tribe_my = tribe.get_my()
            if tribe_my is None:
                self.log.info(
                    f"<y>🏞️ The tribe is not connected to {self.display_name}</y>"
                )
            else:
                tribe_title = tribe_my.get("title", "")
                self.log.info(
                    f"<g>🏞️ The tribe is connected to {self.display_name}: <c>{tribe_title}</c></g>"
                )

            if user_balance is not None:
                user_invites = user_balance.get("usedInvitation", 0)
                user_amountForClaim = 0
                try:
                    user_amountForClaim = float(user_balance.get("amountForClaim", "0"))
                except:
                    user_amountForClaim = 0

                self.log.info(
                    f"<g>👥 <c>{self.display_name}</c> has <c>{user_invites}</c> invites.</g>"
                )

                if (
                    user_invites > 0
                    and user_balance.get("canClaim", False)
                    and user_amountForClaim > 1
                ):
                    user_claim = user.claim_friend_invite()
                    if user_claim is not None and "claimBalance" in user_claim:
                        claim_balance = float(user_claim.get("claimBalance", "0"))
                        self.log.info(
                            f"<g>👥 Claimed balance: <c>{claim_balance}Ḅ</c> from friends!</g>"
                        )

                        user_balance = user.get_balance()
                        if user_balance is not None:
                            user_balance = user_balance.get("balance", 0)

            leaderboard = tribe.get_leaderboard()
            if tribe_my is None and leaderboard is not None:
                self.log.info(
                    f"<g>🏞️ Try to join a tribe for </g><c>{self.display_name}</c>"
                )
                time.sleep(3)
                tribe.join_tribe(leaderboard)
                time.sleep(3)

            if game_balance.get("farming") and int(
                game_balance.get("farming").get("endTime", 0)
            ) < int(game_balance.get("timestamp", 0)):
                game.claim_farming()
                self.log.info(
                    f"<g>🌾 Claimed farming for <c>{self.display_name}</c></g>"
                )
                time.sleep(1)

            old_game_balance = game.get_balance()
            game_balance = game.get_balance()
            if game_balance is None:
                game_balance = old_game_balance

            wallet_balance = wallet.get_balance()
            time.sleep(3)

            if game_balance.get("farming") is None:
                game.start_farming()
                self.log.info(
                    f"<g>🌾 Farming started for <c>{self.display_name}</c></g>"
                )

            available_balance = game_balance.get("availableBalance", 0).split(".")[0]
            play_passes = game_balance.get("playPasses", 0)

            self.log.info(
                f"<g>💰 Balance for <c>{self.display_name}</c>: Available balance: <c>{available_balance}Ḅ</c>, Play passes: <c>{play_passes}</c> 🎮</g>"
            )

            drop_dogs = self.allow_drop_dogs()
            if drop_dogs:
                self.log.info(
                    f"<g>🐕 Drop dogs for <c>{self.account_name}</c> is available!</g>"
                )
            else:
                self.log.info(
                    f"<g>🐕 Drop dogs for <c>{self.account_name}</c> is not available!</g>"
                )

            if getConfig("game_enabled", True) and play_passes > 0:
                game.play_passes(play_passes, drop_dogs)

            if not getConfig("task_enabled", True):
                return

            license_key = self.bot_globals.get("license", None)
            tasks = Tasks(
                self.log,
                self.http,
                self.account_name,
                self.bot_globals,
                self.tgAccount,
                license_key,
            )

            await tasks.claim_tasks()

            old_game_balance = game.get_balance()
            game_balance = game.get_balance()
            if game_balance is None:
                game_balance = old_game_balance

            wallet_balance = wallet.get_balance()

            available_balance = game_balance.get("availableBalance", 0).split(".")[0]
            play_passes = game_balance.get("playPasses", 0)

            self.log.info(
                f"<g>💰 Balance for <c>{self.display_name}</c>: Available balance: <c>{available_balance}Ḅ</c>, Play passes: <c>{play_passes}</c> 🎮</g>"
            )

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to login!</r>")
            self.log.error(f"<r>⭕ {self.display_name} failed to login!</r>")
            return None, None
        finally:
            delay_between_accounts = getConfig("delay_between_accounts", 60)
            random_sleep = random.randint(0, 20) + delay_between_accounts
            self.log.info(
                f"<g>⌛ Farming for <c>{self.display_name}</c> completed. Waiting for <c>{random_sleep}</c> seconds before running the next account...</g>"
            )
            time.sleep(random_sleep)
