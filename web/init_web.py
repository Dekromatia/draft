from flask import Flask, jsonify
import flask_sqlalchemy


app = Flask(__name__)
# app.config.from_object("config.Config")


# db = SQLAlchemy(app)


# class User(db.Model):
#     __tablename__ = "users"

#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(128), unique=True, nullable=False)
#     active = db.Column(db.Boolean(), default=True, nullable=False)

#     def __init__(self, email):
#         self.email = email


# @cli.command("create_db")
# def create_db():
#     db.drop_all()
#     db.create_all()
#     db.session.commit()


@app.route("/")
def hello_world():
    return jsonify(hello="world")


if __name__== "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)