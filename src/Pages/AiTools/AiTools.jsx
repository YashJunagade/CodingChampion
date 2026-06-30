import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Helmet } from 'react-helmet'
import Footer from '../../Components/Footer/Footer'
import GoogleAds from '../../GoogleAds'

const tools = [
  {
    name: 'GitHub Copilot',
    category: 'Code',
    emoji: '🤖',
    description:
      'AI pair programmer in your IDE. Helps write, complete, and debug code. Free for students via GitHub Education.',
    freeTier: 'Free for Students',
    url: 'https://github.com/features/copilot',
  },
  {
    name: 'ChatGPT',
    category: 'Code',
    emoji: '💬',
    description:
      'Powerful general-purpose AI for debugging, understanding concepts, and writing code.',
    freeTier: 'Free tier',
    url: 'https://chatgpt.com',
  },
  {
    name: 'Claude',
    category: 'Code',
    emoji: '🧠',
    description:
      'Excellent for code review, explaining complex logic, writing documentation, and long context tasks.',
    freeTier: 'Free tier',
    url: 'https://claude.ai',
  },
  {
    name: 'Gemini',
    category: 'Code',
    emoji: '✨',
    description:
      "Google's AI assistant integrated with Google Workspace. Great for coding and study.",
    freeTier: 'Free tier',
    url: 'https://gemini.google.com',
  },
  {
    name: 'Codeium',
    category: 'Code',
    emoji: '⚡',
    description:
      'Free AI code completion for 70+ programming languages and 40+ editors. No credit card needed.',
    freeTier: 'Always Free',
    url: 'https://codeium.com',
  },
  {
    name: 'Phind',
    category: 'Code',
    emoji: '🔍',
    description:
      'AI search engine built for developers. Searches the web and gives code-focused answers with sources.',
    freeTier: 'Free tier',
    url: 'https://phind.com',
  },
  {
    name: 'Perplexity AI',
    category: 'Study',
    emoji: '🔎',
    description:
      'AI-powered search with real-time web citations. Perfect for research and fact-checking.',
    freeTier: 'Free tier',
    url: 'https://perplexity.ai',
  },
  {
    name: 'NotebookLM',
    category: 'Study',
    emoji: '📓',
    description:
      "Google's AI that lets you upload notes and PDFs and chat with your own study material.",
    freeTier: 'Free',
    url: 'https://notebooklm.google.com',
  },
  {
    name: 'Consensus',
    category: 'Study',
    emoji: '📚',
    description:
      'AI search engine for scientific papers. Great for finding evidence-based answers for assignments.',
    freeTier: 'Free tier',
    url: 'https://consensus.app',
  },
  {
    name: 'Grammarly',
    category: 'Writing',
    emoji: '✍️',
    description:
      'AI writing assistant that checks grammar, style, clarity, and tone as you type.',
    freeTier: 'Free tier',
    url: 'https://grammarly.com',
  },
  {
    name: 'QuillBot',
    category: 'Writing',
    emoji: '🪶',
    description:
      'AI paraphrasing, summarizing, and grammar checking tool popular among students.',
    freeTier: 'Free tier',
    url: 'https://quillbot.com',
  },
  {
    name: 'Canva AI',
    category: 'Design',
    emoji: '🎨',
    description:
      'Design tool with built-in AI image generation, magic editing, and presentation maker.',
    freeTier: 'Free tier',
    url: 'https://canva.com',
  },
  {
    name: 'Adobe Firefly',
    category: 'Design',
    emoji: '🦋',
    description:
      "Adobe's AI image generator. Commercially safe and integrates with Creative Cloud tools.",
    freeTier: 'Free monthly credits',
    url: 'https://firefly.adobe.com',
  },
  {
    name: 'Leonardo AI',
    category: 'Design',
    emoji: '🖼️',
    description:
      'High-quality AI image generation for projects, presentations, and creative assignments.',
    freeTier: 'Free daily credits',
    url: 'https://leonardo.ai',
  },
  {
    name: 'Gamma',
    category: 'Productivity',
    emoji: '📊',
    description:
      'AI-powered presentation and document creator. Generate full slide decks from a single prompt.',
    freeTier: 'Free tier',
    url: 'https://gamma.app',
  },
  {
    name: 'Otter.ai',
    category: 'Productivity',
    emoji: '🎙️',
    description:
      'AI meeting notes and audio transcription. Useful for recording and summarizing lectures.',
    freeTier: 'Free tier',
    url: 'https://otter.ai',
  },
  {
    name: 'Notion AI',
    category: 'Productivity',
    emoji: '📝',
    description:
      'AI built into Notion for writing, summarizing, brainstorming, and organizing your notes.',
    freeTier: 'Limited free',
    url: 'https://notion.so',
  },
]

