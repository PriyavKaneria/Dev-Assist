// ActionProvider starter code
class ActionProvider {
	constructor(createChatBotMessage, setStateFunc, createClientMessage) {
		this.createChatBotMessage = createChatBotMessage
		this.setState = setStateFunc
		this.createClientMessage = createClientMessage
	}

    answer(message) {
		const answerMessage = this.createChatBotMessage(message["message"])
		this.updateChatbotState(answerMessage)
        const ansCodeMessage = this.createChatBotMessage(message["code"])
        this.updateChatbotState(ansCodeMessage)
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
	}
}

export default ActionProvider
