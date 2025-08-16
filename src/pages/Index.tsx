
import Header from '../components/Header';
import Hero from '../components/Hero';
import Proficiencies from '../components/Proficiencies';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import About from '../components/About';
import Connect from '../components/Connect';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Proficiencies />
        <About />
        <Projects />
        <WorkExperience />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
