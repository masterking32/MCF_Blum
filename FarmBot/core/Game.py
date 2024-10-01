# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


from random import random
import time


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

    def claim_farming(self):
        try:
            response = self.http.post(
                url="/api/v1/farming/claim",
                domain="game",
                only_json_response=False,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to claim farming!</r>")
            return None

    def play_game(self):
        try:
            response = self.http.post(
                url="/api/v1/game/play",
                domain="game",
            )

            if response is None or "gameId" not in response:
                self.log.error(f"<r>⭕ {self.account_name} failed to play game!</r>")
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to send play passes!</r>")

    def play_passes(self, games_count):
        try:
            if games_count == 0:
                return None
            self.log.info(
                f"<g>🎮 Playing {games_count} games for {self.account_name} ...</g>"
            )
            for _ in range(games_count):
                random_sleep = random.randint(3, 10)
                self.log.info(
                    f"<g>🎮 Waiting <c>{random_sleep}</c> seconds before starting a game ...</g>"
                )

                time.sleep(random_sleep)
                self.get_balance()
                self.get_now()

                game_play_request = self.play_game()
                if game_play_request is None:
                    self.log.error(
                        f"<r>⭕ {self.account_name} failed to play game!</r>"
                    )
                    return None

                gameId = game_play_request.get("gameId")
                random_sleep = random.randint(30, 40)

                self.log.info(
                    f"<g>🎮 Game started, waiting for <c>{random_sleep}</c> seconds ...</g>"
                )

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to play passes!</r>")
            return None
