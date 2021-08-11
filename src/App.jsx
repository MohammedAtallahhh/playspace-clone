import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const links = ["sign in"];
  return (
    <>
      <Navbar items={links} button="join the waitlist" />
      <Hero />
    </>
  );
}

export default App;
