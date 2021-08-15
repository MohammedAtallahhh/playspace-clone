import React from "react";
import { Rooms as R, Title, Text } from "./styles";


function Rooms() {
  return (
    <R.Wrapper>
      <div className="content">
        <div className="content-inner">
          <Title color="var(--text-white-1)">Rooms for every occasion.</Title>
          <Text color="var(--text-white-2)">
            Create dedicated spaces for projects or teams, and sync with your
            calendar for easy access to meetings.
          </Text>
        </div>
      </div>

      <div className="image"></div>
    </R.Wrapper>
  );
}

export default Rooms;
