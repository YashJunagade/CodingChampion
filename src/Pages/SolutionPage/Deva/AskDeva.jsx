import React, { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

const messages = [
  'Stuck somewhere? Ask me!',
  'Not understanding? Ask me!',
  "I'm here for you!",
  "Need help? I'm all ears!",
  'Got a question? Fire away!',
]

const AskDevaButton = ({ onOpen }) => {
  const [currentMessage, setCurrentMessage] = useState(messages[0])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const showMessage = () => {
      setCurrentMessage(messages[Math.floor(Math.random() * messages.length)])
      setIsVisible(true)

      // Hide message after 10 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 10000)
    }

    showMessage() // Show first message immediately

    const interval = setInterval(() => {
      showMessage()
    }, 110000) // 110 seconds = 10 seconds visible + 100 seconds hidden

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col items-end">
        <div
          className={`bg-white text-black text-sm py-1 px-3 rounded-lg shadow-md whitespace-nowrap mb-2 transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {currentMessage}
        </div>
        <button
          onClick={onOpen}
          className="bg-[#D43212] text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center"
        >
          <MessageCircle size={24} className="mr-2" />
          <span>Ask Deva</span>
        </button>
      </div>
    </div>
  )
}

export default AskDevaButton
