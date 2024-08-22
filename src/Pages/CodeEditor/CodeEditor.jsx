import SplitPane from "react-split-pane";
import "./CodeEditor.css";
import Navbar from "../Home/Navbar";

function CodeEditor() {
  return (
    <div className="codeEditor">
      <Navbar />
      <SplitPane
        className="splitContainer"
        split="vertical"
        resizerClassName="resizer"
        defaultSize="40%" // Set the default size of the first panel to 40%
        minSize={50}
        onChange={(size) => localStorage.setItem("splitPos", size)}
      >
        <div className="panel panel1">this is elon musk</div>
        <div className="panel panel2">
          <h2>Panel 2</h2>
          <p>Content for panel 2</p>
        </div>
      </SplitPane>
    </div>
  );
}

export default CodeEditor;
