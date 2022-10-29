from flask import Blueprint, render_template

views = Blueprint("views", __name__)

@views.route("/")
def home():
    return render_template("home.html")

@views.route("fun/spin")
def spin():
    return render_template("fun/spin.html")

@views.route("fun/button")
def button():
    return render_template("fun/button.html")