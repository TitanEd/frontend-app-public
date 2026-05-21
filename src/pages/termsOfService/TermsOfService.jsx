import TermsOfServiceContent from '../../components/termsOfService/termsOfServiceContent/TermsOfServiceContent';
import TermsOfServiceHero from '../../components/termsOfService/termsOfServiceHero/TermsOfServiceHero';
import './TermsOfService.scss';

const TermsOfService = () => (
  <div className="terms-of-service-page">
    <TermsOfServiceHero />
    <div className="terms-of-service-main">
      <div className="terms-of-service-main__container">
        <TermsOfServiceContent />
      </div>
    </div>
  </div>
);

export default TermsOfService;
