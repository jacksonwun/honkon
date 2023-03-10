import openai
from dotenv import load_dotenv
import os, json, re, time
from datetime import date
import boto3

import logging
from logging.handlers import RotatingFileHandler

from chatgpt_read import json_chatgpt_string


# AWS S3 credentials
load_dotenv()
access_key = os.getenv("AWS_S3_ACCESS_KEY_ID")
secret_key = os.getenv("AWS_S3_SECRET_ACCESS_KEY")
region_name = os.getenv("AWS_S3_REGION_NAME")
bucket_name = os.getenv("AWS_S3_STORAGE_BUCKET_BACKEND_STATIC")
file_name = str(date.today()) + '.log'
file_folder = 'chatgpt'

s3 = boto3.client('s3', aws_access_key_id=access_key, aws_secret_access_key=secret_key, region_name=region_name )

log_format = "%(asctime)s::%(levelname)s::%(name)s::" \
             "%(filename)s::%(lineno)d::%(message)s"
handler = RotatingFileHandler(f'./log/{file_name}', maxBytes=20000, backupCount=5,     encoding='utf-8')

# Set up logger
logging.basicConfig(level=logging.INFO, format=log_format ,handlers=[handler])

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
    messages=chatgpt_script['Turn article to JSON'],
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

# Save log file to S3
with open('log/' + file_name, "rb") as f:
    s3.upload_fileobj(f, bucket_name, f'{file_folder}/{file_name}')