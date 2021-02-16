// MessageParser starter code
class MessageParser {
	
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider
		this.state = state
	}
	
	parse(message) {
        message = message.toLowerCase();
        message = message.trim();
        if(message===""){
            this.actionProvider.dont_be_silent()
        }
        else
        {
            this.actionProvider.get_best_results()
            // Fetch data using temp and message
            var formData = new FormData();
            formData.append("search",message)
            fetch('http://anshiflutterapp.web.app/inputValue',
                {method: 'POST', mode: 'cors', body: formData})
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(JSON.stringify(data)==="{}") {
                    this.actionProvider.answer("Could not fetch data! :(")
                }
                else{
                    this.actionProvider.answer(data)
                }
            })
            .catch(console.error)
        }
	}
}

export default MessageParser

// html dat property ```<html><body></body></html>```
