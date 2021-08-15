import React from "react";
import { Action as A, Title, Button } from "./styles";

function Action() {
  return (
    <A.Wrapper>
      <div className="container">
        <div className="content">
          <Title
            style={{ marginBottom: "5rem", lineHeight: "1.2em" }}
            color="var(--text-white-1)"
          >
            See for yourself.
            <br /> No installs required.
          </Title>
          <Button primary>Join the waitlist</Button>
        </div>
      </div>
    </A.Wrapper>
  );
}

export default Action;
