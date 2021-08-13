import React from "react";
import { Music as S } from "./styles";
import audioImage from "../assets/audio.png";

function Music() {
  return (
    <S.Wrapper>
      <div className="container">
        <div className="content">
          <h2 className="title">Turn up the volume.</h2>
          <p>
            Fill the room with music to set the tone and get the creative energy
            flowing.
          </p>
        </div>

        <div className="image">
          <img src={audioImage} alt="" />
        </div>
      </div>
    </S.Wrapper>
  );
}

export default Music;
