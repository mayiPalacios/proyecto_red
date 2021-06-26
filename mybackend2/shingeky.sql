ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Mayi_palacios1';


DROP DATABASE IF EXISTS shingueky;

CREATE DATABASE  IF NOT EXISTS shingueky;

USE shingueky;

CREATE TABLE IF NOT EXISTS shing(
	user VARCHAR(9) PRIMARY KEY,
	email  VARCHAR(100),
	password VARCHAR(9)
);
