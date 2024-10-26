import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db, auth } from '../../config/firebase'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import RoadmapRenderer from './components/RoadmapRenderer'
import LevelSelection from './components/LevelSelection'
import TopicModal from './components/TopicModal'
import SubtopicModal from './components/SubtopicModal'
import ResourceModal from './components/ResourceModal'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorAlert from './components/ErrorAlert'

const RoadmapView = () => {
  const { roadmapName } = useParams()
  const [user, setUser] = useState(null)
  const [userLevel, setUserLevel] = useState(null)
  const [isUserDataLoading, setIsUserDataLoading] = useState(true)
  const [activeTopic, setActiveTopic] = useState(null)
  const [activeSubtopic, setActiveSubtopic] = useState(null)
  const [activeResource, setActiveResource] = useState(null)
  const [userProgress, setUserProgress] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [userPosition, setUserPosition] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [selectedFrameworks, setSelectedFrameworks] = useState({})
  const [currentRoadmap, setCurrentRoadmap] = useState(null)

  useEffect(() => {
    const fetchRoadmapData = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/YashJunagade/roadmap-data@main/${roadmapName.toLowerCase()}.json`
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const roadmapData = await response.json()

        if (!roadmapData) {
          throw new Error('No roadmap data found')
        }

        setCurrentRoadmap(roadmapData)
        setError(null)
      } catch (err) {
        console.error('Error fetching roadmap data:', err)
        setError(
          'Failed to fetch roadmap data. Please check if the roadmap name is correct and try again.'
        )
        setCurrentRoadmap(null)
      } finally {
        setLoading(false)
      }
    }

    if (roadmapName) {
      fetchRoadmapData()
    }
  }, [roadmapName])

  useEffect(() => {
    setIsUserDataLoading(true) // Reset loading state when roadmap changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        fetchUserData(user.uid)
      } else {
        setUser(null)
        setUserLevel(null)
        setUserProgress({})
        setIsUserDataLoading(false)
      }
    })

    return () => unsubscribe()
  }, [roadmapName])

  const fetchUserData = async (userId) => {
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
        } else {
          // Check localStorage only if no level in Firestore
          const storedLevel = localStorage.getItem(`userLevel_${roadmapName}`)
          setUserLevel(storedLevel)
        }
        setUserProgress(data[roadmapName]?.progress || {})
        setSelectedFrameworks(data[roadmapName]?.frameworks || {})
      } else {
        const storedLevel = localStorage.getItem(`userLevel_${roadmapName}`)
        setUserLevel(storedLevel)
      }
    } catch (err) {
      console.error('Error fetching user data:', err)
      setError('Failed to fetch user data. Please try again.')
    } finally {
      setIsUserDataLoading(false)
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

  const updateProgress = (topic, subtopic, topicName, checked) => {
    if (!user) return

    const framework = selectedFrameworks[topic]

    setUserProgress((prev) => ({
      ...prev,
      [topic]: {
        ...prev[topic],
        frameworks: {
          ...(prev[topic]?.frameworks || {}),
          [framework]: {
            ...(prev[topic]?.frameworks?.[framework] || {}),
            [subtopic]: {
              ...(prev[topic]?.frameworks?.[framework]?.[subtopic] || {}),
              [topicName]: checked,
            },
          },
        },
        subtopics: {
          ...(prev[topic]?.subtopics || {}),
          [subtopic]: {
            ...(prev[topic]?.subtopics?.[subtopic] || {}),
            [topicName]: checked,
          },
        },
      },
    }))

    try {
      const userDocRef = doc(db, 'RoadmapProgress', user.uid)
      if (isFramework) {
        updateDoc(userDocRef, {
          [`${roadmapName}.progress.${topic}.frameworks.${framework}.${subtopic}.${topicName}`]:
            checked,
        })
      } else {
        updateDoc(userDocRef, {
          [`${roadmapName}.progress.${topic}.subtopics.${subtopic}.${topicName}`]:
            checked,
        })
      }
    } catch (err) {
      console.error('Error updating progress:', err)
      setError('Failed to update progress. Please try again.')
      setUserProgress((prev) => ({
        ...prev,
        [topic]: {
          ...prev[topic],
          frameworks: {
            ...(prev[topic]?.frameworks || {}),
            [framework]: {
              ...(prev[topic]?.frameworks?.[framework] || {}),
              [subtopic]: {
                ...(prev[topic]?.frameworks?.[framework]?.[subtopic] || {}),
                [topicName]: !checked,
              },
            },
          },
          subtopics: {
            ...(prev[topic]?.subtopics || {}),
            [subtopic]: {
              ...(prev[topic]?.subtopics?.[subtopic] || {}),
              [topicName]: !checked,
            },
          },
        },
      }))
    }
  }

  const selectFramework = async (topicName, framework) => {
    if (!user) return

    const updatedFrameworks = {
      ...selectedFrameworks,
      [topicName]: framework,
    }

    try {
      await updateDoc(doc(db, 'RoadmapProgress', user.uid), {
        [`${roadmapName}.frameworks`]: updatedFrameworks,
      })
      setSelectedFrameworks(updatedFrameworks)
    } catch (err) {
      console.error('Error saving framework selection:', err)
      setError('Failed to save framework selection. Please try again.')
    }
  }

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorAlert message={error} />
  if (!user)
    return (
      <ErrorAlert message="Please log in to view the roadmap." type="warning" />
    )
  if (!currentRoadmap) return <ErrorAlert message="Roadmap not found." />

  // Only show LevelSelection if we're sure user data is loaded and no level is set
  if (!isUserDataLoading && !userLevel) {
    return <LevelSelection onSelect={selectLevel} roadmap={currentRoadmap} />
  }

  // Show loading spinner while checking user data
  if (isUserDataLoading) return <LoadingSpinner />

  const isFramework = activeTopic?.endsWith('F')

  return (
    <div className="relative">
      <RoadmapRenderer
        currentRoadmap={currentRoadmap}
        userLevel={userLevel}
        userPosition={userPosition}
        setUserPosition={setUserPosition}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
        setActiveTopic={setActiveTopic}
        selectedFrameworks={selectedFrameworks}
      />
      {activeTopic && (
        <TopicModal
          activeTopic={activeTopic}
          setActiveTopic={setActiveTopic}
          currentRoadmap={currentRoadmap}
          userLevel={userLevel}
          selectedFrameworks={selectedFrameworks}
          selectFramework={selectFramework}
          setActiveSubtopic={setActiveSubtopic}
          userProgress={userProgress}
          isFramework={isFramework}
        />
      )}
      {activeSubtopic && (
        <SubtopicModal
          activeSubtopic={activeSubtopic}
          setActiveSubtopic={setActiveSubtopic}
          activeTopic={activeTopic}
          currentRoadmap={currentRoadmap}
          userLevel={userLevel}
          selectedFrameworks={selectedFrameworks}
          userProgress={userProgress}
          updateProgress={updateProgress}
          setActiveResource={setActiveResource}
        />
      )}
      {activeResource && (
        <ResourceModal
          resource={activeResource}
          onClose={() => setActiveResource(null)}
        />
      )}
    </div>
  )
}

export default RoadmapView
