import DemoSection from '@/components/DemoSection';
import PageHeaders from '@/components/PageHeaders';
import UploadForm from '@/components/UploadForm';

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text="Extract Transcripts from Your Videos."
        h2Text="Upload Your Video and Retrieve the Transcript."
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <DemoSection />
    </>
  );
}
