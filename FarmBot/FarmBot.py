# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot
import sys
import os

from .core.HttpRequest import HttpRequest
from .core.Auth import Auth

MasterCryptoFarmBot_Dir = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__ + "/../../"))
)
sys.path.append(MasterCryptoFarmBot_Dir)


import utils.logColors as lc


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
            self.http = HttpRequest(self.log, self.proxy, self.user_agent)
            auth = Auth(self.log, self.http, self.account_name, self.web_app_query)
            access_token, refresh_token = auth.login()

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to login!</r>")
            self.log.error(f"<r>⭕ {self.display_name} failed to login!</r>")
            return None, None
