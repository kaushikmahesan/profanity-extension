from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from better_profanity import profanity

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
def hello_World():
    return 'Sup'

@app.route('/testjson',methods=['POST'])
def testjson():
    print("called /testjson")
    req = json.loads(request.data)

    #change the words here
    value = req["text"]
    censored ={}
    for i in range(len(value)):
        censored[i] = profanity.censor(value[i])    
        print(censored[i])
    


    res = json.dumps(censored)
    print("printing the json file")
    print(res)
    return res

if __name__ == '__main__':
    profanity.load_censor_words()
    app.run(debug=True)
