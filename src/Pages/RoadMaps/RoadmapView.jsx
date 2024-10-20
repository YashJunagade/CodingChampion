import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db, auth } from '../../config/firebase'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { roadmapData } from './RoadmapData'

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
  const [selectedFramework, setSelectedFramework] = useState(null)
  const [showFrameworkSelection, setShowFrameworkSelection] = useState(false)

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
        setSelectedFramework(null)
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
        setSelectedFramework(data[roadmapName]?.selectedFramework || null)
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
            selectedFramework: null,
          },
        },
        { merge: true }
      )
      setUserLevel(level)
      setSelectedFramework(null)
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

  const selectFramework = async (framework) => {
    if (!user) return

    setLoading(true)
    setError(null)
    try {
      await updateDoc(doc(db, 'RoadmapProgress', user.uid), {
        [`${roadmapName}.selectedFramework`]: framework,
      })
      setSelectedFramework(framework)
      setShowFrameworkSelection(false)
    } catch (err) {
      console.error('Error saving framework:', err)
      setError('Failed to save framework. Please try again.')
    } finally {
      setLoading(false)
    }
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

  const renderMainTopics = () => (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        {currentRoadmap.name.charAt(0).toUpperCase() +
          currentRoadmap.name.slice(1)}{' '}
        Roadmap ({userLevel})
      </h1>
      {selectedFramework && (
        <div className="mb-4">
          <span className="font-semibold">Selected Framework: </span>
          {selectedFramework}
          <button
            onClick={() => setShowFrameworkSelection(true)}
            className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Change Framework
          </button>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(currentRoadmap[userLevel]).map((topic) => (
          <button
            key={topic}
            onClick={() => {
              if (topic === 'Framework' && !selectedFramework) {
                setShowFrameworkSelection(true)
              } else {
                setActiveTopic(topic)
              }
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            {topic === 'Framework' && selectedFramework
              ? selectedFramework.toUpperCase()
              : topic.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )

  const renderFrameworkSelection = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">Select a Framework</h2>
        {Object.keys(currentRoadmap[userLevel].Framework).map((framework) => (
          <button
            key={framework}
            onClick={() => selectFramework(framework)}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mb-2"
          >
            {framework.charAt(0).toUpperCase() + framework.slice(1)}
          </button>
        ))}
        <button
          onClick={() => setShowFrameworkSelection(false)}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Cancel
        </button>
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
            {activeTopic === 'Framework'
              ? `${selectedFramework.toUpperCase()}`
              : activeTopic.toUpperCase()}
          </h2>
          {Object.keys(
            activeTopic === 'Framework'
              ? topicData[selectedFramework]
              : topicData
          ).map((subtopic) => (
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

    const subtopicData =
      activeTopic === 'Framework'
        ? currentRoadmap[userLevel][activeTopic][selectedFramework][
            activeSubtopic
          ]
        : currentRoadmap[userLevel][activeTopic][activeSubtopic]

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4">
            {activeTopic === 'Framework'
              ? `${selectedFramework.toUpperCase()} - ${activeSubtopic.charAt(0).toUpperCase() + activeSubtopic.slice(1)}`
              : `${activeTopic.toUpperCase()} - ${activeSubtopic.charAt(0).toUpperCase() + activeSubtopic.slice(1)}`}
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
                      userProgress[activeTopic]?.[
                        activeTopic === 'Framework'
                          ? selectedFramework
                          : activeSubtopic
                      ]?.[topic.topic] || false
                    }
                    onChange={(e) =>
                      updateProgress(
                        activeTopic,
                        activeTopic === 'Framework'
                          ? selectedFramework
                          : activeSubtopic,
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
            {/* Free Resources Section */}
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

            {/* Premium Resources Section */}
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

  if (loading) return <div>Loading...</div>
  if (!user) return <div>Please log in to view the roadmap.</div>
  if (!currentRoadmap) return <div>Roadmap not found.</div>
  if (!userLevel) return renderLevelSelection()

  return (
    <>
      {renderMainTopics()}
      {showFrameworkSelection && renderFrameworkSelection()}
      {renderTopicModal()}
      {renderSubtopicModal()}
      {renderResourceModal()}
    </>
  )
}

export default RoadmapView
