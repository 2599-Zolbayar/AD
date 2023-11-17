import speech_recognition as sr

recognizer = sr.Recognizer()


def capture_voice_input():
    with sr.Microphone() as source:
        print("Listening...")
        try:
            audio = recognizer.listen(source, timeout=5)
            return audio
        except sr.WaitTimeoutError:
            print("Speech recognition timed out. Please try again.")
            return None


def convert_voice_to_text(audio):
    try:
        text = recognizer.recognize_google(audio)
        print("You said: " + text)
        return text
    except sr.UnknownValueError:
        print("Sorry, I didn't understand that.")
        return ""
    except sr.RequestError as e:
        print("Error; {0}".format(e))
        return ""


def process_voice_command(text):
    if "hello" in text.lower():
        print("Hello! How can I help you?")
    elif "goodbye" in text.lower():
        print("Goodbye! Have a great day!")
        return True
    else:
        print("I didn't understand that command. Please try again.")
    return False


def main():
    end_program = False
    while not end_program:
        audio = capture_voice_input()
        if audio:
            text = convert_voice_to_text(audio)
            end_program = process_voice_command(text)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("Program terminated by the user.")
