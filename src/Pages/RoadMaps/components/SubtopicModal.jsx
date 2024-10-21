const SubtopicModal = ({
  activeSubtopic,
  setActiveSubtopic,
  activeTopic,
  currentRoadmap,
  userLevel,
  selectedFrameworks,
  userProgress,
  updateProgress,
  setActiveResource,
}) => {
  const isFramework = activeTopic.endsWith('F')
  const selectedFramework = selectedFrameworks[activeTopic]
  const subtopicData = isFramework
    ? currentRoadmap[userLevel][activeTopic][selectedFramework][activeSubtopic]
    : currentRoadmap[userLevel][activeTopic][activeSubtopic]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">
          {`${activeTopic.toUpperCase()}${isFramework ? ` - ${selectedFramework}` : ''} - ${activeSubtopic.charAt(0).toUpperCase() + activeSubtopic.slice(1)}`}
        </h2>
        <div className="space-y-4">
          {subtopicData.map((topic, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={
                    userProgress[activeTopic]?.[activeSubtopic]?.[
                      topic.topic
                    ] || false
                  }
                  onChange={(e) =>
                    updateProgress(
                      activeTopic,
                      activeSubtopic,
                      topic.topic,
                      e.target.checked
                    )
                  }
                  className="mr-3"
                />
                <span className="font-medium">{topic.topic}</span>
              </div>
              <button
                onClick={() => setActiveResource(topic)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Resources
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => setActiveSubtopic(null)}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default SubtopicModal
