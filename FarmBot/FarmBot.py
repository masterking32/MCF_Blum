# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot
import sys
import os

from .core.HttpRequest import HttpRequest
from .core.Auth import Auth
from .core.User import User

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
                self.log.error(
                    f"<r>⭕ {self.display_name} failed to get user info!</r>"
                )
                return

            user_id = user_info.get("id").get("id", 0)
            username = user_info.get("username", "")

            self.log.info(
                f"<g>👤 User info for <c>{self.display_name}</c>: ID: <c>{hide_text(user_id, 2)}</c>, Username: <c>{hide_text(username, 3)}</c></g>"
            )

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to login!</r>")
            self.log.error(f"<r>⭕ {self.display_name} failed to login!</r>")
            return None, None
