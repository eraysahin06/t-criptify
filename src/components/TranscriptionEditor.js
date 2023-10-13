import React from 'react';
import TranscriptionItem from './TranscriptionItem';

const Transcript = ({ awsTranscriptionItems, setAwsTranscriptionItems }) => {
  function updateTranscriptionItem(index, prop, e) {
    const newAwsItems = [...awsTranscriptionItems];
    newAwsItems[index][prop] = e.target.value;
    setAwsTranscriptionItems(newAwsItems);
  }

  return (
    <>
      <div className="grid grid-cols-3 sticky top-0 bg-blue-900/80 p-2 rounded-md">
        <div>From</div>
        <div>To</div>
        <div>Word</div>
      </div>
      {awsTranscriptionItems.length > 0 && (
        <div className="h-48 sm:h-auto sm:overflow-auto overflow-y-scroll">
          {awsTranscriptionItems.map((item, key) => (
            <div key={key}>
              <TranscriptionItem
                item={item}
                handleStartTimeChange={(e) =>
                  updateTranscriptionItem(key, 'start_time', e)
                }
                handleEndTimeChange={(e) =>
                  updateTranscriptionItem(key, 'end_time', e)
                }
                handleContentChange={(e) =>
                  updateTranscriptionItem(key, 'content', e)
                }
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Transcript;
