# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


import json
import random
from utilities.utilities import getConfig
import time
from .Wallet import Wallet


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

    def claim_game(self, gameId, points):
        try:
            response = self.http.post(
                url="/api/v1/game/claim",
                data=json.dumps({"gameId": gameId, "points": points}),
                domain="game",
                only_json_response=False,
            )

            if response is None:
                self.log.error(f"<r>⭕ {self.account_name} failed to claim game!</r>")
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to claim game!</r>")
            return

    def play_passes(self, games_count):
        try:
            if games_count == 0:
                return None

            games_count_to_play = random.randint(
                min(4, games_count), min(games_count, 6)
            )
            self.log.info(
                f"<g>🎮 We are playing <c>{games_count_to_play}</c> games of <c>{games_count}</c> your games for <c>{self.account_name}</c> ...</g>"
            )
            wallet = Wallet(self.log, self.http, self.account_name)
            for _ in range(games_count_to_play):
                self.get_balance()
                wallet.get_balance()
                self.get_now()
                random_sleep = random.randint(1, 5)
                self.log.info(
                    f"<g>🎮 Waiting <c>{random_sleep}</c> seconds before starting a game ...</g>"
                )

                time.sleep(random_sleep)

                game_play_request = self.play_game()
                if game_play_request is None:
                    self.log.error(
                        f"<r>⭕ {self.account_name} failed to play game!</r>"
                    )
                    return None

                gameId = game_play_request.get("gameId", None)
                if gameId is None or gameId == "":
                    self.log.error(
                        f"<r>⭕ {self.account_name} failed to play game!</r>"
                    )
                    continue

                self.log.info(f"<g>🎮 Game Id: <c>{gameId}</c> has started</g>")

                random_sleep = random.randint(30, 38)

                self.log.info(
                    f"<g>🎮 Game started, waiting for <c>{random_sleep}</c> seconds ...</g>"
                )

                sleep_time = random_sleep
                time.sleep(sleep_time)

                points = random.randint(
                    min(
                        getConfig("game_points_min", 150),
                        getConfig("game_points_max", 220),
                    ),
                    max(
                        getConfig("game_points_min", 150),
                        getConfig("game_points_max", 220),
                    ),
                )

                game_claim_request = self.claim_game(gameId, points)
                if game_claim_request is None:
                    self.log.error(
                        f"<r>⭕ {self.account_name} failed to claim game!</r>"
                    )
                    return None

                self.log.info(
                    f"<g>🎮 Game claimed successfully, points: (<c>+{points}Ḅ</c>)</g>"
                )

            balance = self.get_balance()
            if balance is None:
                return True
            # wallet.get_balance()
            self.get_now()

            available_balance = balance.get("availableBalance", 0).split(".")[0]
            play_passes = balance.get("playPasses", 0)
            self.log.info(
                f"<g>💰 Balance for <c>{self.account_name}</c>: Available balance: <c>{available_balance}Ḅ</c>, Play passes: <c>{play_passes}</c> 🎮</g>"
            )

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to play passes!</r>")
            return None
