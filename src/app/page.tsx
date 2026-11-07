import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import AIEducation from '@/components/AIEducation';
import Insights from '@/components/Insights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <AIEducation />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
