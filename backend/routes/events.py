from fastapi import APIRouter
import pandas as pd
import os

router = APIRouter()

BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

EVENTS_FILE = os.path.join(
    BASE_DIR,
    "storage",
    "events.csv"
)

@router.get("/events")
def get_events():

    if not os.path.exists(EVENTS_FILE):
        return []

    try:
        df = pd.read_csv(EVENTS_FILE)

        df = df.fillna("")

        return df.to_dict(
            orient="records"
        )

    except Exception as e:
        return {
            "error": str(e)
        }