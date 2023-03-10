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

########################
## SECRET & VARIABLES ##
########################

# INTERNAL
DEBUG = str(os.getenv("DEBUG"))
SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")
INTERNAL_IPS = os.getenv("INTERNAL_IPS")
ALLOWED_HOSTS = os.getenv("ALLOWED_HOSTS")
CORS_ALLOWED_ORIGINS = os.getenv("CORS_ALLOWED_ORIGINS")
CSRF_TRUSTED_ORIGINS =  os.getenv("CSRF_TRUSTED_ORIGINS")

# RAILWAY
RAILWAY = str(os.getenv("RAILWAY"))
DATABASE_URL = str(os.getenv("DATABASE_URL"))

# DATABASE
POSTGRES_DB = os.getenv("POSTGRES_DB")
POSTGRES_USER =  os.getenv("POSTGRES_USER")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
POSTGRES_HOST = os.getenv("POSTGRES_HOST")
POSTGRES_PORT = os.getenv("POSTGRES_PORT")

# REDIS
REDIS_DATABASE_PORT = os.getenv("REDIS_DATABASE_PORT")
REDIS_DATABASE_URL = os.getenv("REDIS_DATABASE_URL")

# STRIPE
STRIPE_PUBLISHABLE_KEY = os.getenv("STRIPE_PUBLISHABLE_KEY")
STRIPE_SECRET_KEY = os.getenv("STRIPE_SECRET_KEY")

# STATIC
STATIC_SOURCE = os.getenv("STATIC_SOURCE")

# AWS S3
AWS_S3_ACCESS_KEY_ID = os.getenv('AWS_S3_ACCESS_KEY_ID')
AWS_S3_SECRET_ACCESS_KEY = os.getenv('AWS_S3_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = os.getenv('AWS_S3_STORAGE_BUCKET_BACKEND_STATIC')
AWS_S3_REGION_NAME = os.getenv('AWS_S3_REGION_NAME')

#################
## DEBUG LOGIC ##
#################

if RAILWAY == '1':
    RAILWAY = True
else:
    RAILWAY = False

if DEBUG == '1':
    DEBUG = True
    DJANGO_CPROFILE_MIDDLEWARE_REQUIRE_STAFF = False
    DEBUG_TOOLBAR_CONFIG = {
        'INTERCEPT_REDIRECTS': False,
    }
    CORS_ALLOW_ALL_ORIGINS = True
    CORS_ORIGIN_WHITELIST = (
        'localhost:8000',
        'localhost'
    )    
    CORS_ALLOW_HEADERS = "access-control-allow-origin"
    CORS_ALLOWED_ORIGINS = ['http://*','http://127.0.0.1','http://localhost','https://localhost', "http://localhost:8000", "http://localhost:3000", 'http://127.0.0.1:8000','http://127.0.0.1:3000']
    NOSE_ARGS = ['--nocapture',
                '--nologcapture',]
    ALLOWED_HOSTS = ['*']
    INTERNAL_IPS=['*','127.0.0.1','localhost']
    CHANNEL_LAYERS = {
        "default": {
            "BACKEND": "channels_redis.core.RedisChannelLayer",
            "CONFIG": {
                "hosts": [ 
                    ("localhost", REDIS_DATABASE_PORT)
                ],
            },
        },
    }
else:
    DEBUG = False
    CORS_ALLOW_ALL_ORIGINS = True    
    if INTERNAL_IPS:
        INTERNAL_IPS = INTERNAL_IPS.split(",")
    if ALLOWED_HOSTS:
        ALLOWED_HOSTS = ALLOWED_HOSTS.split(",")
    if CORS_ALLOWED_ORIGINS:
        print(CORS_ALLOWED_ORIGINS)
        CORS_ALLOWED_ORIGINS = CORS_ALLOWED_ORIGINS.split(",")
        print(CORS_ALLOWED_ORIGINS)

    CHANNEL_LAYERS = {
        "default": {
            "BACKEND": "channels_redis.core.RedisChannelLayer",
            "CONFIG": {
                "hosts": [ 
                    ("10.245.125.43", REDIS_DATABASE_PORT)
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

    # Third parties
    'corsheaders',
    'storages',
    'rosetta',
    'parler',

    # Self
    'articles',
    'articles.api',
    'users',
    'users.upload'
]

MIDDLEWARE = [
    # CORS
    'corsheaders.middleware.CorsMiddleware',
    # Default
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
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
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
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
    DATABASES = {
        "default": dj_database_url.config(default=DATABASE_URL, conn_max_age=1800),
    }
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
                "NAME": POSTGRES_DB,
                "USER": POSTGRES_USER,
                "PASSWORD": POSTGRES_PASSWORD,
                'HOST': POSTGRES_HOST,
                "PORT": POSTGRES_PORT,
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

# language
LANGUAGE_CODE = 'en-us'
USE_I18N = True
USE_L10N = True
LOCALE_PATHS = (os.path.join(BASE_DIR, "locale"),)

PARLER_LANGUAGES = {
    None: (
        {'code': 'en',},
        {'code': 'zh-hk',},
    ),
    'default': {
        'fallbacks': ['en'],
        'hide_untranslated': False,   # Default
    }
}

from django.utils.translation import gettext_lazy as _
LANGUAGES = [
    ('zh-hk', _('Chinese (Hong Kong)')),
    ('en', _('English')),
]

# timezone
TIME_ZONE = 'UTC'
USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

# S3
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
AWS_S3_OBJECT_PARAMETERS = { 'CacheControl': 'max-age=86400', }
AWS_S3_CUSTOM_DOMAIN = '%s.s3.%s.amazonaws.com' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_REGION_NAME)
AWS_LOCATION = ''

STATIC_URL = 'static/'
if os.getenv("STATIC_SOURCE"):    
    STATIC_ROOT = os.path.join(os.path.dirname(BASE_DIR), "static")
    TEMP = os.path.join(BASE_DIR, 'temp')
else:
    DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
    STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
