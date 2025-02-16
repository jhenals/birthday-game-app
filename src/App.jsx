import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { About, Contact, Experience, ExploringFurther, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Blogs, BookJournal, LittleGallery ,Poetry} from "./components/exploring_further";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className="relative">
            <Navbar /> 
          </div>
      <div className='relative z-0 bg-primary'>
          

          <Routes>
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/bookjournal' element={<BookJournal />} />
            <Route path='/poetry' element={<Poetry />} />
            <Route path='/littlegallery' element={<LittleGallery />} />

            <Route path='/' element={
              <>
                <Hero />
        
                <Works />
                <Experience />
                <About />
                <Tech />
                <ExploringFurther />
        
                <div className='relative z-0'>
                  <Contact />
                  <StarsCanvas />
                </div>
                      
              </>
              } />
          </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
