import React, { useState } from "react";
import { useOnScreen } from "./useOnScreen";
import { Features as F, Title, Text } from "./styles";

// import notepad from "../assets/notepad_video.mp4";
import window from "../assets/window.png";
import screenshare from "../assets/screenshare.png";
import whiteboard from "../assets/whiteboard.png";
import float from "../assets/float.png";
import { motion } from "framer-motion";
import { useRef } from "react";

function Features() {
  const [active, setActive] = useState(0);
  const rootRef = useRef();
  let isContent = useOnScreen(rootRef, [0.2]);
  let isTabs = useOnScreen(rootRef, [0.4]);
  let isImage = useOnScreen(rootRef, [0.7]);

  const handleActiveTab = (e, i) => {
    setActive(i);
  };

  const Tabs = [
    { text: "Notepad", img: window },
    { text: "Whiteboard", img: whiteboard },
    { text: "Screenshare", img: screenshare },
    { text: "Float", img: float },
  ];

  return (
    <F.Wrapper>
      <div ref={rootRef} className="container">
        <F.Content
          initial={{ x: 200, opacity: 0 }}
          animate={isContent ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="content"
        >
          <Title color="var(--text-black-1)">Get on the same page, fast.</Title>

          <Text color="var(--text-black-3)">
            Each room is loaded with collaborative surfaces so you can quickly
            take notes, capture to-dos, and share ideas.
          </Text>
        </F.Content>

        <F.TabsWrapper>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={isTabs ? { opacity: 1 } : null}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="tabs"
          >
            {Tabs.map((tab, i) => (
              <li
                onClick={(e) => handleActiveTab(e, i)}
                className={`tab ${active === i ? "active" : ""}`}
                key={i}
              >
                {tab.text}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="tabs__content"
            initial={{ opacity: 0, y: -30, z: 50 }}
            animate={isImage ? { opacity: 1, y: 0, z: 0 } : null}
            transition={{ duration: 1, type: "tween" }}
          >
            {Tabs.map((tab, i) => (
              <div
                className={`content ${i === active ? "active" : ""}`}
                key={i}
              >
                <img loading="lazy" src={tab.img} alt={tab.img} />
              </div>
            ))}
          </motion.div>
        </F.TabsWrapper>
      </div>
    </F.Wrapper>
  );
}

export default Features;
