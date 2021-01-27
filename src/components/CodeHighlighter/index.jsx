import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-json'

const CodeHighlighter = ({ language, code }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="code-highlighter">
      <pre>
        <code
          className={`language-${language} formatted-code`}
        >
          {code}
        </code>
      </pre>
    </div>
  )
}

export default CodeHighlighter;
