DROP DATABASE IF EXISTS composers ;

CREATE DATABASE IF NOT EXISTS composers;

USE composers;




CREATE TABLE composerInfo (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  bio VARCHAR(255),
  url INT,
  PRIMARY KEY(id),
);