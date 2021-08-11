import React from "react";
import { Hero as H, Button } from "./styles";
import video from "../assets/hero_video.mp4";

function Hero() {
  return (
    <H.Hero>
      <div className="container">
        <H.Content>
          <H.ContentTitle>Where creativity thrives.</H.ContentTitle>
          <H.ContentText>
            Playspace rooms come with everything you need to work together from
            anywhere.
          </H.ContentText>
          <Button className="hero--btn">join the waitlist</Button>
        </H.Content>

        <H.VideoContainer>
          <H.Video muted autoPlay loop>
            <source src={video} />
          </H.Video>
        </H.VideoContainer>
      </div>
    </H.Hero>
  );
}

export default Hero;
