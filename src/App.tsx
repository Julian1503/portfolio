import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Hero, Navbar, Tech} from "./components";
import Projects from "./components/Projects";
import React from "react";

const App = () => {
  return (
      <BrowserRouter>
          <div>
              <div className="relative z-1 overflow-x-hidden">
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
              <div className="bg-experience bg-cover bg-center bg-no-repeat
            rounded-tl-[150px] rounded-br-[150px]">
                  <div className="bg-experienceLight bg-cover bg-center
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                      <Experience />
                  </div>
              </div>
              <div className="relative z-0">
                  <Contact />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
