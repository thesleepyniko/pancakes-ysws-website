# this code is going to serve the static files and thats probably all, maybe like an api endpoint or two

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

@app.get("/")
async def serve_root():
    return FileResponse("static/index.html")

@app.get("/requirements")
async def serve_requirements():
    return FileResponse("static/requirements.html")
# app.mount("/static", StaticFiles(directory="./static"), name="static")

# @app.get("/")
# def read_root():
#     return {"Hello": "World"}

# mounting static directory, telling fastAPI it's html, and serving it at /
app.mount("/static", StaticFiles(directory="static"), name="frontend")
