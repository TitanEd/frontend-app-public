/* eslint-disable react/prop-types */
import { faBook, faBookOpen, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/home/messages';
import FeatureCard from '../featureCard/FeatureCard';
import SectionBadge from '../sectionBadge/SectionBadge';
import './HomeAbout.scss';

const FEATURES = [
  {
    id: 'courses',
    icon: faBookOpen,
    titleMessage: messages.featureCoursesTitle,
    descriptionMessage: messages.featureCoursesDescription,
  },
  {
    id: 'community',
    icon: faUsers,
    titleMessage: messages.featureCommunityTitle,
    descriptionMessage: messages.featureCommunityDescription,
  },
  {
    id: 'library',
    icon: faBook,
    titleMessage: messages.featureLibraryTitle,
    descriptionMessage: messages.featureLibraryDescription,
  },
];

const HomeAbout = () => {
  const { formatMessage } = useIntl();

  return (
    <section id="about" className="home-about">
      <div className="home-about__container">
        <div className="home-about__intro">
          <SectionBadge variant="primary">
            {formatMessage(messages.aboutBadge)}
          </SectionBadge>
          <p className="home-about__description">
            {formatMessage(messages.aboutDescription)}
          </p>
        </div>

        <div className="home-about__features">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={formatMessage(feature.titleMessage)}
              description={formatMessage(feature.descriptionMessage)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
