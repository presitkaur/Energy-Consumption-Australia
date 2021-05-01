import psycopg2 
from psycopg2.extras import RealDictCursor
from flask import Flask, render_template 
import pandas as pd 
import json


#Connection to industry table 
try: 
    connection = psycopg2.connect(user = "[USER]", 
                                  password= "[PASSWORD]", 
                                  host = "127.0.0.1",
                                  port = "5432", 
                                  database = "[DATABASE NAME]") 
    cursor = connection.cursor(cursor_factory=RealDictCursor)
    selection = "SELECT * FROM industry" 
    cursor.execute(selection)
    industry = cursor.fetchall()
    industry_df = pd.DataFrame(industry)
except (Exception, psycopg2.Error) as error : 
    print ("Error", error)
finally: 
    if connection:
        cursor.close()
        connection.close()
        print("Connection closed")

#Connection to population_gb table 
try: 
    connection = psycopg2.connect(user = "[USER]", 
                                  password= "[PASSWORD]",
                                  host = "127.0.0.1", 
                                  port = "5432", 
                                  database = "[DATABASE NAME]") 
    cursor = connection.cursor(cursor_factory=RealDictCursor)
    selection = "SELECT * FROM population_gb"
    cursor.execute(selection)
    popGb = cursor.fetchall()
    popGb_df = pd.DataFrame(popGb)
except (Exception, psycopg2.Error) as error : 
    print ("Error", error)
finally: 
    if connection:
        cursor.close()
        connection.close()
#Connection to population table 
try: 
    connection = psycopg2.connect(user = "[USER]", 
                                  password= "[PASSWORD]", 
                                  host = "127.0.0.1", 
                                  port = "5432", 
                                  database = "[DATABASE NAME]") 
    cursor = connection.cursor(cursor_factory=RealDictCursor)
    selection = "SELECT * FROM population"
    cursor.execute(selection)
    pop = cursor.fetchall()
    pop_df = pd.DataFrame(pop)
except (Exception, psycopg2.Error) as error : 
    print ("Error", error)
finally: 
    if connection:
        cursor.close()
        connection.close()

# Connection to energy table 
try: 
    connection = psycopg2.connect(user = "[USER]", 
                                  password= "[PASSWORD]", 
                                  host = "127.0.0.1", 
                                  port = "5432",
                                  database = "[DATABASE NAME]") 
    cursor = connection.cursor(cursor_factory=RealDictCursor)
    selection = "SELECT * FROM energy"
    cursor.execute(selection)
    energy = cursor.fetchall()
    energy_df = pd.DataFrame(energy)
except (Exception, psycopg2.Error) as error : 
    print ("Error", error)
finally: 
    if connection:
        cursor.close()
        connection.close()
        print("Connection closed")

# Connection to population_aus table 
try: 
    connection = psycopg2.connect(user = "[USER]", 
                                  password= "[PASSWORD]", 
                                  host = "127.0.0.1",
                                  port = "5432", 
                                  database = "[DATABASE NAME]") 
    cursor = connection.cursor(cursor_factory=RealDictCursor)
    selection = "SELECT * FROM population_aus" 
    cursor.execute(selection)
    population_aus = cursor.fetchall()
    population_aus_df = pd.DataFrame(population_aus)
except (Exception, psycopg2.Error) as error : 
    print ("Error", error)
finally: 
    if connection:
        cursor.close()
        connection.close()
        print("Connection closed")

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

@app.route("/plot_aroosa")
def aroosa(): 
    return render_template("plot_Aroosa.html")

@app.route("/plot_praveena")
def praveena():
    return render_template("plot_procon.html")

@app.route("/api/populationAus")
def population_aus():
    result = population_aus_df.to_json(orient="records")
    parsed = json.loads(result)
    population_aus_json = json.dumps(parsed, skipkeys = True, allow_nan = True, indent = 6) 
    return population_aus_json

@app.route("/api/industry")
def industry():
    result = industry_df.to_json(orient="records")
    parsed = json.loads(result)
    industry_json = json.dumps(parsed, skipkeys = True, allow_nan = True, indent = 6) 
    return industry_json

@app.route("/api/popGb")
def popGb():
    result = popGb_df.to_json(orient="records") 
    parsed = json.loads(result)
    popGb_json = json.dumps(parsed, skipkeys = True, allow_nan = True, indent = 6) 
    return popGb_json

@app.route("/api/pop")
def pop():
    result = pop_df.to_json(orient="records")
    parsed = json.loads(result)
    pop_json = json.dumps(parsed, skipkeys = True, allow_nan = True, indent = 6) 
    return pop_json

@app.route("/api/energy")
def energy():
    result2 = energy_df.to_json(orient="records")
    parsed2 = json.loads(result2)
    energy_json = json.dumps(parsed2, skipkeys = True, allow_nan = True, indent = 6) 
    return energy_json

if __name__ == "__main__":
    app.run(debug=True)
