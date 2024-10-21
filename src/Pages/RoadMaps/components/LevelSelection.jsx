const LevelSelection = ({ onSelect, roadmap }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg max-w-md">
      <h2 className="text-2xl font-bold mb-4">Select Your Level</h2>
      {Object.keys(roadmap)
        .filter((key) => key !== 'name')
        .map((level) => (
          <button
            key={level}
            onClick={() => onSelect(level)}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-2"
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
    </div>
  </div>
)

export default LevelSelection
