import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../../components/Button";

const variants = ["primary", "secondary", "highlight"] as const;

export default function Buttons() {
  return (
    <section id="buttons" aria-labelledby="buttons-title" className="scroll-mt-36">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="buttons-title" className="text-2xl font-semibold tracking-tight">Buttons</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">Three variants, two sizes, with optional icons.</p>
        </div>
        <p className="text-xs leading-relaxed text-zinc-500">Hover · Press · Tab to focus</p>
      </div>

      <div className="space-y-6">
        {variants.map((variant) => (
          <article id={`buttons-${variant}`} key={variant} aria-labelledby={`${variant}-title`} className="scroll-mt-36 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
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
  );
}
