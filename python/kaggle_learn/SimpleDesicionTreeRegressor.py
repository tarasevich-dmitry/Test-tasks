import pandas as pd
from sklearn.tree import DecisionTreeRegressor
from learntools.core import binder
binder.bind(globals())
iowa_file_path = '../input/train.csv'

home_data = pd.read_csv(iowa_file_path)

print("Setup Complete")

home_data.describe() 
y = home_data.SalePrice
feature_names = ['LotArea','YearBuilt','1stFlrSF','2ndFlrSF','FullBath','BedroomAbvGr','TotRmsAbvGrd']
X = home_data[feature_names]

#specify the model. 
iowa_model = DecisionTreeRegressor(random_state=1337)
iowa_model.fit(X,y)

predictions = iowa_model.predict(X)
print(predictions)
