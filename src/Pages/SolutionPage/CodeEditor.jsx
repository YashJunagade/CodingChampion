import Editor from "@monaco-editor/react";

function CodeEditor({ language, solution }) {
  return (
    <Editor
      height="100%"
      width="100%"
      language={language}
      theme="vs-dark"
      value={solution}
    />
  );
}

export default CodeEditor;
