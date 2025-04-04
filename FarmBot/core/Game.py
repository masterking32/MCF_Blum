# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


import json
import random
from utilities.utilities import getConfig
import time
from .Wallet import Wallet
from mcf_utils.api import API


class Game:
    def __init__(self, log, httpRequest, account_name, license_key=None):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.license_key = license_key

    def get_now(self):
        try:
            response = self.http.get(
                url="/api/v1/time/now",
                domain="game",
            )

            if response is None:
                self.log.error(
                    f"<r>⭕ {self.account_name} failed to get game now!</r>")
                return None

            return response.get("now")

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get game now!</r>")
            return None

    def allow_drop_dogs(self):
        response = self.http.get(
            url="/api/v2/game/eligibility/dogs_drop",
            domain="game",
        )

        if response is None:
            self.log.error(
                f"<r>⭕ {self.account_name} failed to get dogs drop!</r>")
            return False

        if "eligible" in response and response.get("eligible", False):
            return True

        return False

    def get_balance(self):
        try:
            response = self.http.get(
                url="/api/v1/user/balance",
                domain="game",
            )

            if response is None:
                self.log.error(
                    f"<r>⭕ {self.account_name} failed to get balance!</r>")
                return None

            if (
                response.get("playPasses") is None
                or response.get("availableBalance") is None
            ):
                self.log.error(
                    f"<r>⭕ {self.account_name} failed to get balance!</r>")
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get balance!</r>")
            return None

    def get_daily_reward(self):
        try:
            response = self.http.get(
                url="/api/v2/daily-reward",
                domain="game",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get daily reward!</r>")
            return None

    def claim_daily_reward(self):
        try:
            response = self.http.post(
                url="/api/v2/daily-reward",
                domain="game",
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
                url="/api/v2/game/play",
                domain="game",
            )

            if response is None or "gameId" not in response:
                self.log.error(
                    f"<r>⭕ {self.account_name} failed to play game!</r>")
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to send play passes!</r>")

    def claim_game(self, payload):
        try:
            response = self.http.post(
                url="/api/v2/game/claim",
                data=json.dumps({"payload": payload}),
                domain="game",
                only_json_response=False,
                display_errors=False,
            )

            if response is None:
                self.log.error(
                    f"<r>⭕ {self.account_name} failed to claim game!</r>")
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to claim game!</r>")
            return

    def play_passes(self, games_count, drop_dogs=False):

        try:
            if games_count == 0:
                return None

            games_count_to_play = random.randint(
                min(8, games_count), min(games_count, 15)
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

                assets = game_play_request.get("assets", None)
                if assets is None:
                    self.log.error(
                        f"<r>⭕ {self.account_name} failed to play game!</r>"
                    )
                    continue

                dogs = assets.get("DOGS", None)
                points = random.randint(
                    min(
                        getConfig("game_points_min", 150),
                        getConfig("game_points_max", 245),
                    ),
                    min(
                        max(
                            getConfig("game_points_min", 150),
                            getConfig("game_points_max", 245),
                        ),
                        245,
                    ),
                )

                post_data = {"game_id": gameId, "clover": points}
                if dogs is not None:
                    post_data["clover"] = points - random.randint(10, 30)
                    post_data["dogs"] = round(random.uniform(0.4, 0.8), 1)
                    dogs = post_data["dogs"]

                self.log.info(f"<g>🎮 Game Id: <c>{gameId}</c> has started</g>")

                random_sleep = random.randint(30, 38)

                self.log.info(
                    f"<g>🎮 Game started, waiting for <c>{random_sleep}</c> seconds ...</g>"
                )

                sleep_time = random_sleep
                time.sleep(sleep_time)

                if dogs is not None:
                    self.log.info(
                        f"<g>🔃 Try to claim rewards with <c>{dogs} DOGS</c> and <c>{points}Ḅ</c>...</g>"
                    )
                else:
                    self.log.info(
                        f"<g>🔃 Try to claim rewards with <c>{points}Ḅ</c></g>"
                    )

                # xmas_points = points * 3
                # self.log.info(
                #     f"<g>🔃 Claiming rewards with <c>{xmas_points}Ḅ</c> due to the Christmas event...</g>"
                # )

                response = self.get_api_data(post_data)
                if response is None:
                    self.log.error(
                        f"<r>⭕ {self.account_name} failed to claim game!</r>"
                    )
                    return None

                if "payload" not in response:
                    self.log.error(
                        f"<r>⭕ {self.account_name} failed to claim game!</r>"
                    )
                    return None

                payload = response.get("payload")

                game_claim_request = self.claim_game(payload)
                if game_claim_request is None:
                    self.log.info(
                        f"<y>⭕ {self.account_name} failed to claim game, retrying ...</y>"
                    )
                    game_claim_request = self.claim_game(payload)

                if game_claim_request is None:
                    self.log.error(
                        f"<r>⭕ {self.account_name} failed to claim game!</r>"
                    )
                    return None

                if dogs is not None:
                    self.log.info(
                        f"<g>🎮 Game claimed successfully, points: (<c>+{points}Ḅ</c>), DOGS: (<c>+{dogs} DOGS</c>)</g>"
                    )
                else:
                    self.log.info(
                        f"<g>🎮 Game claimed successfully, points: (<c>+{points}Ḅ</c>)</g>"
                    )

            balance = self.get_balance()
            if balance is None:
                return True
            # wallet.get_balance()
            self.get_now()

            available_balance = balance.get(
                "availableBalance", 0).split(".")[0]
            play_passes = balance.get("playPasses", 0)
            self.log.info(
                f"<g>💰 Balance for <c>{self.account_name}</c>: Available balance: <c>{available_balance}Ḅ</c>, Play passes: <c>{play_passes}</c> 🎮</g>"
            )

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to play passes!</r>")
            return None

    def get_api_data(self, data):
        if self.license_key is None:
            return None

        apiObj = API(self.log)
        data["game_name"] = "blum"
        data["action"] = "get_task"
        data["task_type"] = "get_games_payload"
        response = apiObj.get_task_answer(self.license_key, data)
        time.sleep(3)
        if "error" in response:
            self.log.error(f"<y>⭕ API Error: {response['error']}</y>")
            return None
        elif "status" in response and response["status"] == "success":
            return response
        elif (
            "status" in response
            and response["status"] == "error"
            and "message" in response
        ):
            self.log.info(f"<y>🟡 {response['message']}</y>")
            return None
        else:
            self.log.error(
                f"<y>🟡 Unable to get task answer, please try again later</y>"
            )
            return None
