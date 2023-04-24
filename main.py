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
    with open ('new_model','rb') as f:
        model = pickle.load(f)
        data= request.json['url']
        print("data is", data)
        # link_test=input("Enter the link")
        print(data.count("."))
        ssl =0
        if data.count('https')>0:
            ssl=1
        short=0
        if data.count('bit.ly')>0:
            short=1
        result = model.predict([[data.count("."),data.count("-"),data.count("_"),data.count("/"),data.count("?"),data.count("="),data.count("@"),data.count("&"),data.count("!"),data.count(""),data.count("~"),data.count(","),data.count("+"),data.count("*"),data.count("#"),data.count("$"),data.count("%"),len(data),ssl,short]])[0]
        ans='Good'
        if result ==1:
            ans='Bad'
        print (ans)
    response = jsonify({'message':ans})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    app.run(debug=True)