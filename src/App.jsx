import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Music from "./components/Music";
import Rooms from "./components/Rooms";
import Ipad from "./components/Ipad";
import Action from "./components/Action";
import Footer from "./components/Footer";
import { Overlay } from "./components/styles";
// import Modal from './components/Modal'
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isOverlay, setIsOverlay] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("loaded");
    setLoading(false);
  }, []);

  return (
    <>
      <Overlay className="overlay" overlay={isOverlay} />

      <Navbar
        button="join the waitlist"
        isOverlay={isOverlay}
        setIsOverlay={setIsOverlay}
      />
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
