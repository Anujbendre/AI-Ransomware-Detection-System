from monitoring.feature_collector import update_feature
from watchdog.events import FileSystemEventHandler
from datetime import datetime
import csv
import os

BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

CSV_FILE = os.path.join(
    BASE_DIR,
    "storage",
    "events.csv"
)

# Create CSV file with header if it does not exist
if not os.path.exists(CSV_FILE):
    with open(
        CSV_FILE,
        "w",
        newline="",
        encoding="utf-8"
    ) as file:

        writer = csv.writer(file)

        writer.writerow([
            "timestamp",
            "file_name",
            "event_type"
        ])


class FileEventHandler(FileSystemEventHandler):

    def save_event(self, file_name, event_type):

        timestamp = datetime.now().strftime(
            "%Y-%m-%d %H:%M:%S"
        )

        with open(
            CSV_FILE,
            "a",
            newline="",
            encoding="utf-8"
        ) as file:

            writer = csv.writer(file)

            writer.writerow([
                timestamp,
                file_name,
                event_type
            ])

        update_feature(event_type)

        print(f"[{event_type}] {file_name}")

    def on_created(self, event):
        if not event.is_directory:
            self.save_event(
                os.path.basename(event.src_path),
                "CREATED"
            )

    def on_modified(self, event):
        if not event.is_directory:
            self.save_event(
                os.path.basename(event.src_path),
                "MODIFIED"
            )

    def on_deleted(self, event):
        if not event.is_directory:
            self.save_event(
                os.path.basename(event.src_path),
                "DELETED"
            )

    def on_moved(self, event):
        if not event.is_directory:
            self.save_event(
                os.path.basename(event.dest_path),
                "RENAMED"
            )