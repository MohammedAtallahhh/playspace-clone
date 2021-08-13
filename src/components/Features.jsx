import React, { useState } from "react";
import { Features as F } from "./styles";

// import notepad from "../assets/notepad_video.mp4";
import window from "../assets/window.png";
import screenshare from "../assets/screenshare.png";
import whiteboard from "../assets/whiteboard.png";
import float from "../assets/float.png";

function Features() {
  const [active, setActive] = useState(0);

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
      <div className="container">
        <F.Content className="content">
          <h2 className="content--title">Get on the same page, fast.</h2>

          <p className="content--text">
            Each room is loaded with collaborative surfaces so you can quickly
            take notes, capture to-dos, and share ideas.
          </p>
        </F.Content>

        <F.TabsWrapper>
          <ul className="tabs">
            {Tabs.map((tab, i) => (
              <li
                onClick={(e) => handleActiveTab(e, i)}
                className={`tab ${active === i ? "active" : ""}`}
                key={i}
              >
                {tab.text}
              </li>
            ))}
          </ul>

          <div className="tabs__content">
            {Tabs.map((tab, i) => (
              <div
                className={`content ${i === active ? "active" : ""}`}
                key={i}
              >
                <img loading="lazy" src={tab.img} alt={tab.img} />
              </div>
            ))}
          </div>
        </F.TabsWrapper>
      </div>
    </F.Wrapper>
  );
}

export default Features;
