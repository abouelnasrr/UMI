import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import CoreValue from "./sections/CoreValue";
import Services from "./sections/Services";
import Industries from "./sections/Industries";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <Hero />
        <Problem />
        <CoreValue />
        <Services />
        <Industries />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;