import PrivacyPolicyContent from '../../components/privacyPolicy/privacyPolicyContent/PrivacyPolicyContent';
import PrivacyPolicyHero from '../../components/privacyPolicy/privacyPolicyHero/PrivacyPolicyHero';
import './PrivacyPolicy.scss';

const PrivacyPolicy = () => (
  <div className="privacy-policy-page">
    <PrivacyPolicyHero />
    <div className="privacy-policy-main">
      <div className="privacy-policy-main__container">
        <PrivacyPolicyContent />
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
