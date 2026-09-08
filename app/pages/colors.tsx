import ColorSwatch from "../../components/ColorSwatch";

const namedColors = [
  "--color-named-mint-tea",
  "--color-named-evergreen",
  "--color-named-coral-glow",
  "--color-named-jungle-teal",
  "--color-named-ivory",
  "--color-named-shiny-lavender",
];

const brandGroups = [
  {
    title: "Primary",
    description: "The core evergreen scale, used by primary actions, brand text, and dark backgrounds.",
    tokens: [
      "--color-brand-primary-100",
      "--color-brand-primary-300",
      "--color-brand-primary-500",
      "--color-brand-primary-700",
      "--color-brand-primary-900",
    ],
  },
  {
    title: "Secondary",
    description: "Supporting greens used by secondary actions and branded surfaces.",
    tokens: [
      "--color-brand-secondary-100",
      "--color-brand-secondary-300",
      "--color-brand-secondary-500",
      "--color-brand-secondary-700",
      "--color-brand-secondary-900",
    ],
  },
  {
    title: "Soft",
    description: "Light mint tones for subtle surfaces and success backgrounds.",
    tokens: [
      "--color-brand-soft-100",
      "--color-brand-soft-500",
      "--color-brand-soft-900",
    ],
  },
  {
    title: "Warm",
    description: "Coral tones for warm accents and warning or error feedback.",
    tokens: [
      "--color-brand-warm-100",
      "--color-brand-warm-300",
      "--color-brand-warm-500",
      "--color-brand-warm-700",
      "--color-brand-warm-900",
    ],
  },
  {
    title: "Cool",
    description: "Lavender tones for highlights, focus rings, and informational feedback.",
    tokens: [
      "--color-brand-cool-100",
      "--color-brand-cool-500",
      "--color-brand-cool-900",
    ],
  },
  {
    title: "Light",
    description: "Ivory tones for the default page background.",
    tokens: [
      "--color-brand-light-100",
      "--color-brand-light-500",
    ],
  },
  {
    title: "Neutral",
    description: "White, black, and grays for surfaces, text, borders, and disabled controls.",
    tokens: [
      "--color-brand-neutral-0",
      "--color-brand-neutral-300",
      "--color-brand-neutral-500",
      "--color-brand-neutral-700",
      "--color-brand-neutral-1000",
    ],
  },
];

const semanticGroups = [
  {
    title: "Background",
    description: "Page and section backgrounds, including subtle, brand, inverse, and highlighted areas.",
    tokens: [
      "--color-background-default",
      "--color-background-white",
      "--color-background-subtle",
      "--color-background-brand",
      "--color-background-inverse",
      "--color-background-highlight",
    ],
  },
  {
    title: "Surface",
    description: "Containers such as cards and panels. Elevated surfaces share the default fill; depth comes from other styling.",
    tokens: [
      "--color-surface-default",
      "--color-surface-subtle",
      "--color-surface-elevated",
      "--color-surface-brand",
      "--color-surface-inverse",
    ],
  },
  {
    title: "Text",
    description: "Foreground roles for body copy, brand text, links, supporting copy, inverse text, and disabled labels.",
    tokens: [
      "--color-text-brand",
      "--color-text-default",
      "--color-text-disabled",
      "--color-text-inverse",
      "--color-text-link",
      "--color-text-muted",
      "--color-text-subtle",
    ],
  },
  {
    title: "Accent",
    description: "Brand accents and emphasis, including the primary accent hover state.",
    tokens: [
      "--color-accent-primary",
      "--color-accent-primary-hover",
      "--color-accent-secondary",
      "--color-accent-warm",
      "--color-accent-cool",
    ],
  },
  {
    title: "Action Primary",
    description: "Evergreen backgrounds and white labels for primary buttons, including hover and active states.",
    tokens: [
      "--color-action-primary-background",
      "--color-action-primary-label",
      "--color-action-primary-hover",
      "--color-action-primary-active",
    ],
  },
  {
    title: "Action Secondary",
    description: "Supporting green backgrounds and white labels for secondary buttons, including hover and active states.",
    tokens: [
      "--color-action-secondary-background",
      "--color-action-secondary-label",
      "--color-action-secondary-hover",
      "--color-action-secondary-active",
    ],
  },
  {
    title: "Action Highlight",
    description: "Lavender backgrounds with dark labels by default. Hover and active states use a darker lavender with the inverse label color.",
    tokens: [
      "--color-action-highlight-background",
      "--color-action-highlight-label",
      "--color-action-highlight-label-inverse",
      "--color-action-highlight-hover",
      "--color-action-highlight-active",
    ],
  },
  {
    title: "Action Disabled",
    description: "Shared gray backgrounds and white labels for disabled buttons across all variants.",
    tokens: [
      "--color-action-disabled-background",
      "--color-action-disabled-label",
    ],
  },
  {
    title: "Border",
    description: "Container outlines, dividers, stronger boundaries, and keyboard focus rings.",
    tokens: [
      "--color-border-default",
      "--color-border-subtle",
      "--color-border-strong",
      "--color-border-brand",
      "--color-border-focus",
    ],
  },
  {
    title: "Status",
    description: "Foreground and background pairs for success, warning, error, and information messages. Warning and error currently share colors; labels and icons distinguish them.",
    tokens: [
      "--color-status-success-foreground",
      "--color-status-success-background",
      "--color-status-warning-foreground",
      "--color-status-warning-background",
      "--color-status-error-foreground",
      "--color-status-error-background",
      "--color-status-info-foreground",
      "--color-status-info-background",
    ],
  },
];

