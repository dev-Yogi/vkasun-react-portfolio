import { BrowserRouter,Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/resume" element={<Resume/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>  
    </BrowserRouter>

  );
}

export default App;
