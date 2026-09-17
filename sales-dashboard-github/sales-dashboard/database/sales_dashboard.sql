CREATE DATABASE IF NOT EXISTS sales_dashboard;
USE sales_dashboard;

CREATE TABLE IF NOT EXISTS sales (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(120) NOT NULL,
    product_name VARCHAR(150) NOT NULL,
    category VARCHAR(80) NOT NULL,
    region VARCHAR(50) NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    profit DECIMAL(12,2) NOT NULL,
    status VARCHAR(30) NOT NULL,
    sale_date DATE NOT NULL
);

INSERT INTO sales (customer_name, product_name, category, region, amount, profit, status, sale_date) VALUES
('Aarav Mehta','MacBook Pro','Technology','South',145000,29000,'Completed','2026-01-06'),
('Priya Sharma','Office Chair','Furniture','North',28000,8400,'Completed','2026-01-14'),
('Rahul Kumar','iPhone 16','Technology','West',82000,16400,'Completed','2026-02-03'),
('Ananya Iyer','Laser Printer','Office Supplies','South',36000,7200,'Completed','2026-02-18'),
('Vikram Singh','Monitor 4K','Technology','North',52000,10400,'Pending','2026-03-02'),
('Neha Patel','Standing Desk','Furniture','West',41000,12300,'Completed','2026-03-17'),
('Arjun Rao','Wireless Headset','Technology','East',18000,5400,'Completed','2026-04-08'),
('Meera Nair','Printer Paper Pack','Office Supplies','South',12000,3000,'Completed','2026-04-21'),
('Karan Shah','iPad Air','Technology','West',69000,13800,'Completed','2026-05-04'),
('Diya Menon','Ergonomic Chair','Furniture','East',33000,9900,'Pending','2026-05-19'),
('Rohan Das','Laptop Stand','Furniture','North',15000,4500,'Completed','2026-06-06'),
('Ishita Roy','Cloud Server Plan','Technology','South',95000,28500,'Completed','2026-06-22'),
('Aditya Jain','Mechanical Keyboard','Technology','East',21000,6300,'Completed','2026-07-09'),
('Sneha Gupta','Filing Cabinet','Furniture','North',24000,7200,'Completed','2026-07-25'),
('Nikhil Verma','Projector','Technology','West',58000,11600,'Completed','2026-08-10'),
('Pooja Reddy','Desk Organizer','Office Supplies','South',9000,2250,'Completed','2026-08-27'),
('Sanjay Kumar','Business Tablet','Technology','East',73000,14600,'Completed','2026-09-05'),
('Kavya Krishnan','Conference Table','Furniture','North',62000,18600,'Completed','2026-09-11');
