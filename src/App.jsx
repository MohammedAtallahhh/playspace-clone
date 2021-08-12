import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  const links = ["sign in"];
  return (
    <>
      <Navbar items={links} button="join the waitlist" />
      <Hero />
      <Features />
    </>
  );
}

export default App;
