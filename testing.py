from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pandas as pd 
df=pd.read_csv("dataset_full.csv")
var_columns=[c for c in df.columns if c  in ['qty_dot_url','qty_hyphen_url','qty_underline_url','qty_slash_url','qty_questionmark_url','qty_equal_url','qty_at_url','qty_and_url','qty_exclamation_url','qty_space_url','qty_tilde_url','qty_comma_url','qty_plus_url','qty_asterisk_url','qty_hashtag_url','qty_dollar_url','qty_percent_url','length_url','tls_ssl_certificate','url_shortened']]
x=df.loc[:,var_columns]
y=df.loc[:,'phishing']
x_train,x_test,y_train,y_test=train_test_split(x,y,random_state=99,test_size=0.2)
clf = RandomForestClassifier(criterion="gini",max_depth=100,min_samples_split=10,random_state=5)
clf.fit(x_train,y_train)
y_pred=clf.predict(x_test)
from  sklearn.metrics import accuracy_score
print(accuracy_score(y_test,y_pred))
import pickle
pickle.dump(clf,open('new_model','wb'))