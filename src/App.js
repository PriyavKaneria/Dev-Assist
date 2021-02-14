import React from "react"
import { DarkToggle } from "./DarkToggle";
import Chatbot from "react-chatbot-kit"
import "./App.css"
import "./DarkToggle.css"

import ActionProvider from "./ActionProvider"
import MessageParser from "./MessageParser"
import config from "./config"

function App() {
  // <ThemeProvider>
  {/* const { theme, setTheme } = useTheme(); */}
	return (
		<div className='App'>
			<header className='App-header'>
				<Chatbot
					config={config}
					actionProvider={ActionProvider}
					messageParser={MessageParser}
				/>
				{/* <div className='react-chatbot-kit-chat-input-container'>
            <textarea className='react-chatbot-kit-chat-textarea' onChange={this.handlechange}></textarea>
				</div> */}
			</header>
      <DarkToggle />
		</div>
	)
  // </ThemeProvider>
}

// $("input.react-chatbot-kit-chat-input").each(function () {
//   var $txtarea = $("<textarea />");
//   $txtarea.attr("id", this.id);
//   $txtarea.attr("rows", 2);
//   $txtarea.attr("cols", 60);
//   $txtarea.val(this.value);
//   $txtarea.addClass(this.className);
//   $(this).replaceWith($txtarea);
// });

export default App
