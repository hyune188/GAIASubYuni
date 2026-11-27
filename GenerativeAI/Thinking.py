# import os
# from dotenv import load_dotenv
# from langchain_google_genai import ChatGoogleGenerativeAI
# from langchain_core.messages import HumanMessage
# from langchain_core.output_parsers import StrOutputParser

# load_dotenv()
# # THINKING_LEVEL = "low"

# llm = ChatGoogleGenerativeAI(
#     model="gemini-3.5-flash-lite",
#     google_api_key=os.getenv("GEMINI_API_KEY"),
# #     # thinking_level = THINKING_LEVEL
# )

# llm_with_url = llm.bind_tools([{"url_context": {}}])
# URL = "https://soilsync-bdd70.web.app"

# # prompt = ChatPromptTemplate.from_messages([
# #     ("system", "You are a helpful assistant."),
# #     ("human", "{question}"),
# # ])

# # chain = prompt | llm | StrOutputParser()
# chain = llm_with_url | StrOutputParser()

# response = chain.invoke([
#     HumanMessage(content=f"Write a concise summary of this page: {URL}")
# ])

# # print(f"Thinking level : {THINKING_LEVEL}")
# # print(f"Response       : \n{response}")
# print(response)