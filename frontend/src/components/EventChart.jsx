import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function EventChart({ events }) {

  const chartData = [
    {
      name: "Created",
      count: events.filter(
        e => e.event_type === "CREATED"
      ).length
    },
    {
      name: "Modified",
      count: events.filter(
        e => e.event_type === "MODIFIED"
      ).length
    },
    {
      name: "Deleted",
      count: events.filter(
        e => e.event_type === "DELETED"
      ).length
    },
    {
      name: "Renamed",
      count: events.filter(
        e => e.event_type === "RENAMED"
      ).length
    }
  ];

  return (

    <div
      className="card"
      style={{
        height:"220px",
        marginBottom: "30px"
      }}
    >

      <h2
        style={{
          textAlign: "center",
          color: "#00ffff"
        }}
      >
        Event Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height="85%"
      >

        <BarChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#00ffff"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default EventChart;