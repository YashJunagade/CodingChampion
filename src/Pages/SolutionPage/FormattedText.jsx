import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const FormattedText = ({ text }) => {
  return (
    <div className="formatted-text prose prose-sm max-w-none space-y-4">
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={tomorrow}
                language={match[1]}
                PreTag="div"
                className="my-4"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          p: ({ children }) => <p className="my-3">{children}</p>,
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold my-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold my-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-medium my-2">{children}</h3>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 my-3">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 my-3">{children}</ol>
          ),
          li: ({ children }) => <li className="my-1">{children}</li>,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  )
}

export default FormattedText
