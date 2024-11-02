import React from 'react'
import {
  ArrowRight,
  X,
  BookOpen,
  Clock,
  Trophy,
  ChevronRight,
  Star,
  Check,
  Zap,
  Edit2,
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

const FrameworkCard = ({
  framework,
  isSelected,
  isRecommended,
  onClick,
  isCompact = false,
}) => (
  <button
    onClick={onClick}
    className={`group relative min-w-0 transition-all duration-300 
    ${isCompact ? 'p-2 rounded-lg shrink-0' : 'w-full p-4 rounded-xl'}
    ${
      isSelected
        ? 'bg-accent text-white shadow-lg shadow-accent/25 scale-105 hover:scale-105'
        : 'bg-white border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 hover:scale-102'
    }`}
  >
    {isRecommended && !isCompact && (
      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1 animate-bounce">
        <Star className="h-3 w-3" />
        Recommended
      </div>
    )}

    <div className={`flex items-center ${isCompact ? 'gap-2' : 'gap-3'}`}>
      <div
        className={`${isCompact ? 'p-1' : 'p-2'} rounded-lg ${isSelected ? 'bg-white/20' : 'bg-accent/10'}`}
      >
        {isSelected ? (
          <Check
            className={`${isCompact ? 'h-4 w-4' : 'h-5 w-5'} ${isSelected ? 'text-white' : 'text-accent'}`}
          />
        ) : (
          <Zap
            className={`${isCompact ? 'h-4 w-4' : 'h-5 w-5'} ${isSelected ? 'text-white' : 'text-accent'}`}
          />
        )}
      </div>
      <div className="text-left min-w-0">
        <div
          className={`font-semibold truncate ${isCompact ? 'text-sm' : ''} ${isSelected ? 'text-white' : 'text-gray-800'}`}
        >
          {framework}
        </div>
        {!isCompact && (
          <div
            className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-500'}`}
          >
            {isRecommended ? 'Most popular choice' : 'Alternative option'}
          </div>
        )}
      </div>
    </div>
  </button>
)

const CompactFrameworkSelector = ({
  frameworks,
  selectedFramework,
  selectFramework,
  activeTopic,
  setIsEditing,
}) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 p-2 bg-gray-50 rounded-lg">
    <div className="flex-none">
      <span className="text-sm font-medium text-gray-600">Framework:</span>
    </div>
    <div className="flex-1 flex items-center gap-2">
      <div className="flex-1 flex gap-2 overflow-x-auto scrollbar-hide pb-2 sm:pb-0">
        {frameworks.map(
          (framework, index) =>
            framework !== 'description' && (
              <FrameworkCard
                key={framework}
                framework={framework}
                isSelected={selectedFramework === framework}
                isRecommended={index === 0}
                onClick={() => selectFramework(activeTopic, framework)}
                isCompact={true}
              />
            )
        )}
      </div>
      <button
        onClick={() => setIsEditing(true)}
        className="p-1.5 hover:bg-gray-200 rounded-md transition-colors flex-none"
        aria-label="Edit framework selection"
      >
        <Edit2 className="h-4 w-4 text-gray-500" />
      </button>
    </div>
  </div>
)

