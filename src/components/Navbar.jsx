import React, { Component } from "react";

import { Nav as N, Button } from "./styles";

class Navbar extends Component {
  state = {
    active: false,
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

  HandleNavActive = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.props.setIsOverlay(!this.props.isOverlay);
        document.body.classList.toggle("no-scroll");
      }
    );
  };

  // Handle nav when scrolling
  handleScroll = (e) => {
    if (document.documentElement.scrollTop > 100) {
      this.navRef.classList.add("scrolled");
    } else {
      this.navRef.classList.remove("scrolled");
    }
  };

  // Close nav when clicking around it in small screen
  toggleNav = (e) => {
    if (!e.target.closest("nav") && this.state.active) {
      this.setState(
        {
          active: false,
        },
        () => {
          document.body.classList.remove("no-scroll");
          this.props.setIsOverlay(false);
        }
      );
    }
  };

  render() {
    const { active } = this.state;

    const { button } = this.props;

    return (
      <N.Nav
        active={active}
        ref={(id) => (this.navRef = id)}
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "tween" }}
      >
        <div className="container">
          {/* Logo */}
          <N.Logo>playspace</N.Logo>

          {/* List  */}
          <N.List className={`${active ? "active" : ""}`}>
            <N.Item>
              <N.Link
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, type: "tween" }}
              >
                Sign in
              </N.Link>
            </N.Item>

            {button ? <Button small>{button}</Button> : null}
          </N.List>

          <N.ToggleIcon onClick={this.HandleNavActive} />
        </div>
      </N.Nav>
    );
  }
}

export default Navbar;
