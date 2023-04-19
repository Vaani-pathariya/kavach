import pandas as pd
from sklearn.model_selection import train_test_split
df=pd.read_csv("phishing_site_urls.csv")
var_columns=[c for c in df.columns if c not in ['Label']]
x=df.loc[:,'URL']
y=df.loc[:,'Label']
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
model = make_pipeline(TfidfVectorizer(),MultinomialNB())
print (x)