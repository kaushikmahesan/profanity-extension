from better_profanity import profanity
from flask import jsonify,Flask

if __name__ == "__main__":
    values = ["hist si","thisth ", "shi"]
    result = jsonify({"text": values})
    print(result)
