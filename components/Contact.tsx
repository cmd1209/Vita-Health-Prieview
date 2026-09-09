import { ChevronRight } from "lucide-react";
import Button from "./Button";

export default function Contact() {
  return (
    <div className="contact__container">
        <div className="contact">
            <p className="contact__eyebrow">Kontakt</p>
            <div className="contact__row">
                <div className="contact__intro">
                    <h3 className="contact__title">
                        Projekt im Kopf?
                        <span>Lassen Sie uns sprechen.</span>
                    </h3>
                    <p className="contact__copy">
                    Erzählen Sie uns kurz, worum es geht - wir melden uns persönlich bei Ihnen.
                    </p>
                </div>

                <form className="contact__form">
                    <label className="contact__field">
                    <span>Name*</span>
                    <input name="name" type="text" required />
                    </label>
                    <label className="contact__field">
                    <span>E-Mail*</span>
                    <input name="email" type="email" required />
                    </label>
                    <label className="contact__field">
                    <span>Unternehmen</span>
                    <input name="company" type="text" />
                    </label>
                    <label className="contact__field contact__field--message">
                    <span>Nachricht*</span>
                    <textarea name="message" required />
                    </label>
                    <Button
                    type="submit"
                    variant="secondary"
                    size="default"
                    disabled
                    iconRight={<ChevronRight size={16} />}
                    >
                    Senden
                    </Button>
                </form>
            </div>
        </div>
        <div className="contact__bottom-box">
        </div>
    </div>
  );
}