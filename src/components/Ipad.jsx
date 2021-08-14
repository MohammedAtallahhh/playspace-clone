import React from "react";
import { Ipad as I, Title, Text } from "./styles";

function Ipad() {
  return (
    <I.Wrapper>
      {/* content  */}
      <div className="content">
        <div className="content-inner">
          <Title color="var(--text-black-1)">Grab a pencil.</Title>

          <Text color="var(--text-black-4)">
            Use your iPad as a second surface and an Apple Pencil to take notes
            and sketch in real-time.
          </Text>
        </div>
      </div>

      {/* Image */}
      <div className="image"></div>
    </I.Wrapper>
  );
}

export default Ipad;
