
from flask import Flask, render_template, flash, request, redirect, url_for
from fastapi.encoders import jsonable_encoder
import json


app = Flask(__name__)

movies = {
    1:{
    'id': 0,
    'question' : 'what is the structure of if-else in javascript ?',
    'message': 'here it is',
    'code' : """if(condition){if condition is true}else{if condition is false}""",
    },
    2:{
    'id': 1,
    'question' : "keep getting can't import 'flask' in the vs code",
    'message': 'try to pylinter from your vs code',
    'code' : """c""",
    },
    3:{
    'id': 2,
    'question':'how can we integrate react with flask',
    'message': 'you can run npx command to combine react and flask',
    'code': """npx create-react-app react-app"""
    },
    4:{
    'id': 3,
    'question':'IndexOutOfbondError@java.util.* 14:15',
    'message':'index out of bond error means you are running out of indexes of your array. this is how you can fix it',
    'code': """for(int i=0;i<arr.length;i++)"""

    },
    5:{
    'id': 4,
    'question':'abc',
    'message':'make sure to import it correctly',
    'code': """export class Class2 extends Component {
callApi = () => {
    Here I call my API, I set & call states, ...
}
render {
    return (
        <Class1 callApi={this.callApi} />
            Here I return my API content
        )    
    }   
}"""
    }

}
@app.route('/')
def home():
    render_template('index.html')

@app.route('/inputValue', methods=['POST'])
def getQuery():
    query = request.form['search']
    jresult = {}
    for item in movies:
        if movies[item]['question'].lower()==query:
            jresult = jsonable_encoder(movies[item].items())
    return jresult
    
if __name__ == "main":
    app.run(debug=True)

