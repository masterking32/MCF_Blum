# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot

import json
from random import random
import string
from utilities.utilities import getConfig
import utilities.BL as BL


class User:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name

    def get_me(self):
        try:
            response = self.http.get(
                url="/api/v1/user/me",
                domain="user",
            )

            if response is None:
                self.log.error(
                    f"<r>⭕ {self.account_name} failed to get user info!</r>"
                )
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get user info!</r>")
            return None
