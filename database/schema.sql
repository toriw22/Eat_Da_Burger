CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)	 
)
