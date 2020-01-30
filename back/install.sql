DROP DATABASE IF EXISTS wildcircus;
CREATE DATABASE IF NOT EXISTS wildcircus;
USE wildcircus;

DROP TABLE IF EXISTS joke, picture;

CREATE TABLE joke (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  joke VARCHAR(255) NOT NULL
);

CREATE TABLE picture (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

INSERT INTO picture (name) 
  VALUES 
  ('cirque1.jpeg'),
  ('cirque2.jpeg'),
  ('cirque3.jpeg'),
  ('cirque4.jpeg'),
  ('cirque5.jpeg'),
  ('cirque6.jpeg'),
  ('cirque7.jpeg'),
  ('cirque8.jpeg'),
  ('cirque9.jpeg'),
  ('cirque10.jpeg'),
  ('cirque11.jpeg'),
  ('cirque12.jpeg'),
  ('cirque13.jpeg'),
  ('cirque14.jpeg'),
  ('cirque15.jpeg'),
  ('cirque16.jpeg'),
  ('cirque17.jpeg'),
  ('cirque18.jpeg'),
  ('cirque19.jpeg'),
  ('cirque20.jpeg');