import React from 'react'
import { RoadPath } from './RoadPath'
import { TopicButton } from './TopicButton'
import { UserIndicator } from './UserIndicator'

const RoadmapRenderer = ({
  currentRoadmap,
  userLevel,
  userPosition,
  setUserPosition,
  isAnimating,
  setIsAnimating,
  setActiveTopic,
  selectedFrameworks,
}) => {
  const getTopicPositions = (topics) => {
    const positions = []
    const numTopics = topics.length

    // change spacing here:
    const verticalSpacing = 500
    const totalHeight = numTopics * verticalSpacing

    topics.forEach((topic, i) => {
      // to change curve, change the percentages here:
      // Alternate between left (%) and right (%)
      const x = i % 2 === 0 ? 20 : 80
      // Distribute topics evenly

      const y = ((i * verticalSpacing) / totalHeight) * 100
      positions.push({ x, y: Math.max(5, y), topic: topics[i] })
    })

    return positions
  }

  const animateToPosition = async (targetPosition) => {
    if (isAnimating) return
    setIsAnimating(true)

    const currentPos = userPosition
    const direction = targetPosition > currentPos ? 1 : -1
    let pos = currentPos

    while (pos !== targetPosition) {
      pos += direction
      setUserPosition(pos)
      await new Promise((resolve) => setTimeout(resolve, 500))
    }

    setIsAnimating(false)
  }

  const topics = Object.keys(currentRoadmap[userLevel])
  const topicPositions = getTopicPositions(topics)
  const userPos = topicPositions[userPosition]

  return (
    <div className="w-full md:mt-10 p-8 bg-white dark:bg-black min-h-screen">
      <div className="w-full md:w-[80%] lg:w-[60%]  p-4 md:p-8 relative mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-black dark:text-white text-center">
          {currentRoadmap.name} Roadmap
        </h1>
        <div className="relative w-full " style={{ minHeight: '1500px' }}>
          <RoadPath positions={topicPositions} />
          {topicPositions.map((point, index) => (
            <TopicButton
              key={index}
              point={point}
              index={index}
              isAnimating={isAnimating}
              selectedFrameworks={selectedFrameworks}
              onSelect={() => {
                setActiveTopic(point.topic)
                animateToPosition(index)
              }}
            />
          ))}
          <UserIndicator position={userPos} />
        </div>
      </div>
    </div>
  )
}

export default RoadmapRenderer
