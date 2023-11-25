import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Hero, Navbar, Tech, Works} from "./components";
import Projects from "./components/Projects";

const App = () => {
  return (
      <BrowserRouter>
          <div>
              <div>
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
