import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <About />
          <div className="grid-layout">
            <div className="left-column">
              <Experience />
              <Education />
            </div>
            <div className="right-column">
              <Skills />
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
