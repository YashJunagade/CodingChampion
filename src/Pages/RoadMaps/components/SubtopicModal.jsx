import React from 'react'
import {
  X,
  Clock,
  BookOpen,
  CheckCircle,
  ExternalLink,
  AlertCircle,
} from 'lucide-react'

const ProgressBar = ({ progress, className = '' }) => (
  <div
    className={`relative h-2 bg-gray-200 rounded-full overflow-hidden ${className}`}
  >
    <div
      className="absolute left-0 top-0 h-full bg-accent transition-all duration-500 ease-out"
      style={{ width: `${progress}%` }}
    />
    <div className="absolute left-0 top-0 h-full w-full opacity-50 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
  </div>
)

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
    ? currentRoadmap[userLevel][activeTopic][selectedFramework][activeSubtopic][
        'topics'
      ]
    : currentRoadmap[userLevel][activeTopic][activeSubtopic]['topics']

  const calculateProgress = () => {
    const totalTopics = subtopicData.length
    if (totalTopics === 0) return 0

    if (!isFramework) {
      const topicProgress =
        userProgress[activeTopic]?.subtopics?.[activeSubtopic] || {}
      const completedTopics = subtopicData
        .map((topic) => topic.topic)
        .filter((topicName) => topicProgress[topicName]).length
      return Math.round((completedTopics / totalTopics) * 100)
    }

    const frameworkProgress =
      userProgress[activeTopic]?.frameworks?.[selectedFramework]?.[
        activeSubtopic
      ] || {}
    const completedTopics = subtopicData
      .map((topic) => topic.topic)
      .filter((topicName) => frameworkProgress[topicName]).length

    return Math.round((completedTopics / totalTopics) * 100)
  }

  const getSuggestedTime = () => {
    const data = isFramework
      ? currentRoadmap[userLevel][activeTopic][selectedFramework][
          activeSubtopic
        ]
      : currentRoadmap[userLevel][activeTopic][activeSubtopic]
    return data.suggestedTime || 0
  }

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-2xl w-full max-w-xs sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b relative bg-gradient-to-r from-accent/10 to-transparent">
          <button
            onClick={() => setActiveSubtopic(null)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 sm:h-7 sm:w-7 text-black font-bold" />
          </button>
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800 flex items-center gap-1 sm:gap-2 flex-wrap pr-8">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0" />
            <span className="truncate">{activeTopic.toUpperCase()}</span>
            {isFramework && (
              <span className="text-accent truncate">
                - {selectedFramework}
              </span>
            )}
            <span className="text-gray-400 mx-1">•</span>
            <span className="truncate">
              {activeSubtopic.charAt(0).toUpperCase() + activeSubtopic.slice(1)}
            </span>
          </h2>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Progress Section */}
          <div className="mb-4 sm:mb-6 bg-gray-50 p-3 sm:p-4 rounded-xl border">
            <div className="flex justify-between items-center mb-2 sm:mb-3 flex-wrap gap-2">
              <span className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                Overall Progress
              </span>
              <span className="bg-accent/10 text-accent px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                Estimated: {formatTime(suggestedTime)}
              </span>
            </div>
            <ProgressBar progress={progress} className="mb-2" />
            <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-600">
              <span className="font-medium">{progress}% Complete</span>
              <span>
                {getCompletedTopicsCount()} / {subtopicData.length} Topics
              </span>
            </div>
          </div>

          {/* Topics List */}
          <div className="space-y-3">
            {subtopicData.map((topic, index) => {
              const isCompleted = getTopicCheckedState(topic.topic)
              return (
                <div
                  key={index}
                  className={`group p-3 sm:p-4 border rounded-xl transition-all duration-200 ${
                    isCompleted
                      ? 'bg-gray-50 border-accent/20'
                      : 'hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-start space-x-2 sm:space-x-4">
                    <div className="pt-1">
                      <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={(e) =>
                          updateProgress(
                            activeTopic,
                            activeSubtopic,
                            topic.topic,
                            e.target.checked
                          )
                        }
                        className="h-4 w-4 sm:h-5 sm:w-5 rounded border-gray-300 text-accent focus:ring-accent"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="font-medium text-sm sm:text-base w-28 text-wrap sm:w-96 sm:text-wrap text-gray-800 group-hover:text-accent transition-colors truncate">
                          {topic.topic}
                        </h3>
                        <button
                          onClick={() => setActiveResource(topic)}
                          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-xs sm:text-sm font-medium shadow-lg shadow-accent/10"
                        >
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                          Resources
                        </button>
                      </div>
                      <div className="mt-1 sm:mt-2 flex items-center text-xs sm:text-sm text-gray-600">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {formatTime(topic.time)}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        {/* <div className="p-3 sm:p-4 border-t bg-gray-50">
          <button
            onClick={() => setActiveSubtopic(null)}
            className="w-full bg-accent text-white px-4 py-2 sm:py-3 rounded-lg hover:bg-accent/90 transition-colors font-medium text-sm sm:text-base"
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  )
}

const style = document.createElement('style')
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes shimmer {
    from { transform: translateX(-100%); }
    to { transform: translateX(100%); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
`
document.head.appendChild(style)

export default SubtopicModal
