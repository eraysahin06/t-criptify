import React from 'react';

const ResultVideo = ({ filename, transcriptionItems }) => {
  const sentences = transcriptionItems.map((item) => item.content).join(' ');

  return (
    <div className="mb-4 bg-blue-700/20 text-center p-2 rounded-lg">
      <div>{sentences}</div>
    </div>
  );
};

export default ResultVideo;
