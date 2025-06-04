import React, { useEffect } from "react";
import "./MiniBorad.css";
import { motion, MotionConfig, AnimatePresence } from "motion/react";
// Hybrid

const MiniBorad = () => {
  return (
    <AnimatePresence>
      <div>
        {/* <MotionConfig transition={{ type: "spring", duration: 2 }}> */}
        <ul className="list-group ">
          <MotionConfig transition={{ type: "spring", duration: 1.2 }}>
            <motion.li
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 }}
              className="list-group-item"
            >
              <img className="" src="MongoDB.svg" alt="mongodb icon image" />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 }}
              className="list-group-item"
            >
              <img className="" src="Express.svg" alt="express icon image" />
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="list-group-item"
            >
              <img className="" src="React.svg" alt="react icon image" />
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="list-group-item"
            >
              <img className="" src="Node.js.svg" alt="nodeJs icon image" />
            </motion.li>
          </MotionConfig>
        </ul>
        {/* <button onClick={handleAnimate}>Click</button> */}
        {/* </MotionConfig> */}
      </div>
    </AnimatePresence>
  );
};

export default MiniBorad;
