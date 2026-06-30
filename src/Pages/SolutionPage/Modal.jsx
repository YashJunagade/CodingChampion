import React from 'react'
import './Modal.css'
import MonetAd from '../../Components/MonetAd/MonetAd'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
      <div className="modal-overlay" onClick={onClose}>
      <MonetAd />
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
