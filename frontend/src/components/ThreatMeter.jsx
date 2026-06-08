function ThreatMeter({ alerts }) {
  let level = "LOW";
  let color = "green";

  if (alerts > 5) {
    level = "MEDIUM";
    color = "orange";
  }

  if (alerts > 10) {
    level = "HIGH";
    color = "red";
  }

  return (
    <div className="card">
      <h2>Threat Level</h2>

      <h1 style={{ color }}>{level}</h1>
    </div>
  );
}

export default ThreatMeter;
