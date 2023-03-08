import os
import openai
from dotenv import load_dotenv
import codecs

load_dotenv()

with open('input/news.txt') as f:
    contents = f.read()
    print(contents)

openai.api_key = os.getenv("OPENAI_API_KEY")
response = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "You are an assistant to help rephrase passages and translate them to 繁體中文."},
        {"role":"assistant","content":"Alright"},
        {"role":"user", "content":"Please rephrase (to english) and translate the following article to 繁體中文 with title, slug (This field is in English), description(Around 30 words) and the main content (No less than 300 words in rich text format), remember to start a new paragraph when it should:",},
        {"role":"user", "content": contents}
    ],
)

print(response)
decoded_value = response['choices'][0]['message']['content'].encode().decode('utf-8')
print(decoded_value)