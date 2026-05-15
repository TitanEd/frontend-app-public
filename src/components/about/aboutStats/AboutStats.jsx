import { faAward, faGlobe, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/about/messages';
import StatBlock from '../statBlock/StatBlock';
import './AboutStats.scss';

const STATS = [
  {
    id: 'trained',
    icon: faUsers,
    valueMessage: messages.statTrainedValue,
    labelMessage: messages.statTrainedLabel,
  },
  {
    id: 'countries',
    icon: faGlobe,
    valueMessage: messages.statCountriesValue,
    labelMessage: messages.statCountriesLabel,
  },
  {
    id: 'courses',
    icon: faAward,
    valueMessage: messages.statCoursesValue,
    labelMessage: messages.statCoursesLabel,
  },
];

const AboutStats = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="about-stats" aria-label={formatMessage(messages.statTrainedLabel)}>
      <div className="about-stats__container">
        <div className="about-stats__grid">
          {STATS.map((stat) => (
            <StatBlock
              key={stat.id}
              icon={stat.icon}
              value={formatMessage(stat.valueMessage)}
              label={formatMessage(stat.labelMessage)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
