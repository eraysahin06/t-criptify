import React from 'react';
import LogoIcon from './LogoIcon';
import Image from 'next/image';
import Demo from '../assets/tcriptify-video.png';
import Example from '../assets/tcriptify-example.jpg';
import UploadIcon from './UploadIcon';

const DemoSection = () => {
  return (
    <section className="flex mt-12 justify-around items-center">
      <div className="bg-gray-800/50 w-[300px] h-[280px] rounded-xl flex flex-col items-center justify-center p-4">
        <h2 className="text-sm text-center sm:text-2xl text-white/70 mb-2 inline-flex gap-1 items-center">
          <UploadIcon />
          <span>Upload a video</span>
        </h2>
        <div>
          <Image
            className="border-2 border-red-500 rounded-lg"
            src={Demo}
            alt={'T-criptify Demo Video Thumbnail'}
          />
        </div>
      </div>
      <div>
        <span>
          <LogoIcon />
        </span>
      </div>
      <div className="bg-gray-800/50 w-[300px] h-[280px] rounded-xl flex flex-col items-center justify-center p-4">
        <h2 className="text-sm text-center sm:text-2xl text-white/70 mb-2 inline-flex gap-1 items-center">
          <LogoIcon />
          <span>Get Full Transcript</span>
        </h2>
        <Image
          className="rounded-lg"
          src={Example}
          alt={'T-criptify Transcript'}
        />
      </div>
    </section>
  );
};

export default DemoSection;
