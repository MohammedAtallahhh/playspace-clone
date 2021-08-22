import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Action as A, Title, Button } from "./styles";
import { useOnScreen } from "./useOnScreen";

function Action() {
  const contentRef = useRef();
  const isContent = useOnScreen(contentRef);

  return (
    <A.Wrapper>
      <div className="container">
        <motion.div
          ref={contentRef}
          className="content"
          initial={{ opacity: 0 }}
          animate={isContent ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <Title
            style={{ marginBottom: "5rem", lineHeight: "1.2em" }}
            color="var(--text-white-1)"
          >
            See for yourself.
            <br /> No installs required.
          </Title>
          <Button primary>Join the waitlist</Button>
        </motion.div>
      </div>
    </A.Wrapper>
  );
}

export default Action;
