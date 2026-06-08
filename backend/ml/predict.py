import joblib
import os
import pandas as pd

BASE_DIR = os.path.dirname(
    os.path.abspath(__file__)
)

MODEL_PATH = os.path.join(
    BASE_DIR,
    "ransomware_model.pkl"
)

model = joblib.load(MODEL_PATH)

def predict_activity(
    modified,
    renamed,
    deleted,
    created
):

    features = pd.DataFrame(
        [[modified, renamed, deleted, created]],
        columns=[
            "modified",
            "renamed",
            "deleted",
            "created"
        ]
    )

    prediction = model.predict(features)

    return prediction[0]