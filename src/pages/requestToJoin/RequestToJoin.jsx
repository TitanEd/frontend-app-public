import { useState } from 'react';

import RequestToJoinForm from '../../components/requestToJoin/requestToJoinForm/RequestToJoinForm';
import RequestToJoinHero from '../../components/requestToJoin/requestToJoinHero/RequestToJoinHero';
import RequestToJoinSuccess from '../../components/requestToJoin/requestToJoinSuccess/RequestToJoinSuccess';
import './RequestToJoin.scss';

const RequestToJoin = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleSuccess = (email) => {
    setSubmittedEmail(email);
    setSubmitted(true);
    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="request-to-join-page">
      <RequestToJoinHero />
      <div className="request-to-join-main">
        <div className="request-to-join-main__container">
          {submitted ? (
            <RequestToJoinSuccess email={submittedEmail} />
          ) : (
            <RequestToJoinForm onSuccess={handleSuccess} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestToJoin;
