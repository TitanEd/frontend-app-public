import { useState } from 'react';

import FaqsContent from '../../components/faqs/faqsContent/FaqsContent';
import FaqsHero from '../../components/faqs/faqsHero/FaqsHero';
import './Faqs.scss';

const Faqs = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="faqs-page">
      <FaqsHero query={query} onQueryChange={setQuery} />
      <div className="faqs-main">
        <div className="faqs-main__container">
          <FaqsContent query={query} />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
