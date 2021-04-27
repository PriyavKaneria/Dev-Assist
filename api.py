from flask import Flask, render_template, flash, request, redirect, url_for
from flask_cors import CORS, cross_origin
import json
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
    message = "Could not fetch answer. Sry"
    try:
        driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
        driver.implicitly_wait(10)
        google = driver.get("https://www.google.com/")
        driver.find_element(By.NAME, "q").send_keys(query, Keys.ENTER)
        driver.find_element(By.TAG_NAME, "h3").click()
        message = driver.find_elements(By.CLASS_NAME, "s-prose")[1].text
        code = driver.find_elements(By.CLASS_NAME, "s-prose")[1].find_element(By.TAG_NAME, "pre").text
        driver.quit()
    except Exception as e:
        print(e)
        driver.quit()
    return {"message":message, "code":code}
    
if __name__ == "main":
    app.run(host='0.0.0.0')

