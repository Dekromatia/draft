from flask import Flask, jsonify, send_from_directory, make_response
from sqlalchemy import ForeignKey, create_engine, Column, Text, CHAR, VARCHAR, Date, Integer, String, SmallInteger, Numeric, Unicode, UnicodeText
from sqlalchemy.orm import sessionmaker, DeclarativeBase, relationship, Mapped, mapped_column
from sqlalchemy.ext.declarative import declarative_base
# from my_models import MyTable
import json

# engine = create_engine('postgresql://postgres:postgres@db:5432/amph_stamp_db')
# Session = sessionmaker(bind=engine)

engine = create_engine('postgresql://postgres:postgres@db:5432/amph_stamp_db')
Session = sessionmaker(bind=engine)
session = Session()

app = Flask(__name__)


class Base(DeclarativeBase):
    pass

class Site(Base):
    __tablename__ = 'site'
    id = Column(SmallInteger, primary_key=True)
    name = Column(VARCHAR(150), nullable=False)
    latitude = Column(Numeric (precision=7, scale=5))
    longitude = Column(Numeric (precision=7, scale=5))
    # artifact = relationship("Artifact", uselist=True)

class Manufact(Base):
    __tablename__ = 'manufact'
    id = Column(SmallInteger, primary_key=True)
    center = Column(VARCHAR(100), nullable=False)
    latitude = Column(Numeric (precision=7, scale=5))
    longitude = Column(Numeric (precision=7, scale=5))
    # artifact = relationship("Artifact", uselist=True)

class Artifact(Base):
    __tablename__ = 'artifact'
    id = Column(SmallInteger, primary_key=True)
    site_id = Column(SmallInteger, ForeignKey('site.id'))
    manufact_id = Column(SmallInteger, ForeignKey('manufact.id'))
    year_exc = Column(CHAR(4))
    unit_exc = Column(VARCHAR(150))
    leader_exc = Column(VARCHAR(150))
    position = Column(VARCHAR(15))
    field_id = Column(VARCHAR(40), unique=True)
    depository = Column(VARCHAR(40))
    depository_id = Column(VARCHAR(40), unique=True)
    description =  Column(Text)
    artif_g = Column(VARCHAR(15))
    preservation = Column(VARCHAR(15))
    munsell_hue = Column(VARCHAR(7))
    munsell_value = Column(VARCHAR(2))
    munsell_chroma = Column(VARCHAR(2))
    munsell_code = Column(VARCHAR (10))
    munsell_name = Column(VARCHAR (30))
    # site = relationship("Site", back_populates="artifact")
    # manufact = relationship("Manufact", back_populates="artifact")
    # stamp = relationship("Stamp", back_populates="artifact", uselist=True)

class Stamp(Base):
    __tablename__ = 'stamp'
    id = Column(CHAR(6), primary_key=True)
    artifact_id = Column(SmallInteger, ForeignKey('artifact.id'))
    position = Column(VARCHAR(10))
    preservation = Column(VARCHAR(10))
    preservation_comm = Column(VARCHAR(40))
    relief_type = Column(VARCHAR(20))
    content_type = Column(VARCHAR(20))
    shape_type = Column(VARCHAR(40))
    axis_large = Column(SmallInteger)
    axis_small = Column(SmallInteger)
    origin_type = Column(VARCHAR(15))
    magist_name = Column(VARCHAR(30))
    fabric_name = Column(VARCHAR(30))
    legend = Column(Text)
    legend_comment = Column(VARCHAR(500))
    emblem = Column(VARCHAR(200))
    date_text = Column(VARCHAR(50))
    date_early = Column(SmallInteger)
    date_late = Column(SmallInteger)
    finkelstein  = Column(VARCHAR(20))
    garlan = Column(VARCHAR(20))
    comments = Column(Text)
    published = Column(VARCHAR(100))
    # artifact = relationship("Artifact", back_populates="stamp")
    # model3d = relationship("Model3D", back_populates="stamp", uselist=True)
    # image = relationship("Image", back_populates="stamp", uselist=True)


class Model_3d(Base):
    __tablename__ = 'model_3d'
    id = Column(SmallInteger, primary_key=True)
    stamp_id = Column(SmallInteger, ForeignKey('stamp.id'))
    polygon_count = Column(Integer)
    polygon_sm = Column(Integer)
    polygon_size = Column(Integer)
    process = Column(VARCHAR(30))
    frame_count = Column(Integer)
    camera = Column(VARCHAR(40))
    lens = Column(VARCHAR(40))
    date = Column(Date())
    link = Column(VARCHAR(50))
    # stamp = relationship("Stamp", back_populates="model_3d")

