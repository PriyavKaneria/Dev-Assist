// Config starter code
import { createChatBotMessage } from "react-chatbot-kit"
import { ReactComponent as RoboIcon } from "../src/logo.svg";

const BotAvatar = () => {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
        <div className="react-chatbot-kit-chat-bot-avatar-container">
            <RoboIcon className="react-chatbot-kit-chat-bot-avatar-icon" />
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
        header: () => <div style={{ backgroundColor: '#c60021', padding: "5px", borderRadius: "6px 6px 0px 0px", color: "white" }}>DevAssist</div>,
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
        botMessageBox: {
            backgroundColor: "grey",
        },
        // Overrides the chat button styles
        chatButton: {
            backgroundColor: "#5ccc9d",
        },
    },
    // widgets: [
    //     {
    //       widgetName: "CodeViewer",
    //       widgetFunc: (props) => <CodeViewer {...props} />,
    //       mapStateToProps: ["messages", "selectedAirport", "airports"],
    //     }
    // ]
}

export default config
