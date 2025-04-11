import Navbar from './components/Navbar';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Projects from './components/Projects';
import Details from './components/Details';
import Certifications from './components/Certifications';

function App() {
  return (
    <>
    
      <Navbar />
      <Details />
      <Projects/>
      <Certifications/>
    
    </>
  );
}

export default App;