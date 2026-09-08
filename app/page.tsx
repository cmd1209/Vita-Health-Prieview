import Buttons from "./pages/buttons";
import Typography from "./pages/typography";

export default function Home() {
  return (
    <main className="mx-auto max-w-[var(--preview-width)] px-5 py-10 sm:px-8 sm:py-16">
      <header className="mb-10 border-b border-zinc-200 pb-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--action-primary)]">
          Vita Health / Design system
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Component preview</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600">
              A space to review the details, compare variations, and try each component in the browser.
            </p>
          </div>
          <span className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-600">
            Work in progress
          </span>
        </div>
      </header>

      <nav aria-label="Preview sections" className="sticky top-4 z-10 mb-8 flex flex-wrap items-center gap-2 rounded-xl border border-zinc-200 bg-white/95 p-2 shadow-sm backdrop-blur">
        <span className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Sections</span>
        <a href="#typography" className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]">Typography</a>
        <a href="#buttons" className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]">Buttons</a>
      </nav>

      <Typography />

      <Buttons />
      
      <footer className="mt-10 text-xs leading-relaxed text-zinc-500">
        Vita Health · Component kitchen-sink
      </footer>
    </main>
  );
}
