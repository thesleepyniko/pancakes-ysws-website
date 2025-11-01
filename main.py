# this code is going to serve the static files and thats probably all, maybe like an api endpoint or two
# half of the code here is commented out because god is it unneeded :pf:
from fastapi import FastAPI
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
# from pyairtable import Api
# from pyairtable.formulas import match
# import os
# import dotenv

# dotenv.load_dotenv()

# airtable_api = Api(os.getenv("AIRTABLE_PAT", "")) # just for typechecking :3
app = FastAPI()

@app.get("/")
async def serve_root():
    return FileResponse("static/index.html")

@app.get("/requirements")
async def serve_requirements():
    return FileResponse("static/requirements.html")

@app.get("/submit")
async def redirect_submit(club: str):
    if club:
        return RedirectResponse("https://forms.hackclub.com/pancakes?club=true")
    return RedirectResponse("https://submit.hackclub.com/pancakes")
# app.mount("/static", StaticFiles(directory="./static"), name="static")


# @app.get("/")
# def read_root():
#     return {"Hello": "World"}
# @app.get("/api/gallery")
# async def return_last_three_projects():
#     # print(os.getenv("AIRTABLE_BASE_ID"))
#     # print(os.getenv("AIRTABLE_TABLE_ID_S3"))
#     table = airtable_api.table(os.getenv("AIRTABLE_BASE_ID", ""), os.getenv("AIRTABLE_TABLE_ID", ""))        
#     results = table.all(
#         formula=match({"Allow Display?": 1}), # 1 == true for pyairtable
#         sort=["Submitted At"]
#     )
#     if not (os.getenv("AIRTABLE_BASE_ID", "")) or not (os.getenv("AIRTABLE_TABLE_ID", "")):
#         raise HTTPException(500, detail="Either AIRTABLE_BASE_ID or AIRTABLE_TABLE_ID not present")
#     return results[:3]

# @app.get("/api/featured")
# async def return_featured():
#     featured_projects = os.getenv("FEATURED_PROJECT_IDS", "example1,example2,example3")
#     ret_projects = []
#     for project in featured_projects.split(","):
#         if project.startswith("example"):
#             pass
#         else:
#             table = airtable_api.table(os.getenv("AIRTABLE_BASE_ID", ""), os.getenv("AIRTABLE_TABLE_ID", ""))
#             ret_projects.append(table.get(project))    
#     return ret_projects

# mounting static directory for our static files, and serving it at /static
app.mount("/static", StaticFiles(directory="static"), name="static")
