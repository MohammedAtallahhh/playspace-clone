import styled, { css } from "styled-components";
// import { BsList } from "react-icons/bs";
import { BsTextRight } from "react-icons/bs";
import squares from "../assets/squares.svg";

export const Nav = {
  Nav: styled.nav`
    background: transparent;
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 8vh;

    > .container {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    @media (min-width: 768px) {
      height: 13vh;
    }
  `,

  Logo: styled.h2`
    font-size: clamp(2rem, 1.5rem + 3vw, 3rem);
    color: var(--text-white-1);
  `,

  List: styled.ul`
    list-style: none;
    position: absolute;
    text-align: center;
    top: 110%;
    background-color: var(--bg-white-1);
    right: 0;
    width: 100%;
    max-width: 600px;
    padding: 3rem;
    box-shadow: -0.5rem 0.5rem 1rem hsla(0, 0%, 15%, 0.2);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.4);

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
      color: var(--bg-blue-2);
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

export const Hero = {
  Hero: styled.main`
    --padding: 10vh;
    background-color: var(--bg-blue);
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
  `,

  ContentText: styled.p`
    color: var(--text-white-2);
    font-size: 0.5em;
    font-weight: 400;
    max-width: 40ch;
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
  `,
};

export const Button = styled.button`
  border: none;
  outline: none;
  letter-spacing: 1px;
  padding: 0.8em 1.7em;
  border-radius: 10rem;
  cursor: pointer;
  font-size: 1.3rem;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  margin-left: 1rem;
  margin-top: 0;
  transition: 250ms ease;

  background: hsla(0, 0%, 100%, 0.15);
  color: white;

  &:hover,
  &:focus {
    color: var(--text-black-1);
    background-color: white;
  }

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
`;
