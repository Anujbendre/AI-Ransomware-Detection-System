from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.events import router as events_router
from routes.alerts import router as alerts_router
from routes.stats import router as stats_router

app = FastAPI(
    title="AI Ransomware Detection API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(events_router)
app.include_router(alerts_router)
app.include_router(stats_router)

@app.get("/")
def home():
    return {
        "message": "AI Ransomware Detection System"
    }