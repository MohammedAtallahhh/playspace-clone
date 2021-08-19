import React, { Component } from "react";

import { Nav as N, Button, Overlay } from "./styles";

class Navbar extends Component {
  state = {
    active: false,
  };

  HandleNavActive = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.navRef.parentElement.parentElement.classList.toggle("no-scroll");
      }
    );
  };

  componentDidMount() {
    document.addEventListener("click", this.toggleNav);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.handleScroll();
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.toggleNav);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e) => {
    if (document.documentElement.scrollTop > 100) {
      this.navRef.classList.add("scrolled");
    } else {
      this.navRef.classList.remove("scrolled");
    }
  };

  toggleNav = (e) => {
    if (!e.target.closest("nav") && this.state.active) {
      this.setState(
        {
          active: false,
        },
        () => {
          this.navRef.parentElement.parentElement.classList.remove("no-scroll");
        }
      );
    }
  };

  render() {
    const { active } = this.state;

    const { items, button } = this.props;

    return (
      <N.Nav ref={(id) => (this.navRef = id)} overlay={active}>
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
