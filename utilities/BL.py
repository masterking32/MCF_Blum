# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


import os
import json
from pathlib import Path
import sys

MODULE_DIR = Path(__file__).resolve().parents[1]
MASTER_CRYPTO_FARM_BOT_DIR = Path(__file__).resolve().parents[3]
sys.path.append(str(MASTER_CRYPTO_FARM_BOT_DIR))


def read_json_file(json_file, default=None):
    if not os.path.exists(json_file):
        return default

    try:
        with open(json_file, "r") as f:
            data = json.load(f)
            return data
    except Exception as e:
        return default


def save_auth_token(session_name, access_token=None, refresh_token=None):
    if session_name is None:
        return False

    try:
        json_file = os.path.join(MODULE_DIR, "tokens.json")
        data = read_json_file(json_file, {})
        data[session_name] = {
            "access_token": access_token,
            "refresh_token": refresh_token,
        }
        with open(json_file, "w") as f:
            json.dump(data, f, indent=4)

        return True
    except Exception as e:
        return False


def get_auth_token(session_name):
    try:
        json_file = os.path.join(MODULE_DIR, "tokens.json")
        data = read_json_file(json_file, {})
        return data.get(session_name, {})
    except Exception as e:
        return {}


def delete_auth_token(session_name):
    try:
        json_file = os.path.join(MODULE_DIR, "tokens.json")
        data = read_json_file(json_file, {})
        if session_name in data:
            del data[session_name]
            with open(json_file, "w") as f:
                json.dump(data, f, indent=4)
        return True
    except Exception as e:
        return False
