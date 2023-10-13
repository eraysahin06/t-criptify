import PageHeaders from '@/components/PageHeaders';
import React from 'react';

const PricingPage = () => {
  return (
    <div>
      <PageHeaders h1Text="Pricing" h2Text="" />
      <div className="bg-white text-slate-700 rounded-lg mx-auto max-w-xs p-4 text-center">
        <h3 className="font-bold text-3xl">Free</h3>
      </div>
    </div>
  );
};

export default PricingPage;
