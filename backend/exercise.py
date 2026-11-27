from fastapi import FastAPI, Body

app = FastAPI()

# ITEMS = [
#     {"id": 456, "date" : "2025-05-15", "user": "John", "task": "Learn React", "priority": 5},
#     {"id": 123, "date" : "2025-05-16", "user": "Kelly", "task": "Read a novel", "priority": 3},
#     {"id": 100, "date" : "2025-06-22", "user": "Luke", "task": "Clean living room", "priority": 3},
#     {"id": 211, "date" : "2025-07-12", "user": "John", "task": "Write a blog", "priority": 4},
# ]

# @app.get("/items")
# async def getAllItems():
#     return ITEMS

# @app.get("/items/{item_id}")
# async def get_item(item_id: int):
#     for item in ITEMS:
#         if item.get("id") == item_id:
#             return item
#     return "Item Not Found"

# @app.get("/items/")
# async def get_item_by_query(user: str):
#     items_to_return = []
#     for item in ITEMS:
#         if item.get("user").casefold() == user.casefold():
#             items_to_return.append(item)
#     return items_to_return

# @app.get("/items/")
# async def get_item_by_query(user: str, priority: int):
#     items_to_return = []
#     for item in ITEMS:
#         if item.get("user").casefold() == user.casefold() and \
#                 item.get("priority") == priority:
#             items_to_return.append(item)
#     return items_to_return

@app.post("/items/create_item")
async def create_item(new_item=Body()):
    ITEMS.append(new_item)

    return "Item Record Created Succesfully!"

# @app.put("/items/update_item")
# async def update_item(updated_item = Body()):
#     for i in range(len(ITEMS)):
#         if ITEMS[i].get("id") == updated_item.get("id"):
#             ITEMS[i] = updated_item
#             return "Item Record Updated Successfully!"
#     return "Item Not Found"

# @app.delete("/items/delete_item/{item_id}")
# async def delete_item(item_id: int):
#     for i, item in enumerate(ITEMS):
#         if item.get("id") == item_id:
#             ITEMS.pop(i)
#             return "Item Record Deleted Successfully!"
#     return "Item Not Found"