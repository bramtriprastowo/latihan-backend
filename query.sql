-- Table
CREATE TABLE product(
    id INT PRIMARY KEY,
    name VARCHAR NOT NULL,
    stock INT NOT NULL,
    price INT NOT NULL
);

CREATE TABLE category(
    id INT PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    fullname VARCHAR NOT NULL,
    role VARCHAR
);

-- PostgreSQL
\l => list database
\c nama_database => masuk ke database
\d => daftar tabel
\d nama_tabel => kolom dan tipe data kolom tabel

-- product
SELECT * FROM product;
INSERT INTO product(id, name, stock, price) VALUES(1, 'baju', 10, 70000),(2, 'celana', 10, 70000),(3, 'kursi', 13, 250000);
UPDATE product SET name = 'kemeja' , stock = 1, price = 200000 WHERE id=2;
DELETE FROM product WHERE id=1;

-- category
SELECT * FROM category;
INSERT INTO category(id,name) VALUES(1,'fashion'),(2,'electronic'),(3,'furniture');

-- users
SELECT * FROM users;
INSERT INTO users(id, email, password, fullname, role) VALUES('1', 'test@test.com', 'test', 'Test Test', NULL);


