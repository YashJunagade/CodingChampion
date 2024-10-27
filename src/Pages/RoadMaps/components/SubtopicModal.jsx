import React from 'react'
import { X } from 'lucide-react'

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
  const notFramework = !activeTopic.endsWith('F')
  const selectedFramework = selectedFrameworks[activeTopic]
  const subtopicData = isFramework
    ? currentRoadmap[userLevel][activeTopic][selectedFramework][activeSubtopic][
        'topics'
      ]
    : currentRoadmap[userLevel][activeTopic][activeSubtopic]['topics']

  // Calculate progress for the current subtopic considering the framework
  const calculateProgress = () => {
    const totalTopics = subtopicData.length
    if (totalTopics === 0) return 0

    if (!isFramework) {
      // For non-framework topics, use the old logic
      const topicProgress =
        userProgress[activeTopic]?.subtopics?.[activeSubtopic] || {}
      const completedTopics = subtopicData
        .map((topic) => topic.topic)
        .filter((topicName) => topicProgress[topicName]).length
      return Math.round((completedTopics / totalTopics) * 100)
    }

    // For framework-specific topics
    const frameworkProgress =
      userProgress[activeTopic]?.frameworks?.[selectedFramework]?.[
        activeSubtopic
      ] || {}
    const completedTopics = subtopicData
      .map((topic) => topic.topic)
      .filter((topicName) => frameworkProgress[topicName]).length

    return Math.round((completedTopics / totalTopics) * 100)
  }

  // Get suggested time for current subtopic
  const getSuggestedTime = () => {
    const data = isFramework
      ? currentRoadmap[userLevel][activeTopic][selectedFramework][
          activeSubtopic
        ]
      : currentRoadmap[userLevel][activeTopic][activeSubtopic]
    return data.suggestedTime || 0
  }

  // Format time from minutes to hours and minutes
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  // Get the checked state for a topic
  const getTopicCheckedState = (topicName) => {
    if (!isFramework) {
      return Boolean(
        userProgress[activeTopic]?.subtopics?.[activeSubtopic]?.[topicName]
      )
    }
    return Boolean(
      userProgress[activeTopic]?.frameworks?.[selectedFramework]?.[
        activeSubtopic
      ]?.[topicName]
    )
  }

  // Get completed topics count
  const getCompletedTopicsCount = () => {
    if (!isFramework) {
      return subtopicData
        .map((topic) => topic.topic)
        .filter(
          (topicName) =>
            userProgress[activeTopic]?.subtopics?.[activeSubtopic]?.[topicName]
        ).length
    }

    return subtopicData
      .map((topic) => topic.topic)
      .filter(
        (topicName) =>
          userProgress[activeTopic]?.frameworks?.[selectedFramework]?.[
            activeSubtopic
          ]?.[topicName]
      ).length
  }

  const progress = calculateProgress()
  const suggestedTime = getSuggestedTime()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={() => setActiveSubtopic(null)}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="h-6 w-6 text-black" />
        </button>

        <h2 className="text-2xl font-bold mb-4 pr-8">
          {`${activeTopic.toUpperCase()}${isFramework ? ` - ${selectedFramework}` : ''} - ${
            activeSubtopic.charAt(0).toUpperCase() + activeSubtopic.slice(1)
          }`}
        </h2>

        {/* Progress Section */}
        <div className="mb-6 p-4 rounded-lg border">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Overall Progress</span>
            <span className="text-sm text-gray-600">
              Suggested Time: {formatTime(suggestedTime)}
            </span>
          </div>
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-accent transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-sm text-gray-600">{progress}% Complete</span>
            <span className="text-sm text-gray-600">
              {getCompletedTopicsCount()} / {subtopicData.length} Topics
            </span>
          </div>
        </div>

        {/* Topics List */}
        <div className="space-y-4">
          {subtopicData.map((topic, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg hover:border-accent"
            >
              <div className="flex items-center flex-1">
                <input
                  type="checkbox"
                  checked={getTopicCheckedState(topic.topic)}
                  onChange={(e) =>
                    updateProgress(
                      activeTopic,
                      activeSubtopic,
                      topic.topic,
                      e.target.checked
                    )
                  }
                  className="mr-3 h-5 w-5 rounder"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{topic.topic}</span>
                  <span className="text-sm text-gray-600">
                    Estimated time: {formatTime(topic.time)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActiveResource(topic)}
                className="ml-4  px-4 py-2 bg-accent text-sm md:text-base text-white rounded hover:bg-red-600 transition-colors"
              >
                View Resources
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => setActiveSubtopic(null)}
          className="mt-6 w-full bg-accent text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default SubtopicModal
