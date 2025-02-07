import { useEffect, useState } from "react";
import {
  About,
  Contact,
  Experience,
  Footer,
  Landing,
  Loader,
  Navbar,
  Projects,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      <header id="home" className="cont">
        <Navbar />
        <Landing />
      </header>
      <main>
        <About />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
