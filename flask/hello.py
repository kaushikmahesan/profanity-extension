from flask import Flask, request, jsonify
import json
import sys
from flask_cors import CORS
app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
def hello_World():
    return 'Sup'

@app.route('/testjson',methods=['POST'])
def testjson():
    print("called /testjson")
    req = json.loads(request.data)
    print(req)

    #change the words here
    value = req["data"]
    res = jsonify({"occurances": value})
    return res

if __name__ == '__main__':
    app.run(debug=True)
