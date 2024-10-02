# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


class Tasks:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name

    def claim_tasks(self):
        try:
            self.log.info(
                f"<g>📃 Claiming tasks for account <cyan>{self.account_name}</cyan>...</g>"
            )
            tasks_list = self.get_tasks()
            if tasks_list is None:
                return False

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to claim tasks!</r>")
            return False

    def get_tasks(self):
        try:
            response = self.http.get(
                url="/api/v1/tasks",
                domain="tasks",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get tasks!</r>")
            return None
