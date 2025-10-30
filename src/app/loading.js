import Loader from "../components/Loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <Loader />
        <p className="mt-6 text-[#00e5ff] text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}

