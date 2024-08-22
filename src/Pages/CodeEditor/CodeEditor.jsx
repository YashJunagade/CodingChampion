import SplitPane from "react-split-pane";
import "./CodeEditor.css";

function CodeEditor() {
  return (
    <SplitPane
      split="vertical"
      resizerClassName="resizer"
      defaultSize={parseInt(localStorage.getItem("splitPos"), 10)}
      onChange={(size) => localStorage.setItem("splitPos", size)}
      minSize={50}
    >
      <div className="panel panel1">this is elon musk</div>
      <div className="panel panel2">
        <h2>Panel 2</h2>
        <p>Content for panel 2</p>
      </div>
    </SplitPane>
  );
}
export default CodeEditor;
