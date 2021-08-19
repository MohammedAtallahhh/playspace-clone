import styled, { css } from "styled-components";
// import { BsList } from "react-icons/bs";
import { BsTextRight } from "react-icons/bs";
import squares from "../assets/squares.svg";
import IpadImage from "../assets/ipad.png";
import RoomsImage from "../assets/talk.png";
// import Wave from "../assets/wave.svg";

// -------------Navbar
export const Nav = {
  Nav: styled.nav`
    background: transparent;
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 8vh;
    transition: 200ms;

    > .container {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &.scrolled {
      background: var(--light-blue);
      height: 8vh;
      box-shadow: 0 1rem 3rem -2rem rgba(0, 0, 0, 0.7);
    }

    @media (max-width: 767px) {
      &::after {
        content: "";
        position: fixed;
        inset: 0;
        z-index: -1;
        background: hsla(220, 80%, 45%, 0.5);
        display: none;
        animation: 500ms 300ms ease fade forwards;
      }

      ${({ overlay }) =>
        overlay
          ? css`
              background: var(--light-blue);
              &::after {
                display: block;
              }
            `
          : ""}
    }

    @media (min-width: 768px) {
      height: 13vh;

      &::after {
        display: none;
      }
    }

    button {
      @media (max-width: 767px) {
        border: 1px solid hsl(233, 100%, 62%);
        color: hsl(233, 100%, 62%);
        margin-top: 2rem;
        margin-left: 0;

        &:hover {
          background-color: hsl(233, 100%, 62%);
          color: white;
        }
      }
    }
  `,

  Logo: styled.h2`
    font-size: clamp(2rem, 1.5rem + 3vw, 3rem);
    color: var(--text-white-1);
  `,

  List: styled.ul`
    list-style: none;
    position: fixed;
    top: 8vh;
    right: 0;
    left: 0;
    text-align: center;
    background-color: var(--bg-white-1);
    padding: 3rem;
    box-shadow: -0.5rem 0.5rem 1rem hsla(0, 0%, 15%, 0.2);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.4);
    user-select: none;

    &.active {
      transform: scaleY(1);
    }

    @media (min-width: 768px) {
      padding: 0;
      position: relative;
      top: unset;
      box-shadow: unset;
      right: unset;
      width: unset;
      max-width: unset;
      background: unset;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      transform: scaleX(1);
    }
  `,

  Item: styled.li``,

  Link: styled.a`
    display: inline-block;
    text-decoration: none;
    padding: 0.5em;
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--text-black-3);
    transition: 200ms;
    cursor: pointer;

    &:hover {
      color: var(--primary-blue);
    }

    @media (min-width: 768px) {
      color: var(--text-white-1);
      font-weight: 400;
      font-size: 1.6rem;
      padding: 0.5em 0.8em;

      &:hover {
        color: white;
      }
    }
  `,

  ToggleIcon: styled(BsTextRight)`
    font-size: 3rem;
    color: var(--text-white-1);
    cursor: pointer;
    opacity: 0.9;
    transition: all 200ms ease;

    &:hover {
      opacity: 1;
    }

    &:active {
      transform: scale(0.9);
    }

    @media (min-width: 768px) {
      display: none;
    }
  `,
};

