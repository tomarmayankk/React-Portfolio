import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Stack from "./Components/Stack";

function App() {
  return (
    <>
      <div class="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="mx-auto px-8">
      <Navbar/>
      <Main/>
      <About/>
      <Stack/>
      <Projects/>
      <Contact/>
      </div>
    </>
  );
}

export default App;
