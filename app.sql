SHOW DATABASES
CREATE DATABASE inventory_company
USE inventory_company

-- creation of all the entities
CREATE TABLE users(
id int,
username varchar(255),
password varchar(255),
PRIMARY KEY (id) 
)

CREATE TABLE admin(
id int,
f_name varchar(255),
l_name varchar(255),
email_address varchar(255),
phone_number int,
FOREIGN KEY (id) REFERENCES users(id),
PRIMARY KEY (id) 
)

CREATE TABLE customers(
id int,
f_name varchar(255),
l_name varchar(255),
email_address varchar(255),
phone_number int,
home_address varchar(255),
city varchar(255),
country varchar(255),
postal_code int,
region varchar(255),
FOREIGN KEY (id) REFERENCES users(id),
PRIMARY KEY (id)
)


CREATE TABLE products(
id int,
product_name varchar(255),
product_description varchar(255),
product_price int,
product_quantity int,
brand varchar(255),
FOREIGN KEY (id) REFERENCES categories(id),
FOREIGN KEY (id) REFERENCES customer(id),
PRIMARY KEY (id)
)

CREATE TABLE categories(
id int,
category_name varchar(255),
category_description varchar(255),
FOREIGN KEY (id) REFERENCES products(id),   
PRIMARY KEY (id)
)

CREATE TABLE orders(
id int,
order_date date,
order_status varchar(255),
FOREIGN KEY (id) REFERENCES customers(id),
PRIMARY KEY (id)
)


-- Show commands for getting records from two or more entities
SELECT * FROM users
WHERE id = 1;

SELECT * FROM categories
WHERE id = 2;

SELECT * FROM products
WHERE id = 3;


-- Show commands for updating records from two or more entities
UPDATE order SET order_date = '2020-10-10'
WHERE id = 1

UPDATE categories SET category_name = 'groceries'
WHERE id = 2


UPDATE products SET product_price = 23445
WHERE id = 1


-- Show commands for deleting records from two or more entities
DELETE FROM admins
WHERE id = 1

DELETE FROM customers
WHERE id = 2

DELETE FROM products
WHERE id = 3



