import DemoSection from '@/components/DemoSection';
import LogoIcon from '@/components/LogoIcon';
import PageHeaders from '@/components/PageHeaders';
import UploadForm from '@/components/UploadForm';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>T-Criptify</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
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
