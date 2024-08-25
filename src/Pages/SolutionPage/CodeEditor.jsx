import Editor from "@monaco-editor/react";
import Groq from "groq-sdk";
import FormattedText from "./FormattedText";
import Modal from "./Modal"; // Import the Modal component
import { useState } from "react";
import "./CodeEditor.css";

const apiKeys = [
  import.meta.env.VITE_GROQ_API_KEY_1,
  import.meta.env.VITE_GROQ_API_KEY_2,
  import.meta.env.VITE_GROQ_API_KEY_3,
];

const models = [
  "gemma-7b-it",
  "gemma2-9b-it",
  "llama-3.1-70b-versatile",
  "llama-3.1-8b-instant",
  "llama3-70b-8192",
  "llama3-8b-8192",
  "llama3-groq-70b-8192-tool-use-preview",
  "llama3-groq-8b-8192-tool-use-preview",
  "mixtral-8x7b-32768",
];

function CodeEditor({ language, solution }) {
  const [result, setResult] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0); // State to manage the current API key
  const [currentModelIndex, setCurrentModelIndex] = useState(0); // State to manage the current model
  const [loading, setLoading] = useState(false); // State to manage loading status

  const fetchSolution = async () => {
    const apiKey = apiKeys[currentKeyIndex];
    const model = models[currentModelIndex];

    if (!apiKey) {
      console.error("API key is not defined");
      return;
    }

    const groq = new Groq({
      apiKey,
      dangerouslyAllowBrowser: true, // Allows the SDK to work in the browser
    });

    setLoading(true); // Set loading to true while fetching the solution

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `${solution} exaplain the given code to me in simple words. also explain how each function works in brief. give sample input and output for the program`,
          },
        ],
        model, // Use the selected model
      });

      setResult(chatCompletion.choices[0]?.message?.content || "");
    } catch (error) {
      console.error("Error fetching solution:", error);
      setResult("An error occurred while fetching the solution.");
    } finally {
      // Rotate the API key index
      setCurrentKeyIndex((prevIndex) => (prevIndex + 1) % apiKeys.length);
      // Randomly select a model from the models array
      setCurrentModelIndex(Math.floor(Math.random() * models.length));
      setIsModalOpen(true); // Open the modal after fetching the solution or in case of error
      setLoading(false); // Set loading to false when done
    }
  };

  return (
    <>
      <button onClick={fetchSolution} disabled={loading} className="btn">
        {loading ? "Wait Magic Is Happing..." : "Explain Me"}
      </button>
      <Editor
        height="100%"
        width="100%"
        language={language}
        theme="vs-dark"
        value={solution}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {result && <FormattedText text={result} />}
      </Modal>
    </>
  );
}

export default CodeEditor;
