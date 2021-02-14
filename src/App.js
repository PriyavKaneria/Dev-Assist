import React from "react"
import { DarkToggle } from "./DarkToggle";
import Chatbot from "react-chatbot-kit"
import "./App.css"
import "./DarkToggle.css"
import Robot from "./robot"

import ActionProvider from "./ActionProvider"
import MessageParser from "./MessageParser"
import config from "./config"
function App() {
  // <ThemeProvider>
	return (
		<div className='App'>
      	<Robot/>
      	<DarkToggle />
			<header className='App-header'>
				<Chatbot
					config={config}
					actionProvider={ActionProvider}
					messageParser={MessageParser}
				/>
			</header>
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
