import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../components/Button";

export default function Home() {
  return (
    <main className="preview">
      <header>
        <h1>Vita Health component preview</h1>
        <p>A kitchen-sink for reviewing the design before rebuilding it in WordPress.</p>
      </header>

      <section aria-labelledby="buttons-title">
        <h2 id="buttons-title">Buttons</h2>
        <p>Hover, press, or use Tab to inspect each button’s states.</p>

        <h3>Variants</h3>
        <div className="button-examples">
          <Button>Primary Button</Button>
          <Button size="small">Small Button</Button>
        </div>
        <div className="button-examples">
          <Button variant="secondary">Small Secondary Button</Button>
          <Button size="small" variant="secondary">Small Secondary Button</Button>
        </div>
        <div className="button-examples">
          <Button variant="highlight">Highlight Button</Button>
          <Button size="small" variant="highlight">Small Highlight Button</Button>
        </div>

        <h3>With an icon</h3>
        <div className="button-examples">
          <Button iconLeft={<ChevronLeft />} iconRight={<ChevronRight />} >Primary Button</Button>
          <Button size="small" iconRight={<ChevronRight />} iconLeft={<ChevronLeft />} >Small Button</Button>
        </div>
        <div className="button-examples">
          <Button variant="secondary" iconLeft={<ChevronLeft />} iconRight={<ChevronRight />}>Small Secondary Button</Button>
          <Button size="small" variant="secondary" iconLeft={<ChevronLeft />} iconRight={<ChevronRight />}>Small Secondary Button</Button>
        </div>
        <div className="button-examples">
          <Button variant="highlight" iconLeft={<ChevronLeft />} iconRight={<ChevronRight />}>Highlight Button</Button>
          <Button size="small" variant="highlight" iconLeft={<ChevronLeft />} iconRight={<ChevronRight />}>Small Highlight Button</Button>
        </div>


        <h3>Disabled</h3>
        <div className="button-examples">
          <Button disabled>Primary Button</Button>
          <Button size="small" variant="secondary" disabled>Small Secondary Button</Button>
        </div>
      </section>
    </main>
  );
}
