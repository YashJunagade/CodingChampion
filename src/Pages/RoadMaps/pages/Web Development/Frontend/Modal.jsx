import React, { useState } from 'react'

const roadmapData = {
  html: {
    basic: ['HTML Syntax', 'Headings & Paragraphs', 'Lists', 'Tables'],
    important: ['Forms', 'Semantic HTML', 'Media (Images, Video)'],
    advanced: ['SEO', 'Accessibility', 'Web Components'],
    onGo: ['Browser DevTools', 'HTML5 APIs (like Geolocation)', 'Meta Tags'],
  },
  css: {
    basic: ['CSS Syntax', 'Selectors', 'Box Model'],
    important: ['Flexbox', 'Grid', 'Responsive Design'],
    advanced: ['Animations', 'Sass/SCSS', 'CSS Architecture'],
    onGo: ['Pseudo-elements', 'Specificity', 'CSS Variables'],
  },
  js: {
    basic: ['Variables', 'Data Types', 'Functions'],
    important: ['DOM Manipulation', 'Events', 'ES6 Features'],
    advanced: ['Asynchronous JS', 'Promises', 'Modules'],
    onGo: ['Web APIs', 'LocalStorage', 'Error Handling'],
  },
}

const Modal = ({ tech, closeModal }) => {
  const [showSection, setShowSection] = useState({
    basic: false,
    important: false,
    advanced: false,
    onGo: false,
  })

  const toggleSection = (section) => {
    setShowSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const topics = roadmapData[tech]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">
          {tech.toUpperCase()} Roadmap
        </h2>

        {/* Basic, Important, Advanced, and On-the-Go Sections */}
        {Object.keys(topics).map((section) => (
          <div key={section} className="mb-4">
            <button
              onClick={() => toggleSection(section)}
              className="w-full bg-gray-200 text-left p-2 rounded-lg font-semibold"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
            {showSection[section] && (
              <ul className="mt-2 pl-4 list-disc">
                {topics[section].map((topic, index) => (
                  <li key={index} className="text-gray-700">
                    {topic}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <button
          onClick={closeModal}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
