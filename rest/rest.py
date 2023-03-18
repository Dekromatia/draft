from eve_sqlalchemy import SQL as _SQL
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)

class SQL(_SQL):
   driver = db

app = Eve(validator=ValidatorSQL, data=SQL)