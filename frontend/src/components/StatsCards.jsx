import { motion } from "framer-motion";
import { FaFolderOpen, FaExclamationTriangle } from "react-icons/fa";

function StatsCards({ stats }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        justifyContent: "center",
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.03,
        }}
        className="card"
        style={{
          minWidth: "180px",
          padding: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaFolderOpen size={20} />
          <h3
            style={{
              margin: 0,
              fontSize: "16px",
            }}
          >
            Total Events
          </h3>
        </div>

        <h1
          style={{
            margin: "10px 0 0 0",
            fontSize: "32px",
          }}
        >
          {stats.total_events}
        </h1>
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.03,
        }}
        className="card"
        style={{
          minWidth: "180px",
          padding: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaExclamationTriangle size={20} />
          <h3
            style={{
              margin: 0,
              fontSize: "16px",
            }}
          >
            Total Alerts
          </h3>
        </div>

        <h1
          style={{
            margin: "10px 0 0 0",
            fontSize: "32px",
          }}
        >
          {stats.total_alerts}
        </h1>
      </motion.div>
    </div>
  );
}

export default StatsCards;