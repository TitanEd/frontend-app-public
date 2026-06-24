import { useState } from 'react';

import ContactChannels from '../../components/contact/contactChannels/ContactChannels';
import ContactForm from '../../components/contact/contactForm/ContactForm';
import ContactHero from '../../components/contact/contactHero/ContactHero';
import ContactSuccess from '../../components/contact/contactSuccess/ContactSuccess';
import './Contact.scss';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleSuccess = (email) => {
    setSubmittedEmail(email);
    setSubmitted(true);
    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-page">
      <ContactHero />
      <ContactChannels />
      {submitted ? (
        <ContactSuccess email={submittedEmail} />
      ) : (
        <ContactForm onSuccess={handleSuccess} />
      )}
    </div>
  );
};

export default Contact;
