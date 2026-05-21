/* eslint-disable react/prop-types */
import FaqAccordionItem from '../faqAccordionItem/FaqAccordionItem';
import './FaqSection.scss';

const FaqSection = ({
  category,
  items,
  openItemId,
  onToggleItem,
}) => (
  <section className="faq-section" aria-labelledby={`faq-category-${category.id}`}>
    <h2 id={`faq-category-${category.id}`} className="faq-section__title">
      {category.category}
    </h2>
    <div className="faq-section__accordion">
      {items.map((item, index) => {
        const itemKey = `${category.id}-${item.id}`;
        return (
          <FaqAccordionItem
            key={itemKey}
            itemId={itemKey}
            question={item.question}
            answer={item.answer}
            isOpen={openItemId === itemKey}
            onToggle={() => onToggleItem(itemKey)}
            isLast={index === items.length - 1}
          />
        );
      })}
    </div>
  </section>
);

export default FaqSection;
