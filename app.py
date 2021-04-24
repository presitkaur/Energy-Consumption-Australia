# http://www.pygresql.org/contents/postgres/basic.html#creating-a-connection-to-the-database
# Creating a connection to the database
import json
from pprint import pprint
from pg import DB
import pandas as pd
import plotly
import plotly.graph_objects as go
import plotly.express as px
import pandas as pd
import math


db = DB(dbname='energy_consumption_db', host='localhost', port=5432,
user='postgres', passwd='9102')

# Retrieving  data¶ 
p = db.query("SELECT * FROM population")
# print(p)
e = db.query("SELECT * FROM energy")
# print(e)


# retrieve the results as a list of dictionaries
population_dic= p.dictresult()
energy_dic= e.dictresult()

# pass a list of dicts to json2html to format the response as an HTML
# from json2html import *
# json_html = json2html.convert(json=population_dic)

# Convert the dictionaries to dataframe
population_rows = population_dic
population_df = pd.DataFrame(population_rows)
# print(population_df)

energy_rows = energy_dic
energy_df = pd.DataFrame(energy_rows)
# print(energy_df)


# TEST PLOT - using Plotly Express

# (TEST POPULATION DATA )   
filtered_population_df = population_df.query("location == 'aus'")
# print(filtered_population_df)

data1 = [go.Scatter(
          x=filtered_population_df.GDP,
          y=filtered_population_df.population)]
                    
plotly.offline.plot(data1)

# (TEST ENERGY DATA - INDUSTRY=='Construction')  
filtered_energy_df = energy_df.query("industry== 'Construction'")
# print(filtered_energy_df)

data2 = [go.Bar(
          x=filtered_energy_df.location,
          y=filtered_energy_df.value)]
                    
plotly.offline.plot(data2)


# (TEST ENERGY DATA - fuels_consumed=='LPG') 
filtered_energy_df = energy_df.query("fuels_consumed== 'LPG'")
# print(filtered_energy_df)

data3 = [go.Bar(
          x=filtered_energy_df.location,
          y=filtered_energy_df.value)
          ]            
plotly.offline.plot(data3)