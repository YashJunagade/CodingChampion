import Editor from '@monaco-editor/react'
import Groq from 'groq-sdk'
import FormattedText from './FormattedText'
import Modal from './Modal' // Import the Modal component
import { useState, useCallback, useRef, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { Resizable } from 're-resizable'

const apiKeys = [
  import.meta.env.VITE_GROQ_API_KEY_1,
  import.meta.env.VITE_GROQ_API_KEY_2,
  import.meta.env.VITE_GROQ_API_KEY_3,
]

const models = [
  'gemma-7b-it',
  'gemma2-9b-it',
  'llama-3.1-70b-versatile',
  'llama-3.1-8b-instant',
  'llama3-70b-8192',
  'llama3-8b-8192',
  'llama3-groq-70b-8192-tool-use-preview',
  'llama3-groq-8b-8192-tool-use-preview',
  'mixtral-8x7b-32768',
]

function CodeEditor({ language, solution }) {
  const [result, setResult] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0)
  const [currentModelIndex, setCurrentModelIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [editorOptions, setEditorOptions] = useState({})
  const [isResizable, setIsResizable] = useState(window.innerWidth > 768)
  const [editorWidth, setEditorWidth] = useState('600px')
  const editorRef = useRef(null)

  const fetchSolution = async () => {
    const apiKey = apiKeys[currentKeyIndex]
    const model = models[currentModelIndex]

    if (!apiKey) {
      console.error('API key is not defined')
      return
    }

    const groq = new Groq({
      apiKey,
      dangerouslyAllowBrowser: true, // Allows the SDK to work in the browser
    })

    setLoading(true) // Set loading to true while fetching the solution

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `${solution} explain the given code to me in simple words. also explain how each function works in brief. give sample input and output for the program`,
          },
        ],
        model, // Use the selected model
      })

      setResult(chatCompletion.choices[0]?.message?.content || '')
    } catch (error) {
      console.error('Error fetching solution:', error)
      setResult('An error occurred while fetching the solution.')
    } finally {
      // Rotate the API key index
      setCurrentKeyIndex((prevIndex) => (prevIndex + 1) % apiKeys.length)
      // Randomly select a model from the models array
      setCurrentModelIndex(Math.floor(Math.random() * models.length))
      setIsModalOpen(true) // Open the modal after fetching the solution or in case of error
      setLoading(false) // Set loading to false when done
    }
  }

  // copying the code logic ->
  const copyToClipboard = useCallback(() => {
    const editorValue = editorRef.current?.getValue() // Get the current value from the editor

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
  }, [])

  // this code will fix the scrolling issue:
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor

    const editorElement = editor.getDomNode()
    if (editorElement) {
      editorElement.addEventListener('wheel', handleEditorWheel, {
        passive: false,
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
      // Allow default scroll behavior when at the top or bottom
      return
    }

    // Prevent default scroll behavior within the editor
    e.preventDefault()

    // Manually scroll the editor
    const scrollTop = editor.getScrollTop()
    editor.setScrollTop(scrollTop + e.deltaY)
  }

  useEffect(() => {
    const updateEditorOptions = () => {
      const isMobile = window.innerWidth < 768
      setIsResizable(!isMobile)
      setEditorWidth(isMobile ? '100%' : editorWidth)

      setEditorOptions({
        minimap: { enabled: !isMobile },
        scrollBeyondLastLine: false,
        fontSize: isMobile ? 12 : 16,
        wordWrap: 'on',
        lineNumbers: isMobile ? 'off' : 'on',
        tabSize: 2,
        automaticLayout: true,
        scrollbar: {
          vertical: 'visible',
          horizontal: 'visible',
          handleMouseWheel: true,
          alwaysConsumeMouseWheel: false,
        },
      })
    }

    updateEditorOptions()
    window.addEventListener('resize', updateEditorOptions)

    return () => {
      window.removeEventListener('resize', updateEditorOptions)
      const editorElement = editorRef.current?.getDomNode()
      if (editorElement) {
        editorElement.removeEventListener('wheel', handleEditorWheel)
      }
    }
  }, [editorWidth])

  const editorComponent = (
    <Editor
      height="100%"
      language={language}
      theme="vs-dark"
      value={solution}
      onMount={handleEditorDidMount}
      options={editorOptions}
    />
  )

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between mb-1">
        <button
          onClick={fetchSolution}
          disabled={loading}
          className={`px-4 py-2 rounded text-white font-semibold ${
            loading
              ? 'bg-primary2 cursor-not-allowed'
              : 'bg-black hover:bg-accent'
          }`}
        >
          {loading ? 'Wait Magic Is Happening...' : 'Explain Me'}
        </button>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 rounded bg-black text-white font-semibold hover:bg-accent"
        >
          Copy
        </button>
      </div>
      <div className="flex-grow">
        {isResizable ? (
          <Resizable
            size={{ width: editorWidth, height: '100%' }}
            minWidth="300px"
            maxWidth="100%"
            enable={{ left: true }}
            onResizeStop={(e, direction, ref, d) => {
              setEditorWidth(ref.style.width)
            }}
            style={{ border: '2px solid red' }}
          >
            {editorComponent}
          </Resizable>
        ) : (
          editorComponent
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="max-h-[80vh] overflow-y-auto p-6">
          {result && <FormattedText text={result} />}
        </div>
      </Modal>
    </div>
  )
}

export default CodeEditor
