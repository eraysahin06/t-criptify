import React from 'react';

const PageHeaders = ({ h1Text = 'hello', h2Text = 'subheader' }) => {
  return (
    <section className="text-center mt-24 mb-8">
      <h1 className="text-2xl">{h1Text}</h1>
      <h2 className="text-white/80">{h2Text}</h2>
    </section>
  );
};

export default PageHeaders;
