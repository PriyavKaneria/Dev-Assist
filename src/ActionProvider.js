// ActionProvider starter code
import Cookies from 'universal-cookie'

const mycookie = new Cookies();

function store(code) {
	mycookie.set('code', code, { path: '/' });
	console.log(mycookie.get('code'));
}

class ActionProvider {
	constructor(createChatBotMessage, setStateFunc, createClientMessage) {
		this.createChatBotMessage = createChatBotMessage
		this.setState = setStateFunc
		this.createClientMessage = createClientMessage
	}

    answer(message) {
		const answerMessage = this.createChatBotMessage(message["message"])
		this.updateChatbotState(answerMessage)
        const ansCodeMessage = this.createChatBotMessage("This is the code👇🏻",
            {
				widget: "CodeViewer",
                loading: true,
                terminateLoading: true,
                withAvatar: true,
            })
        this.updateChatbotState(ansCodeMessage)
		store(message["code"])
    }

	greet() {
		const greetingMessage = this.createChatBotMessage("Hi, friend.")
		this.updateChatbotState(greetingMessage)
	}

    dont_be_silent() {
        const dbsMessage = this.createChatBotMessage("Please say something don't be silent :(")
		this.updateChatbotState(dbsMessage)
    }

    ask_for_code() {
		const afcMessage = this.createChatBotMessage("Do you have any code related to this? (Say 'no' or enter code)")
		this.updateChatbotState(afcMessage)
	}

	updateChatbotState(message) {
		this.setState((prevState) => ({
			...prevState,
			messages: [...prevState.messages, message],
		}))
		console.log("done");
	}
}

export default ActionProvider
