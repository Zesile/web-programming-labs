import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const name = "Тітарчук Дмитро Васильович";

  return (
    <div>
      <Header name={name} title="Junior веброзробник" />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer name={name} />
    </div>
  );
}

export default App;
