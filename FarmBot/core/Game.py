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

    def get_daily_reward(self, timezone_offset):
        try:
            response = self.http.get(
                url="/api/v1/daily-reward?offset=" + timezone_offset,
                domain="game",
                display_errors=False,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get daily reward!</r>")
            return None

    def claim_daily_reward(self, timezone_offset):
        try:
            response = self.http.post(
                url="/api/v1/daily-reward?offset=" + timezone_offset,
                domain="game",
                only_json_response=False,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get daily reward!</r>")
            return None

    def start_farming(self):
        try:
            response = self.http.post(
                url="/api/v1/farming/start",
                domain="game",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to start farming!</r>")
            return None
