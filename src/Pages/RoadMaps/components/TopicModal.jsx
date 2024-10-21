const TopicModal = ({
  activeTopic,
  setActiveTopic,
  currentRoadmap,
  userLevel,
  selectedFrameworks,
  selectFramework,
  setActiveSubtopic,
}) => {
  const isFrameworkGroup = (topicName, level) =>
    topicName.endsWith('F') &&
    typeof currentRoadmap[level][topicName] === 'object' &&
    !Array.isArray(currentRoadmap[level][topicName])

  const getAvailableFrameworks = (topicName) =>
    Object.keys(currentRoadmap[userLevel][topicName])

  const isFramework = isFrameworkGroup(activeTopic, userLevel)
  const selectedFramework = selectedFrameworks[activeTopic]
  const displayData = isFramework
    ? currentRoadmap[userLevel][activeTopic][selectedFramework]
    : currentRoadmap[userLevel][activeTopic]

  if (isFramework && !selectedFramework) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4">Select Framework</h2>
          <div className="grid grid-cols-1 gap-4">
            {getAvailableFrameworks(activeTopic).map((framework) => (
              <button
                key={framework}
                onClick={() => selectFramework(activeTopic, framework)}
                className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 text-lg"
              >
                {framework}
              </button>
            ))}
          </div>
          <button
            onClick={() => setActiveTopic(null)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {activeTopic.toUpperCase()}
            {isFramework && ` - ${selectedFramework}`}
          </h2>
          {isFramework && (
            <button
              onClick={() => selectFramework(activeTopic, null)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Change Framework
            </button>
          )}
        </div>
        {Object.keys(displayData).map((subtopic) => (
          <button
            key={subtopic}
            onClick={() => setActiveSubtopic(subtopic)}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mb-2"
          >
            {subtopic.charAt(0).toUpperCase() + subtopic.slice(1)}
          </button>
        ))}
        <button
          onClick={() => setActiveTopic(null)}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default TopicModal
