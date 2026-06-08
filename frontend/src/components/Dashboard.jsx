import { useEffect, useState } from "react";
import { FaShieldAlt } from "react-icons/fa";

import API from "../services/api.jsx";

import StatsCards from "./StatsCards.jsx";
import EventChart from "./EventChart.jsx";
import ThreatMeter from "./ThreatMeter.jsx";
import EventsTable from "./EventsTable.jsx";
import AlertsTable from "./AlertsTable.jsx";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const [stats, setStats] = useState({
    total_events: 0,
    total_alerts: 0,
  });

  const fetchData = async () => {
    try {
      const eventsRes = await API.get("/events");
      const alertsRes = await API.get("/alerts");
      const statsRes = await API.get("/stats");

      setEvents(eventsRes.data);
      setAlerts(alertsRes.data);
      setStats(statsRes.data);
    } catch (error) {
      console.error("FETCH ERROR:", error);
    }
  };

  useEffect(() => {
    // fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      
      <h1 className="title">
        <FaShieldAlt style={{ marginRight: "10px" }} />
        AI Ransomware Detection System
      </h1>

      <StatsCards stats={stats} />

      <ThreatMeter alerts={stats.total_alerts} />

      <EventChart events={events} />

      <div
        style={{
          display: "flex",
          gap: "15px",
          flex: 1,
        }}
      >
        {/* Recent Events */}
        <div
          className="card"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ marginTop: 0 }}>
            Recent Events
          </h3>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
            }}
          >
            <EventsTable events={events} />
          </div>
        </div>

        {/* AI Alerts */}
        <div
          className="card"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ marginTop: 0 }}>
            AI Alerts
          </h3>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
            }}
          >
            <AlertsTable alerts={alerts} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;