import os
from flask import Flask, render_template

app = Flask(__name__,
            template_folder=os.path.abspath('src/templates'))


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')
def hello():
    return render_template('hello.html')


if __name__ == '__main__':
    app.run(debug=True)
