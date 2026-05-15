import ContactChannels from '../../components/contact/contactChannels/ContactChannels';
import ContactForm from '../../components/contact/contactForm/ContactForm';
import ContactHero from '../../components/contact/contactHero/ContactHero';
import './Contact.scss';

const Contact = () => (
  <div className="contact-page">
    <ContactHero />
    <ContactChannels />
    <ContactForm />
  </div>
);

export default Contact;
