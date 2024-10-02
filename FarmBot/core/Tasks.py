# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot

import asyncio
import random
import time
from .Wallet import Wallet


class Tasks:
    def __init__(self, log, httpRequest, account_name, tgAccount=None):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.tgAccount = tgAccount
        self.recheck_claim = False

    async def claim_tasks(self):
        try:
            self.recheck_claim = False
            self.log.info(
                f"<g>📃 Claiming tasks for account <cyan>{self.account_name}</cyan>...</g>"
            )

            tasks_list = self.get_tasks()
            if tasks_list is None:
                return False

            for section in tasks_list:
                if "tasks" in section:
                    for task in section["tasks"]:
                        await self.handle_task(task)

                if "subSections" in section:
                    for sub_section in section["subSections"]:
                        await self.handle_sub_section(sub_section)

            if self.recheck_claim:
                time.sleep(random.randint(5, 15))
                self.log.info(
                    f"<g>📃 Rechecking tasks for account <cyan>{self.account_name}</cyan>...</g>"
                )
                return await self.claim_tasks()

            self.log.info(
                f"<g>✅ Tasks claimed for account <cyan>{self.account_name}</cyan>!</g>"
            )
            return True
        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to claim tasks!</r>")
            return False

    async def handle_task(self, task):
        if ("isHidden" in task and task["isHidden"]) or "type" not in task:
            return

        task_id = task.get("id")
        task_status = task.get("status")
        if task_status is None or task_id is None:
            return

        if task_status == "FINISHED":
            return

        task_title = task.get("title", "Unknown Task")

        if task_status == "READY_FOR_CLAIM":
            self.log.info(f"<g>📃 Claiming task <c>{task_title}</c>...</g>")
            self.claim_task_request(task_id)
            self.log.info(f"<g>✅ Task <c>{task_title}</c> claimed!</g>")
            return

        if "subTasks" in task:
            for sub_task in task["subTasks"]:
                await self.handle_task(sub_task)

        task_kind = task.get("kind")
        if task_kind is not None and task_kind in ["QUEST", "GROUP"]:
            return

        task_validation_type = task.get("validationType", "DEFAULT")
        if task_status == "STARTED" and task_validation_type not in ["KEYWORD"]:
            self.log.info(
                f"<g>🟡 <c>{task_title}</c> Task is not ready to claim and is under verification.</g>"
            )
            return

        task_type = task.get("type")
        if task_type is None or task_type in ["PROGRESS_TARGET", "ONCHAIN_TRANSACTION"]:
            return

        task_kind = task.get("kind")
        if task_kind is None or task_kind in ["ONGOING"]:
            return

        await self.start_progress(task)

    async def start_progress(self, task):
        if task is None or "id" not in task:
            return

        task_id = task["id"]
        task_type = task.get("type")
        task_title = task.get("title", "Unknown Task")
        task_validation_type = task.get("validationType", "DEFAULT")
        answer_keyword = None

        if task_type == "WALLET_CONNECTION":
            wallet = Wallet(self.log, self.http, self.account_name)
            wallet_info = wallet.get_my()
            if wallet_info is None:
                self.log.info(
                    f"<y>🟡 Wallet ins not connected to finish <c>{task_title}</c> task!</y>"
                )
                return
        elif task_type == "SOCIAL_SUBSCRIPTION":
            socialSubscription = task.get("socialSubscription", {})
            if (
                "openInTelegram" in socialSubscription
                and socialSubscription["openInTelegram"]
                and self.tgAccount is not None
            ):
                self.log.info(
                    f"<g>📒 Joining to Group/Channel <c>{task_title}</c> in Telegram...</g>"
                )

                channel_url = socialSubscription.get("url", "")

                if channel_url != "" and ("t.me" in channel_url or "@" in channel_url):
                    try:
                        await self.tgAccount.joinChat(
                            channel_url.replace("https://t.me/", "").replace("@", "")
                        )
                        self.log.info(
                            f"<g>✅ Joined Telegram Group/Channel <c>{task_title}</c> successfully!</g>"
                        )
                    except Exception as e:
                        pass
        elif task_type == "APPLICATION_LAUNCH" or task_validation_type == "KEYWORD":
            return
        elif task_type == "SOCIAL_MEDIA_CHECK":
            pass
        else:
            self.log.info(f"<y>🟡 Task <c>{task_title}</c> is not supported!</y>")
            return

        task_status = task.get("status")
        if task_status not in ["STARTED"]:
            self.log.info(f"<g>📔 Starting task <c>{task_title}</c>...</g>")
            start_response = self.start_task_request(task_id)
            if start_response is None:
                return
            self.log.info(f"<g>✅ Task <c>{task_title}</c> started!</g>")
            self.recheck_claim = True

        time.sleep(random.randint(5, 15))
        if task_validation_type == "KEYWORD" and answer_keyword is not None:
            self.log.info(f"<g>🔑 Validating task <c>{task_title}</c>...</g>")
            self.validate_task_request(task_id, answer_keyword)
            self.log.info(f"<g>✅ Task <c>{task_title}</c> validated!</g>")

    def start_task_request(self, task_id):
        try:
            response = self.http.post(
                url=f"/api/v1/tasks/{task_id}/start",
                domain="earn",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to start task!</r>")
            return None

    def claim_task_request(self, task_id):
        try:
            response = self.http.post(
                url=f"/api/v1/tasks/{task_id}/claim",
                domain="earn",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to claim task!</r>")
            return None

    async def handle_sub_section(self, sub_section):
        for section in sub_section:
            if "tasks" in section and "title" in section:
                if section["title"] == "New":
                    continue

                for task in section["tasks"]:
                    await self.handle_task(task)

    def get_tasks(self):
        try:
            response = self.http.get(
                url="/api/v1/tasks",
                domain="earn",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to get tasks!</r>")
            return None
