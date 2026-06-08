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

ALERTS_FILE = os.path.join(
    BASE_DIR,
    "storage",
    "alerts.csv"
)

@router.get("/stats")
def get_stats():

    try:

        events_df = pd.read_csv(EVENTS_FILE)
        alerts_df = pd.read_csv(ALERTS_FILE)

        return {
            "total_events": len(events_df),
            "total_alerts": len(alerts_df)
        }

    except Exception as e:

        return {
            "total_events": 0,
            "total_alerts": 0,
            "error": str(e)
        }