class Image(Base):
    __tablename__ = 'image'
    id = Column(SmallInteger, primary_key=True)
    stamp_id = Column(SmallInteger, ForeignKey('stamp.id'))
    type = Column(VARCHAR(40))
    description = Column(Text())
    link300pxlink300px = Column(VARCHAR(80))
    link1000px = Column(VARCHAR(80))
    # stamp = relationship("Stamp", back_populates="image")


@app.route('/site', methods = ['GET'])
def get_site():
    results = session.query(Site).all()
    site_list = []
    for site in results:
        site_data = {
            'id': site.id,
            'name': site.name,
            'latitude': site.latitude,
            'longitude': site.longitude
        }
        site_list.append(site_data)

    response = make_response(jsonify(site_list))
    response.headers['Content-Type'] = 'application/json; charset=utf-8'

    return response
    
    # return jsonify(site_list)

@app.route('/manufact', methods = ['GET'])
def get_manufact():
    results = session.query(Manufact).all()
    manufact_list = []
    for manufact in results:
        manufact_data = {
            'id': manufact.id,
            'name': manufact.center,
            'latitude': manufact.latitude,
            'longitude': manufact.longitude
        }
        manufact_list.append(manufact_data)
    return jsonify(manufact_list)

@app.route('/artifact', methods = ['GET'])
def get_artifact():
    results = session.query(Artifact).all()
    artifact_list = []
    for artifact in results:
        artifact_data = {
            'id': artifact.id,
            'site_id': artifact.site_id,
            'manufact_id': artifact.manufact_id,
            'year_exc': artifact.year_exc,
            'unit_exc': artifact.unit_exc,
            'leader_exc': artifact.leader_exc,
            'position': artifact.position,
            'field_id': artifact.field_id,
            'depository': artifact.depository,
            'depository_id': artifact.depository_id,
            'description': artifact.description,
            'artif_g': artifact.artif_g,
            'preservation varchar': artifact.preservation,
            'munsell_hue': artifact.munsell_hue,
            'munsell_value': artifact.munsell_value,
            'munsell_chroma': artifact.munsell_chroma,
            'munsell_code': artifact.munsell_code,
            'munsell_name': artifact.munsell_name
        }
        artifact_list.append(artifact_data)
    return jsonify(artifact_list)

@app.route('/stamp', methods = ['GET'])
def get_stamp():
    results = session.query(Stamp).all()
    stamp_list = []
    for stamp in results:
        stamp_data = {
            'id': stamp.id,
            'artifact_id': stamp.artifact_id,
            'position': stamp.position,
            'preservation': stamp.preservation,
            'preservation_comm': stamp.preservation_comm,
            'relief_type': stamp.relief_type,
            'content_type': stamp.content_type,
            'shape_type': stamp.shape_type,
            'axis_large': stamp.axis_large,
            'axis_small': stamp.axis_small,
            'origin_type': stamp.origin_type,
            'magist_name': stamp.magist_name,
            'fabric_name': stamp.fabric_name,
            'legend': stamp.legend,
            'legend_comment': stamp.legend_comment,
            'emblem': stamp.emblem,
            'date_text': stamp.date_text,
            'date_early': stamp.date_early,
            'date_late': stamp.date_late,
            'finkelstein': stamp.finkelstein,
            'garlan': stamp.garlan,
            'comments': stamp.comments,
            'published': stamp.published
        }
        stamp_list.append(stamp_data)
    return jsonify(stamp_list)

@app.route('/model_3d', methods = ['GET'])
def get_model_3d():
    results = session.query(Model_3d).all()
    model_3d_list = []
    for model_3d in results:
        model_3d_data = {
            'id': model_3d.id,
            'stamp_id': model_3d.stamp_id,
            'polygon_count': model_3d.polygon_count,
            'polygon_sm': model_3d.polygon_sm,
            'polygon_size': model_3d.polygon_size,
            'process': model_3d.process,
            'frame_count': model_3d.frame_count,
            'camera': model_3d.camera,
            'lens': model_3d.lens,
            'date': model_3d.date,
            'link': model_3d.link
            }
        model_3d_list.append(model_3d_data)
    return jsonify(model_3d_list)

@app.route('/image', methods = ['GET'])
def get_image():
    results = session.query(Image).all()
    image_list = []
    for image in results:
        image_data = {
            'id': image.id,
            'stamp_id': image.stamp_id,
            'type': image.type,
            'description': image.description,
            'link300px': image.link300px,
            'link1000px': image.link1000px
            }
        image_list.append(image_data)
    return jsonify(image_list)


if __name__== "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
