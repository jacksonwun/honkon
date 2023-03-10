from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator

from .middleware import JwtAuthMiddlewareStack
from django.urls import path, re_path
from django.core.asgi import get_asgi_application

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
	'websocket': AllowedHostsOriginValidator(
		JwtAuthMiddlewareStack(
			URLRouter([
			])
		)
	),
})