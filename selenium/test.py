#Implementation of Selenium WebDriver with Python using PyTest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from time import sleep


def test_search_by_country():
    
    chrome_driver = webdriver.Chrome()
    chrome_driver.implicitly_wait(5) # seconds

    chrome_driver.get('http://64.226.66.76')
    chrome_driver.maximize_window()
    title = 'Near Birds'

    sleep(2)
    assert title == chrome_driver.title

    country_selector_Egypt = chrome_driver.find_element(by=By.XPATH,value="//*[@id='root']/div/div/div[2]/main/div[1]/div[1]/select/option[47]")
    country_selector_Egypt.click()
    assert title == chrome_driver.title
    sleep(2)
    chrome_driver.quit()

def test_search_by_bird():
    chrome_driver = webdriver.Chrome()
    chrome_driver.implicitly_wait(8) # seconds

    chrome_driver.get('http://64.226.66.76')
    chrome_driver.maximize_window()
    title = 'Near Birds'

    sleep(2)
    assert title == chrome_driver.title

    element = chrome_driver.find_element(by=By.XPATH,value= '//*[@id="simple-search"]')
    element.send_keys("Red-breasted")
    element.send_keys(Keys.RETURN)
    search_query = "Red-breasted"
    sleep(3)

    lt_link = chrome_driver.find_element(by=By.XPATH,value="//*[@id='root']/div/div/div[2]/main/div[2]/div[1]/ul/li[1]/div/div[1]/h3")
    assert search_query in lt_link.text  
    sleep(2)
    chrome_driver.quit()

