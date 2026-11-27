# import os, base64
# from fastapi import FastAPI, File, UploadFile, HTTPException
# from langchain_google_genai import ChatGoogleGenerativeAI
# from dotenv import load_dotenv
# from typing import Dict
# from langchain_core.prompts import ChatPromptTemplate
# from langchain_core.output_parsers import StrOutputParser

# load_dotenv()
# llm = ChatGoogleGenerativeAI(
#     model="gemini-3.5-flash-lite",
#     api_key=os.getenv("GEMINI_API_KEY")
# )

# app = FastAPI()

# def encode_image(image_content: bytes) -> str:
#     return base64.b64encode(image_content).decode()

# @app.post("/analyze-image")
# async def analyze_image(file: UploadFile = File(...)) -> Dict[str, str]:

#     if not file.content_type or file.content_type not in ["image/jpeg", "image/png"]:
#         raise HTTPException(status_code=400, detail="Invalid or missing file type. Only JPEG and PNG are allowed.")

#     contents = await file.read()

#     if len(contents) > 10_000_000:
#         raise HTTPException(status_code=400, detail="File too large. Maximum size is 10MB.")

#     image = encode_image(contents)

#     prompt = ChatPromptTemplate.from_messages([
#         ("system", "You are a nutrition expert capable of analyzing food images and providing detailed nutritional advice."),
#         ("human", [
#             {
#                 "type": "text",
#                 "text": """Analyze the image and provide a comprehensive nutritional breakdown and health advice. Follow these steps:
#                 1. State the type of food
#                 2. Analyze the nutrient facts of the food (Protein, carbohydrate, salt, and sugar)
#                 3. Give health tips
#                 4. State if it is good or bad for an adult at the age of 26 who takes it for breakfast everyday
#                 """
#             },
#             {
#                 "type": "image_url",
#                 "image_url": {
#                     "url": f"data:{file.content_type};base64,{image}",
#                 },
#             },
#         ]),
#     ])

#     try:
#         chain = prompt | llm | StrOutputParser()
#         res = await chain.ainvoke({})
#     except Exception as e:
#         print(str(e))
#         raise HTTPException(status_code=500, detail="An error occurred while analyzing the image.")

#     return {"analysis": res}









# import os, base64
# import streamlit as st
# from langchain_google_genai import ChatGoogleGenerativeAI
# from dotenv import load_dotenv
# from langchain_core.prompts import ChatPromptTemplate
# from langchain_core.output_parsers import StrOutputParser

# load_dotenv()
# llm = ChatGoogleGenerativeAI(
#     model="gemini-3.5-flash-lite",
#     api_key=os.getenv("GEMINI_API_KEY")
# )

# prompt = ChatPromptTemplate.from_messages(
#     [
#         ("system", "You are a helpful assistant that can describe images."),
#         ("human",
#             [
#                 {"type": "text", "text": "{input}"},
#                 {
#                     "type": "image_url",
#                     "image_url": {
#                         "url": "data:{mime_type};base64,{image}",
#                     },
#                 },
#             ],
#         ),
#     ]
# )

# chain = prompt | llm | StrOutputParser()

# st.title("Image Analysis Using Gemini")

# col1, col2 = st.columns(2)

# with col1:
#     uploaded_file = st.file_uploader("Upload your image", type=["jpg", "png"])

# with col2:
#     if uploaded_file is not None:
#         image_bytes = uploaded_file.read()
#         st.image(image_bytes)
#     else:
#         st.write("Image Preview")

# question = st.text_input("Enter a question")

# if question and uploaded_file is not None:
#     image = base64.b64encode(image_bytes).decode()
#     res = chain.invoke({"input": question, "image": image, "mime_type": uploaded_file.type})
#     st.write(res)





# import os, base64
# import streamlit as st
# from datetime import date
# from langchain_google_genai import ChatGoogleGenerativeAI
# from dotenv import load_dotenv
# from langchain_core.prompts import ChatPromptTemplate
# from langchain_core.output_parsers import StrOutputParser

# load_dotenv()
# llm = ChatGoogleGenerativeAI(
#     model="gemini-3.5-flash-lite",
#     api_key=os.getenv("GEMINI_API_KEY")
# )

# prompt = ChatPromptTemplate.from_messages(
#     [
#         ("system", "You are a helpful assistant that can verify identification documents"),
#         ("human",
#             [
#                 {"type": "text", "text": "Verify the identification details"},
#                 {"type": "text", "text": "Name: {user_name}"},
#                 {"type": "text", "text": "DOB: {user_dob}"},
#                 {
#                     "type": "image_url",
#                     "image_url": {
#                         "url": "data:{mime_type};base64,{image}",
#                     },
#                 },
#             ],
#         ),
#     ]
# )

# chain = prompt | llm | StrOutputParser()

# st.title("KYC Verification Application")

# col1, col2 = st.columns(2)

# with col1:
#     uploaded_file = st.file_uploader("Upload your ID document", type=["jpg", "png"])

# with col2:
#     if uploaded_file is not None:
#         image_bytes = uploaded_file.read()
#         st.image(image_bytes)
#     else:
#         st.write("Image Preview")

# user_name = st.text_input("Enter your name")
# user_dob = st.date_input("Enter your date of birth", min_value=date(1900, 1, 1))

# if uploaded_file is not None and user_name and user_dob:
#     image = base64.b64encode(image_bytes).decode()
#     res = chain.invoke({"user_name": user_name, "user_dob": user_dob, "image": image, "mime_type": uploaded_file.type})
#     st.write(res)






import os, base64
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

load_dotenv()
llm = ChatGoogleGenerativeAI(
    model="gemini-3.5-flash-lite",
    api_key=os.getenv("GEMINI_API_KEY")
)

video_file_path = "video.mp4"
with open(video_file_path, "rb") as video_file:
    encoded_video = base64.b64encode(video_file.read()).decode()

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are an expert video analyst. Analyze videos carefully and provide detailed descriptions."),
    ("human", [
        {
            "type": "text",
            "text": "{analysis_request}"
        },
        {
            "type": "media",
            "data": "{video_data}",
            "mime_type": "{mime_type}"
        }
    ])
])

chain = prompt | llm | StrOutputParser()
print("Analyzing video...")

response = chain.invoke({
    "analysis_request": "Describe what's happening in this video.",
    "video_data": encoded_video,
    "mime_type": "video/mp4"
})

print("Analysis completed")
print("\nResults:\n" + "-" * 40)
print(response)