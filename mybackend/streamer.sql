ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Mayi_palacios1';


DROP DATABASE IF EXISTS streamer;

CREATE DATABASE  IF NOT EXISTS streamer;

USE streamer;

CREATE TABLE IF NOT EXISTS stream(
	user VARCHAR(9) PRIMARY KEY,
	email  VARCHAR(100),
	password VARCHAR(9)
);
