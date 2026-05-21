/* eslint-disable react/prop-types */
import { FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import faqData from '../../../data/faqs.json';
import messages from '../../../pages/faqs/messages';
import { publicRoutePath } from '../../../utils/publicPath';
import FaqSection from '../faqSection/FaqSection';
import './FaqsContent.scss';

const filterFaqGroups = (groups, query) => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return groups;
  }

  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) => item.question.toLowerCase().includes(normalizedQuery)
          || item.answer.toLowerCase().includes(normalizedQuery),
      ),
    }))
    .filter((group) => group.items.length > 0);
};

const FaqsContent = ({ query }) => {
  const { formatMessage } = useIntl();
  const [openItemId, setOpenItemId] = useState(null);

  const filteredGroups = useMemo(
    () => filterFaqGroups(faqData, query),
    [query],
  );

  /* One item open at a time; click again on the same item closes it */
  const handleToggleItem = (itemKey) => {
    setOpenItemId((currentlyOpen) => {
      if (currentlyOpen === itemKey) {
        return null;
      }
      return itemKey;
    });
  };

  useEffect(() => {
    if (!openItemId) {
      return;
    }
    const isOpenItemVisible = filteredGroups.some((group) => (
      group.items.some((item) => `${group.id}-${item.id}` === openItemId)
    ));
    if (!isOpenItemVisible) {
      setOpenItemId(null);
    }
  }, [filteredGroups, openItemId]);

  if (!filteredGroups.length) {
    return (
      <p className="faqs-content__empty">
        <FormattedMessage
          {...messages.emptyState}
          values={{
            query,
            contactLink: (
              <Link to={publicRoutePath('contact')} className="faqs-content__empty-link">
                {formatMessage(messages.emptyStateContactLink)}
              </Link>
            ),
          }}
        />
      </p>
    );
  }

  return (
    <div className="faqs-content__groups">
      {filteredGroups.map((group) => (
        <FaqSection
          key={group.id}
          category={group}
          items={group.items}
          openItemId={openItemId}
          onToggleItem={handleToggleItem}
        />
      ))}
    </div>
  );
};

export default FaqsContent;
