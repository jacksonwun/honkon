"""
Django settings for honkon project.

Generated by 'django-admin startproject' using Django 4.1.7.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""
import os
from pathlib import Path
from dotenv import load_dotenv
import dj_database_url

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(os.path.join(BASE_DIR, ".env"))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")
STRIPE_PUBLISHABLE_KEY = os.getenv("STRIPE_PUBLISHABLE_KEY")
STRIPE_SECRET_KEY = os.getenv("STRIPE_SECRET_KEY")
DOMAIN_URL = os.getenv("DOMAIN_URL")

# SECURITY WARNING: don't run with debug turned on in production!
if str(os.getenv("RAILWAY")) == '1':
    RAILWAY = True
else:
    RAILWAY = False

if str(os.getenv("DEBUG")) == '1':
    DEBUG = True
    DJANGO_CPROFILE_MIDDLEWARE_REQUIRE_STAFF = False
    DEBUG_TOOLBAR_CONFIG = {
        'INTERCEPT_REDIRECTS': False,
    }
    CORS_ALLOW_ALL_ORIGINS = True
    NOSE_ARGS = ['--nocapture',
                '--nologcapture',]
    ALLOWED_HOSTS = ['*']
    INTERNAL_IPS=['*','127.0.0.1','localhost']
    CHANNEL_LAYERS = {
        "default": {
            "BACKEND": "channels_redis.core.RedisChannelLayer",
            "CONFIG": {
                "hosts": [ 
                    ("localhost", os.getenv("REDIS_DATABASE_PORT"))
                ],
            },
        },
    }
else:
    DEBUG = False
    CORS_ALLOW_ALL_ORIGINS = True    
    if INTERNAL_IPS:
        INTERNAL_IPS = os.environ.get('INTERNAL_IPS').split(",")
    if ALLOWED_HOSTS:
        ALLOWED_HOSTS = os.environ.get("ALLOWED_HOSTS").split(",")
    if CORS_ALLOWED_ORIGINS:
        CORS_ALLOWED_ORIGINS = os.environ.get("CORS_ALLOWED_ORIGINS").split(",")

    CHANNEL_LAYERS = {
        "default": {
            "BACKEND": "channels_redis.core.RedisChannelLayer",
            "CONFIG": {
                "hosts": [ 
                    ("10.245.125.43", os.getenv("REDIS_DATABASE_PORT"))
                ],
            },
        },
    }

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
    'DEFAULT_PERMISSION_CLASSES': (
        #'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (    
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}


# Application definition

INSTALLED_APPS = [
    'ckeditor',    
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'rest_framework.authtoken',
    'rest_framework_simplejwt',

    # Self
    'articles',
    'articles.api',
    'users'

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'honkon.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'honkon.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

if RAILWAY:
    DATABASE_URL = os.getenv("DATABASE_URL")
    DATABASES = {
        "default": dj_database_url.config(default=DATABASE_URL, conn_max_age=1800),
    }

    REDIS_DATABASE_URL = os.getenv("REDIS_DATABASE_URL")    
    CHANNEL_LAYERS = {
        "default": {
            "BACKEND": 'channels_redis.core.RedisChannelLayer', 
            'CONFIG':{
                'hosts': [REDIS_DATABASE_URL],
            }
        }
    }
else:
    DATABASES = {
        'default': {
                "ENGINE": "django.db.backends.postgresql",
                "NAME": os.getenv("POSTGRES_DB"),
                "USER": os.getenv("POSTGRES_USER"),
                "PASSWORD": os.getenv("POSTGRES_PASSWORD"),
                'HOST': os.getenv("POSTGRES_HOST"),
                "PORT": os.getenv("POSTGRES_PORT"),
            }
        }
    # REPLICA_DATABASE_URL = os.getenv("REPLICA_DATABASE_URL")
    # if REPLICA_DATABASE_URL:
    #     DATABASES['replica'] = dj_database_url.config(default=REPLICA_DATABASE_URL, conn_max_age=1800)


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

# S3
AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = os.getenv('AWS_STORAGE_BUCKET_NAME')
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
AWS_S3_OBJECT_PARAMETERS = { 'CacheControl': 'max-age=86400', }
AWS_S3_REGION_NAME = os.getenv('AWS_S3_REGION_NAME')
AWS_S3_CUSTOM_DOMAIN = '%s.s3.%s.amazonaws.com' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_REGION_NAME)
AWS_LOCATION = ''

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(os.path.dirname(BASE_DIR), "static")
TEMP = os.path.join(BASE_DIR, 'temp')
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
