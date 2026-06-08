import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

function LandingPage({ enterDashboard }) {

  return (

    <div className="landing">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >

        <FaShieldAlt
          size={100}
          color="cyan"
        />

      </motion.div>

      <motion.h1
        className="landing-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        AI Ransomware Detection

      </motion.h1>

      <motion.button

        whileHover={{
          scale: 1.1
        }}

        onClick={enterDashboard}

      >

        ENTER SOC

      </motion.button>

    </div>

  );
}

export default LandingPage;