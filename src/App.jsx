import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Music from "./components/Music";
import Rooms from "./components/Rooms";
import Ipad from "./components/Ipad";
import Action from "./components/Action";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  const links = ["sign in"];



  return (
    <>
      <Navbar items={links} button="join the waitlist" />
      <Hero />
      <Features />
      <Music />
      <Rooms />
      <Ipad />
      <Action />
      <Footer />
    </>
  );
}

export default App;
