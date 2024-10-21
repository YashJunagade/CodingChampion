import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CompletionModal = ({ isOpen, onClose, onProceed, topicName }) => {
  const modalRef = useRef()

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus()
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-md mx-4"
            ref={modalRef}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-center">
                  🎉 Congratulations!
                </h2>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 text-center">
                <p className="text-lg">
                  You've completed all the essential topics in{' '}
                  <span className="font-semibold">{topicName}</span>!
                </p>
                <p>You're now ready to move on to the next main topic.</p>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 flex justify-center gap-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Stay Here
                </button>
                <button
                  onClick={onProceed}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Move to Next Topic
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CompletionModal
