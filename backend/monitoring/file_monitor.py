# from watchdog.observers.polling import PollingObserver
# from monitoring.event_handler import FileEventHandler
# import time

# FOLDER_TO_MONITOR = r"D:\TestFolder"

# print("Monitoring Started...")
# print("Folder:", FOLDER_TO_MONITOR)

# event_handler = FileEventHandler()

# observer = PollingObserver()

# observer.schedule(
#     event_handler,
#     FOLDER_TO_MONITOR,
#     recursive=True
# )

# observer.start()

# print("Polling Observer Started Successfully")

# try:
#     while True:
#         time.sleep(1)

# except KeyboardInterrupt:
#     observer.stop()

# observer.join()

from watchdog.observers.polling import PollingObserver
from monitoring.event_handler import FileEventHandler
import time

FOLDER_TO_MONITOR = r"D:\TestFolder"

observer = PollingObserver()
event_handler = FileEventHandler()

observer.schedule(
    event_handler,
    FOLDER_TO_MONITOR,
    recursive=True
)

observer.start()

print("Watching:", FOLDER_TO_MONITOR)

try:
    while True:
        time.sleep(1)

except KeyboardInterrupt:
    observer.stop()

observer.join()