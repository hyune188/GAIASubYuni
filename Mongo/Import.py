import asyncio
from pymongo import AsyncMongoClient

async def main():
    uri = "mongodb+srv://wahyunibakri28_db_user:<db_password>@cluster0.izc3ezz.mongodb.net/"
    client = AsyncMongoClient(uri)

    await client.admin.command("ping")
    print("Connected successfully")
    await client.close()

asyncio.run(main())