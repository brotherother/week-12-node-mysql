CREATE DATABASE Bamazon;

CREATE TABLE Products (
ItemID int AUTO_INCREMENT,
ProductName varchar(30) NOT NULL,
DepartmentName varchar(30) NOT NULL,
Price decimal(6,2),
StockQuantity int NOT NULL,
PRIMARY KEY(ItemID)
); 

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
VALUES 
('Mop', 'Household', 15.99, 50), 
('Bed Sheets', 'Bedroom', 22.98, 60),
('TV', 'Electronics', 348.00, 25),
('T-shirt', 'Cloting', 10.99, 15),
('Cutting Board', 'Kitchen', 7.99, 80),
('Pokemon', 'Games', 34.99, 17),
('Jump Rope', 'Athletic Gear', 5.99, 3),
('Lego', 'Toys', 7.50, 7),
('Harry Potter', 'Books', 11.22, 90),
('Neclace', 'Jewelry', 77.64, 3);
