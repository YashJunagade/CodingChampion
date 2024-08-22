import Editor from "@monaco-editor/react";

function CodeEditor() {
  const code = "console.log('Monaco Editor!');";

  const language = "javascript";

  return (
    <Editor
      height="100%"
      width="100%"
      language={language}
      theme="vs-dark"
      value={code}
    />
  );
}

export default CodeEditor;
