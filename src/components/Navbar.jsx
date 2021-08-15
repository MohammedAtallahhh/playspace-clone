import React, { Component } from "react";

import { Nav as N, Button } from "./styles";

class Navbar extends Component {
  state = {
    active: false,
  };

  HandleNavActive = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    const { active } = this.state;

    const { items, button } = this.props;

    return (
      <N.Nav>
        <div className="container">
          {/* Logo */}
          <N.Logo>playspace</N.Logo>

          {/* List  */}
          <N.List className={`${active ? "active" : ""}`}>
            {items.map((item, i) => (
              <N.Item key={i}>
                <N.Link>{item}</N.Link>
              </N.Item>
            ))}

            {button ? <Button small>{button}</Button> : null}
          </N.List>

          <N.ToggleIcon onClick={this.HandleNavActive} />
        </div>
      </N.Nav>
    );
  }
}

export default Navbar;
