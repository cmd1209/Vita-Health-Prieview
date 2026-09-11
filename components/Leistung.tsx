import {
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle,
  Megaphone,
  Mic,
  Share2,
  Video,
} from "lucide-react";
import type { ComponentType } from "react";

type LeistungIcon = ComponentType<{ size?: number; strokeWidth?: number }>;

const services: Array<{
  title: string;
  description: string;
  icon: LeistungIcon;
}> = [
  {
    title: "Video",
    description: "Video-Content für den Gesundheitsmarkt – von YouTube-Serien und Webinaren bis zu TikToks und TV-Spots.",
    icon: Video,
  },
  {
    title: "SEO",
    description: "Wissenschaftlich fundierte, verständliche und SEO-optimierte Inhalte für digitale Gesundheitskommunikation.",
    icon: CheckCircle,
  },
  {
    title: "Social Media",
    description: "Wir finden die passende Plattform, Sprache und Strategie, um Ihre Zielgruppen wirkungsvoll zu erreichen.",
    icon: Share2,
  },
  {
    title: "Kundenmagazin",
    description: "Wir entwickeln hochwertige Printformate und Layouts, die Gesundheitsinhalte verständlich und attraktiv vermitteln.",
    icon: BookOpen,
  },
  {
    title: "Event",
    description: "Von Informationsveranstaltungen bis Afterwork: Wir konzipieren und realisieren Gesundheitsevents mit relevanten Inhalten.",
    icon: CalendarDays,
  },
  {
    title: "Podcast",
    description: "Wir entwickeln und produzieren Gesundheits-Podcasts – als Interview, Erklärformat oder Reportage.",
    icon: Mic,
  },
  {
    title: "Kampagne",
    description: "Digital oder klassisch: Wir entwickeln Kampagnen, die Botschaften sichtbar machen und Menschen erreichen.",
    icon: Megaphone,
  },
  {
    title: "Strategie",
    description: "Wir entwickeln Kommunikationsstrategien, die Maßnahmen bündeln, schärfen und wirksamer machen.",
    icon: BarChart3,
  },
];

function LeistungCard({
  title,
  description,
  icon: Icon,
}: (typeof services)[number]) {
  return (
    <article className="leistung-card">
      <span className="leistung-card__icon" aria-hidden="true">
        <Icon size={24} strokeWidth={1.6} />
      </span>
      <div className="leistung-card__copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default function Leistung() {
  return (
    <section className="leistung" aria-labelledby="leistung-title">
      <div className="leistung__content">
        <h2 id="leistung-title">
          Content for better <span>Health</span>
        </h2>
        <p className="leistung__intro">Wir bieten Gesundheitskommunikation aus einer Hand:</p>
        <div className="leistung__grid">
          {services.map((service) => (
            <LeistungCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}