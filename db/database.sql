CREATE DATABASE IF NOT EXISTS apirestdb;
USE apirestdb;

CREATE TABLE IF NOT EXISTS monster (
		id INT AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(100) NOT NULL	
);

INSERT INTO monster (name) VALUES
('Rathalos'),
('Rathian'),
('Nargacuga'),
('kushala Daora'),
('Teostra');



