// import React from "react";

function EventsTable({ events }) {
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
            <th>File</th>
            <th>Event</th>
          </tr>
        </thead>

        <tbody>
          {events && events.length > 0 ? (
            events.map((event, index) => (
              <tr key={index}>
                <td>{event.timestamp}</td>
                <td>{event.file_name}</td>
                <td>{event.event_type}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No Events Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EventsTable;
