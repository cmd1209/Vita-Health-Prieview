const partners = [
  { name: "Hello Health", src: "/partner/hello.png" },
  { name: "Fresenius Kabi", src: "/partner/kabi.png" },
  { name: "Apotheken Umschau", src: "/partner/umschau.png" },
  { name: "VIACTIV", src: "/partner/viactiv.png" },
  { name: "Siemens", src: "/partner/siemens.png" },
  { name: "Korian", src: "/partner/korian.png" },
  { name: "gesund.de", src: "/partner/gesund.de.png" },
];

function PartnerSet({ labelled }: { labelled: boolean }) {
  return (
    <div className="partner-logos__set" aria-hidden={!labelled}>
      {partners.map((partner) => (
        <div className="partner-logos__item" key={partner.name}>
          <img src={partner.src} alt={labelled ? partner.name : ""} />
        </div>
      ))}
    </div>
  );
}

export default function PartnerLogos() {
  return (
    <section className="partner-logos" aria-labelledby="partner-logos-title">
      <h2 id="partner-logos-title">Kunden</h2>
      <div className="partner-logos__viewport">
        <div className="partner-logos__track">
          <PartnerSet labelled />
          <PartnerSet labelled={false} />
        </div>
      </div>
    </section>
  );
}