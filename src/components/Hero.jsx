import React from "react";
import { Hero as H, Button } from "./styles";
import video from "../assets/hero_video.mp4";

function Hero() {
  return (
    <H.Hero>
      <div className="container">
        <H.Content
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          <H.ContentTitle>Where creativity thrives.</H.ContentTitle>
          <H.ContentText>
            Playspace rooms come with everything you need to work together from
            anywhere.
          </H.ContentText>
          <Button primary size="big" className="hero--btn">
            join the waitlist
          </Button>
        </H.Content>

        <H.VideoContainer
          initial={{ z: 50, y: -50, opacity: 0 }}
          animate={{ z: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <H.Video muted autoPlay loop>
            <source src={video} />
          </H.Video>
        </H.VideoContainer>
      </div>
    </H.Hero>
  );
}

export default Hero;
