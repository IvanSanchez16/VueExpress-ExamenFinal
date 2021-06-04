CREATE DATABASE carros;

USE carros;

CREATE TABLE carros(id int not null auto_increment, modelo varchar(50) not null
, marca varchar(60) not null, año varchar(4) not null, color varchar(20) null,
primary key(id));

Insert into carros(modelo,marca,año,color) values('hilux','toyota','2016','gris');