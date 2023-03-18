import os
import psycopg2

# from config import host, user, password, db_name

conn = psycopg2.connect(
        host="localhost",
        database="stamp_db",
        user= "postgres",
        password="1111")

# Open a cursor to perform database operations
cur = conn.cursor()

# cur.execute('CREATE DATABASE stamp_db;')

# Execute a command: this creates a new table sta
cur.execute('DROP TABLE IF EXISTS image;')
cur.execute('DROP TABLE IF EXISTS model_3d;')
cur.execute('DROP TABLE IF EXISTS stamp;')
cur.execute('DROP TABLE IF EXISTS artifact;')
cur.execute('DROP TABLE IF EXISTS manufact;')
cur.execute('DROP TABLE IF EXISTS site;')

cur.execute('CREATE TABLE site (ID smallint PRIMARY KEY,'
            'Name varchar (150) NOT NULL,'
            'Latitude numeric (7,5),'
            'Longitude numeric (7,5));'
            )

# Insert data into the table
f_site = open('./tables_csv/Site.csv','r', encoding="utf8")
next(f_site)
cur.copy_from(f_site, 'site', sep=';', null='')
f_site.close()


# cur.execute('DROP TABLE IF EXISTS manufact;')
cur.execute('CREATE TABLE manufact (id smallint PRIMARY KEY,'
            'center varchar (150) NOT NULL,'
            'latitude numeric (7,5),'
            'longitude numeric (7,5));'
            )

# Insert data into the table
f_m = open('./tables_csv/Manufact.csv','r', encoding="utf8")
next(f_m)
cur.copy_from(f_m, 'manufact', sep=';', null='')
f_m.close()


# cur.execute('DROP TABLE IF EXISTS artifact;')
cur.execute('CREATE TABLE artifact (id smallint PRIMARY KEY,'
            'site_id smallint NOT NULL REFERENCES site(id),'
            'manufact_id smallint NOT NULL REFERENCES manufact(id),'
            'year_exc character (4),'
            'unit_exc varchar (150),'
            'leader_exc varchar (150),'
            'position varchar (15),'
            'field_id varchar (40) UNIQUE,'
            'depository varchar (40),'
            'depository_id varchar (40) UNIQUE,'
            'description text,'
            'artif_g varchar (15),'
            'preservation varchar (15),'
            'munsell_hue varchar (7),'
            'munsell_value varchar (2),'
            'munsell_chroma varchar (2),'
            'munsell_code varchar (10),'
            'munsell_name varchar (30));'
            )

# Insert data into the table
f_a = open('./tables_csv/Artifact.csv','r', encoding="utf8")
next(f_a)
cur.copy_from(f_a, 'artifact', sep=';', null='')
f_a.close()


# cur.execute('DROP TABLE IF EXISTS stamp;')
cur.execute('CREATE TABLE stamp (id smallint PRIMARY KEY,'
            'artifact_id smallint NOT NULL REFERENCES artifact(id),'
            'position varchar (10),'
            'preservation varchar (10),'
            'preservation_comm varchar (40),'
            'relief_type varchar (20),'
            'content_type varchar (20),'
            'shape_type varchar (40),'
            'axis_large smallint,'
            'axis_small smallint,'
            'origin_type varchar (15),'
            'magist_name varchar (30),'
            'fabric_name varchar (30),'
            'legend text,'
            'legend_comment varchar (500),'
            'emblem varchar (200),'
            'date_text varchar (50),'
            'date_early smallint,'
            'date_late smallint,'
            'finkelstein varchar (20),'
            'garlan varchar (20),'
            'comments text,'
            'published varchar (100));'
            )

# Insert data into the table
f_st = open('./tables_csv/Stamp.csv','r', encoding='UTF-8')
next(f_st)
cur.copy_from(f_st, 'stamp', sep=';', null='')
f_st.close()

# cur.execute('DROP TABLE IF EXISTS model_3d;')
cur.execute('set datestyle to DMY;')
cur.execute('CREATE TABLE model_3d (id char(6) PRIMARY KEY,'
            'stamp_id smallint NOT NULL REFERENCES stamp(id),'
            'polygon_count integer,'
            'polygon_sm integer,'
            'polygon_size integer,'
            'process varchar (30),'
            'frame_count integer,'
            'camera varchar (40),'
            'lens varchar (40),'
            'date date,'
            'link varchar (50));'
            )

# Insert data into the table
f_st = open('./tables_csv/3DModel.csv','r',encoding="utf8")
next(f_st)
cur.copy_from(f_st, 'model_3d', sep=';', null='')
f_st.close()


# cur.execute('DROP TABLE IF EXISTS image;')
cur.execute('CREATE TABLE image (id smallint PRIMARY KEY,'
            'stamp_id smallint NOT NULL REFERENCES stamp(id),'
            'type varchar (40),'
            'description text,'
            'link300px varchar (80),'
            'link1000px varchar (80));'
            )

# Insert data into the table
f_st = open('./tables_csv/Image.csv','r',encoding="utf8")
next(f_st)
cur.copy_from(f_st, 'image', sep=';', null='')
f_st.close()

conn.commit()

cur.close()
conn.close()