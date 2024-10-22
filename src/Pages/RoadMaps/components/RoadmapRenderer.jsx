import React from 'react'
import { motion } from 'framer-motion'
import RoadPath from './RoadPath'
import TopicButton from './TopicButton'
import UserIndicator from './UserIndicator'

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
    const margin = 20

    for (let i = 0; i < numTopics; i++) {
      const row = Math.floor(i / 2)
      const isEvenRow = row % 2 === 0
      const y =
        margin + row * ((100 - 2 * margin) / (Math.ceil(numTopics / 2) - 1))
      let x = isEvenRow
        ? i % 2 === 0
          ? margin
          : 100 - margin
        : i % 2 === 0
          ? 100 - margin
          : margin
      positions.push({ x, y, topic: topics[i] })
    }

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
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="relative w-full h-[600px] bg-white">
        <p className="ml-2 text-3xl">{currentRoadmap.name} Roadmap</p>
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
  )
}

export default RoadmapRenderer
