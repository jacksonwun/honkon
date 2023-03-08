import openai
from dotenv import load_dotenv
import os, json, re
from chatgpt_read import json_chatgpt_string
import logging
from datetime import date

directory = date.today()
if not os.path.exists(str(directory)):
    os.makedirs(str(directory))

load_dotenv()
log_format = "%(asctime)s::%(levelname)s::%(name)s::"\
             "%(filename)s::%(lineno)d::%(message)s"
# add date
logging.basicConfig(filename=f'{directory}/chatgpt.log', level='INFO', format=log_format)

with open('input/news.txt',"r",encoding='utf-8') as f:
    contents = f.read()
    print(contents)

def run(content):
    chatgpt_script = {
        'Turn article to JSON': [
            {"role": "system", "content": "You are an assistant to help rephrase the article and translate them to 繁體中文."},
            {"role":"assistant","content":"Alright"},
            {"role":"user", "content":"Please rephrase the following article to this format: {'English title': 'This is the english title', 'Chinese Title': 'This is the Chinese Title', 'slug': 'This is the Slug in English', 'English description': 'Around 30 words', 'Chinese description': 'Around 30 words', 'English content': 'rephrase the article to no less than 300 words in English', 'Chinese Content': 'rephrase the article to no Less than 300 words in traditional chinese', 'tags':'some suggested tags for categorize'}",},
            {"role":"user", "content": content}
        ],
        'Repharse an article':[
            {"role": "system", "content": "我會給你一篇文章，你需要把它整合成為全新的一篇新的文章"},
            {"role":"assistant","content":"好的，冇問題"},
            {"role":"user", "content": content}
        ]
    }

    openai.api_key = os.getenv("OPENAI_API_KEY")
    return openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=chatgpt_script['Repharse an article'],
    )

response = run(contents)
logging.info(response)

decoded_value = response['choices'][0]['message']['content'].encode().decode('utf-8')
logging.info(decoded_value)

try:
    sorted_value = json.loads(decoded_value)
except json.decoder.JSONDecodeError:
    try:
        sorted_value = json_chatgpt_string(decoded_value)
    except:
        logging.error('Decode to JSON Error')

if sorted_value:
    logging.info(sorted_value)
    print(sorted_value)