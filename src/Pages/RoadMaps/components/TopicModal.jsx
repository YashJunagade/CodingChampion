import React from 'react'
import { ArrowRightIcon } from 'lucide-react'

const TopicModal = ({
  activeTopic,
  setActiveTopic,
  currentRoadmap,
  userLevel,
  selectedFrameworks,
  selectFramework,
  setActiveSubtopic,
  userProgress,
}) => {
  const isFramework = activeTopic?.endsWith('F')
  const selectedFramework = selectedFrameworks[activeTopic]

  // Calculate total progress for a subtopic
  const calculateSubtopicProgress = (subtopicName) => {
    // Early return if essential data is missing
    if (!currentRoadmap?.[userLevel]?.[activeTopic]) {
      return 0
    }

    let subtopicData
    try {
      if (isFramework && selectedFramework) {
        subtopicData =
          currentRoadmap[userLevel][activeTopic][selectedFramework]?.[
            subtopicName
          ]?.['topics']
      } else {
        subtopicData =
          currentRoadmap[userLevel][activeTopic][subtopicName]?.['topics']
      }
    } catch (error) {
      console.error('Error accessing subtopic data:', error)
      return 0
    }

    // If subtopicData is undefined or empty, return 0
    if (
      !subtopicData ||
      !Array.isArray(subtopicData) ||
      subtopicData.length === 0
    ) {
      return 0
    }

    const totalTopics = subtopicData.length

    if (!isFramework) {
      const completedTopics = subtopicData
        .map((topic) => topic?.topic)
        .filter(
          (topicName) =>
            topicName &&
            userProgress?.[activeTopic]?.[subtopicName]?.[topicName]
        ).length
      return Math.round((completedTopics / totalTopics) * 100)
    }

    // For framework-specific topics
    const completedTopics = subtopicData
      .map((topic) => topic?.topic)
      .filter(
        (topicName) =>
          topicName &&
          userProgress?.[activeTopic]?.frameworks?.[selectedFramework]?.[
            subtopicName
          ]?.[topicName]
      ).length
    return Math.round((completedTopics / totalTopics) * 100)
  }

  // Calculate overall topic progress and total suggested time
  const calculateOverallProgressAndTime = () => {
    if (!currentRoadmap?.[userLevel]?.[activeTopic]) {
      return { progress: 0, totalTime: 0 }
    }

    const topicData =
      isFramework && selectedFramework
        ? currentRoadmap[userLevel][activeTopic][selectedFramework]
        : currentRoadmap[userLevel][activeTopic]

    if (!topicData) {
      return { progress: 0, totalTime: 0 }
    }

    const subtopics = Object.keys(topicData).filter(
      (subtopic) =>
        subtopic !== 'description' &&
        subtopic !== 'frameworks' &&
        subtopic !== 'suggestedTime'
    )

    if (subtopics.length === 0) {
      return { progress: 0, totalTime: 0 }
    }

    let totalTime = 0
    const totalProgress = subtopics.reduce((sum, subtopic) => {
      const subtopicProgress = calculateSubtopicProgress(subtopic)
      totalTime += topicData[subtopic]?.suggestedTime || 0
      return sum + subtopicProgress
    }, 0)

    const overallProgress = Math.round(totalProgress / subtopics.length)
    return { progress: overallProgress, totalTime }
  }

  // Get frameworks if it's a framework topic
  const getFrameworks = () => {
    if (!isFramework || !currentRoadmap?.[userLevel]?.[activeTopic]) {
      return null
    }
    const frameworks = Object.keys(
      currentRoadmap[userLevel][activeTopic]
    ).filter((key) => key !== 'description')
    return frameworks.length > 0 ? frameworks : null
  }

  const frameworks = getFrameworks()
  const { progress: overallProgress, totalTime } =
    calculateOverallProgressAndTime()

  // Get subtopics based on whether it's a framework topic
  const getSubtopics = () => {
    if (!currentRoadmap?.[userLevel]?.[activeTopic]) {
      return []
    }

    if (isFramework && !selectedFramework) {
      return []
    }

    const topicData = isFramework
      ? currentRoadmap[userLevel][activeTopic][selectedFramework]
      : currentRoadmap[userLevel][activeTopic]

    if (!topicData) {
      return []
    }

    return Object.entries(topicData).filter(
      ([key]) =>
        key !== 'description' && key !== 'frameworks' && key !== 'suggestedTime'
    )
  }

  // Early return if essential props are missing
  if (!activeTopic || !currentRoadmap || !userLevel) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">
          {activeTopic.toUpperCase()}
          {isFramework && selectedFramework && ` - ${selectedFramework}`}
        </h2>

        {/* Framework Selection */}
        {frameworks && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Framework:</h3>
            <div className="flex gap-2">
              {frameworks.map(
                (framework) =>
                  framework !== 'description' && (
                    <button
                      key={framework}
                      onClick={() => selectFramework(activeTopic, framework)}
                      className={`px-4 py-2 rounded-lg ${
                        selectedFramework === framework
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      {framework}
                    </button>
                  )
              )}
            </div>
          </div>
        )}

        {/* Overall Progress */}
        {(isFramework ? selectedFramework : true) && (
          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">
                Overall Progress ({totalTime} minutes)
              </span>
              <span>{overallProgress}% Complete</span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Subtopics List */}
        {(isFramework ? selectedFramework : true) && (
          <div className="space-y-4">
            {getSubtopics().map(([subtopic, data]) => (
              <div
                key={subtopic}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() => setActiveSubtopic(subtopic)}
              >
                <div className="flex-1">
                  <h3 className="font-medium">
                    {subtopic.charAt(0).toUpperCase() + subtopic.slice(1)}
                  </h3>
                  <div className="mt-2">
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-300"
                        style={{
                          width: `${calculateSubtopicProgress(subtopic)}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm text-gray-600">
                        {calculateSubtopicProgress(subtopic)}% Complete
                      </span>
                      <span className="text-sm text-gray-600">
                        {data?.suggestedTime || 0} minutes
                      </span>
                    </div>
                  </div>
                </div>
                <ArrowRightIcon className="ml-4 h-5 w-5 text-gray-400" />
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setActiveTopic(null)}
          className="mt-6 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default TopicModal
