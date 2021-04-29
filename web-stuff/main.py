#NOTE This code does not use sqlalchemy to import the data so you need to do a "pip install psycopg2"
#Before you run the code 

#Import the required dependencies for this method
import psycopg2 
from psycopg2.extras import RealDictCursor
from flask import Flask, render_template 
import pandas as pd 
import json

#Enter a try, except statement to extract the first table 
try: 
    #The line of code below is psycopg2 connecting to the pgAdmin database
    connection = psycopg2.connect(user = "[USERNAME]", ##your username in pgAdmin (eg. 'postgres')
                                  password= "[PASSWORD]", #your password for your user on pgAdmin

                                  host = "127.0.0.1", ##local host of pgAdmin (this is the highlighted string of numbers in the URL bar when you have pgAdmin open)
                                  port = "5432", ##port number pgAdmin is on
                                  database = "energy_consumption_db") ##database name where your tables are stored (eg. 'energy-consumption-aus)

    #This following line retrieves whatever is in the database specified above 
    #"cursor_factor=RealDictCursor" ensures that the table headings come across when we do the next part 
    cursor = connection.cursor(cursor_factory=RealDictCursor)
    
    #Create a variable called "selection" and enter the string you would usually enter into pgAdmin to select a table 
    selection = "SELECT * FROM population_gb"
    
    #Psycopg2 will go and connect to this table in the following with the ".execute()" function
    cursor.execute(selection)
    
    #".fetchall()" will retrieve all the data in the table 
    popGb = cursor.fetchall()
    
    #Convert the data obtained from about into a pandas dataframe. This will then be converted to a JSON script 
    # when the app route is built later in the code 
    popGb_df = pd.DataFrame(popGb)
#error handling
except (Exception, psycopg2.Error) as error : 
    print ("Error", error)
finally: 
    if connection:
        cursor.close()
        connection.close()

#Enter a try, except statement to extract the first table 
try: 
    #The line of code below is psycopg2 connecting to the pgAdmin database
    connection = psycopg2.connect(user = "[USER]", ##your username in pgAdmin (eg. 'postgres')
                                  password= "[PASSWORD]", #your password for your user on pgAdmin
                                  host = "127.0.0.1", ##local host of pgAdmin (this is the highlighted string of numbers in the URL bar when you have pgAdmin open)
                                  port = "5432", ##port number pgAdmin is on
                                  database = "energy_consumption_db") ##database name where your tables are stored (eg. 'energy-consumption-aus)

    #This following line retrieves whatever is in the database specified above 
    #"cursor_factor=RealDictCursor" ensures that the table headings come across when we do the next part 
    cursor = connection.cursor(cursor_factory=RealDictCursor)
    
    #Create a variable called "selection" and enter the string you would usually enter into pgAdmin to select a table 
    selection = "SELECT * FROM industry"
    
    #Psycopg2 will go and connect to this table in the following with the ".execute()" function
    cursor.execute(selection)
    
    #".fetchall()" will retrieve all the data in the table 
    industry = cursor.fetchall()
    
    #Convert the data obtained from about into a pandas dataframe. This will then be converted to a JSON script 
    # when the app route is built later in the code 
    industry_df = pd.DataFrame(industry)
#error handling
except (Exception, psycopg2.Error) as error : 
    print ("Error", error)
finally: 
    if connection:
        cursor.close()
        connection.close()

#try: 
    #The line of code below is psycopg2 connecting to the pgAdmin database
    #connection = psycopg2.connect(user = "postgres", ##your username in pgAdmin (eg. 'postgres')
                                  #password= "Prav123", #your password for your user on pgAdmin
                                  #ost = "127.0.0.1", ##local host of pgAdmin (this is the highlighted string of numbers in the URL bar when you have pgAdmin open)
                                  #port = "5432", ##port number pgAdmin is on
                                  #database = "energy_consumption_db") ##database name where your tables are stored (eg. 'energy-consumption-aus)

    #This following line retrieves whatever is in the database specified above 
    #"cursor_factor=RealDictCursor" ensures that the table headings come across when we do the next part 
    #cursor = connection.cursor(cursor_factory=RealDictCursor)
    
    #Create a variable called "selection" and enter the string you would usually enter into pgAdmin to select a table 
    #selection = "SELECT * FROM population_gb"
    
    #Psycopg2 will go and connect to this table in the following with the ".execute()" function
    #cursor.execute(selection)
    
    #".fetchall()" will retrieve all the data in the table 
    #popGb = cursor.fetchall()
    
    #Convert the data obtained from about into a pandas dataframe. This will then be converted to a JSON script 
    # when the app route is built later in the code 
    #popGb_df = pd.DataFrame(popGb)
