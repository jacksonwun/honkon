from bs4 import BeautifulSoup
from slugify import slugify
from dotenv import load_dotenv
import boto3

from datetime import date
import logging, os, requests, json

load_dotenv()
# AWS S3 credentials
access_key = os.getenv("AWS_S3_ACCESS_KEY_ID")
secret_key = os.getenv("AWS_S3_SECRET_ACCESS_KEY")
region_name = os.getenv("AWS_S3_REGION_NAME")
bucket_name = os.getenv("AWS_S3_STORAGE_BUCKET_BACKEND_STATIC")
file_name = str(date.today()) + '.json'
s3 = boto3.client('s3', aws_access_key_id=access_key, aws_secret_access_key=secret_key, region_name=region_name )


# Logging
target_name = str(os.path.basename(__file__))[:-3] # Ignore .py
log_format = "%(asctime)s::%(levelname)s::%(name)s::"\
             "%(filename)s::%(lineno)d::%(message)s"
logging.basicConfig(filename= target_name +'.log', level='INFO', format=log_format)


def get_from_starfreebie(slug, to_s3=False):
    file_folder = str(date.today())
    url = f"https://starfreebies.co.uk/{slug}/"
    response = requests.get(url)

    soup = BeautifulSoup(response.content, "html.parser")
    try:
        # Find the coupon content
        coupon_content = soup.find("div", class_="entry-content")
        if not coupon_content:
            logging.error(f"coupon_content: {coupon_content}")

        # Locate the coupon title
        coupon_content_title = soup.find("h1", class_="entry-title")
        coupon_title = coupon_content_title.text

        # Locate the coupon link
        coupon_link_eles = coupon_content.find_all("a", href=True)
        coupon_links = []
        for coupon_link_ele in coupon_link_eles:
            coupon_links.append(coupon_link_ele['href'])

        # Locate the coupon code
        content=''
        for con in coupon_content.find_all('p'):
            content+=con.text
        coupon_text = content
        coupon_code = coupon_content.find('pre')
        if coupon_code:
            coupon_code = coupon_code.text    
    except:
        logging.error("HTML id Not found")
        return f"Add {slug} failure! "

    try:
        data = {}
        if coupon_text and coupon_title:
            logging.info(f'coupon_title: {coupon_title}')
            logging.info(f'coupon_text: {coupon_text}')
            logging.info(f'coupon_link: {list(set(coupon_links[:-8]))}')
            logging.info(f'coupon_code: {coupon_code}')
            data['coupon_title'] = coupon_title
            data['coupon_text'] = coupon_text
            data['coupon_link'] = list(set(coupon_links[:-8]))
            data['coupon_code'] = coupon_code
            with open(f'{target_name}/{slugify(coupon_title)}.json', "w+", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            if to_s3:
                with open(f'{target_name}/{slugify(coupon_title)}.json', "rb") as f:
                    try:
                        s3.upload_fileobj(f, bucket_name, f'{file_folder}/{slug}.json')
                    except:
                        return f"Cannot add {slug} to S3! "
    except Exception as e:
        logging.error(f"HTML text Not found: {e}")
        return f"Add {slug} failure! "

    return f"Add {slug} success! "


if __name__ == '__main__':
    print(get_from_starfreebie("free-argos-10-spend-via-cashback-topcashback", True))