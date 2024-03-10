import json
import time
from dotenv import find_dotenv, load_dotenv
import openai
import streamlit as st

client = openai.OpenAI()
model = "gpt-3.5-turbo"


# def main():


def get_slang_for_hint(slang):
    return slang


def simulate_slang_conversation(input_sentences):
    return input_sentences

    # thread_id = "thread_qS9jJOxuNeYQhx103qk1NHpe"
    # assistant_id = "asst_EWnnV5jbpe8vPOJ3E6m4Q7Gi"


class AssistantManger:
    default_thread_id = None
    default_assistant_id = None

    def __init__(self, thread_id=None, assistant_id=None):
        self.client = openai.OpenAI()
        self.model = "gpt-3.5-turbo"

        self.run = None
        self.hint_message = None  # Hint message to be sent to the user
        self.assistant = assistant_id or AssistantManger.default_assistant_id
        self.thread = thread_id or AssistantManger.default_thread_id


        # Retrieve existing assistant and thread based on the set IDs
        if self.assistant:
            self.assistant = self.client.beta.assistants.retrieve(
                self.assistant
            )
        if self.thread:
            self.thread = self.client.beta.threads.retrieve(
                self.thread
            )

    def create_assistant(self, name: str, instructions: str, tools):
        if not self.assistant:
            assistant_obj = self.client.beta.assistants.create(
                name=name,
                instructions=instructions,
                tools=tools,
                model=self.model
            )
            AssistantManger.assistant_id = assistant_obj.id
            self.assistant = assistant_obj
            print(f"AssisID:::: {self.assistant.id}")

    def create_thread(self):
        if not self.thread:
            thread_obj = self.client.beta.threads.create()
            AssistantManger.thread_id = thread_obj.id
            self.thread = thread_obj
            print(f"ThreadID:::: {self.thread.id}")

    def add_message_to_thread(self, role, content):
        if self.thread:
            self.client.beta.threads.messages.create(
                thread_id=self.thread.id,
                role=role,
                content=content
            )

    def run_assistant(self, instructions):
        if self.thread and self.assistant:
            self.run = self.client.beta.threads.runs.create(
                thread_id=self.thread.id,
                assistant_id=self.assistant.id,
                instructions=instructions
            )

    def process_message(self):
        if self.thread:
            messages = self.client.beta.threads.messages.list(
                thread_id=self.thread.id
            )
            hint_message = []
            # Get the last message said from chatGPT
            last_message = messages.data[0]
            role = last_message.role
            response = last_message.content[0].text.value
            hint_message.append(response)

            self.hint_message = "\n".join(hint_message)
            print(f"Hint Message-----> {role.capitalize()}:==> {response}")

            for msg in messages:
                role = msg.role
                content = msg.content[0].text.value
                print(f"Hint Message-----> {role.capitalize()}:==> {content}")

            print(f"Messages:::: {response}")
        # return summary

    def call_required_function(self, required_actions):
        if not self.run:
            return
        tool_outputs = []

        for action in required_actions["tool_calls"]:
            func_name = action["function"]["name"]
            arguments = json.loads(action["function"]["arguments"])
            print(f"Required_actions::: {required_actions}")  # Add this line to inspect the structure

            if func_name == "get_slang_for_hint":
                output = get_slang_for_hint(slang=arguments["slang"])
                print(f"STUFFFFF::: {output}")
                final_str = ""
                for item in output:
                    final_str += "".join(item)

                tool_outputs.append({"tool_call_id": action["id"],
                                     "output": final_str})
            elif func_name == "simulate_slang_conversation":
                # 确保这里使用的键与传入的参数匹配
                input_sentences = arguments["input_sentences"]
                output = simulate_slang_conversation(input_sentences=input_sentences)
                tool_outputs.append({"tool_call_id": action["id"], "output": output})
            else:
                raise ValueError(f"Unknown function {func_name}")
            print("Submitting outputs back to the Assistant...")
            self.client.beta.threads.runs.submit_tool_outputs(
                thread_id=self.thread.id,
                run_id=self.run.id,
                tool_outputs=tool_outputs
            )

    # for streamlit, get hint message result
    def get_hint_message(self):
        return self.hint_message

    def wait_for_completion(self):
        if self.thread and self.run:
            start_time = time.time()  # Record the start time
            while True:
                # Check the elapsed time
                current_time = time.time()  # Get the current time
                elapsed_time = current_time - start_time  # Calculate elapsed time
                if elapsed_time > 10:  # Check if elapsed time is greater than 10 seconds
                    print("Timeout: Stopping the wait after 10 seconds.")
                    break
                # Wait for a completion
                time.sleep(1)  # Wait for a half-second before checking again
                run_status = self.client.beta.threads.runs.retrieve(
                    thread_id=self.thread.id,
                    run_id=self.run.id
                )
                print(f"Run Status:: {run_status.model_dump_json(indent=4)}")

                if run_status.status == "completed":
                    self.process_message()
                    break
                elif run_status.status == "requires_action":
                    print("FUNCTION CALLING FOR ACTION")
                    required_actions = (
                        run_status.required_action.submit_tool_outputs.model_dump()
                    )
                    self.call_required_function(
                        required_actions=required_actions
                    )

    # def wait_for_completion(client, thread_id, run_id, sleep_time=2, timeout=10):
    #     if self.thread and self.run:
    #         while True:
    #             try:

    #             run = client.beta.threads.runs.retrieve(
    #                 thread_id=self.thread.id,
    #                 run_id=self.run.id
    #             )
    #             print(f"Run Status:: {run_status.model_dump_json(indent=4)}")

    #             if run_status.status == "completed":
    #                 self.process_message()
    #                 break
    #             elif run_status.status == "requires_action":
    #                 print("FUNCTION CALLING FOR ACTION")
    #                 required_actions = (
    #                     run_status.required_action.submitted_tool_outputs
    #                     .model_dump_json(indent=4)
    #                 )
    #                 self.call_required_function(
    #                     required_actions=required_actions
    #                 )

    # Run the steps
    def run_steps(self):
        run_steps = self.client.beta.threads.runs.steps.list(
            thread_id=self.thread.id,
            run_id=self.run.id
        )
        print(f"Run Steps:: {run_steps}")