#error handling
#except (Exception, psycopg2.Error) as error : 
    #print ("Error", error)
#finally: 
    #if connection:
        #cursor.close()
        #connection.close()


#Enter a try, except statement to extract the first table 
try: 
    #The line of code below is psycopg2 connecting to the pgAdmin database
<<<<<<< HEAD
    #connection = psycopg2.connect(user = "postgres", ##your username in pgAdmin (eg. 'postgres')
                                  #password= "9102", #your password for your user on pgAdmin
                                  #host = "127.0.0.1", ##local host of pgAdmin (this is the highlighted string of numbers in the URL bar when you have pgAdmin open)
                                  #port = "5432", ##port number pgAdmin is on
                                  #database = "energy_consumption_db") ##database name where your tables are stored (eg. 'energy-consumption-aus)
=======
    connection = psycopg2.connect(user = "[USER]", ##your username in pgAdmin (eg. 'postgres')
                                  password= "[PASSWORD]", #your password for your user on pgAdmin
                                  host = "127.0.0.1", ##local host of pgAdmin (this is the highlighted string of numbers in the URL bar when you have pgAdmin open)
                                  port = "5432", ##port number pgAdmin is on
                                  database = "energy_consumption_db") ##database name where your tables are stored (eg. 'energy-consumption-aus)
>>>>>>> d60351c07ddb2ad6b8b8d7e6db0b46a083e0fe9d

    #This following line retrieves whatever is in the database specified above 
    #"cursor_factor=RealDictCursor" ensures that the table headings come across when we do the next part 
    #cursor = connection.cursor(cursor_factory=RealDictCursor)
    
    #Create a variable called "selection" and enter the string you would usually enter into pgAdmin to select a table 
    #selection = "SELECT * FROM population"
    
    #Psycopg2 will go and connect to this table in the following with the ".execute()" function
    #cursor.execute(selection)
    
    #".fetchall()" will retrieve all the data in the table 
    #pop = cursor.fetchall()
    
    #Convert the data obtained from about into a pandas dataframe. This will then be converted to a JSON script 
    # when the app route is built later in the code 
    #pop_df = pd.DataFrame(pop)
#error handling
#except (Exception, psycopg2.Error) as error : 
    #print ("Error", error)
#finally: 
    #if connection:
        #cursor.close()
        #connection.close()

#Going to repeat what we did above however, this time it is for the energy table in the database
#try: 
    #The line of code below is psycopg2 connecting to the pgAdmin database
<<<<<<< HEAD
    #connection = psycopg2.connect(user = "postgres", ##your username in pgAdmin (eg. 'postgres')
                                  #password= "9102", #your password for your user on pgAdmin
                                  #host = "127.0.0.1", ##local host of pgAdmin (this is the highlighted string of numbers in the URL bar when you have pgAdmin open)
                                  #port = "5432", ##port number pgAdmin is on
                                  #database = "energy_consumption_db") ##database name where your tables are stored (eg. 'energy-consumption-aus)
=======
    connection = psycopg2.connect(user = "[USER]", ##your username in pgAdmin (eg. 'postgres')
                                  password= "[PASSWORD]", #your password for your user on pgAdmin
                                  host = "127.0.0.1", ##local host of pgAdmin (this is the highlighted string of numbers in the URL bar when you have pgAdmin open)
                                  port = "5432", ##port number pgAdmin is on
                                  database = "energy_consumption_db") ##database name where your tables are stored (eg. 'energy-consumption-aus)
