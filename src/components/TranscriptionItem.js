import React from 'react';

const TranscriptionItem = ({ item }) => {
  if (!item) {
    return '';
  }

  return (
    <div key={item} className="my-1 grid grid-cols-3 gap-1 items-center">
      {' '}
      <div className="bg-white/20 p-1 rounded-md">{item.start_time}</div>
      <div className="bg-white/20 p-1 rounded-md">{item.end_time}</div>
      <div className="bg-white/20 p-1 rounded-md">{item.content}</div>
    </div>
  );
};

export default TranscriptionItem;
