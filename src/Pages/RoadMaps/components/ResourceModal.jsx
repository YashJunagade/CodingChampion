import React from 'react'
import { X, BookOpen, ExternalLink, Gift, Crown } from 'lucide-react'

const ResourceModal = ({ resource, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-2 sm:p-4 md:p-6 "
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-xl w-full max-w-[95%] sm:max-w-[85%] md:max-w-2xl relative shadow-lg animate-in fade-in duration-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 md:p-6 border-b">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg ">
                <BookOpen className="h-6 w-6 text-blue-600 animate-pulse" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 line-clamp-2">
                {resource.topic}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors hover:rotate-90 duration-300"
              aria-label="Close modal"
            >
              <X className="h-6 w-6 sm:h-7 sm:w-7 text-black font-bold" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-6 max-h-[60vh] sm:max-h-[70vh] md:max-h-[calc(100vh-12rem)] overflow-y-auto">
          {/* Free Resources Section */}
          <div className="bg-green-50 rounded-lg sm:rounded-xl border border-green-100">
            <div className="p-3 sm:p-4 border-b border-green-100">
              <h3 className="text-base sm:text-lg font-semibold text-green-700 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Free Resources
                </div>
                <div className="bg-green-100 p-2 rounded-lg">
                  <Gift className="h-5 w-5 text-green-600 animate-bounce" />
                </div>
              </h3>
            </div>
            <ul className="p-3 sm:p-4 space-y-2 sm:space-y-3">
              {resource.resources.free.map((resourceItem, idx) => {
                const [name, link] = Object.entries(resourceItem)[0]
                return (
                  <li key={idx} className="flex items-center group">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-green-400 rounded-full mr-2 sm:mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-green-700 hover:text-green-900 group-hover:underline transition-colors break-words flex-1"
                    >
                      {name}
                      <ExternalLink className="inline-block ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Premium Resources Section */}
          <div className="bg-purple-50 rounded-lg sm:rounded-xl border border-purple-100">
            <div className="p-3 sm:p-4 border-b border-purple-100">
              <h3 className="text-base sm:text-lg font-semibold text-purple-700 flex items-center justify-between">
                <div className="flex items-center ">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                  Premium Resources
                </div>
                <div className="bg-purple-100 p-2 rounded-lg animate-pulse">
                  <Crown className="h-5 w-5 text-purple-600 animate-bounce" />
                </div>
              </h3>
            </div>
            <ul className="p-3 sm:p-4 space-y-2 sm:space-y-3">
              {resource.resources.premium.map((resourceItem, idx) => {
                const [name, link] = Object.entries(resourceItem)[0]
                return (
                  <li key={idx} className="flex items-center group">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-400 rounded-full mr-2 sm:mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-purple-700 hover:text-purple-900 group-hover:underline transition-colors break-words flex-1"
                    >
                      {name}
                      <ExternalLink className="inline-block ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 md:p-6 border-t bg-gray-50 rounded-b-xl">
          <button
            onClick={onClose}
            className="w-full bg-red-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium text-sm sm:text-base active:scale-[0.98] duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResourceModal
