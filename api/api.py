from flask import Flask, render_template, flash, request, redirect, url_for
from flask_cors import CORS, cross_origin
from fastapi.encoders import jsonable_encoder
import json
import requests as rq
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys

options = webdriver.ChromeOptions()
options.headless = True

app = Flask(__name__,static_folder='/build',static_url_path='')
cors = CORS(app)

@app.route('/')
@cross_origin()
def home():
    return "Api is working! welcome"

@app.route('/api/inputValue', methods=['POST'])
@cross_origin()
def getQuery():
    query = request.form['search'] + ' stackoverflow'
    print(query)
    try:
        driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
        driver.implicitly_wait(10)
        driver.get("https://www.google.com/")
        driver.find_element(By.XPATH, "/html/body/div[1]/div[3]/form/div[2]/div[1]/div[1]/div/div[2]/input").send_keys(query, Keys.ENTER)
        link = driver.find_element(By.TAG_NAME, "h3")
        link.click()
        code = driver.find_element(By.XPATH, "/html/body/div[4]/div[2]/div/div[1]/div[3]/div[3]/div[2]/div/div[2]/div[1]/pre")
        message = driver.find_element(By.XPATH, "/html/body/div[4]/div[2]/div/div[1]/div[3]/div[3]/div[2]/div/div[2]/div[1]")
    except:
        return {}
    # print(preTags.text)
    return {"message":message.text, "code":code.text}
    
if __name__ == "main":
    app.run(host='0.0.0.0')

