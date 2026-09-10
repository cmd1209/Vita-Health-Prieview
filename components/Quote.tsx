export default function Quote() {
  return (
    <blockquote className="quote-section">
      <img className="quote-section__mark" src="/V.svg" alt="" />
      <div className="quote-section__content">
        <div className="quote-section__copy">
          <p className="quote-section__text">
            „Gesundheitsinformationen müssen <span>korrekt</span> und <span>vertrauenswürdig</span> sein – und die <span>Menschen</span> dort <span>erreichen,</span> wo sie stehen. Nur dann können sie etwas <span>bewegen.“</span>
          </p>
          <footer className="quote-section__signature">
            <p>Dr. Nicole Lauscher</p>
            <p>Geschäftsführerin</p>
          </footer>
        </div>
      </div>
    </blockquote>
  );
}