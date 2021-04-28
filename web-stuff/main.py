from flask import Flask, render_template 

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route ("/about")
def about():
    return render_template("about.html")

# @app.route("/selector")
# def selector(): 
#     return render_template("selector.html")

@app.route("/mara")
def selector(): 
    return render_template("mara.html")

if __name__ == "__main__":
    app.run(debug=True)