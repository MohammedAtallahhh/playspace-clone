import React from "react";
import { Footer as F } from "./styles";
import Logo from "../assets/playspace-logo.svg";

function Footer() {
  return (
    <F.Wrapper>
      <div className="container">
        <div className="footer-inner">
          <div className="image">
            <img src={Logo} alt="" />
          </div>

          <p className="copyright">clonned with love by Mohammed Atallah</p>

          <ul className="footer--nav">
            <li className="footer--nav__item">
              <a href="#" className="footer--nav__link">
                Twitter
              </a>
            </li>

            <li className="footer--nav__item">
              <a href="#" className="footer--nav__link">
                Updates
              </a>
            </li>

            <li className="footer--nav__item">
              <a href="#" className="footer--nav__link">
                FAQ
              </a>
            </li>

            <li className="footer--nav__item">
              <a href="#" className="footer--nav__link">
                Terms & privacy
              </a>
            </li>

            <li className="footer--nav__item">
              <a href="#" className="footer--nav__link">
                Legal Notices
              </a>
            </li>

            <li className="footer--nav__item">
              <a href="#" className="footer--nav__link">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </F.Wrapper>
  );
}

export default Footer;