// Surprise tools — fill in the `url` field when ready
const surpriseTools = [
  {
    id: 1,
    logo: 'https://www.google.com/s2/favicons?domain=groq.com&sz=128',
    url: import.meta.env.VITE_SURPRISE_TOOL_1_URL,
    hint: 'Get AI responses 10x faster than ChatGPT — built for developers who hate waiting. Zero lag, instant output.',
  },
  {
    id: 2,
    logo: 'https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128',
    url: import.meta.env.VITE_SURPRISE_TOOL_2_URL,
    hint: 'Access real-time web info, analyze images, and run deep research — all inside one powerful AI.',
  },
  {
    id: 3,
    logo: 'https://www.google.com/s2/favicons?domain=opencode.ai&sz=128',
    url: import.meta.env.VITE_SURPRISE_TOOL_3_URL,
    hint: 'AI that lives right inside your terminal — write, fix, and ship code without leaving your workflow.',
  },
]

const categories = [
  'All',
  'Code',
  'Study',
  'Writing',
  'Design',
  'Productivity',
]

const categoryColors = {
  Code: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  Study: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  Writing:
    'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  Design: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
  Productivity:
    'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
}

const freeTierBadgeColor = {
  'Always Free': 'bg-green-500',
  Free: 'bg-green-500',
  'Free for Students': 'bg-accent',
  'Free tier': 'bg-gray-500',
  'Free monthly credits': 'bg-gray-500',
  'Free daily credits': 'bg-gray-500',
  'Limited free': 'bg-yellow-500',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  exit: { opacity: 0 },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
}

function ToolCard({ tool }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: '0px 8px 20px rgba(245, 21, 36, 0.2)' }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-even-shadow p-5 flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{tool.emoji}</span>
          <div>
            <h3 className="font-bold text-black dark:text-white text-base leading-tight">
              {tool.name}
            </h3>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[tool.category]}`}
            >
              {tool.category}
            </span>
          </div>
        </div>
        <span
          className={`text-xs text-white font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ml-2 ${freeTierBadgeColor[tool.freeTier] ?? 'bg-gray-500'}`}
        >
          {tool.freeTier}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
        {tool.description}
      </p>

      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto"
      >
        <motion.button
          whileHover={{ scale: 1.03, backgroundColor: '#F51524' }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 bg-black dark:bg-gray-800 text-white rounded-md py-2 text-sm font-semibold transition-colors duration-200"
        >
          Open Tool <ExternalLink size={14} />
        </motion.button>
      </a>
    </motion.div>
  )
}

function SurpriseCard({ tool }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: '0px 8px 20px rgba(245, 21, 36, 0.2)' }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-even-shadow p-5 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-black dark:text-white text-base leading-tight">
            Surprise {tool.id}
          </h3>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
            Special
          </span>
        </div>
        <span className="text-xs text-white font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ml-2 bg-green-500">
          Free
        </span>
      </div>

      {/* Blurred logo */}
      <div className="flex justify-center mb-3">
        <img
          src={tool.logo}
          alt="surprise tool"
          className="w-12 h-12 object-contain rounded-xl blur-lg"
        />
      </div>

      {/* Visible hint — the "special twist" */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 text-center italic">
        "{tool.hint}"
      </p>

      {/* Clickable button — user fills URL later */}
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto"
      >
        <motion.button
          whileHover={{ scale: 1.03, backgroundColor: '#F51524' }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 bg-black dark:bg-gray-800 text-white rounded-md py-2 text-sm font-semibold transition-colors duration-200"
        >
          Open Tool <ExternalLink size={14} />
        </motion.button>
      </a>
    </motion.div>
  )
}

function AiTools() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTools =
    activeCategory === 'All'
      ? tools
      : tools.filter((t) => t.category === activeCategory)
  const showSurpriseCards = activeCategory === 'All'

  return (
    <>
      <Helmet>
        <title>Free AI Tools for Students - CodingChampion</title>
        <meta
          name="description"
          content="Curated list of the best free AI tools for BCA and BBACA students. Find AI tools for coding, study, writing, design, and productivity."
        />
        <script src="https://quge5.com/88/tag.min.js" data-zone="254807" async data-cfasync="false"></script>
      </Helmet>

      <div className="min-h-screen bg-offWhite dark:bg-black pb-16 md:mt-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-8 md:pt-12">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3">
              Free <span className="text-accent">AI Tools</span> for Students
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto">
              Handpicked AI tools to help you code faster, study smarter, and
              create better — all with a free tier.
            </p>
          </motion.div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-1.5 rounded-full font-semibold text-sm transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-accent text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {showSurpriseCards &&
                surpriseTools.map((tool) => (
                  <SurpriseCard key={tool.id} tool={tool} />
                ))}
              {filteredTools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12">
          <GoogleAds
            adSlot="3195881308"
            uniqueKey="ai-tools-bottom"
            baseWidth={1000}
            baseHeight={300}
          />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AiTools
