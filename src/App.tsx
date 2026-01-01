import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="bg-gray-900 dark:bg-black py-8 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Vihanga Nethsara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
