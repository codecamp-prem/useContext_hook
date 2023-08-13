import { ThemeContext } from "./App";
import React from "react"

export class GrandChildClass extends React.Component {
    render(){
        return (
            <ThemeContext.Consumer>
                {({ isDarkMode, toggleTheme }) => (
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
                        Toggle Theme(Class Component)
                    </button>
                    <p>
                        High order function - Use Function component
                    Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. 
                    Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text.
                    </p>
                    </>
                )} 
            </ThemeContext.Consumer>
        )
    }
}