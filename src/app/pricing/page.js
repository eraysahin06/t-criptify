import PageHeaders from '@/components/PageHeaders';
import React from 'react';

const PricingPage = () => {
  return (
    <div>
      <PageHeaders h1Text="Our pricing" h2Text="Free :)" />
      <div className="bg-white text-slate-700 rounded-lg mx-auto max-w-xs p-4 text-center">
        <h3 className="font-bold text-3xl">Free</h3>
        <h4>Up to 500 conversions</h4>
      </div>
    </div>
  );
};

export default PricingPage;
