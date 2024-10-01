# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot
import sys
import os

from utilities.BL import get_tz_offset
from .core.HttpRequest import HttpRequest
from .core.Auth import Auth
from .core.User import User
from .core.Game import Game
from .core.Wallet import Wallet

MasterCryptoFarmBot_Dir = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__ + "/../../"))
)
sys.path.append(MasterCryptoFarmBot_Dir)

from utils.utils import hide_text


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

            balance = game.get_balance()
            if balance is None:
                return

            available_balance = balance.get("availableBalance", 0).split(".")[0]
            play_passes = balance.get("playPasses")

            self.log.info(
                f"<g>💰 Balance for <c>{self.display_name}</c>: Available balance: <c>{available_balance}</c> Ḅ, Play passes: <c>{play_passes}</c> 🎮</g>"
            )

            wallet = Wallet(self.log, self.http, self.account_name)
            wallet_info = wallet.get_my()
            if wallet_info is None:
                self.log.info(
                    f"<y>💳 The wallet is not connected to {self.display_name}</y>"
                )
            else:
                self.log.info(
                    f"<g>💳 The wallet is connected to {self.display_name}</g>"
                )

            tz_offset = str(get_tz_offset())
            daily_reward = game.get_daily_reward(tz_offset)
            if daily_reward is None:
                self.log.info(
                    f"<y>🎁 Daily reward for <c>{self.display_name}</c> is not available</y>"
                )
            elif "days" in daily_reward:
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

                    game.claim_daily_reward(tz_offset)
                    self.log.info(
                        f"<g>🎁 Claimed daily reward for <c>{self.display_name}</c></g>"
                    )

            user_balance = wallet.get_balance()
            if user_balance is None:
                return

            wallet_balance = wallet.get_balance()
            if wallet_balance is None:
                return

            user_invites = user_balance.get("usedInvitation", 0)
            user_amountForClaim = 0
            try:
                user_amountForClaim = int(user_balance.get("amountForClaim", "0"))
            except:
                user_amountForClaim = 0

            self.log.info(
                f"<g>👥 <c>{self.display_name}</c> has <c>{user_invites}</c> invites.</g>"
            )

            if (
                user_invites > 0
                and user_balance.get("canClaim", False)
                and user_amountForClaim > 0
            ):
                user_claim = user.claim_friend_invite()
                if user_claim is not None and "claimBalance" in user_claim:
                    claim_balance = user_claim.get("claimBalance", 0)
                    self.log.info(
                        f"<g>👥 Claimed <c>{user_amountForClaim}</c> invites, new balance: <c>{user_amountForClaim} Ḅ</c></g>"
                    )

                    user_balance = wallet.get_balance()
                    if user_balance is not None:
                        user_invites = user_balance.get("usedInvitation", 0)
                        user_amountForClaim = 0

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to login!</r>")
            self.log.error(f"<r>⭕ {self.display_name} failed to login!</r>")
            return None, None
