import React, { useState, useEffect } from 'react'
import { db, auth } from '../../../../../config/firebase'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

const roadmapData = [
  {
    name: 'frontend',
    beginner: {
      html: {
        basic: [
          {
            topic: 'topic1',
            resources: {
              free: ['yt video1', 'yt video2', 'article'],
              premium: ['coursera', 'codemy'],
            },
            time: 100,
          },
          {
            topic: 'topic2',
            resources: {
              free: ['yt video1', 'yt video2', 'article'],
              premium: ['coursera', 'codemy'],
            },
            time: 100,
          },
          {
            topic: 'topic3',
            resources: {
              free: ['yt video1', 'yt video2', 'article'],
              premium: ['coursera', 'codemy'],
            },
            time: 100,
          },
        ],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
      css: {
        basic: ['topic1', 'topic2', 'topic3'],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
      js: {
        basic: ['topic1', 'topic2', 'topic3'],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
      Framework: {
        reactjs: {
          basic: ['topic1', 'topic2', 'topic3'],
          important: ['topic1', 'topic2', 'topic3'],
          needed: ['topic1', 'topic2', 'topic3'],
          ongo: ['topic1', 'topic2', 'topic3'],
        },
        angularjs: {
          basic: ['topic1', 'topic2', 'topic3'],
          important: ['topic1', 'topic2', 'topic3'],
          needed: ['topic1', 'topic2', 'topic3'],
          ongo: ['topic1', 'topic2', 'topic3'],
        },
        vue: {
          basic: ['topic1', 'topic2', 'topic3'],
          important: ['topic1', 'topic2', 'topic3'],
          needed: ['topic1', 'topic2', 'topic3'],
          ongo: ['topic1', 'topic2', 'topic3'],
        },
      },
    },
    Intermediater: {
      html: {
        basic: ['topic1', 'topic2', 'topic3'],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
      css: {
        basic: ['topic1', 'topic2', 'topic3'],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
      js: {
        basic: ['topic1', 'topic2', 'topic3'],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
      Framework: {
        reactjs: {
          basic: ['topic1', 'topic2', 'topic3'],
          important: ['topic1', 'topic2', 'topic3'],
          needed: ['topic1', 'topic2', 'topic3'],
          ongo: ['topic1', 'topic2', 'topic3'],
        },
        angularjs: {
          basic: ['topic1', 'topic2', 'topic3'],
          important: ['topic1', 'topic2', 'topic3'],
          needed: ['topic1', 'topic2', 'topic3'],
          ongo: ['topic1', 'topic2', 'topic3'],
        },
        vue: {
          basic: ['topic1', 'topic2', 'topic3'],
          important: ['topic1', 'topic2', 'topic3'],
          needed: ['topic1', 'topic2', 'topic3'],
          ongo: ['topic1', 'topic2', 'topic3'],
        },
      },
    },
    Champion: {
      html: {
        basic: ['topic1', 'topic2', 'topic3'],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
      css: {
        basic: ['topic1', 'topic2', 'topic3'],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
      js: {
        basic: ['topic1', 'topic2', 'topic3'],
        important: ['topic1', 'topic2', 'topic3'],
        needed: ['topic1', 'topic2', 'topic3'],
        ongo: ['topic1', 'topic2', 'topic3'],
      },
      Framework: {
        reactjs: {
          basic: ['topic1', 'topic2', 'topic3'],
          important: ['topic1', 'topic2', 'topic3'],
          needed: ['topic1', 'topic2', 'topic3'],
          ongo: ['topic1', 'topic2', 'topic3'],
        },
        angularjs: {
          basic: ['topic1', 'topic2', 'topic3'],
          important: ['topic1', 'topic2', 'topic3'],
          needed: ['topic1', 'topic2', 'topic3'],
          ongo: ['topic1', 'topic2', 'topic3'],
        },
        vue: {
          basic: ['topic1', 'topic2', 'topic3'],
          important: ['topic1', 'topic2', 'topic3'],
          needed: ['topic1', 'topic2', 'topic3'],
          ongo: ['topic1', 'topic2', 'topic3'],
        },
      },
    },
  },
]

const Frontend = () => {
  const [user, setUser] = useState(null)
  const [userLevel, setUserLevel] = useState(null)
  const [activeTopic, setActiveTopic] = useState(null)
  const [activeSubtopic, setActiveSubtopic] = useState(null)
  const [activeResource, setActiveResource] = useState(null)
  const [userProgress, setUserProgress] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
  }, [])

  const fetchUserData = async (userId) => {
    setLoading(true)
    setError(null)
    try {
      const userDoc = await getDoc(doc(db, 'RoadmapProgress', userId))
      if (userDoc.exists()) {
        const data = userDoc.data()
        if (data.level) {
          setUserLevel(data.level)
          localStorage.setItem('userLevel', data.level)
        }
        setUserProgress(data.progress || {})
      } else {
        const storedLevel = localStorage.getItem('userLevel')
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
        { level, progress: {} },
        { merge: true }
      )
      setUserLevel(level)
      localStorage.setItem('userLevel', level)
    } catch (err) {
      console.error('Error saving level:', err)
      setError('Failed to save level. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const updateProgress = async (topic, subtopic, topicName, checked) => {
    if (!user) return

    // Update local state immediately for responsive UI
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

    // Update Firestore in the background
    try {
      const userDocRef = doc(db, 'RoadmapProgress', user.uid)
      await updateDoc(userDocRef, {
        [`progress.${topic}.${subtopic}.${topicName}`]: checked,
      })
    } catch (err) {
      console.error('Error updating progress:', err)
      setError('Failed to update progress. Please try again.')
      // Revert local state if Firestore update fails
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

  const renderLevelSelection = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">Select Your Level</h2>
        {Object.keys(roadmapData[0])
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
        Frontend Roadmap ({userLevel})
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(roadmapData[0][userLevel]).map((topic) => (
          <button
            key={topic}
            onClick={() => setActiveTopic(topic)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            {topic.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )

  const renderTopicModal = () => {
    if (!activeTopic) return null

    const topicData = roadmapData[0][userLevel][activeTopic]

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

    const subtopicData = roadmapData[0][userLevel][activeTopic][activeSubtopic]

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4">
            {activeTopic.toUpperCase()} -{' '}
            {activeSubtopic.charAt(0).toUpperCase() + activeSubtopic.slice(1)}
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
  if (!userLevel) return renderLevelSelection()

  return (
    <>
      {renderMainTopics()}
      {renderTopicModal()}
      {renderSubtopicModal()}
      {renderResourceModal()}
    </>
  )
}

export default Frontend
