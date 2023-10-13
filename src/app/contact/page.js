import LinkedInBadge from '@/components/LinkedInBadge';
import PageHeaders from '@/components/PageHeaders';
import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <PageHeaders h1Text="Contact" h2Text="" />
      <div className="bg-white text-slate-700 rounded-lg mx-auto max-w-xs p-4 text-center">
        <LinkedInBadge />
      </div>
    </div>
  );
};

export default ContactPage;
