from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
app = Flask(__name__)
CORS(app)
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})
@app.route('/', methods=['GET','POST'])
def checkURL():
    result = ""
    with open ('model_pickle','rb') as f:
        model = pickle.load(f)
        data= request.json['url']
        print("data is", data)
        # link_test=input("Enter the link")
        result = model.predict([data])[0]
        print (result)
    response = jsonify({'message':result})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    app.run(debug=True)