>>>>>>> d60351c07ddb2ad6b8b8d7e6db0b46a083e0fe9d
    
    #This following line retrieves whatever is in the database specified above 
    #"cursor_factor=RealDictCursor" ensures that the table headings come across when we do the next part
    #cursor = connection.cursor(cursor_factory=RealDictCursor)
    
    #Create a variable called "selection" and enter the string you would usually enter into pgAdmin to select a table
    #selection = "SELECT * FROM energy"
    
    #Psycopg2 will go and connect to this table in the following with the ".execute()" function
    #cursor.execute(selection)
    
    #".fetchall()" will retrieve all the data in the table
    #energy = cursor.fetchall()
    
    #Convert the data obtained from about into a pandas dataframe. This will then be converted to a JSON script 
    # when the app route is built later in the code
    #energy_df = pd.DataFrame(energy)
#Error handling 
#except (Exception, psycopg2.Error) as error : 
    #print ("Error", error)
#finally: 
    #if connection:
        #cursor.close()
        #connection.close()
        #print("Connection closed")


#BUILDING APP ROUTES WITH FLASK 
#Scroll to the last two routes to see how the pandas dataframes get converted into json format for the "api/___" routes

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route ("/about")
def about():
    return render_template("about.html")

@app.route("/selector")
def selector(): 
    return render_template("selector.html")

@app.route("/plot_mara")
def mara(): 
    return render_template("plot_mara.html")

@app.route ("/plot_PS")
def about():
    return render_template("about.html")

#@app.route("/api/popGb")
#def popGb():
    #Extract the population dataframe and use the pandas ".to_json()" function to convert the 
    # dataframe into a json object
    #result = popGb_df.to_json(orient="records") ##orient="records" means that it will be displayed like "[{column -> value}, … , {column -> value}]"
    
    #Parse the above to look like json format 
    #parsed = json.loads(result)
    
    #Apply formatting to return a better looking JSON
    #popGb_json = json.dumps(parsed, skipkeys = True, allow_nan = True, indent = 6) 
    
    #Display the JSON on the page
    #return popGb_json

@app.route("/api/industry")
def industry():
    #Extract the population dataframe and use the pandas ".to_json()" function to convert the 
    # dataframe into a json object
    result = industry_df.to_json(orient="records") ##orient="records" means that it will be displayed like "[{column -> value}, … , {column -> value}]"
    
    #Parse the above to look like json format 
    parsed = json.loads(result)
    
    #Apply formatting to return a better looking JSON
    industry_json = json.dumps(parsed, skipkeys = True, allow_nan = True, indent = 6) 
    
    #Display the JSON on the page
    return industry_json
# @app.route("/plot_template")
# def plot_template(): 
#     return render_template("plot_template")
# >>>>>>> 74bef8722539fe86cdc664ac53b48656928a7bb4

#@app.route("/api/pop")
#def pop():
    #Extract the population dataframe and use the pandas ".to_json()" function to convert the 
    # dataframe into a json object
    result = pop_df.to_json(orient="records") ##orient="records" means that it will be displayed like "[{column -> value}, … , {column -> value}]"
    
    #Parse the above to look like json format 
    parsed = json.loads(result)
    
    #Apply formatting to return a better looking JSON
    pop_json = json.dumps(parsed, skipkeys = True, allow_nan = True, indent = 6) 
    
    #Display the JSON on the page
    return pop_json

#Repeat the above but for the energy dataframe now 
#@app.route("/api/energy")
#def energy():
    #Extract the population dataframe and use the pandas ".to_json()" function to convert the 
    # dataframe into a json object
    #result2 = energy_df.to_json(orient="records")##orient="records" means that it will be displayed like "[{column -> value}, … , {column -> value}]"
    
    #Parse the above to look like json format 
    #parsed2 = json.loads(result2)
    
    #Apply formatting to return a better looking JSON
    #energy_json = json.dumps(parsed2, skipkeys = True, allow_nan = True, indent = 6) 
    
    #Display the JSON on the page
    #return energy_json

if __name__ == "__main__":
    app.run(debug=True)
