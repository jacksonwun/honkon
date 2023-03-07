import os
import openai
from dotenv import load_dotenv
import codecs

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")
response = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "You are an assistant to help rephrase passages and translate them to 繁體中文."},
        {"role":"assistant","content":"Alright"},
        {"role":"user", "content":"Please rephrase (to english) and translate the following article to 繁體中文 with title, slug (This field is in English), description(Around 30 words) and the main content (No less than 300 words in rich text format), remember to start a new paragraph when it should:",},
        {"role":"user", "content": "Snow and icy conditions to hit London as yellow alert issued. Londoners could see snow in the capital this week as weather conditions take an icy turn. A Met Office yellow weather warning is in place for large parts of the UK until Wednesday, as an Arctic blast brings freezing conditions. Roads and railways could be disrupted with longer journey times predicted. The heaviest snowfall is expected in the north and east of the UK, but some snow and hazardous icy roads and pavements are expected in the capital. Northern and eastern regions of the country could see up to 10cm (4in) of snowfall. An incoming area of high pressure has brought an end to the recent mild conditions, which are shifting to the west, allowing a northerly airflow to sweep in.The Met Office's deputy chief meteorologist, Chris Almond, said: 'With freezing overnight temperatures and the risk of ice, there's a risk of some travel disruption and wintry hazards are likely to persist.' A very cold start is expected for London on Tuesday, with a low of -1C and a band of rain and sleet set to move in from the north. Temperatures may feel more like -3C. Wednesday is expected to be cold with spells of snow in the morning and early afternoon. Thursday will turn milder, but still with chances of snow and sleet throughout the day.Friday will be windy and unsettled with some patchy rain spreading in from the south west, clearing away through the day."}
    ],
)

print(response)
decoded_value = response['choices'][0]['message']['content'].encode().decode('utf-8')
print(decoded_value)