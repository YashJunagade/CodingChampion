import React, { useState } from 'react'
import RoadmapModal from './Modal'

const Frontend = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (tech) => setActiveModal(tech)
  const closeModal = () => setActiveModal(null)

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Frontend Roadmap</h1>

      {/* Buttons to open modals */}
      <button
        onClick={() => openModal('html')}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        HTML Roadmap
      </button>
      <button
        onClick={() => openModal('css')}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        CSS Roadmap
      </button>
      <button
        onClick={() => openModal('js')}
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
      >
        JavaScript Roadmap
      </button>

      {/* Modals */}
      {activeModal && (
        <RoadmapModal tech={activeModal} closeModal={closeModal} />
      )}
    </div>
  )
}

export default Frontend
