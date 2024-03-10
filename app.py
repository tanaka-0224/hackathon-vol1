from flask import Flask, request, jsonify
from main import AssistantManger  # Import your adjusted AssistantManger class
from flask_cors import CORS, cross_origin
app = Flask(__name__)

@app.route('/gpt/process_slang', methods=['POST'])
@cross_origin(origin='*', headers=['Content- Type', 'Authorization'])
def process_slang():
    # Use predefined IDs or retrieve from request for flexibility
    default_thread_id = "thread_PjW3lJ4BEmcUuHDaEEX3YSYy"
    default_assistant_id = "asst_K5xvBRbOSpVcxFpEdeiTq6iz"

    data = request.json
    slang = data['slang']

    # Optionally get thread and assistant IDs from the request
    thread_id = data.get("thread_id", default_thread_id)
    assistant_id = data.get("assistant_id", default_assistant_id)

    # Initialize the manager with the determined IDs
    manager = AssistantManger(thread_id=thread_id, assistant_id=assistant_id)

    manager.create_assistant(
        name="Slang Assistant",
        instructions=(
            "You're a slang cat assistant. You're very very cute and talk like a talking cat sensei in an anime. Use the provided functions to answer questions."),
        tools=[{
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
        }]
    )

    manager.create_thread()
    manager.add_message_to_thread(role="user", content=slang)
    manager.run_assistant(
        instructions=(
            "As a charming, anime-style talking cat assistant, your role is to assist users in understanding slang through context, not by providing definitions. "
            "When a user inputs a slang word via a button, acknowledge it and craft a response that embeds this slang in a natural, coherent English example sentence. "
            "Enhance the charm of the interaction by integrating cute Japanese expressions or phrases, emphasizing your 'kawaii' cat sensei character. "
            "Should the user ask about the same slang word again, creatively generate a new example sentence to help them grasp the slang's usage in various contexts. "
            "Your responses should not explain the slang explicitly but should be designed to aid users in inferring its meaning through the sentences provided. "
            "Maintain your delightful and educational persona throughout the interaction."
        )
    )

    # Wait for completion and get the hint message
    manager.wait_for_completion()
    hint_message = manager.get_hint_message()

    # Return the hint message as a JSON response
    return jsonify({'hint_message': hint_message})


@app.route('/gpt/scene_chat', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def scene_chat():
    data = request.json
    input_sentences = data['input_sentences']

    # Optionally get thread and assistant IDs from the request
    thread_id = "thread_6Gkw18lzotaaWEdlkpmlr6hp"
    assistant_id = "asst_W9b88ltwF1fqyqVOAxKibQMH"

    # Initialize the manager with the determined IDs
    manager = AssistantManger(thread_id=thread_id, assistant_id=assistant_id)
    manager.create_assistant(
        name="Chat Assistant",
        instructions=(
            "You're cat sensei. You're very very cute and talk like a talking cat sensei in an anime. Use the provided functions to answer questions."),
        tools=[{
            "type": "function",
            "function": {
                "name": "simulate_slang_conversation",
                "description": "Get the slang for hint.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "input_sentences": {"type": "string"}
                    },
                    "required": ["input_sentences"]
                }
            }
        }]
    )

    manager.create_thread()
    manager.add_message_to_thread(role="user", content=input_sentences)
    manager.run_assistant(
        instructions=(
            "When you detect a slang term like 'lame asf' used by the user, acknowledge it directly in your response. "
            "Provide specific feedback on the usage of that slang term, considering its context and appropriateness. "
            "For example, you can explain the term's connotations, suggest alternative expressions, or discuss the settings "
            "in which its use might be more suitable or avoided. Always tailor your feedback to the slang used, ensuring it is "
            "relevant and helpful. As the 'talking cat sensei,' maintain an engaging and supportive tone, facilitating a "
            "positive and educational dialogue."
        )
    )

    # Wait for completion and get the hint message
    manager.wait_for_completion()
    chat_message = manager.get_hint_message()
    # Further processing...
    return jsonify({'chat_message': chat_message})



if __name__ == "__main__":
    app.run()