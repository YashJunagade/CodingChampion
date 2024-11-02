import React from 'react'
import { Trophy, GraduationCap, Target } from 'lucide-react'

const LevelCard = ({ icon: Icon, title, description, onClick }) => (
  <button
    onClick={onClick}
    className="group relative w-full bg-white rounded-xl shadow-lg p-6 mb-4 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 hover:border-accent"
  >
    <div className="flex items-center space-x-4">
      <div className="p-3 rounded-full bg-blue-100 group-hover:bg-accent transition-colors duration-300">
        <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="text-left">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </button>
)

const LevelSelection = ({ onSelect, roadmap }) => {
  const levels = [
    {
      id: 'beginner',
      title: 'Beginner',
      description: 'Perfect for those just starting their journey',
      icon: GraduationCap,
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      description: 'For practitioners with some experience',
      icon: Target,
    },
    {
      id: 'champion',
      title: 'Champion',
      description: 'Master-level challenges for experts',
      icon: Trophy,
    },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white/90 p-8 rounded-2xl max-w-lg w-full m-4 shadow-2xl animate-slideIn">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">
          Select Your Level
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Choose the difficulty that matches your expertise
        </p>
        <div className="space-y-4">
          {levels.map((level) => (
            <LevelCard
              key={level.id}
              icon={level.icon}
              title={level.title}
              description={level.description}
              onClick={() => onSelect(level.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Add these keyframes to your global CSS or use a CSS-in-JS solution
const style = document.createElement('style')
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
  
  .animate-slideIn {
    animation: slideIn 0.5s ease-out;
  }
`
document.head.appendChild(style)

export default LevelSelection
