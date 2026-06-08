// import React from "react";

function AlertsTable({ alerts }) {
  return (
    <div
      style={{
        maxHeight: "220px",
        overflowY: "auto",
      }}
    >
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Prediction</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert, index) => (
            <tr key={index}>
              <td>{alert.timestamp}</td>
              <td>{alert.prediction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertsTable;
