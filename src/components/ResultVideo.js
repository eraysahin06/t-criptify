import React from 'react';
import LogoIcon from './LogoIcon';

const ResultVideo = ({ filename }) => {
  return (
    <>
      <div className="mb-4">
        <button className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 cursor-pointer">
          <LogoIcon />
          <span>Apply Captions</span>
        </button>
      </div>
      <div className="rounded-xl overflow-hidden">
        <video
          controls="true"
          src={'https://eray-quickcap.s3.amazonaws.com/' + filename}
        />
      </div>
    </>
  );
};

export default ResultVideo;
