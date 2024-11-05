import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db, auth } from '../../config/firebase'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import Groq from 'groq-sdk'
import RoadmapRenderer from './components/RoadmapRenderer'
import LevelSelection from './components/LevelSelection'
import TopicModal from './components/TopicModal'
import SubtopicModal from './components/SubtopicModal'
import ResourceModal from './components/ResourceModal'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorAlert from './components/ErrorAlert'
import Modal from '../SolutionPage/Modal'
import FormattedText from '../SolutionPage/FormattedText'
import AskDevaButton from '../SolutionPage/Deva/AskDeva'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'

const RoadmapView = () => {
  const { roadmapName } = useParams()
  const [user, setUser] = useState(null)
  const [userLevel, setUserLevel] = useState(null)
  const [isUserDataLoading, setIsUserDataLoading] = useState(true)
  const [activeTopic, setActiveTopic] = useState(null)
  const [activeSubtopic, setActiveSubtopic] = useState(null)
  const [activeResource, setActiveResource] = useState(null)
  const [userProgress, setUserProgress] = useState({})
  const [error, setError] = useState(null)
  const [userPosition, setUserPosition] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [selectedFrameworks, setSelectedFrameworks] = useState({})
  const [currentRoadmap, setCurrentRoadmap] = useState(null)
  const [isQueryModalOpen, setIsQueryModalOpen] = useState(false)
  const [userQuery, setUserQuery] = useState('')
  const [queryResponse, setQueryResponse] = useState('')

  // Separate loading states
  const [isRoadmapLoading, setIsRoadmapLoading] = useState(false)
  const [isDevaLoading, setIsDevaLoading] = useState(false)

  const handleQuerySubmit = async () => {
    if (!user) {
      toast.error('Please login to use this feature', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      return
    }
    if (!userQuery.trim()) return

    setIsDevaLoading(true)
    const groq = new Groq({
      apiKey: import.meta.env.VITE_GROQ_API_KEY_1,
      dangerouslyAllowBrowser: true,
    })

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `Given this roadmap context: ${roadmapName}\n\nUser's question: ${userQuery}\n\nPlease provide a well-formatted response using Markdown syntax for headings, lists, and code blocks where appropriate.`,
          },
        ],
        model: import.meta.env.VITE_MODAL1,
      })

      setQueryResponse(chatCompletion.choices[0]?.message?.content || '')
    } catch (error) {
      console.error('Error fetching query response:', error)
      setQueryResponse('An error occurred while fetching the response.')
    } finally {
      setIsDevaLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleQuerySubmit()
    }
  }

  useEffect(() => {
    const fetchRoadmapData = async () => {
      if (!roadmapName) return

      setIsRoadmapLoading(true)
      setError(null)

      try {
        // First try to get from localStorage to avoid unnecessary CDN calls
        const cachedData = localStorage.getItem(`roadmap_${roadmapName}`)
        if (cachedData) {
          setCurrentRoadmap(JSON.parse(cachedData))
          setIsRoadmapLoading(false)
          return
        }

        // jsDelivr CDN URL with cache busting
        const jsdelivrUrl = `https://cdn.jsdelivr.net/gh/YashJunagade/data@main/${roadmapName.toLowerCase()}.json`

        // Add a timestamp to bust cache if needed
        const timestamp = new Date().getTime()
        const urlWithCacheBust = `${jsdelivrUrl}?t=${timestamp}`

        const response = await fetch(urlWithCacheBust)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const roadmapData = await response.json()

        // Validate the roadmap data structure
        if (!roadmapData || !roadmapData.name) {
          throw new Error('Invalid roadmap data structure')
        }

        // Save to localStorage for future use
        localStorage.setItem(
          `roadmap_${roadmapName}`,
          JSON.stringify(roadmapData)
        )
        setCurrentRoadmap(roadmapData)
      } catch (err) {
        console.error('Error fetching roadmap data:', err)
        setError(
          `Failed to load the ${roadmapName} roadmap. Please check if the roadmap file exists at the CDN and try again.`
        )

        // Clear potentially corrupted cache
        localStorage.removeItem(`roadmap_${roadmapName}`)
      } finally {
        setIsRoadmapLoading(false)
      }
    }

    if (roadmapName) {
      fetchRoadmapData()
    }
  }, [roadmapName])

  useEffect(() => {
    setIsUserDataLoading(true)
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

    setIsRoadmapLoading(true)
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
      setIsRoadmapLoading(false)
    }
  }

  const updateProgress = (topic, subtopic, topicName, checked) => {
    if (!user) return

    const framework = selectedFrameworks[topic]
    const isFramework = topic.endsWith('F')

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

  if (isRoadmapLoading) return <LoadingSpinner />
  if (error) return <ErrorAlert message={error} />
  if (!user)
    return (
      <ErrorAlert message="Please log in to view the roadmap." type="warning" />
    )
  if (!currentRoadmap) return <ErrorAlert message="Roadmap not found." />

  if (!isUserDataLoading && !userLevel) {
    return <LevelSelection onSelect={selectLevel} roadmap={currentRoadmap} />
  }

  if (isUserDataLoading) return <LoadingSpinner />

  const isFramework = activeTopic?.endsWith('F')

  return (
    <>
      <Helmet>
        <title>{currentRoadmap.name} Complete Learning Roadmap</title>
        <meta
          name="description"
          content="Comprehensive programming roadmaps for Web Development and AI. Master MERN stack, Python, Java, Data Structures, Machine Learning. Perfect for BBACA/BCA students. Free practical solutions and lab guides for SPPU University."
        />
        <meta
          name="keywords"
          content="programming roadmap, web development path, artificial intelligence course, BBACA, BCA, SPPU University, programming tutorials, coding guide, full stack development, machine learning path, practical solutions, lab solutions, computer science education, learning path, technology roadmap, programming career guide"
        />
        <meta
          property="og:title"
          content="Complete Learning Roadmap: Web Development & AI Programming Path | BBACA BCA Guide"
        />
        <meta
          property="og:description"
          content="Comprehensive programming roadmaps for Web Development and AI. Master MERN stack, Python, Java, Data Structures, Machine Learning. Perfect for BBACA/BCA students."
        />
        <meta name="robots" content="index, follow" />
        <meta name="subject" content="Programming Education Roadmap" />
        <link rel="canonical" href="/roadmaps" />
        <meta
          name="google-adsense-account"
          content="ca-pub-1487916517080617"
        ></meta>
      </Helmet>
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

        {/* Ask Deva Modal */}
        {isQueryModalOpen && (
          <Modal
            isOpen={isQueryModalOpen}
            title="Ask Your Doubt to Deva"
            onClose={() => {
              setIsQueryModalOpen(false)
              setUserQuery('')
              setQueryResponse('')
            }}
          >
            <div className="flex flex-col">
              <textarea
                className="p-2 rounded border mt-6 mb-4"
                placeholder="Type your query or doubt here..."
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                rows={4}
              />
              <button
                onClick={handleQuerySubmit}
                disabled={isDevaLoading}
                className={`px-4 py-2 rounded text-white font-semibold ${
                  isDevaLoading
                    ? 'bg-accent cursor-not-allowed'
                    : 'bg-black hover:bg-accent'
                }`}
              >
                {isDevaLoading ? 'Fetching Response...' : 'Submit Query'}
              </button>

              {queryResponse && (
                <div className="mt-4 p-4 border rounded bg-white shadow-md overflow-auto max-h-96">
                  <h3 className="font-semibold mb-2">Deva : </h3>
                  <FormattedText text={queryResponse} />
                </div>
              )}
            </div>
          </Modal>
        )}

        <AskDevaButton onOpen={() => setIsQueryModalOpen(true)} />
      </div>
    </>
  )
}

export default RoadmapView
