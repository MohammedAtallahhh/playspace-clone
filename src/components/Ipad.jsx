import React, { useRef } from "react";
import { Ipad as I, Title, Text } from "./styles";
import { motion } from "framer-motion";
import { useOnScreen } from "./useOnScreen";

function Ipad() {
  const rootRef = useRef();
  const isContent = useOnScreen(rootRef, [0.5]);

  return (
    <I.Wrapper ref={rootRef}>
      {/* content  */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={isContent ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="content"
      >
        <div className="content-inner">
          <Title color="var(--text-black-1)">Grab a pencil.</Title>

          <Text color="var(--text-black-4)">
            Use your iPad as a second surface and an Apple Pencil to take notes
            and sketch in real-time.
          </Text>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={isContent ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="image"
      ></motion.div>
    </I.Wrapper>
  );
}

export default Ipad;
