import Hero from "../../components/hero";
import Contact from "../../components/Contact";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Quote from "../../components/Quote";
import Leistung from "../../components/Leistung";
import ProjectSlider from "../../components/ProjectSlider";
import PartnerLogos from "../../components/PartnerLogos";

export default function Components() {
  return (
    <section id="components" aria-labelledby="components-title" className="mt-12 scroll-mt-36">
      <div className="mb-6 px-5 sm:px-8">
        <h2 id="components-title" className="text-2xl font-semibold tracking-tight">Components</h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">Larger building blocks for Vita Health pages.</p>
      </div>

      <article id="components-hero" aria-labelledby="hero-preview-title" className="scroll-mt-36 overflow-hidden bg-white shadow-sm">
        <div className="border-b border-zinc-100 px-6 py-4 sm:px-8">
          <h3 id="hero-preview-title" className="text-base font-semibold">Hero</h3>
        </div>
        <Hero />
      </article>

      <article id="components-contact" aria-labelledby="contact-preview-title" className="mt-8 scroll-mt-36 overflow-hidden bg-white shadow-sm">
        <div className="border-b border-zinc-100 px-6 py-4 sm:px-8">
          <h3 id="contact-preview-title" className="text-base font-semibold">Contact</h3>
        </div>
        <Contact />
      </article>

      <article id="components-leistung" aria-labelledby="leistung-preview-title" className="mt-8 scroll-mt-36 overflow-hidden bg-white shadow-sm">
        <div className="border-b border-zinc-100 px-6 py-4 sm:px-8">
          <h3 id="leistung-preview-title" className="text-base font-semibold">Leistung</h3>
        </div>
        <Leistung />
      </article>

      <article id="components-project-slider" aria-labelledby="project-slider-preview-title" className="mt-8 scroll-mt-36 overflow-hidden bg-white shadow-sm">
        <div className="border-b border-zinc-100 px-6 py-4 sm:px-8">
          <h3 id="project-slider-preview-title" className="text-base font-semibold">Project slider</h3>
        </div>
        <ProjectSlider />
      </article>

      <article id="components-partner-logos" aria-labelledby="partner-logos-preview-title" className="mt-8 scroll-mt-36 overflow-hidden bg-white shadow-sm">
        <div className="border-b border-zinc-100 px-6 py-4 sm:px-8">
          <h3 id="partner-logos-preview-title" className="text-base font-semibold">Partner logos</h3>
        </div>
        <PartnerLogos />
      </article>

      <article id="components-navigation" aria-labelledby="navigation-preview-title" className="mt-8 scroll-mt-36 overflow-hidden bg-white shadow-sm">
        <div className="border-b border-zinc-100 px-6 py-4 sm:px-8">
          <h3 id="navigation-preview-title" className="text-base font-semibold">Navigation</h3>
        </div>
        <Navigation />
      </article>

      <article id="components-quote" aria-labelledby="quote-preview-title" className="mt-8 scroll-mt-36 overflow-hidden bg-white shadow-sm">
        <div className="border-b border-zinc-100 px-6 py-4 sm:px-8">
          <h3 id="quote-preview-title" className="text-base font-semibold">Quote</h3>
        </div>
        <Quote />
      </article>

      <article id="components-footer" aria-labelledby="footer-preview-title" className="mt-8 scroll-mt-36 overflow-hidden bg-white shadow-sm">
        <div className="border-b border-zinc-100 px-6 py-4 sm:px-8">
          <h3 id="footer-preview-title" className="text-base font-semibold">Footer</h3>
        </div>
        <Footer />
      </article>
    </section>
  );
}
