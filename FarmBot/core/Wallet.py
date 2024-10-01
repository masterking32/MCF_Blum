# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


class Wallet:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name

    def get_my(self):
        try:
            response = self.http.get(
                url="/api/v1/wallet/my",
                domain="wallet",
                display_errors=False,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            return None

    def get_balance(self):
        try:
            response = self.http.get(
                url="/api/v1/wallet/my/points/balance",
                domain="wallet",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            return None
