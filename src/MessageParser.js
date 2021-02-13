// MessageParser starter code
var temp="";
var code=false;
class MessageParser {
	
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider
		this.state = state
	}
	
	parse(message) {
        message = message.toLowerCase();
        message = message.trim();
        console.log({temp});
        if(message===""){
            this.actionProvider.dont_be_silent()
        }
        else
        {
            if(temp==="" && !code){
                code=true;
                temp = message;
                this.actionProvider.ask_for_code()
            }
            else{
                // Fetch data using temp and message
                if(message==="no") {
                    console.log("User not provided code");
                    message = ""
                }
                var formData = new FormData();
                formData.append("search",temp)
                console.log(temp);
                console.log(message);
                fetch('http://localhost:3000/inputValue',
                    {method: 'POST', mode: 'cors', body: formData})
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(JSON.stringify(data)==="{}") {
                        this.actionProvider.answer("No relevant data found. Sry:(")
                    }
                    else{
                        this.actionProvider.answer(data)
                    }
                })
                .catch(console.error)
                // fetch data(temp,message)
                temp = "";
                code=false;
            }
        }
	}
}

export default MessageParser

// html dat property ```<html><body></body></html>```
