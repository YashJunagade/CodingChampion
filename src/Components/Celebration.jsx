import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const Celebration = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [confetti, setConfetti] = useState([])
  const [fireworks, setFireworks] = useState([])

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem('CelebrationSeen')

    if (!hasSeenPopup) {
      // Show popup after a small delay
      setTimeout(() => {
        setIsVisible(true)
        createConfetti()
      }, 500)

      // Set flag in localStorage
      localStorage.setItem('CelebrationSeen', 'true')
    }
  }, [])

  const handleCloseOrCelebrate = () => {
    setIsVisible(false)
  }

  const createConfetti = () => {
    const colors = [
      'bg-red-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
    ]
    const newConfetti = []

    // Create 100 confetti pieces
    for (let i = 0; i < 100; i++) {
      newConfetti.push({
        id: `confetti-${i}`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`,
      })
    }

    setConfetti(newConfetti)
  }

  const createFireworks = () => {
    const newFireworks = []

    // Create fireworks batch
    for (let i = 0; i < 12; i++) {
      // Increased fireworks count
      setTimeout(() => {
        const fireworkBatch = []

        // Position fireworks across the entire window instead of just container
        const screenWidth = window.innerWidth
        const screenHeight = window.innerHeight
        const posX = Math.random() * screenWidth * 0.8
        const posY = Math.random() * screenHeight * 0.6
        const hue = Math.floor(Math.random() * 360)

        // Create more particles that shoot out in different directions
        for (let j = 0; j < 15; j++) {
          // Increased particle count
          const angle = Math.random() * Math.PI * 2
          const distance = Math.random() * 150 + 50 // Increased distance

          fireworkBatch.push({
            id: `firework-${i}-${j}`,
            left: posX,
            top: posY,
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            hue,
          })
        }

        setFireworks((prev) => [...prev, ...fireworkBatch])

        // Remove fireworks after animation completes
        setTimeout(() => {
          setFireworks((prev) =>
            prev.filter((fw) => !fw.id.includes(`firework-${i}`))
          )
        }, 2000)
      }, i * 300)
    }
  }

  const addMoreCelebration = () => {
    createFireworks()
    createConfetti()

    // Close popup but keep effects for 5 seconds
    setIsVisible(false)

    // After 5 seconds, clear all effects
    setTimeout(() => {
      setConfetti([])
      setFireworks([])
    }, 5000)
  }

  return (
    <>
      {/* Main Celebration Popup */}
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-500 p-4 overflow-y-auto">
          <div className="popup-container relative w-full max-w-xl bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 sm:p-6 text-center shadow-2xl transform transition-all duration-500 scale-100 my-4">
            {/* Close button */}
            <button
              onClick={handleCloseOrCelebrate}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white bg-opacity-30 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-50 transition-colors"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-bounce">
                🎉 Thank You! 🎉
              </h1>
              <div className="text-3xl sm:text-4xl font-bold text-yellow-300 my-2 sm:my-3 animate-pulse">
                100,000+ Views!
              </div>
            </div>

            {/* Content */}
            <div className="text-white leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              <p className="mb-2">
                We're thrilled to announce that{' '}
                <strong>codingchampion.in</strong> has crossed the incredible
                milestone of 100,000 views! 🚀
              </p>
              <p className="mb-2">
                Thank you to all our visitors and supporters who made this
                possible! 💖
              </p>

              <button
                onClick={addMoreCelebration}
                className="bg-accent text-white-800 font-bold py-2 px-4 sm:px-6 rounded-full shadow-lg hover:bg-white hover:-translate-y-1 transform transition-all mt-2 text-sm sm:text-base"
              >
                Let's Celebrate! 🎊
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full-screen confetti pieces */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className={`fixed ${piece.color} opacity-70 pointer-events-none z-40`}
          style={{
            left: piece.left,
            width: piece.width,
            height: piece.height,
            animationDuration: piece.animationDuration,
            animationDelay: piece.animationDelay,
            animation: 'confettiFall linear infinite',
          }}
        />
      ))}

      {/* Full-screen fireworks */}
      {fireworks.map((fw) => (
        <div
          key={fw.id}
          className="fixed w-1 h-1 rounded-full pointer-events-none z-40"
          style={{
            left: `${fw.left}px`,
            top: `${fw.top}px`,
            backgroundColor: `hsl(${fw.hue}, 100%, 60%)`,
            boxShadow: `0 0 6px 2px hsl(${fw.hue}, 100%, 60%)`,
            animation: 'fireworkParticle 2s ease-out forwards',
            transform: `translate(0, 0)`,
            transformOrigin: 'center',
          }}
          data-x={fw.x}
          data-y={fw.y}
        />
      ))}

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fireworkParticle {
          0% {
            transform: translate(0, 0);
            width: 5px;
            height: 5px;
            opacity: 1;
          }
          100% {
            transform: translate(var(--x), var(--y));
            width: 0;
            height: 0;
            opacity: 0;
          }
        }

        .animate-bounce {
          animation: bounce 1s;
        }

        @keyframes bounce {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}

export default Celebration
