import { AiFillLinkedin } from 'react-icons/ai';

const LinkedInBadge = () => {
  return (
    <a
      className="inline-flex flex-row gap-5 items-center border-2 border-blue-700/60 p-4 w-full justify-center rounded-lg"
      href="https://ca.linkedin.com/in/eraysahin06?trk=profile-badge"
    >
      <AiFillLinkedin className="text-2xl" /> Eray Sahin
    </a>
  );
};

export default LinkedInBadge;
