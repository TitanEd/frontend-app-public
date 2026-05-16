import { AppProvider } from '@edx/frontend-platform/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

import { ToastProvider } from './components/toast/ToastContext';
import PublicLayout from './layout/PublicLayout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Faqs from './pages/faqs/Faqs';
import Home from './pages/home/Home';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import RequestToJoin from './pages/requestToJoin/RequestToJoin';
import TermsOfService from './pages/termsOfService/TermsOfService';

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <AppProvider wrapWithRouter={false}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <Routes>
            <Route path="/public" element={<PublicLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="request-to-join" element={<RequestToJoin />} />
              <Route path="faqs" element={<Faqs />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
            </Route>
            <Route path="*" element={<Navigate to="/public" replace />} />
          </Routes>
        </ToastProvider>
      </QueryClientProvider>
    </AppProvider>
  </BrowserRouter>
);

export default App;
