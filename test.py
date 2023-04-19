import pickle
with open ('model_pickle','rb') as f:
    model = pickle.load(f)
link_test=input("Enter the link")
result = model.predict([link_test])[0]
print (result)