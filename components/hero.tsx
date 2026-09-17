import { ChevronRight } from "lucide-react";
import Button from "../components/Button";

export default function Hero() {
  return (
    <div className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        preload="metadata"
      >
        <source src="/video/260915_Vita_Moods_Homepage.mp4" type="video/mp4" />
      </video>

      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="quote-xl hero__quote">
          Wir wollen das Leben der Menschen verbessern, in dem wir ihnen helfen, ihre <span className="quote__highlight">Gesundheit</span> besser zu verstehen.
        </h1>
        <div className="flex flex-wrap items-center hero__buttons">
          <button className="button button--highlight">Mehr über uns</button>           
          <Button
            variant="primary"
            iconRight={<ChevronRight size={16} />}
          >
            Alle Projekte ansehen
          </Button>          
        </div>
      </div>
    </div>
  );
}