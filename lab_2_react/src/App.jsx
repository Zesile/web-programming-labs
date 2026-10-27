import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const name = "Тітарчук Дмитро Васильович";

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 md:flex">
      <Header name={name} title="Junior веброзробник" />
      <div className="min-w-0 flex-1 px-6 py-10 md:px-12">
        <div className="max-w-4xl">
          <main className="space-y-12">
            <About />
            <Experience />
            <Education />
            <Skills />
          </main>
          <Footer name={name} />
        </div>
      </div>
    </div>
  );
}

export default App;
