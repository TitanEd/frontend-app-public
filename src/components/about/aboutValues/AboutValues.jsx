import { faBullseye, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/about/messages';
import InfoCard from '../infoCard/InfoCard';
import './AboutValues.scss';

const VALUES = [
  {
    id: 'mission',
    icon: faBullseye,
    titleMessage: messages.valueMissionTitle,
    descriptionMessage: messages.valueMissionText,
  },
  {
    id: 'vision',
    icon: faEye,
    titleMessage: messages.valueVisionTitle,
    descriptionMessage: messages.valueVisionText,
  },
  {
    id: 'collaborative',
    icon: faHeart,
    titleMessage: messages.valueCollaborativeTitle,
    descriptionMessage: messages.valueCollaborativeText,
  },
];

const AboutValues = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="about-values" aria-label={formatMessage(messages.valueMissionTitle)}>
      <div className="about-values__container">
        <div className="about-values__grid">
          {VALUES.map((value) => (
            <InfoCard
              key={value.id}
              icon={value.icon}
              title={formatMessage(value.titleMessage)}
              description={formatMessage(value.descriptionMessage)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
