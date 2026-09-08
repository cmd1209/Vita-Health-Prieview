import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../components/Button";
import TypeRow from "../components/TypeRow";

const variants = ["primary", "secondary", "highlight"] as const;

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

      <section aria-labelledby="typography-title" className="mb-12">
        <div className="mb-6">
          <h2 id="typography-title" className="text-2xl font-semibold tracking-tight">Typography</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">The Vita Health type system, from display headings to supporting labels.</p>
        </div>
        <div className="space-y-6">
          <article aria-labelledby="type-display-title" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 sm:px-8">
              <h3 id="type-display-title" className="text-base font-semibold">Display</h3>
              <span className="text-xs text-zinc-500">Typography</span>
            </div>
            <div className="divide-y divide-zinc-100 px-6 sm:px-8">
              <TypeRow label="display-xl">
                <p className="display-xl">Display XL</p>
              </TypeRow>
              <TypeRow label="display-large">
                <p className="display-large">Display Large</p>
              </TypeRow>
              <TypeRow label="display-default">
                <p className="display-default">Display Default</p>
              </TypeRow>
              <TypeRow label="display-highlight">
                <p className="display-highlight">Display Highlight</p>
              </TypeRow>
            </div>
          </article>
          <article aria-labelledby="type-display-title" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 sm:px-8">
              <h3 id="type-display-title" className="text-base font-semibold">Blockquotes</h3>
              <span className="text-xs text-zinc-500">Typography</span>
            </div>
            <div className="divide-y divide-zinc-100 px-6 sm:px-8">
              <TypeRow label="quote">
                <p className="quote">Blockquote</p>
              </TypeRow>
              <TypeRow label="quote-large">
                <p className="quote-large">Blockquote Large</p>
              </TypeRow>
              <TypeRow label="quote-xl">
                <p className="quote-xl">Blockquote XL</p>
              </TypeRow>
              <TypeRow label="quote-mobile">
                <p className="quote-mobile">Blockquote Mobile</p>
              </TypeRow>
            </div>
          </article>
          <article aria-labelledby="type-headings-title" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 sm:px-8">
              <h3 id="type-headings-title" className="text-base font-semibold">Headings</h3>
              <span className="text-xs text-zinc-500">Typography</span>
            </div>
            <div className="divide-y divide-zinc-100 px-6 sm:px-8">
              <TypeRow label="h1">
                <p className="h1">Heading H1</p>
              </TypeRow>
              <TypeRow label="h2">
                <p className="h2">Heading H2</p>
              </TypeRow>
              <TypeRow label="h3">
                <p className="h3">Heading H3</p>
              </TypeRow>
              <TypeRow label="h4">
                <p className="h4">Heading H4</p>
              </TypeRow>
              <TypeRow label="h5">
                <p className="h5">Heading H5</p>
              </TypeRow>
              <TypeRow label="h6">
                <p className="h6">Heading H6</p>
              </TypeRow>
            </div>
          </article>
          <article aria-labelledby="type-body-title" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 sm:px-8">
              <h3 id="type-body-title" className="text-base font-semibold">Body &amp; lead</h3>
              <span className="text-xs text-zinc-500">Typography</span>
            </div>
            <div className="divide-y divide-zinc-100 px-6 sm:px-8">
              <TypeRow label="lead">
                <p className="lead">Lead text for important introductory copy.</p>
              </TypeRow>
              <TypeRow label="body-large">
                <p className="body-large">Large body text for prominent editorial content.</p>
              </TypeRow>
              <TypeRow label="body-default">
                <p className="body-default">Default body text for normal website content.</p>
              </TypeRow>
              <TypeRow label="body-small">
                <p className="body-small">Small body text for supporting information.</p>
              </TypeRow>
            </div>
          </article>
          <article aria-labelledby="type-labels-title" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 sm:px-8">
              <h3 id="type-labels-title" className="text-base font-semibold">Labels &amp; eyebrow</h3>
              <span className="text-xs text-zinc-500">Typography</span>
            </div>
            <div className="divide-y divide-zinc-100 px-6 sm:px-8">
              <TypeRow label="eyebrow">
                <p className="eyebrow">Eyebrow</p>
              </TypeRow>
              <TypeRow label="label">
                <p className="label">Default Label</p>
              </TypeRow>
              <TypeRow label="label-small">
                <p className="label-small">Small Label</p>
              </TypeRow>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="buttons-title">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id="buttons-title" className="text-2xl font-semibold tracking-tight">Buttons</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">Three variants, two sizes, with optional icons.</p>
          </div>
          <p className="text-xs leading-relaxed text-zinc-500">Hover · Press · Tab to focus</p>
        </div>

        <div className="space-y-6">
          {variants.map((variant) => (
            <article key={variant} aria-labelledby={`${variant}-title`} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 sm:px-8">
                <h3 id={`${variant}-title`} className="text-base font-semibold capitalize">{variant}</h3>
                <span className="text-xs text-zinc-500">Button</span>
              </div>
              <div className="grid gap-8 p-6 sm:grid-cols-2 sm:p-8">
                <div className="space-y-4">
                  <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-500">Default</h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant={variant}>Button label</Button>
                    <Button variant={variant} size="small">Small button</Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-500">With icons</h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant={variant} iconLeft={<ChevronLeft />} iconRight={<ChevronRight />}>Button label</Button>
                    <Button variant={variant} size="small" iconLeft={<ChevronLeft />} iconRight={<ChevronRight />}>Small button</Button>
                  </div>
                </div>
                <div className="space-y-4 border-t border-zinc-100 pt-6 sm:col-span-2">
                  <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-500">Disabled</h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant={variant} disabled>Button label</Button>
                    <Button variant={variant} size="small" disabled>Small button</Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer className="mt-10 text-xs leading-relaxed text-zinc-500">
        Vita Health · Component kitchen-sink
      </footer>
    </main>
  );
}
