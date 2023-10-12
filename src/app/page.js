import DemoSection from '@/components/DemoSection';
import PageHeaders from '@/components/PageHeaders';
import UploadIcon from '@/components/UploadIcon';

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text="Add captions to your videos."
        h2Text="Upload your video, and see the result."
      />
      <div className="text-center">
        <button className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2">
          <UploadIcon />
          <span>Choose file</span>
        </button>
      </div>
      <DemoSection />
    </>
  );
}
