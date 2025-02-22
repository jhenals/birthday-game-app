import { BrowserRouter } from "react-router-dom";


import '@fortawesome/fontawesome-free/css/all.min.css';
import Start from "./components/canvas/Start";

const App = () => {
  return (
    <>
    <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <Start />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
