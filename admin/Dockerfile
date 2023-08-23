# Use Python 3.9
FROM python:3.9

#RUN apt-get update \
#    && apt-get -y install libpq-dev gcc \
#    && pip install psycopg2

WORKDIR /app

# Set the WORKDIR to be the folder
COPY . .
COPY . /app

# Copy requirements.txt to the docker image
COPY requirements.txt /

# install packages
RUN pip install -r requirements.txt

# Expose port 8080
EXPOSE 8080
ENV PORT 8080

CMD ["python", "main.py"]