// ------------------ Hero
export const Hero = {
  Hero: styled.main`
    --padding: 10vh;
    background-color: var(--primary-blue);
    padding-top: var(--padding);
    overflow: hidden;

    > .container {
      display: flex;
      flex-direction: column;
      padding: 5rem 0 10rem;
    }
  `,

  Content: styled.div`
    font-size: clamp(2rem, 2.3rem + 4vw, 6rem);
    text-align: center;
    flex: 1;
    margin-bottom: 8rem;
    z-index: 2;
  `,

  ContentTitle: styled.h1`
    font-size: 1.2em;
    margin-bottom: 2rem;
    /* font-weight: 900; */
    color: var(--text-white-1);
    letter-spacing: -2px;
  `,

  ContentText: styled.p`
    color: var(--text-white-2);
    font-size: 0.5em;
    font-weight: 300;
    max-width: 45ch;
    margin: 2rem auto;
  `,

  VideoContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    &::after {
      content: "";
      position: absolute;
      inset: -10rem;
      background: url(${squares}) no-repeat center / cover;
      z-index: 1;
    }
  `,

  Video: styled.video`
    width: 100%;
    max-width: 800px;
    z-index: 2;
    border-radius: 1.5rem;
  `,
};

// ----------------------Features
export const Features = {
  Wrapper: styled.section`
    background: var(--bg-white-1);
    padding: 10rem 0;

    > .container {
    }
  `,

  Content: styled.div`
    text-align: center;
    margin-bottom: 5rem;
  `,

  TabsWrapper: styled.div`
    .tabs {
      display: flex;
      width: 100%;
      max-width: 700px;
      justify-content: center;
      margin-bottom: 5rem;
      margin-inline: auto;
      border-radius: 1000rem;
      box-shadow: 0.4rem 0.4rem 1.3rem rgb(0 0 0 / 20%);
      list-style: none;

      @media (max-width: 650px) {
        box-shadow: none;
        display: block;
      }

      .tab {
        font-size: calc(1.2rem + 0.8vw);
        font-weight: 500;
        padding: 0.8em;
        border-radius: 10rem;
        flex: 1;
        text-align: center;
        cursor: pointer;

        &:not(:last-child) {
          margin-right: 2rem;
        }

        &.active {
          background: black;
          color: var(--text-white-1);
        }

        @media (max-width: 650px) {
          max-width: 300px;
          box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.15);

          &,
          &:not(:last-child) {
            margin: 0 auto 2rem;
          }
        }
      }
    }
    .tabs__content .content {
      display: none;
      &.active {
        display: flex;
      }
      img {
        filter: drop-shadow(0.4rem 0.7rem 1.5rem rgba(0, 0, 0, 0.15));
        width: 100%;
        max-width: 850px;
        margin: 0 auto;
        opacity: 0;
        animation: fade 0.5s forwards;
      }
    }
  `,
};

// --------------------Music
export const Music = {
  Wrapper: styled.section`
    background: var(--primary-yellow);
    padding: 8rem 0;

    @media (min-width: 768px) {
      padding: 15rem 0;
    }

    > .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      > * {
        flex-basis: 100%;

        @media (min-width: 768px) {
          flex-basis: 45%;
        }
      }
    }

    .content {
      text-align: center;
      margin-bottom: 5rem;
      color: var(--text-white-1);

      @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 5rem;
      }
    }

    .image {
      display: flex;
      justify-content: center;

      img {
        width: calc(300px + 17vw);
        border-radius: 1rem;
        filter: drop-shadow(0.5rem 0.8rem 2rem hsla(50, 100%, 25%, 0.5));
      }
    }
  `,
};

//-----------------Rooms
export const Rooms = {
  Wrapper: styled.section`
    background: var(--primary-red);
    padding: 8rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .content {
      padding: 0 2rem;
      margin-bottom: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-basis: 100%;

      @media (min-width: 1200px) {
        max-width: 800px;
        margin-left: auto;
        padding: 0 0 0 0;
      }
    }

    .image {
      background: url(${RoomsImage}) no-repeat 13% 45%/ 1000px;
      min-height: 450px;
      flex-basis: 100%;

      @media (min-width: 580px) {
        background: url(${RoomsImage}) no-repeat 13% 45%/ 1300px;
        min-height: 600px;
      }
    }

    @media (min-width: 930px) {
      .content,
      .image {
        flex-basis: 50%;
      }

      .content {
        text-align: left;
        padding: 0 0 0 5rem;
      }

      .content-inner {
        margin-top: -10rem;
      }

      .image {
        min-height: 800px;
        background-size: 1700px;
      }
    }
  `,
};

// ---------------------Ipad
export const Ipad = {
  Wrapper: styled.section`
    padding: 10rem 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (min-width: 850px) {
      padding: 5rem 0 13rem;
      align-items: flex-end;
    }

    .content,
    .image {
      flex-basis: 100%;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5rem;
      padding: 0 2rem;

      p {
        margin-inline: unset;
      }
    }

    .image {
      min-height: 400px;
      background-image: url(${IpadImage});
      background-repeat: no-repeat;
      background-position: 100% 100%;
      background-size: 700px;

      @media (min-width: 550px) {
        min-height: 700px;
        background-position: 100% 30%;
        background-size: 1000px;
      }

      @media (min-width: 700px) {
        min-height: 900px;
        background-position: 100% -10%;
        background-size: 1200px;
      }
    }

    @media (min-width: 850px) {
      .image {
        order: 1;
        flex-basis: 53%;
        background-position: 100% 30%;
        background-size: 1080px;
        min-height: 600px;
        top: 5rem;
      }

      .content {
        order: 2;
        flex-basis: 45%;
        margin-bottom: 0;
      }
    }
  `,
};

// -------------------Action
export const Action = {
  Wrapper: styled.section`
    background: var(--primary-blue);
    padding: 20rem 0;

    @media (min-width: 600px) {
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: url(${squares}) no-repeat center / contain;
        opacity: 0.7;
      }
    }

    @media (min-width: 991px) {
      padding: 33rem 0;
    }

    .container {
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content {
      text-align: center;
      max-width: 800px;
    }
  `,
};

// -----------------------Footer
export const Footer = {
  Wrapper: styled.footer`
    padding: 5rem 0;

    .container,
    .image {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image {
      margin-bottom: 5rem;
    }

    .copyright {
      text-align: center;
      font-size: 1.4rem;
      font-weight: 500;
      margin-bottom: 2rem;
      color: var(--text-black-3);
    }

    .footer--nav {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .footer--nav__item {
      &:not(:last-child)::after {
        content: ".";
        position: absolute;
        right: 0;
        top: -3px;
        transform: scale(2.2);
      }
    }

    .footer--nav__link {
      text-decoration: none;
      color: var(--text-black-3);
      padding: 1rem;
      font-size: 1.4rem;
      font-weight: 300;
    }
  `,
};

// ----------------Helpers
export const Button = styled.button`
  border: none;
  outline: none;
  padding: 0.7em 1.5em;
  border-radius: 10rem;
  cursor: pointer;
  font-size: ${({ small }) =>
    small ? "1.6rem" : "clamp(1.8rem, 1.4rem + 1vw, 2.2rem)"};
  font-family: Poppins, sans-serif;
  font-weight: 400;
  margin-left: 1rem;
  margin-top: 0;
  transition: 250ms ease;

  ${(props) =>
    props.primary
      ? css`
          background: white;
          color: var(--text-black-1);

          &:hover,
          &:focus {
            box-shadow: 0.1em 0.2em 0.5em rgba(0, 0, 0, 0.1);
          }
        `
      : css`
          background: hsla(0, 0%, 100%, 0.15);
          color: var(--text-white-1);

          &:hover,
          &:focus {
            color: var(--text-black-1);
            background-color: white;
          }
        `}
`;

export const Title = styled.h2`
  font-size: clamp(3rem, 2.8rem + 5vw, 5.5rem);
  line-height: 1em;
  color: ${(props) => props.color};
`;

export const Text = styled.p`
  line-height: 1.4;
  font-size: clamp(1.8rem, 1.6rem + 1.5vw, 3rem);
  font-weight: 400;
  max-width: 45ch;
  margin: 2rem 0;
  color: ${({ color }) => color || "black"};
`;

export const Overlay = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    top: 10vh;
    background: hsla(0, 0%, 100%, 0.7);
    display: none;
    opacity: 0;
    animation: fade 500ms ease forwards;

    &.active {
      display: block;
    }
  }
`;
