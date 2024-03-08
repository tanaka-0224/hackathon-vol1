from dotenv import find_dotenv, load_dotenv
import os
import openai

import time
import logging
from datetime import datetime

# Load environment variables from a .env file
load_dotenv()

# Retrieve your OpenAI API key from an environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")
client = openai.OpenAI() 

# model = "gpt-3.5-turbo"

# #== Create Assistant ==#
# personal_trainer_assis = client.beta.assistants.create(
#     name = "Personal Trainer",
#     instructions = "you will give me a sentence directly included the words I give you  ",
#     model = model
# )
# assistant_id = personal_trainer_assis.id
# print("assistant_id is "+ assistant_id)\


# == Thread ==#
# thread = client.beta.threads.create(
#     messages=[
#         {
#             "role": "user",
#             "content": "You are now connected to a personal trainer. How can I help you?"
#         }
#     ]
# )
# thread_id = thread.id
# print("thread_id is " +thread_id)

# == Hardcode our ids ==#
assistant_id = "asst_ZseLtj7Up4XvuludsEO5Sksp"
thread_id = "thread_KxnURsPoR7OErKmIxZlmBuIE"

# == Create a Message ==#
message = "yeet"
message = client.beta.threads.message.create(
    thread_id=thread_id,
    role="user",
    content=message
)

# == Run our Assistant
run = client.beta.threads.runs.create(
    thread_id=thread_id,
    assistant_id=assistant_id,
    instructions="Please address the user as Master"
)