def main():
    # slang = get_slang_for_hint("apple")

    manager = AssistantManger()

    # Streamlit interface
    st.title("New Assistant")

    with st.form(key="user_input_form"):
        slang = st.text_input("Enter slang:")
        submit_button = st.form_submit_button(label="Run Assistant")

        if submit_button:
            manager.create_assistant(
                name="Slang Assistant",
                instructions=(
                    "You're a slang cat assistant. You're very very cute and talk like a talking cat sensei in an anime. Use the provided functions to answer question."),
                tools=[
                    {
                        "type": "function",
                        "function": {
                            "name": "get_slang_for_hint",
                            "description": "Get the slang for hint.",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "slang": {"type": "string"}
                                },
                                "required": ["slang"]
                            }
                        }
                    }

                ]
            )
            manager.create_thread()

            # Add message to thread
            manager.add_message_to_thread(
                role="user",
                content=slang  # f"Please give me an example sentence for the word {slang}"
            )

            manager.run_assistant(
                instructions=(
                    "When you detect a slang term in the user's message, respond by first giving a new and original English example sentence that includes the slang. "
                    "Additionally, continue the conversation by including Japanese phrases to maintain the cute and engaging persona. "
                    "At the end of each response, provide specific feedback evaluating the user's use of the slang with a segment starting 'Feedback:'. "
                    "This feedback should offer insight into their usage—commend good use or suggest improvements. "
                    "Remember, if the user repeats the same slang, it's because they can only interact through button presses, indicating a request for new examples. "
                    "Continue to provide fresh sentences and feedback without questioning their repetition, keeping the interaction helpful and charming."
                )
            )

            # Wait for completion
            manager.wait_for_completion()

            hint_message = manager.get_hint_message()

            st.write(hint_message)

            st.text("Run Steps")
            st.code(manager.run_steps(), line_numbers=True)


if __name__ == "__main__":
    main()
