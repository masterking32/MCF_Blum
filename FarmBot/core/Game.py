# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


class Game:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name

    def get_now(self):
        try:
            response = self.http.get(
                url="/api/v1/time/now",
                domain="game",
            )

            if response is None:
                self.log.error(f"<r>⭕ {self.account_name} failed to get game now!</r>")
                return None

            return response.get("now")

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get game now!</r>")
            return None

    def get_balance(self):
        try:
            response = self.http.get(
                url="/api/v1/user/balance",
                domain="game",
            )

            if response is None:
                self.log.error(f"<r>⭕ {self.account_name} failed to get balance!</r>")
                return None

            if (
                response.get("playPasses") is None
                or response.get("availableBalance") is None
            ):
                self.log.error(f"<r>⭕ {self.account_name} failed to get balance!</r>")
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get balance!</r>")
            return None
