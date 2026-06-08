import { useState } from "react";

import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

import "./styles/dashboard.css";
import "./styles/landing.css";

function App() {

  const [showDashboard,
  setShowDashboard] = useState(false);

  return (

    <>
      {showDashboard ?

        <Dashboard />

        :

        <LandingPage
          enterDashboard={() =>
            setShowDashboard(true)
          }
        />

      }
    </>

  );
}

export default App;