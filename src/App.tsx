import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Hero, Navbar, Tech} from "./components";
import Projects from "./components/Projects";
import React from "react";

const App = () => {
  return (
      <BrowserRouter>
          <div>
              <div className="relative z-0">
                  <Navbar />
                  <Hero />
              </div>
              <div className="bg-about bg-cover bg-center bg-no-repeat">
                  <About />
              </div>
              <div className="bg-tech bg-cover bg-center bg-no-repeat">
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
