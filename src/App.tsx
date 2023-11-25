import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Hero, Navbar, Tech} from "./components";
import Projects from "./components/Projects";

const App = () => {
  return (
      <BrowserRouter>
          <div>
              <div className="relative z-0">
                  <Navbar />
                  <Hero />
              </div>
              <div>
                  <About />
              </div>
              <div>
                  <Tech />
              </div>
              <Projects/>
              <div>
                  <div>
                      <Experience />
                  </div>
              </div>
              <div>
                  <Contact />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
