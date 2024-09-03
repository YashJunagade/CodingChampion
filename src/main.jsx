import React from "react"
import ReactDOM from "react-dom/client"
import AppWrapper from "./App"
import { UserProvider } from "./store/UserContext" // Adjust the path accordingly

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <AppWrapper />
    </UserProvider>
  </React.StrictMode>
)
