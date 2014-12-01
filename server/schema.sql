CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  -- firstname varchar(200) NOT NULL,
  -- lastname varchar(200) NOT NULL,
  password varchar(200) NOT NULL,
  gender varchar(40) NOT NULL,
  birthday DATE NOT NULL,
  status varchar(200),
  -- family_id int,
  PRIMARY KEY (ID)
);

-- CREATE TABLE markers (
--   id int NOT NULL AUTO_INCREMENT,

-- )

-- CREATE TABLE users (
--   id int NOT NULL AUTO_INCREMENT,
--   username varchar(40) NOT NULL,
--   PRIMARY KEY (id)
-- )
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

