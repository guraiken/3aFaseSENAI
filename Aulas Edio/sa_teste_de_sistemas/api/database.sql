CREATE DATABASE IF NOT EXISTS animal_shop;
USE animal_shop;

CREATE TABLE IF NOT EXISTS animals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    species VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
	id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO animals (name, species, age, price) VALUES
('Buddy', 'Golden Retriever', 2, 500.00),
('Mittens', 'Siamese Cat', 1, 200.00);

INSERT INTO users 
(email, name, password)
VALUES
("gustavotararararan@gmail.com", "Gustavo", "1231213123"),
("testestes@gmail.com", "Teste", "testando")