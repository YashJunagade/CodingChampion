import React, { useState, useEffect } from 'react'
import { db, auth } from '../../../../../config/firebase'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

const roadmapData = [
  {
    name: 'frontend',
    beginner: {
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
          {subtopicData.map((topic) => (
            <div key={topic} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={
                  userProgress[activeTopic]?.[activeSubtopic]?.[topic] || false
                }
                onChange={(e) =>
                  updateProgress(
                    activeTopic,
                    activeSubtopic,
                    topic,
                    e.target.checked
                  )
                }
                className="mr-2"
              />
              <span>{topic}</span>
            </div>
          ))}
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

  if (loading) return <div>Loading...</div>
  if (!user) return <div>Please log in to view the roadmap.</div>
  if (!userLevel) return renderLevelSelection()

  return (
    <>
      {renderMainTopics()}
      {renderTopicModal()}
      {renderSubtopicModal()}
    </>
  )
}

export default Frontend
