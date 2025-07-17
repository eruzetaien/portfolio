interface LoadingScreenProps {
  progress: number; // value between 0 and 100
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <span className="text-2xl font-bold animate-pulse mb-2">Loading... {progress}%</span>
      <div className="w-1/3 h-4 bg-gray-700 rounded-sm overflow-hidden">
        <div
          className="h-full bg-[var(--yellow)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
