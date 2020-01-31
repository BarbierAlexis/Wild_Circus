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


  INSERT INTO joke (joke, name, country) 
  VALUES 
  ('J’ai raconté une blague à un Parisien… Il a pas ri…', 'Jean', 'France'),
  ('Qu’est-ce qui est petit, carré et jaune ? -Un petit carré jaune!!!', 'Pedro', 'Brazil'),
  ('Avec quoi ramasse-ton la papaille? -Avec une foufourche!', 'Gustav', 'Norway'),
  ('Comment appelle-t-on une blonde qui ne comprends rien à l’informatique ? -Une e-conne', 'Jo le matcho', 'Belgium'),
  ('Pourquoi quand on veut viser on ferme un œil ? -Car si on fermait les deux on verrait plus rien !', 'Léa', 'Italy'),
  ('Pourquoi les plongeurs plongent-ils en arrière? -Parce que si ils plongent en avant ils tombent dans le bateau!', 'John', 'Ireland');