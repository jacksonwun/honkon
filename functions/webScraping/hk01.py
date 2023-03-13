import requests
from bs4 import BeautifulSoup
import logging

log_format = "%(asctime)s::%(levelname)s::%(name)s::"\
             "%(filename)s::%(lineno)d::%(message)s"
logging.basicConfig(filename= str(__name__) +'.log', level='INFO', format=log_format)

url = "https://www.hk01.com/%E7%86%B1%E7%88%86%E8%A9%B1%E9%A1%8C/874076/%E5%85%A7%E5%9C%B0%E5%A5%B3%E4%BE%86%E6%B8%AF%E6%97%85%E9%81%8A%E5%A5%BD%E5%BE%8C%E6%82%94-%E7%82%BA%E4%BB%80%E9%BA%BC%E6%B2%92%E6%8F%90%E9%86%92%E8%A6%81xxx%E5%91%A2-%E5%91%BB%E6%B7%AA%E8%90%BD%E5%88%B0%E8%A6%81%E5%92%81%E5%81%9A"
response = requests.get(url)

soup = BeautifulSoup(response.content, "html.parser")

try:
    article_content = soup.find("article", id="article-content-section")
    article_content_title = soup.find("h1", id="articleTitle")
except:
    logging.error("HTML id Not found")

try:
    article_text = article_content.text
    article_title = article_content_title.text
    if article_text and article_title:
        logging.info(article_title)
        logging.info(article_text)
        with open(f'{str(__name__)}/{article_title}.txt', "w", encoding="utf-8") as f:
            f.write(article_text)    
except Exception as e:
    logging.error(f"HTML text Not found: {e}")


