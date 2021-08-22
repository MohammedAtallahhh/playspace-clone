import React from "react";
import { Music as S, Title, Text } from "./styles";
import { motion } from "framer-motion";
import audioImage from "../assets/audio.png";
import { useRef } from "react";
import { useOnScreen } from "./useOnScreen";

function Music() {
  const rootRef = useRef();
  const isContent = useOnScreen(rootRef, [0.5]);

  return (
    <S.Wrapper>
      <div ref={rootRef} className="container">
        <motion.div
          className="content"
          initial={{ x: "-100%", opacity: 0 }}
          animate={isContent ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <Title color="var(--text-white-1)">Turn up the volume.</Title>
          <Text color="var(--text-white-1)">
            Fill the room with music to set the tone and get the creative energy
            flowing.
          </Text>
        </motion.div>

        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={isContent ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="image"
        >
          <img src={audioImage} alt="" />
        </motion.div>
      </div>
    </S.Wrapper>
  );
}

export default Music;
