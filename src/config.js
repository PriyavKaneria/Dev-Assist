// Config starter code
import React, { useEffect } from "react"
import $ from "jquery"
import { createChatBotMessage } from "react-chatbot-kit"
import Cookies from 'universal-cookie'

import { ReactComponent as RoboIcon } from "../src/logo.svg";

import parserTypeScript from "prettier/parser-typescript";
import prettier from "prettier/standalone";

const BotAvatar = () => {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
        <div className="react-chatbot-kit-chat-bot-avatar-container">
            <RoboIcon className="react-chatbot-kit-chat-bot-avatar-icon" />
        </div>
        </div>
    );
};


const CodeViewer = (props) => {
    const { setState } = props;
// fetch().then(res => res.json()).then((data) => {
    // useEffect(() => {
        
    // })
    var mycookie = new Cookies();
    var code = mycookie.get('code');
    console.log("hello");
    console.log(code);
    // code = prettier.format(code, {parser: "typescript",plugins: [parserTypeScript]});
    // $(".code-viewer-container").innerText = code;
    // console.log($(".code-viewer-container").innerText);
    return (
      <div>
        <div className="code-viewer-container">
            <pre><code>{code}</code></pre>
        </div>
      </div>
    );
};

const config = {
	botName: "DevAssistant",
	initialMessages: [
		createChatBotMessage("Hi, I'm here to help you with your coding doubts. Shoot me with your doubts?"),
	],
	customComponents: {
        // Replaces the default header
        header: () => <div className="Chatbot-header">DevAssist</div>,
        // Replaces the default bot avatar
        botAvatar: (props) => <BotAvatar {...props} />,
        // Replaces the default bot chat message container
        // botChatMessage: (props) => <CustomChatMessage {...props} />,
        // Replaces the default user icon
        // userAvatar: (props) => <MyUserAvatar {...props} />,
        // Replaces the default user chat message
        // userChatMessage: (props) => <MyUserChatMessage {...props} />
        },
        // Defines an object of custom styles if you want to override styles
    customStyles: {
        // Overrides the chatbot message styles
        // botMessageBox: {
        //     backgroundColor: "grey",
        // },
        // Overrides the chat button styles
        // chatButton: {
        //     backgroundColor: "#5ccc9d",
        // },
    },
    widgets: [
        {
          widgetName: "CodeViewer",
          widgetFunc: (props) => <CodeViewer {...props} />,
        }
    ]
}

export default config
