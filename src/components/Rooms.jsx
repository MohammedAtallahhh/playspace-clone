import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Rooms as R, Title, Text } from "./styles";
import { useOnScreen } from "./useOnScreen";

function Rooms() {
  const rootRef = useRef();
  const isContent = useOnScreen(rootRef, [0.5]);

  return (
    <R.Wrapper ref={rootRef}>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={isContent ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="content"
      >
        <div className="content-inner">
          <Title color="var(--text-white-1)">Rooms for every occasion.</Title>
          <Text color="var(--text-white-2)">
            Create dedicated spaces for projects or teams, and sync with your
            calendar for easy access to meetings.
          </Text>
        </div>
      </motion.div>

      <motion.div
        className="image"
        initial={{ x: "100%", opacity: 0 }}
        animate={isContent ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      ></motion.div>
    </R.Wrapper>
  );
}

export default Rooms;
