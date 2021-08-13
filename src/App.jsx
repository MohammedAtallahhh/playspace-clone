import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Music from "./components/Music";

function App() {
  const links = ["sign in"];
  return (
    <>
      <Navbar items={links} button="join the waitlist" />
      <Hero />
      <Features />
      <Music />
    </>
  );
}

export default App;
