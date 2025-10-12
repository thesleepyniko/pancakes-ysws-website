# this code is going to serve the static files and thats probably all, maybe like an api endpoint or two

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# app.mount("/static", StaticFiles(directory="./static"), name="static")

# @app.get("/")
# def read_root():
#     return {"Hello": "World"}

# mounting static directory, telling fastAPI it's html, and serving it at /
app.mount("/", StaticFiles(directory="static", html=True), name="frontend")