
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>

   
      <Home />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
