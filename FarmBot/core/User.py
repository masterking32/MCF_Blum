# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


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

    def get_balance(self):
        try:
            response = self.http.get(
                url="/api/v1/friends/balance",
                domain="wallet",
            )

            if response is None:
                self.log.error(f"<r>⭕ {self.account_name} failed to get balance!</r>")
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get balance!</r>")
            return None

    def claim_friend_invite(self):
        try:
            response = self.http.post(
                url="/api/v1/friends/claim",
                domain="wallet",
            )

            if response is None:
                self.log.error(
                    f"<r>⭕ {self.account_name} failed to claim friend invite!</r>"
                )
                return None

            return response
        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to claim friend invite!</r>")
            return None
