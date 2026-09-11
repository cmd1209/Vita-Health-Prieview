"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";

type Project = {
  title: string;
  description: string;
  image: string;
  overlay: string;
  action: "primary" | "highlight";
};

const projects: Project[] = [
  {
    title: "Nexxt level",
    description: "Tabusbrechen, informieren, empowern – wir bringen Frauengesundheit auf’s nächste Level.",
    image: "https://www.figma.com/api/mcp/asset/8b5c561c-3fa5-4a75-bd1f-361259d093f5.png",
    overlay: "linear-gradient(180deg, rgb(255 217 209 / 90%) 18.5%, rgb(255 140 115 / 90%) 88.8%)",
    action: "primary",
  },
  {
    title: "Social Media Apotheken Umschau",
    description: "Gesundheit neu gedacht: Die Apotheken Umschau wird zur starken Stimme auf Social Media.",
    image: "https://www.figma.com/api/mcp/asset/00fd1c04-f572-4abf-b0fd-6d43905c9941.png",
    overlay: "linear-gradient(180deg, rgb(213 199 255 / 90%) 18.5%, rgb(120 106 165 / 91%) 88.8%)",
    action: "primary",
  },
  {
    title: "VIACTIV Magazin",
    description: "Ein Kundenmagazin, das Gesundheitswissen inspirierend und markennah in Szene setzt.",
    image: "https://www.figma.com/api/mcp/asset/60381bc6-786b-49a6-b661-80d1ab1a0a1a.png",
    overlay: "linear-gradient(180deg, rgb(76 126 100 / 79%) 18.5%, rgb(76 126 100 / 91%) 88.8%)",
    action: "highlight",
  },
  {
    title: "Endometriose ist politisch!",
    description: "Das Nexxt Level Parlamentarische Frühstück.",
    image: "https://www.figma.com/api/mcp/asset/2a2b41d8-4daf-4d58-a548-34faff636558.png",
    overlay: "linear-gradient(180deg, rgb(213 199 255 / 80%) 18.5%, rgb(120 106 165 / 86%) 77%)",
    action: "primary",
  },
  {
    title: "Adipositas Info",
    description: "Ehrliche Gespräche und aktuelles Gesundheitswissen in der Apotheke",
    image: "https://www.figma.com/api/mcp/asset/0456a801-91dd-4934-b447-801ec16d1920.png",
    overlay: "linear-gradient(180deg, rgb(255 179 163 / 89%) 9%, rgb(168 92 76 / 93%) 88.5%)",
    action: "highlight",
  },
  {
    title: "AOK Jahreskampagne",
    description: "Eine Achtsamkeitskampagne, die mentale Gesundheit digital, lebensnah und ohne Klischees vermittelt",
    image: "https://www.figma.com/api/mcp/asset/4d74f7c7-9d1d-4980-b17c-c82bdf639912.png",
    overlay: "linear-gradient(180deg, rgb(137 170 153 / 87%) 18.5%, rgb(50 83 66 / 89%) 88.8%)",
    action: "highlight",
  },
];

function useVisibleProjects() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  useEffect(() => {
    const updateVisibleProjects = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setVisibleProjects(1);
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setVisibleProjects(2);
      } else {
        setVisibleProjects(3);
      }
    };

    updateVisibleProjects();
    window.addEventListener("resize", updateVisibleProjects);
    return () => window.removeEventListener("resize", updateVisibleProjects);
  }, []);

  return visibleProjects;
}

export default function ProjectSlider() {
  const visibleProjects = useVisibleProjects();
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = projects.length - visibleProjects;
  const effectiveIndex = Math.min(activeIndex, lastIndex);

  const move = (direction: number) => {
    setActiveIndex((currentIndex) => {
      const boundedIndex = Math.min(currentIndex, lastIndex);

      if (direction > 0) {
        return boundedIndex >= lastIndex
          ? 0
          : Math.min(boundedIndex + visibleProjects, lastIndex);
      }

      return boundedIndex <= 0
        ? lastIndex
        : Math.max(boundedIndex - visibleProjects, 0);
    });
  };

  return (
    <section className="project-slider" aria-labelledby="project-slider-title">
      <div className="project-slider__intro">
        <h2 id="project-slider-title">Projekte</h2>
        <p>Gesundheitskommunikation, die Menschen erreicht.</p>
      </div>
      <div className="project-slider__viewport">
        <div
          className="project-slider__track"
          style={{
            "--visible-projects": visibleProjects,
            transform: `translateX(-${effectiveIndex * (100 / projects.length)}%)`,
          } as React.CSSProperties}
        >
          {projects.map((project) => (
            <article className="project-slider__card" key={project.title}>
              <img src={project.image} alt="" />
              <div className="project-slider__overlay" style={{ backgroundImage: project.overlay }} />
              <div className="project-slider__copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Button variant={project.action} size="small" iconRight={<ChevronRight size={16} />}>
                  Projekt ansehen
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="project-slider__controls">
        <button type="button" onClick={() => move(-1)} aria-label="Vorheriges Projekt">
          <ChevronLeft size={24} />
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Nächstes Projekt">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}