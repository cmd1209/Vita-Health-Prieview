import TypeRow from "../../components/TypeRow";

export default function Typography() {
  return (
    <section id="typography" aria-labelledby="typography-title" className="mb-12 scroll-mt-36">
        <div className="mb-6">
          <h2 id="typography-title" className="text-2xl font-semibold tracking-tight">Typography</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">The Vita Health type system, from display headings to supporting labels.</p>
        </div>
        <div className="space-y-6">
          <article id="typography-display" aria-labelledby="type-display-title" className="scroll-mt-36 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
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
          <article id="typography-quotes" aria-labelledby="type-quotes-title" className="scroll-mt-36 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 sm:px-8">
              <h3 id="type-quotes-title" className="text-base font-semibold">Blockquotes</h3>
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
          <article id="typography-headings" aria-labelledby="type-headings-title" className="scroll-mt-36 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
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
          <article id="typography-body" aria-labelledby="type-body-title" className="scroll-mt-36 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
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
          <article id="typography-labels" aria-labelledby="type-labels-title" className="scroll-mt-36 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
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
  );
}
