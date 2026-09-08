import Hero from "../../components/hero";

export default function Components() {
  return (
    <section id="components" aria-labelledby="components-title" className="mt-12 scroll-mt-36">
      <div className="mb-6">
        <h2 id="components-title" className="text-2xl font-semibold tracking-tight">Components</h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">Larger building blocks for Vita Health pages.</p>
      </div>

      <article id="components-hero" aria-labelledby="hero-preview-title" className="scroll-mt-36 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="border-b border-zinc-100 px-6 py-4 sm:px-8">
          <h3 id="hero-preview-title" className="text-base font-semibold">Hero</h3>
        </div>
        <Hero />
      </article>
    </section>
  );
}
