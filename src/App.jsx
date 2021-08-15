import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Music from "./components/Music";
import Rooms from "./components/Rooms";
import Ipad from "./components/Ipad";

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
    </>
  );
}

export default App;
