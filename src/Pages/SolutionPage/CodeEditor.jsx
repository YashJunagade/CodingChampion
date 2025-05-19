import Editor from '@monaco-editor/react'
import Groq from 'groq-sdk'
import FormattedText from './FormattedText'
import Modal from './Modal'
import { useState, useCallback, useRef, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { Resizable } from 're-resizable'
import AskDevaButton from './Deva/AskDeva'
import { motion } from 'framer-motion'
import { useTheme } from '../../store/ThemeContext'
import { useUser } from '../../store/UserContext'

const apiKeys = [
  import.meta.env.VITE_GROQ_API_KEY_1,
  import.meta.env.VITE_GROQ_API_KEY_2,
  import.meta.env.VITE_GROQ_API_KEY_3,
]

const models = [
  import.meta.env.VITE_MODAL2,
  import.meta.env.VITE_MODAL4,
  import.meta.env.VITE_MODAL5,
  import.meta.env.VITE_MODAL6,
]

function CodeEditor({ language, solution }) {
  const { isLoggedIn } = useUser()
  const [result, setResult] = useState('')
  const [isExplanationModalOpen, setIsExplanationModalOpen] = useState(false)
  const [isQueryModalOpen, setIsQueryModalOpen] = useState(false)
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0)
  const [currentModelIndex, setCurrentModelIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [editorOptions, setEditorOptions] = useState({})
  const [isResizable, setIsResizable] = useState(window.innerWidth > 768)
  const [editorWidth, setEditorWidth] = useState('99%')
  const [editorHeight, setEditorHeight] = useState('100%')
  const editorRef = useRef(null)
  const editorContainerRef = useRef(null)
  // State for user query and its response
  const [userQuery, setUserQuery] = useState('')
  const [queryResponse, setQueryResponse] = useState('')
  const { theme } = useTheme()

  const checkAuth = () => {
    if (!isLoggedIn) {
      toast.error('Please login to use this feature', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      return false
    }
    return true
  }

  const fetchSolution = async () => {
    if (!checkAuth()) return

    const apiKey = apiKeys[currentKeyIndex]
    const model = models[currentModelIndex]

    if (!apiKey) {
      console.error('API key is not defined')
      return
    }

    const groq = new Groq({
      apiKey,
      dangerouslyAllowBrowser: true,
    })

    setLoading(true)

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `${solution}\n\nExplain the given code in simple words. Also explain how each function works in brief. Give sample input and output for the program. Please provide a well-formatted response . You can also use diagrams or piece of code wherever necessary.`,
          },
        ],
        model,
      })

      setResult(chatCompletion.choices[0]?.message?.content || '')
      setIsExplanationModalOpen(true)
    } catch (error) {
      console.error('Error fetching solution:', error)
      setResult('An error occurred while fetching the solution.')
    } finally {
      setCurrentKeyIndex((prevIndex) => (prevIndex + 1) % apiKeys.length)
      setCurrentModelIndex(Math.floor(Math.random() * models.length))
      setLoading(false)
    }
  }

  const handleQuerySubmit = async () => {
    if (!checkAuth()) return
    if (!userQuery.trim()) return

    const apiKey = apiKeys[currentKeyIndex]
    const model = models[currentModelIndex]

    if (!apiKey) {
      console.error('API key is not defined')
      return
    }

    const groq = new Groq({
      apiKey,
      dangerouslyAllowBrowser: true,
    })

    setLoading(true)

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `Given this code:\n\n${solution}\n\nUser's question: ${userQuery}\n\nPlease provide a well-formatted response using Markdown syntax for headings, lists, and code blocks where appropriate.`,
          },
        ],
        model,
      })

      setQueryResponse(chatCompletion.choices[0]?.message?.content || '')
    } catch (error) {
      console.error('Error fetching query response:', error)
      setQueryResponse('An error occurred while fetching the response.')
    } finally {
      setCurrentKeyIndex((prevIndex) => (prevIndex + 1) % apiKeys.length)
      setCurrentModelIndex(Math.floor(Math.random() * models.length))
      setLoading(false)
    }
  }

  const handleAskDevaClick = () => {
    if (checkAuth()) {
      setIsQueryModalOpen(true)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleQuerySubmit()
    }
  }

  const copyToClipboard = useCallback(() => {
    if (!checkAuth()) return
    else {
      const editorValue = editorRef.current?.getValue()

      if (editorValue) {
        window.navigator.clipboard
          .writeText(editorValue)
          .then(() => {
            toast.success('Copied successfully!', {
              position: 'bottom-right',
              autoClose: 3000,
            })
          })
          .catch((err) => {
            console.error('Failed to copy: ', err)
          })
      }
    }
  }, [])

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor

    const editorElement = editor.getDomNode()
    if (editorElement) {
      // Prevent keyboard shortcuts
      editorElement.addEventListener(
        'keydown',
        (e) => {
          if (
            (e.ctrlKey || e.metaKey) &&
            (e.key === 'c' || e.key === 'C' || e.key === 'x' || e.key === 'X')
          ) {
            e.preventDefault()
            return false
          }
        },
        true
      )

      // Prevent selection
      editorElement.addEventListener('selectstart', (e) => {
        e.preventDefault()
        return false
      })

      // Prevent context menu
      editorElement.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        return false
      })

      // Add wheel event listener
      editorElement.addEventListener('wheel', handleEditorWheel, {
        passive: false,
      })

      // Apply additional security measures
      editor.onDidChangeCursorSelection(() => {
        editor.setSelection(new monaco.Selection(0, 0, 0, 0))
      })
    }
  }

  const handleEditorWheel = (e) => {
    const editor = editorRef.current
    if (!editor) return

    const editorContent = editor.getModel()
    const lineCount = editorContent.getLineCount()
    const visibleRange = editor.getVisibleRanges()[0]

    const isAtTop = visibleRange.startLineNumber === 1
    const isAtBottom = visibleRange.endLineNumber === lineCount

    if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
      e.preventDefault()
      window.scrollBy(0, e.deltaY)
    } else {
      e.preventDefault()
      const scrollTop = editor.getScrollTop()
      editor.setScrollTop(scrollTop + e.deltaY)
    }
  }

  let isMobile = null

  useEffect(() => {
    const updateEditorOptions = () => {
      const isMobile = window.innerWidth < 768
      setIsResizable(!isMobile)
      setEditorWidth(isMobile ? '98%' : editorWidth)
      setEditorHeight(isMobile ? '50%' : editorHeight)

      setEditorOptions({
        minimap: { enabled: !isMobile },
        scrollBeyondLastLine: false,
        fontSize: isMobile ? 12 : 15,
        wordWrap: 'on',
        lineNumbers: isMobile ? 'off' : 'on',
        tabSize: 2,
        automaticLayout: true,
        scrollbar: {
          vertical: isMobile ? 'hidden' : 'visible',
          horizontal: 'visible',
          handleMouseWheel: true,
          alwaysConsumeMouseWheel: false,
        },
        readOnly: true,
        domReadOnly: true,
        selectionHighlight: false,
        occurrencesHighlight: false,
        contextmenu: false,
        // Disable quick suggestions and other interactive features
        quickSuggestions: false,
        parameterHints: false,
        suggestOnTriggerCharacters: false,
        hover: false,
      })
    }

    updateEditorOptions()
    window.addEventListener('resize', updateEditorOptions)

    // Disable copy functionality globally when editor mounts
    const handleCopy = (e) => {
      if (!e.target.closest('.allow-copy')) {
        e.preventDefault()
        return false
      }
    }

    document.addEventListener('copy', handleCopy)

    return () => {
      window.removeEventListener('resize', updateEditorOptions)
      document.removeEventListener('copy', handleCopy)
      const editorElement = editorRef.current?.getDomNode()
      if (editorElement) {
        editorElement.removeEventListener('wheel', handleEditorWheel)
      }
    }
  }, [editorWidth, editorHeight])

  const editorComponent = (
    <div
      ref={editorContainerRef}
      className="relative"
      style={{
        width: '100%',
        height: '94%',
        borderRadius: '10px',
        overflow: 'hidden',
        margin: '0 5px',
        zIndex: '1',
        boxSizing: 'border-box',
        border: '2px solid #F51524',
      }}
    >
      {/* Invisible overlay to prevent direct text selection */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          position: 'relative',
          height: '100%',
        }}
      >
        <Editor
          height="100%"
          language={language}
          theme={theme === 'dark' ? 'vs-dark' : 'light'}
          value={solution}
          onMount={handleEditorDidMount}
          options={editorOptions}
          className="prevent-select"
        />
      </div>
    </div>
  )

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .prevent-select {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      .monaco-editor .view-line {
        user-select: none !important;
        pointer-events: none !important;
      }
      
      .monaco-editor .view-lines {
        user-select: none !important;
        pointer-events: none !important;
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <div
      className={`flex flex-col h-full overflow-hidden ${theme} prevent-select`}
    >
      <div className="flex justify-between mb-1 md:mx-1">
        <motion.button
          onClick={fetchSolution}
          disabled={loading}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`bg-accent md:px-4 px-3 py-1 md:py-2 rounded-md text-white
        font-semibold md:font-bold ${
          loading ? 'bg-accent cursor-not-allowed' : 'bg-accent hover:bg-accent'
        }`}
        >
          {loading ? 'Magic ...' : 'Explain Me'}
        </motion.button>

        <motion.button
          onClick={copyToClipboard}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-accent md:px-4 px-3 py-1 md:py-2 rounded-md text-white
        font-semibold md:font-bold "
        >
          Copy
        </motion.button>
      </div>

      <Resizable
        enable={{ right: isResizable }}
        defaultSize={{
          width: '100%',
          height: '100%',
        }}
        size={{ width: editorWidth, height: editorHeight }}
        onResizeStop={(e, direction, ref, d) => {
          setEditorWidth((prevWidth) => {
            const newWidth = parseInt(prevWidth) + d.width
            return `${newWidth}px`
          })
        }}
      >
        {editorComponent}
      </Resizable>

      {isExplanationModalOpen && (
        <Modal
          isOpen={isExplanationModalOpen}
          title="Deva "
          onClose={() => setIsExplanationModalOpen(false)}
        >
          <div className="mt-8 p-4 border rounded bg-white shadow-md overflow-auto">
            <FormattedText text={result} />
          </div>
        </Modal>
      )}
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
              disabled={loading}
              className={`px-4 py-2 rounded text-white font-semibold ${
                loading
                  ? 'bg-accent cursor-not-allowed'
                  : 'bg-black hover:bg-accent'
              }`}
            >
              {loading ? 'Fetching Response...' : 'Submit Query'}
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
  )
}

const globalStyles = `
  .prevent-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`

export default CodeEditor
