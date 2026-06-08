from ml.predict import predict_activity
from datetime import datetime
import csv
import os

BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

ALERT_FILE = os.path.join(
    BASE_DIR,
    "storage",
    "alerts.csv"
)

modified_count = 0
renamed_count = 0
deleted_count = 0
created_count = 0


def update_feature(event_type):

    global modified_count
    global renamed_count
    global deleted_count
    global created_count

    if event_type == "MODIFIED":
        modified_count += 1

    elif event_type == "RENAMED":
        renamed_count += 1

    elif event_type == "DELETED":
        deleted_count += 1

    elif event_type == "CREATED":
        created_count += 1

    total_events = (
        modified_count +
        renamed_count +
        deleted_count +
        created_count
    )

    if total_events >= 5:

        prediction = predict_activity(
            modified_count,
            renamed_count,
            deleted_count,
            created_count
        )

        timestamp = datetime.now().strftime(
            "%Y-%m-%d %H:%M:%S"
        )

        with open(
            ALERT_FILE,
            "a",
            newline="",
            encoding="utf-8"
        ) as file:

            writer = csv.writer(file)

            writer.writerow([
                timestamp,
                prediction
            ])

        print("\n===================")
        print("AI ALERT")
        print("Prediction:", prediction)
        print("===================\n")

        modified_count = 0
        renamed_count = 0
        deleted_count = 0
        created_count = 0