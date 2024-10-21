import React from 'react'

const ResourceModal = ({ resource, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{resource.topic}</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-700 mb-3">
              Free Resources
            </h3>
            <ul className="space-y-2">
              {resource.resources.free.map((resourceItem, idx) => {
                const [name, link] = Object.entries(resourceItem)[0]
                return (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 hover:text-green-900 hover:underline"
                    >
                      {name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">
              Premium Resources
            </h3>
            <ul className="space-y-2">
              {resource.resources.premium.map((resourceItem, idx) => {
                const [name, link] = Object.entries(resourceItem)[0]
                return (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 hover:text-purple-900 hover:underline"
                    >
                      {name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ResourceModal
