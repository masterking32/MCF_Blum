# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot

import json
import random
import string
from utilities.utilities import getConfig
import utilities.BL as BL


class Auth:
    def __init__(self, log, httpRequest, account_name, tgWebData):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.tgWebData = tgWebData

    def login(self):
        try:
            saved_tokens = BL.get_auth_token(self.account_name)
            if (
                saved_tokens
                and saved_tokens.get("access_token")
                and saved_tokens.get("refresh_token")
            ):
                self.log.info(
                    f"<g>🟢 {self.account_name} successfully logged in to Blum with stored tokens!</g>"
                )
                return saved_tokens.get("access_token"), saved_tokens.get(
                    "refresh_token"
                )
            ref_token = getConfig("referral_token", "ref_Gl4KRgUmpb")
            ref_token = ref_token.split("ref_")[1]

            response = self.http.post(
                url="/api/v1/auth/provider/PROVIDER_TELEGRAM_MINI_APP",
                domain="user",
                data=json.dumps(
                    {
                        "query": self.tgWebData,
                        "referralToken": ref_token,
                    }
                ),
                auth_header=False,
            )

            if response is None:
                self.log.error(f"<r>⭕ {self.account_name} failed to login!</r>")
                return None, None

            access_token = response.get("token", {}).get("access")
            refresh_token = response.get("token", {}).get("refresh")

            if not access_token:
                access_token, refresh_token = self.setAccountUserName(ref_token)

            if access_token is None:
                self.log.error(f"<r>🔴 {self.account_name} failed to login!</r>")
                return None, None

            self.log.info(
                f"<g>🟢 {self.account_name} logged in successfully to Blum!</g>"
            )

            BL.save_auth_token(self.account_name, access_token, refresh_token)
            return access_token, refresh_token

        except Exception as e:
            self.log.error(f"<r>🔴 Error login: {e}</r>")
            return None, None

    def setAccountUserName(self, ref_token):
        retries = 0
        username = None
        while retries < 3:
            retries += 1
            username = "".join(
                random.choices(string.ascii_lowercase, k=random.randint(9, 15))
            )

            if not self.checkUsername(username):
                username = None
                continue

        if username is None:
            self.log.error(f"<r>🔴 Unable to set username</r>")
            return False

        return self.setBlumUsername(username, ref_token)

    def setBlumUsername(self, username, ref_token):
        try:
            response = self.http.post(
                url="/api/v1/auth/provider/PROVIDER_TELEGRAM_MINI_APP",
                domain="user",
                data=json.dumps(
                    {
                        "query": self.tgWebData,
                        "referralToken": ref_token,
                        "username": username,
                    }
                ),
                auth_header=False,
            )

            return response
        except Exception as e:
            self.log.error(f"<r>🔴 Error set blum username: {e}</r>")
            return False

    def checkUsername(self, username):
        try:
            response = self.http.post(
                url="/api/v1/user/username/check",
                domain="user",
                data=json.dumps({"username": username}),
                auth_header=False,
            )

            return response.ok
        except Exception as e:
            self.log.error(f"<r>🔴 Error check username: {e}</r>")
            return False
