const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">✓</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Setup Complete
          </h1>
          <p className="text-gray-600 mb-6">
            Tailwind CSS is now properly configured with TypeScript.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105">
              Get Started
            </button>
            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-lg transition duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
