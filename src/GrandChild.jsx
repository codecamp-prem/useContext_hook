import { useContext } from "react"
import { ThemeContext } from "./App"

export function GrandChild(){
    const {isDarkMode, toggleTheme} = useContext(ThemeContext)
    return (
    <>
      <button style={{
        background: isDarkMode ? "white" : "#333",
        color: isDarkMode ? "#333" : "white",
        border: "none",
        padding: ".5em",
        borderRadius: ".25em",
        cursor: "pointer"
      }}
      onClick={toggleTheme}
      >
        Toggle Theme(Function Component)
      </button>
      <p>
        Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. 
        Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text.
        </p>
    </>
    )
}