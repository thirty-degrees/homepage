export default function Projects() {
  return (
    <div className="flex flex-col space-y-4 bg-blue-400 w-full h-full p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Our Projects</h2>
      <div className="w-full h-16 bg-white rounded p-4 flex items-center space-x-4">
        <div className="w-16 h-16 bg-red-500 rounded flex-shrink-0"></div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black">Project Alpha</h3>
          <p className="text-sm text-gray-600">
            A revolutionary software solution
          </p>
        </div>
      </div>
      <div className="w-full h-16 bg-white rounded p-4 flex items-center space-x-4">
        <div className="w-16 h-16 bg-green-500 rounded flex-shrink-0"></div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black">Project Beta</h3>
          <p className="text-sm text-gray-600">An innovative web application</p>
        </div>
      </div>
      <div className="w-full h-16 bg-white rounded p-4 flex items-center space-x-4">
        <div className="w-16 h-16 bg-purple-500 rounded flex-shrink-0"></div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black">Project Gamma</h3>
          <p className="text-sm text-gray-600">A cutting-edge mobile app</p>
        </div>
      </div>
    </div>
  );
}
