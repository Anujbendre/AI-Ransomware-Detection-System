from fastapi import APIRouter
import pandas as pd
import os

router = APIRouter()

BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

ALERTS_FILE = os.path.join(
    BASE_DIR,
    "storage",
    "alerts.csv"
)

@router.get("/alerts")
def get_alerts():

    if not os.path.exists(ALERTS_FILE):
        return []

    try:
        df = pd.read_csv(ALERTS_FILE)

        df = df.fillna("")

        return df.to_dict(
            orient="records"
        )

    except Exception as e:
        return {
            "error": str(e)
        }