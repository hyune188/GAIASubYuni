# from fastapi import FastAPI
# from pydantic import BaseModel
# from typing import List, Optional

# app = FastAPI()

# class Receipt(BaseModel):
#     date: str
#     terminal: str
#     transaction: str
#     amount_RM: float

# atm_database =[
#     {
#     "date":"06/08/2026",
#     "terminal":"642251",
#     "transaction":"WITHDRAWAL",
#     "amount_RM":"500.01",
#     "password":"P@$$w0rd123",
#     "house_possessed":6,
#     "car_possessed":7
#     }
# ]

# @app.get("/receipt-with-no-model")
# def get_receipt_no_model():
#     return atm_database

# @app.get("/receipt-with-model", response_model=List[Receipt])
# def get_receipt_with_model():
#     return atm_database


# from fastapi import FastAPI
# from Router import right_window, left_window

# app = FastAPI()

# app.include_router(
#     right_window.router,
#     prefix="/right",
#     tags=["Right Window Buttons"]
# )

# app.include_router(
#     left_window.router,
#     prefix="/left",
#     tags=["Left Window Buttons"]
# )

from fastapi import FastAPI, Depends, Request, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from typing import Optional

#Simple token storage (in production, use a database)
VALID_TOKENS = {
    "user123": {"username": "john_doe", "role": "user"},
    "admin456": {"username": "admin_user", "role": "admin"}
}

#security scheme
security = HTTPBearer()
app = FastAPI()

async def auth_dependency(request: Request, credentials:
HTTPAuthorizationCredentials = Depends(security)):
    """Basic authentication dependency"""
    token = credentials.credentials

    #Check if token exists in our "database"
    if token not in VALID_TOKENS:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication token",
            headers={"WWW-Authenticate": "Bearer"},
        )

    user_info = VALID_TOKENS[token]
    print(f"Auth middleware executed for user: {user_info['username']}")

    #Return user info instead of just "authenticated"
    return user_info

async def admin_dependency(request: Request, user_info: dict = Depends(auth_dependency)):
    """Admin-specific dependency that requires authentication first"""

    #Check if user has admin role
    if user_info.get("role") != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required"
        )

    print(f"Admin middleware executed for: {user_info['username']}")
    return user_info

#Public endpoint - no authentication required
@app.get("/public")
async def public_endpoint():
    return {"message": "Public endpoint - no auth required"}

#Protected endpoint - requires authentication
@app.get("/protected")
async def protected_endpoint(user_info: dict = Depends(auth_dependency)):
    return {
        "message": "Protected endpoint",
        "user": user_info["username"],
        "role": user_info["role"],
    }

#Admin endpoint - requires authentication + admin role
@app.get("/admin")
async def admin_endpoint(user_info: dict = Depends(admin_dependency)):
    return {
        "message": "Admin endpoint",
        "user": user_info["username"],
        "role": user_info["role"]
    }