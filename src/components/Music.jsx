import React from "react";
import { Music as S, Title, Text } from "./styles";
import audioImage from "../assets/audio.png";

function Music() {
  return (
    <S.Wrapper>
      <div className="container">
        <div className="content">
          <Title color="var(--text-white-1)">Turn up the volume.</Title>
          <Text color="var(--text-white-1)">
            Fill the room with music to set the tone and get the creative energy
            flowing.
          </Text>
        </div>

        <div className="image">
          <img src={audioImage} alt="" />
        </div>
      </div>
    </S.Wrapper>
  );
}

export default Music;
