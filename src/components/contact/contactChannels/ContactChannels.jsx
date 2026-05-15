import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../../pages/contact/messages';
import ContactChannelCard from '../contactChannelCard/ContactChannelCard';
import './ContactChannels.scss';

const CHANNELS = [
  {
    id: 'email',
    icon: faEnvelope,
    titleMessage: messages.channelEmailTitle,
    valueMessage: messages.channelEmailValue,
    subMessage: messages.channelEmailSub,
  },
  {
    id: 'office',
    icon: faMapMarkerAlt,
    titleMessage: messages.channelOfficeTitle,
    valueMessage: messages.channelOfficeValue,
    subMessage: messages.channelOfficeSub,
  },
];

const ContactChannels = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="contact-channels" aria-label={formatMessage(messages.channelEmailTitle)}>
      <div className="contact-channels__container">
        <div className="contact-channels__grid">
          {CHANNELS.map((channel) => (
            <ContactChannelCard
              key={channel.id}
              icon={channel.icon}
              title={formatMessage(channel.titleMessage)}
              value={formatMessage(channel.valueMessage)}
              subtitle={formatMessage(channel.subMessage)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactChannels;
