import React, { useEffect, useRef, useState } from 'react';
import LogoIcon from './LogoIcon';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

const ResultVideo = ({ filename, transcriptionItems }) => {
  const videoUrl = 'https://eray-quickcap.s3.amazonaws.com/' + filename;
  const [loaded, setLoaded] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.src = videoUrl;
    load();
  }, [filename]);

  const load = async () => {
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd';
    const ffmpeg = ffmpegRef.current;
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        'application/wasm'
      ),
    });
    setLoaded(true);
  };

  const transcode = async () => {
    const ffmpeg = ffmpegRef.current;
    await ffmpeg.writeFile(filename, await fetchFile(videoUrl));
    ffmpeg.on('log', ({ message }) => {
      console.log(message);
    });
    await ffmpeg.exec(['-i', filename, 'output.mp4']);
    const data = await ffmpeg.readFile('output.mp4');
    videoRef.current.src = URL.createObjectURL(
      new Blob([data.buffer], { type: 'video/mp4' })
    );
  };

  return (
    <>
      <div className="mb-4">
        <button
          onClick={transcode}
          className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 cursor-pointer"
        >
          <LogoIcon />
          <span>Apply Captions</span>
        </button>
      </div>
      <div className="rounded-xl overflow-hidden">
        <video data-video={0} ref={videoRef} controls={true} />
      </div>
    </>
  );
};

export default ResultVideo;