export default function Colors() {
  return (
    <section id="colors" aria-labelledby="colors-title" className="mb-12 scroll-mt-36">
      <div className="mb-6 px-5 sm:px-8">
        <h2 id="colors-title" className="text-2xl font-semibold tracking-tight">Colors</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600">
          Named colors define the palette. Brand scales provide its shades. Semantic tokens assign those colors to a purpose—use these roles when styling components.
        </p>
        <nav aria-label="Color groups" className="mt-4 flex flex-wrap gap-4 text-sm">
          <a href="#colors-named" className="underline underline-offset-4">Named colors</a>
          <a href="#colors-brand" className="underline underline-offset-4">Brand scales</a>
          <a href="#colors-semantic" className="underline underline-offset-4">Semantic colors</a>
        </nav>
      </div>

      <div className="space-y-6">
        <article id="colors-named" aria-labelledby="colors-named-title" className="color-card">
          <div className="color-card__header">
            <h3 id="colors-named-title">Named colors</h3>
            <span>Foundation</span>
          </div>
          <div className="color-card__body">
            <p className="color-description">The six named brand colors. These are the source values referenced by the brand scales below.</p>
            <div className="color-grid">
              {namedColors.map((token) => (
                <ColorSwatch key={token} name={token.replace("--color-named-", "").replaceAll("-", " ")} token={token} />
              ))}
            </div>
          </div>
        </article>

        <article id="colors-brand" aria-labelledby="colors-brand-title" className="color-card">
          <div className="color-card__header">
            <h3 id="colors-brand-title">Brand scales</h3>
            <span>Palette</span>
          </div>
          <div className="color-card__body">
            <p className="color-description">Tints and shades of the brand palette. Lower numbers are lighter and higher numbers are darker; semantic roles reference these values.</p>
            {brandGroups.map((group) => (
              <div key={group.title} className="color-group">
                <h4>{group.title}</h4>
                <p className="color-description">{group.description}</p>
                <div className="color-grid">
                  {group.tokens.map((token) => (
                    <ColorSwatch key={token} name={token.split("-").at(-1)!} token={token} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article id="colors-semantic" aria-labelledby="colors-semantic-title" className="color-card">
          <div className="color-card__header">
            <h3 id="colors-semantic-title">Semantic colors</h3>
            <span>Usage</span>
          </div>
          <div className="color-card__body">
            <p className="color-description">Choose a token by its role rather than its appearance. Different roles may share a color while retaining separate meanings.</p>
            {semanticGroups.map((group) => (
              <div key={group.title} className="color-group">
                <h4>{group.title}</h4>
                <p className="color-description">{group.description}</p>
                <div className="color-grid">
                  {group.tokens.map((token) => (
                    <ColorSwatch key={token} name={token.replace(`--color-${group.title.toLowerCase().replaceAll(" ", "-")}-`, "").replaceAll("-", " ")} token={token} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
