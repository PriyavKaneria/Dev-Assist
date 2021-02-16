from flask import Flask, render_template, flash, request, redirect, url_for
from flask_cors import CORS, cross_origin
from fastapi.encoders import jsonable_encoder
import json
import requests as rq
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys

options = webdriver.ChromeOptions()
options.headless = True
options.add_argument("--disable-infobars")
options.add_argument("--enable-file-cookies")

app = Flask(__name__,)
cors = CORS(app)

@app.route('/')
@cross_origin()
def home():
    return "Api is working! welcome"

@app.route('/api/inputValue', methods=['POST'])
@cross_origin()
def getQuery():
    query = request.form['search'] + ' stack overflow'
    print(query)
    code="No related code"
    try:
        driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
        driver.implicitly_wait(10)
        google = driver.get("https://www.google.com/")
        driver.find_element(By.NAME, "q").send_keys(query, Keys.ENTER)
        driver.find_element(By.TAG_NAME, "h3").click()
        code = driver.find_element(By.CLASS_NAME, "accepted-answer").find_element(By.TAG_NAME, "pre").text
        message = driver.find_element(By.CLASS_NAME, "s-prose").text
        driver.quit()
    except:
        message=""
        driver.quit()
    if message!="":
        return {"message":message.text, "code":code.text}
    else:
        return {}
    
if __name__ == "main":
    app.run(host='0.0.0.0')

