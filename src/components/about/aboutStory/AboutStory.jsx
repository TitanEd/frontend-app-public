import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/about/messages';
import './AboutStory.scss';

const STORY_PARAGRAPHS = [
  messages.storyParagraph1,
  messages.storyParagraph2,
  messages.storyParagraph3,
];

const AboutStory = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="about-story" aria-labelledby="about-story-title">
      <div className="about-story__container">
        <h2 id="about-story-title" className="about-story__title">
          {formatMessage(messages.storyTitle)}
        </h2>
        <div className="about-story__body">
          {STORY_PARAGRAPHS.map((paragraphMessage) => (
            <p key={paragraphMessage.id} className="about-story__paragraph">
              {formatMessage(paragraphMessage)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
