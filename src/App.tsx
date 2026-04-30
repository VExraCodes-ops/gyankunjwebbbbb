import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import AcademicSections from './components/AcademicSections';
import PrincipalMessage from './components/PrincipalMessage';
import Infrastructure from './components/Infrastructure';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Stats />
        <AcademicSections />
        <PrincipalMessage />
        <Infrastructure />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
