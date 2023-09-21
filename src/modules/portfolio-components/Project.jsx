import { Link } from 'react-router-dom';

export default function Project() {

  return (
    <div className="flex justify-center items-center flex-col h-96 space-y-4">
      <h1 className="h-fit">Coming soon....</h1>

      <Link to="/portfolio" className="bg-slate-900  text-white py-2 px-4 rounded transition-transform transform hover:scale-105">Back to Portfolio</Link>

    </div>
  );
};


