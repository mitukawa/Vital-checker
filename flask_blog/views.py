from flask import request, redirect, url_for, render_template, flash, session
from flask_blog import app
import os
from time import sleep 


@app.route("/")
def show_entries():
    s = '普通'
    return render_template('entries/index.html', status = s)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        if request.form['username'] != app.config['USERNAME']:
            print('ユーザー名が異なります')
        elif request.form['password'] != app.config['PASSWORD'] :
            print('パスワードが異なります。')
        else:
            return redirect('/')
    return render_template('login.html')


@app.route('/logout')
def logout():
    return redirect('/')



@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/voice_analysis", methods=["POST"])
def voice_analysis():
    print("strat")
    upload_file = request.files['rec_data']
    upload_file.save('./flask_blog/tmp/wav/rec.wav')
    print("end")
    
    # upload_file.save(os.path.join('/tmp/wav/','rec.wav' ))
    return "0"


