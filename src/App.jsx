import { createContext, useEffect, useState } from "react"
import { Child } from "./Child"

export const ThemeContext = createContext() // context name should start with capital letter

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleTheme(){
    setIsDarkMode(d => !d)
  }

  useEffect(() => {
    document.body.style.background = isDarkMode ? "#333" : "white"
    document.body.style.color = isDarkMode ? "white" : "#333"
  },[isDarkMode])

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      <Child />
    </ThemeContext.Provider>
  )
}

export default App
