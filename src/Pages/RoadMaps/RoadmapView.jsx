import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db, auth } from '../../config/firebase'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { roadmapData } from './RoadmapData'
import { motion } from 'framer-motion'

const RoadmapView = () => {
  const { roadmapName } = useParams()
  const [user, setUser] = useState(null)
  const [userLevel, setUserLevel] = useState(null)
  const [activeTopic, setActiveTopic] = useState(null)
  const [activeSubtopic, setActiveSubtopic] = useState(null)
  const [activeResource, setActiveResource] = useState(null)
  const [userProgress, setUserProgress] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [userPosition, setUserPosition] = useState(0)
  const [animatingPosition, setAnimatingPosition] = useState(0) // required. dont delete.
  const [isAnimating, setIsAnimating] = useState(false)

  const currentRoadmap = roadmapData.find(
    (roadmap) => roadmap.name === roadmapName
  )

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        fetchUserData(user.uid)
      } else {
        setUser(null)
        setUserLevel(null)
        setUserProgress({})
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [roadmapName])

  const fetchUserData = async (userId) => {
    setLoading(true)
    setError(null)
    try {
      const userDoc = await getDoc(doc(db, 'RoadmapProgress', userId))
      if (userDoc.exists()) {
        const data = userDoc.data()
        if (data[roadmapName]?.level) {
          setUserLevel(data[roadmapName].level)
          localStorage.setItem(
            `userLevel_${roadmapName}`,
            data[roadmapName].level
          )
        }
        setUserProgress(data[roadmapName]?.progress || {})
      } else {
        const storedLevel = localStorage.getItem(`userLevel_${roadmapName}`)
        if (storedLevel) {
          setUserLevel(storedLevel)
        }
      }
    } catch (err) {
      console.error('Error fetching user data:', err)
      setError('Failed to fetch user data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const selectLevel = async (level) => {
    if (!user) return

    setLoading(true)
    setError(null)
    try {
      await setDoc(
        doc(db, 'RoadmapProgress', user.uid),
        {
          [roadmapName]: {
            level,
            progress: {},
          },
        },
        { merge: true }
      )
      setUserLevel(level)
      localStorage.setItem(`userLevel_${roadmapName}`, level)
    } catch (err) {
      console.error('Error saving level:', err)
      setError('Failed to save level. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const updateProgress = async (topic, subtopic, topicName, checked) => {
    if (!user) return

    setUserProgress((prev) => ({
      ...prev,
      [topic]: {
        ...prev[topic],
        [subtopic]: {
          ...prev[topic]?.[subtopic],
          [topicName]: checked,
        },
      },
    }))

    try {
      const userDocRef = doc(db, 'RoadmapProgress', user.uid)
      await updateDoc(userDocRef, {
        [`${roadmapName}.progress.${topic}.${subtopic}.${topicName}`]: checked,
      })
    } catch (err) {
      console.error('Error updating progress:', err)
      setError('Failed to update progress. Please try again.')
      setUserProgress((prev) => ({
        ...prev,
        [topic]: {
          ...prev[topic],
          [subtopic]: {
            ...prev[topic]?.[subtopic],
            [topicName]: !checked,
          },
        },
      }))
    }
  }

  // this function will give main topics positions

  const getTopicPositions = (topics) => {
    const positions = []
    const numTopics = topics.length // number of topics we have in RodmapData.
    const margin = 20 // Equal margin for all sides

    for (let i = 0; i < numTopics; i++) {
      const row = Math.floor(i / 2)
      const isEvenRow = row % 2 === 0

      // Calculate y position with equal spacing
      const y =
        margin + row * ((100 - 2 * margin) / (Math.ceil(numTopics / 2) - 1))

      let x
      if (isEvenRow) {
        x = i % 2 === 0 ? margin : 100 - margin
      } else {
        x = i % 2 === 0 ? 100 - margin : margin
      }

      positions.push({ x, y, topic: topics[i] })
    }

    return positions
  }

  // roadpath logic

  const getRoadPath = (positions) => {
    if (positions.length < 2) return '' // if only one main topic we dont want road.

    let path = ''
    for (let i = 0; i < positions.length - 1; i++) {
      const current = positions[i]
      const next = positions[i + 1]

      // Start from the first point
      if (i === 0) {
        path += `M ${current.x} ${current.y}`
      }

      // Horizontal road
      path += ` L ${next.x} ${current.y}`

      // Vertical road
      if (current.y !== next.y) {
        path += ` L ${next.x} ${next.y}`
      }
    }

    return path
  }

  // animating the user position from one topic to another,
  // added stops so that the user stops between topics and do not directly jump.
  const animateToPosition = async (targetPosition) => {
    if (isAnimating) return
    setIsAnimating(true)

    const currentPos = userPosition
    const direction = targetPosition > currentPos ? 1 : -1
    let pos = currentPos

    // move user yellow thing until we reach the target.
    while (pos !== targetPosition) {
      pos += direction
      setUserPosition(pos)
      setAnimatingPosition(pos)
      // Wait for animation to complete
      await new Promise((resolve) => setTimeout(resolve, 500)) // adjust this thing for animation duration.
    }

    setIsAnimating(false)
  }

  // function to get postion of the user.
  const getUserPosition = (positions, currentPosition) => {
    const position = positions[currentPosition]
    const yOffset = 10 // adjust this to make the yellow thing above or below the road.

    return {
      x: position.x,
      y: position.y + yOffset,
    }
  }

  const renderRoadmap = () => {
    if (!currentRoadmap || !userLevel) return null

    const topics = Object.keys(currentRoadmap[userLevel])
    const topicPositions = getTopicPositions(topics)
    const roadPath = getRoadPath(topicPositions)
    const userPos = getUserPosition(topicPositions, userPosition)

    return (
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="relative w-full h-[600px] bg-white">
          {/* using svg to show the road  might change it to tailwind later. as i am having issues with the vertical road width  */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* main road  */}
            <path
              d={roadPath}
              stroke="#666666"
              strokeWidth="6" // size of road.
              strokeLinecap="butt"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Dashed center line */}
            {/* giving issues for vertical road  */}
            <path
              d={roadPath}
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeDasharray="2 3"
              fill="none"
            />
          </svg>

          {/* main topic buttons */}
          {topicPositions.map((point, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
              }}
            >
              <motion.button
                className="w-20 h-20 bg-white rounded-full shadow-even-shadow flex items-center justify-center cursor-pointer text-center"
                onClick={() => {
                  setActiveTopic(point.topic)
                  animateToPosition(index)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isAnimating}
              >
                <span className="text-sm font-bold">{point.topic}</span>
              </motion.button>
            </div>
          ))}

          {/* User position indicator*/}
          {/* change this to profile picture later */}
          <motion.div
            className="absolute w-10 h-10 bg-yellow-400 rounded-full shadow-lg z-20 flex items-center justify-center"
            animate={{
              left: `${userPos.x}%`,
              top: `${userPos.y}%`,
            }}
            initial={false}
            transition={{
              type: 'spring',
              stiffness: 70,
              damping: 15,
              mass: 1.2,
            }}
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span className="text-white font-bold">You</span>
          </motion.div>
        </div>
      </div>
    )
  }

  const renderLevelSelection = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">Select Your Level</h2>
        {Object.keys(currentRoadmap)
          .filter((key) => key !== 'name')
          .map((level) => (
            <button
              key={level}
              onClick={() => selectLevel(level)}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-2"
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
      </div>
    </div>
  )

  const renderTopicModal = () => {
    if (!activeTopic) return null

    const topicData = currentRoadmap[userLevel][activeTopic]

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4">
            {activeTopic.toUpperCase()}
          </h2>
          {Object.keys(topicData).map((subtopic) => (
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

  const renderSubtopicModal = () => {
    if (!activeSubtopic) return null

    const subtopicData = currentRoadmap[userLevel][activeTopic][activeSubtopic]

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4">
            {`${activeTopic.toUpperCase()} - ${activeSubtopic.charAt(0).toUpperCase() + activeSubtopic.slice(1)}`}
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

  const renderResourceModal = () => {
    if (!activeResource) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
        <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{activeResource.topic}</h2>
            <span className="text-gray-600">
              Estimated time: {activeResource.time} minutes
            </span>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                Free Resources
              </h3>
              <ul className="space-y-2">
                {activeResource.resources.free.map((resource, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <a
                      href="#"
                      className="text-green-700 hover:text-green-900 hover:underline"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">
                Premium Resources
              </h3>
              <ul className="space-y-2">
                {activeResource.resources.premium.map((resource, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <a
                      href="#"
                      className="text-purple-700 hover:text-purple-900 hover:underline"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={() => setActiveResource(null)}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  // rendering main components:

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Notice:</strong>
          <span className="block sm:inline">
            {' '}
            Please log in to view the roadmap.
          </span>
        </div>
      </div>
    )
  }

  if (!currentRoadmap) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> Roadmap not found.</span>
        </div>
      </div>
    )
  }

  if (!userLevel) return renderLevelSelection()

  // deleted the main topic render function:
  return (
    <div className="relative">
      {renderRoadmap()}
      {renderTopicModal()}
      {renderSubtopicModal()}
      {renderResourceModal()}
    </div>
  )
}

export default RoadmapView
