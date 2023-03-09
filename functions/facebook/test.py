#import Facebook_scraper class from facebook_page_scraper
from facebook_page_scraper import Facebook_scraper
from dotenv import load_dotenv
import os, json, re
load_dotenv()

FACEBOOK_ACCOUNT = os.getenv("FACEBOOK_ACCOUNT")
FACEBOOK_PASSWORD = os.getenv("FACEBOOK_PASSWORD")

#instantiate the Facebook_scraper class

page_name = "385397094898737"
posts_count = 1
browser = "chrome"
proxy = f"{FACEBOOK_ACCOUNT}:{FACEBOOK_PASSWORD}@IP:PORT" #if proxy requires authentication then user:password@IP:PORT
timeout = 600 #600 seconds
headless = True
meta_ai = Facebook_scraper(page_name, posts_count, browser, timeout=timeout, headless=headless )#, proxy=proxy)

json_data = meta_ai.scrap_to_json()
print(json_data)