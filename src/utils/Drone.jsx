import { motion } from "motion/react";

const Drone = () => {
  return (
    <motion.video
      width="270"
      height="auto"
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        opacity: 0.6,
        pointerEvents: "none",
      }}
      animate={{
        transform: [
          "translate(0vw, 0vh)",
          "translate(80vw, 10vh)",
          "translate(60vw, 60vh)",
          "translate(10vw, 40vh)",
          "translate(90vw, 20vh)",
          "translate(0vw, 0vh)",
        ],
      }}
      transition={{
        duration: 30,
        easing: "ease-in-out",
        repeat: Infinity,
      }}
    >
      <source src="/drone.webm" type="video/webm" />
      Your browser does not support the video tag.
    </motion.video>
  );
};

export default Drone;