const TopicModal = ({
  activeTopic,
  setActiveTopic,
  currentRoadmap,
  userLevel,
  selectedFrameworks,
  selectFramework,
  setActiveSubtopic,
  userProgress,
  isFramework,
}) => {
  const [isEditing, setIsEditing] = React.useState(
    !selectedFrameworks[activeTopic]
  )
  const selectedFramework = selectedFrameworks[activeTopic]

  const calculateOverallProgressAndTime = () => {
    if (!currentRoadmap?.[userLevel]?.[activeTopic]) {
      return { progress: 0, totalTime: 0 }
    }

    const topicData = isFramework
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

  const calculateSubtopicProgress = (subtopicName) => {
    if (!currentRoadmap?.[userLevel]?.[activeTopic]) {
      return 0
    }

    let subtopicData
    try {
      if (isFramework && selectedFramework) {
        subtopicData =
          currentRoadmap[userLevel][activeTopic][selectedFramework]?.[
            subtopicName
          ]?.topics
      } else {
        subtopicData =
          currentRoadmap[userLevel][activeTopic][subtopicName]?.topics
      }
    } catch (error) {
      console.error('Error accessing subtopic data:', error)
      return 0
    }

    if (
      !subtopicData ||
      !Array.isArray(subtopicData) ||
      subtopicData.length === 0
    ) {
      return 0
    }

    const totalTopics = subtopicData.length
    const completedTopics = subtopicData.filter((topic) =>
      isFramework
        ? userProgress?.[activeTopic]?.frameworks?.[selectedFramework]?.[
            subtopicName
          ]?.[topic.topic]
        : userProgress?.[activeTopic]?.subtopics?.[subtopicName]?.[topic.topic]
    ).length

    return Math.round((completedTopics / totalTopics) * 100)
  }

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

  if (!activeTopic || !currentRoadmap || !userLevel) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn p-2 sm:p-6 md:p-8">
      <div className="bg-white rounded-2xl w-full max-w-xs sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-3 sm:p-6 border-b relative bg-gradient-to-r from-accent/10 to-transparent">
          <button
            onClick={() => setActiveTopic(null)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 sm:h-7 sm:w-7 text-black font-bold" />
          </button>
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800 flex items-center gap-2 pr-8">
            <BookOpen className="h-4 w-4 sm:h-6 sm:w-6 text-accent shrink-0" />
            <span className="truncate">
              {!isFramework && activeTopic.toUpperCase()}
              {isFramework && activeTopic.toUpperCase().slice(0, -1)}
            </span>
            {isFramework && selectedFramework && (
              <>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 shrink-0" />
                <span className="text-accent truncate">
                  {selectedFramework}
                </span>
              </>
            )}
          </h2>
        </div>

        <div className="p-3 sm:p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Framework Selection */}
          {frameworks && (
            <>
              {isEditing ? (
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                    <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    Choose Your Framework
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {frameworks.map(
                      (framework, index) =>
                        framework !== 'description' && (
                          <FrameworkCard
                            key={framework}
                            framework={framework}
                            isSelected={selectedFramework === framework}
                            isRecommended={index === 0}
                            onClick={() => {
                              selectFramework(activeTopic, framework)
                              setIsEditing(false)
                            }}
                          />
                        )
                    )}
                  </div>
                </div>
              ) : (
                <CompactFrameworkSelector
                  frameworks={frameworks}
                  selectedFramework={selectedFramework}
                  selectFramework={selectFramework}
                  activeTopic={activeTopic}
                  setIsEditing={setIsEditing}
                />
              )}
            </>
          )}

          {/* Overall Progress */}
          {(isFramework ? selectedFramework : true) && (
            <div className="mb-4 sm:mb-6 bg-gray-50 p-3 sm:p-4 rounded-xl border">
              <div className="flex justify-between items-center mb-2 sm:mb-3 flex-wrap gap-2">
                <span className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  Overall Progress
                </span>
                <span className="bg-accent/10 text-accent px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                  {totalTime} minutes
                </span>
              </div>
              <ProgressBar progress={overallProgress} className="mb-2" />
              <div className="text-right text-xs sm:text-sm font-medium text-gray-600">
                {overallProgress}% Complete
              </div>
            </div>
          )}

          {/* Subtopics List */}
          {(isFramework ? selectedFramework : true) && (
            <div className="space-y-3">
              {getSubtopics().map(([subtopic, data]) => (
                <div
                  key={subtopic}
                  onClick={() => setActiveSubtopic(subtopic)}
                  className="group p-3 sm:p-4 border rounded-xl cursor-pointer transition-all duration-200 hover:border-accent hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3 className="font-medium text-sm sm:text-base text-gray-800 group-hover:text-accent transition-colors truncate pr-4">
                      {subtopic.charAt(0).toUpperCase() + subtopic.slice(1)}
                    </h3>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-accent transition-colors shrink-0" />
                  </div>
                  <ProgressBar progress={calculateSubtopicProgress(subtopic)} />
                  <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-600">
                    <span>{calculateSubtopicProgress(subtopic)}% Complete</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      {data?.suggestedTime || 0} minutes
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Add these keyframes to your global CSS
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

  .animate-bounce {
    animation: bounce 1s infinite;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(-10%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  .scale-102 {
    transform: scale(1.02);
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`
document.head.appendChild(style)

export default TopicModal
