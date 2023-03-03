############
### Prod ###
############
FROM python:3.10.7-slim as builder

COPY . /app
WORKDIR /app
RUN python -m venv /opt/venv

RUN /opt/venv/bin/pip install pip --upgrade \
    && /opt/venv/bin/pip install -r requirements.txt \
    && chmod +x entrypoint.sh \
    && chmod +x migrate.sh
RUN apt-get update && apt-get install -y vim
EXPOSE 8000

RUN ["/app/collectstatic.sh"]
CMD ["/app/entrypoint.sh"]

###########
### Dev ###
###########
FROM python:3.10.7-slim as compiler
WORKDIR /app
RUN python -m venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"
COPY ./requirements.txt /app/requirements.txt
RUN pip install --upgrade pip
RUN pip install -Ur requirements.txt

FROM python:3.10.7-slim as dev
ENV PYTHONUNBUFFERED 1

WORKDIR /app/
COPY --from=compiler /opt/venv /opt/venv
# Enable venv
ENV PATH="/opt/venv/bin:$PATH"
COPY . /app

EXPOSE 8000