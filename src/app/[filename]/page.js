'use client';
import LogoIcon from '@/components/LogoIcon';
import ResultVideo from '@/components/ResultVideo';
import TranscriptionItem from '@/components/TranscriptionItem';
import { clearTranscriptionItems } from '@/libs/awsTranscriptionHelpers';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FilePage = ({ params }) => {
  const filename = params.filename;
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([]);
  const [isFetchingInfo, setIsFetchingInfo] = useState(false);

  useEffect(() => {
    getTranscription();
  }, [filename]);

  function getTranscription() {
    setIsFetchingInfo(true);
    axios.get('/api/transcribe?filename=' + filename).then((response) => {
      setIsFetchingInfo(false);
      const status = response.data?.status;
      const transcription = response.data?.transcription;
      if (status === 'IN_PROGRESS') {
        setIsTranscribing(true);
        setTimeout(getTranscription, 3000);
      } else {
        setIsTranscribing(false);

        setAwsTranscriptionItems(
          clearTranscriptionItems(transcription.results.items)
        );
      }
    });
  }

  function updateTranscriptionItem(index, prop, newValue) {}

  if (isTranscribing) {
    return <div>Transcribing your video...</div>;
  }

  if (isFetchingInfo) {
    return <div>Fetching information...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl mb-4 text-white/60">Transcription</h2>
          <div className="grid grid-cols-3 sticky top-0 bg-violet-800/80 p-2 rounded-md">
            <div>From</div>
            <div>To</div>
            <div>Word</div>
          </div>
          {awsTranscriptionItems.length > 0 && (
            <div>
              {awsTranscriptionItems.map((item, key) => (
                <div key={key}>
                  <TranscriptionItem
                    item={item}
                    handleStartTimeChange={(e) => {
                      const newAwsItems = [...awsTranscriptionItems];
                      newAwsItems[key].start_time = e.target.value;
                      setAwsTranscriptionItems(newAwsItems);
                    }}
                    handleEndTimeChange={() => {}}
                    handleContentChange={() => {}}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {' '}
          <h2 className="text-2xl mb-4 text-white/60">Result</h2>
          <ResultVideo filename={filename} />
        </div>
      </div>
    </div>
  );
};

export default FilePage;
