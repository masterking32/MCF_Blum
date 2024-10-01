# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


import random


class Tribe:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name

    def get_my(self):
        try:
            response = self.http.get(
                url="/api/v1/tribe/my",
                domain="tribe",
                display_errors=False,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get tribe info!</r>")
            return None

    def get_leaderboard(self):
        try:
            response = self.http.get(
                url="/api/v1/tribe/leaderboard",
                domain="tribe",
                display_errors=False,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get tribe leaderboard!</r>")
            return None

    def get_bot(self):
        try:
            response = self.http.get(
                url="/api/v1/tribe/bot",
                domain="tribe",
                display_errors=False,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get tribe bot!</r>")
            return None

    def get_tribe(self):
        try:
            response = self.http.get(
                url="/api/v1/tribe",
                domain="tribe",
                display_errors=False,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get tribe!</r>")
            return None

    def get_by_chat_name(self, chat_name):
        if chat_name is None or chat_name == "":
            return None

        try:
            response = self.http.get(
                url=f"/api/v1/tribe/by-chatname/{chat_name}",
                domain="tribe",
                display_errors=False,
            )

            if response is None:
                return None

            return response
        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get tribe by chat name!</r>")
            return None

    def send_tribe_join_request(self, tribe_id):
        try:
            response = self.http.post(
                url=f"/api/v1/tribe/{tribe_id}/join",
                domain="tribe",
                only_json_response=False,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to send tribe join request!</r>")
            return

    def join_tribe(self, leaderboard):
        try:
            if self.get_bot() is None:
                self.log.error(
                    f"<r>⭕ {self.account_name} failed to get tribe bot!</r>"
                )
                return None

            if leaderboard is None or "items" not in leaderboard:
                self.log.error(
                    f"<r>⭕ {self.account_name} failed to get tribe leaderboard!</r>"
                )
                return None

            tribes = self.get_tribe()
            if tribes is None:
                self.log.error(f"<r>⭕ {self.account_name} failed to get tribe!</r>")
                return None

            random_tribe = leaderboard.get("items", [])[random.randint(0, 5)]
            tribe_id = random_tribe.get("id", "")
            tribe_title = random_tribe.get("title", "")
            tribe_chatname = random_tribe.get("chatname", "")

            self.log.info(
                f"<g>🏞️ Trying to join the tribe with {self.account_name}: <c>{tribe_title}</c></g>"
            )

            tribe_data = self.get_by_chat_name(tribe_chatname)
            if (
                tribe_data is None
                or "id" not in tribe_data
                or tribe_data.get("id", "") == ""
            ):
                self.log.error(
                    f"<r>⭕ {self.account_name} failed to get tribe by chat name!</r>"
                )
                return None

            tribe_id = tribe_data.get("id", "")
            send_tribe_join_request = self.send_tribe_join_request(tribe_id)
            if send_tribe_join_request is None:
                self.log.error(
                    f"<r>⭕ {self.account_name} failed to send tribe join request!</r>"
                )
                return None

            my_tribe = self.get_my()
            if my_tribe is None or "title" not in my_tribe:
                self.log.error(f"<r>⭕ {self.account_name} failed to join tribe!</r>")
                return None

            self.log.info(
                f"🏞️ <c>{self.account_name}</c><g> joined the tribe: </g><c>{my_tribe.get('title', '')}</c>"
            )

            return True

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to join tribe!</r>")
            return None
