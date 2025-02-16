import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { About, Contact, Experience, ExploringFurther, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div>
            <Navbar />
            <Hero />
          </div>
    
          <Works />
          <Experience />
          <About />
          <Tech />
          <ExploringFurther />

          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
