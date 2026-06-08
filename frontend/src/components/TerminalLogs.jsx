function TerminalLogs({ events }) {

  return (

    <div className="card">

      <h2>Live SOC Logs</h2>

      <div
        style={{
          height:"200px",
          overflowY:"auto",
          background:"black",
          color:"lime",
          padding:"10px"
        }}
      >

        {events.map((e,index)=>(

          <div key={index}>

            [{e.timestamp}]
            {e.event_type}
            :
            {e.file_name}

          </div>

        ))}

      </div>

    </div>

  );

}

export default TerminalLogs;