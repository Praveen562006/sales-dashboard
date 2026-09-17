# 📊 Sales Dashboard

A professional full-stack **Sales Dashboard** designed to help businesses monitor sales performance, revenue, profit, customers, products, and regional performance through an interactive and responsive interface.

---

## 🚀 Project Overview

The **Sales Dashboard** is a business analytics web application developed using **Java, Spring Boot, HTML, CSS, JavaScript, and MySQL**.

It provides a centralized dashboard where users can quickly understand important business metrics and analyze sales data using interactive charts, filters, and tables.

---

## ✨ Features

- 📈 Revenue and profit analysis
- 💰 Total revenue tracking
- 🛒 Order monitoring
- 👥 Customer analysis
- 📦 Product performance analysis
- 🌎 Regional sales analysis
- 📊 Sales by category
- 📅 Monthly sales trends
- 🔎 Transaction search
- 🎯 Category filtering
- 📆 Date-period filtering
- 📥 Export sales data as CSV
- 📱 Responsive design
- 🔌 REST API integration
- 🗄️ MySQL database support
- 🎨 Professional business-themed UI

---

## 🖥️ Dashboard Preview

The dashboard provides an overview of important business KPIs:

- Total Revenue
- Total Orders
- Total Customers
- Net Profit
- Monthly Revenue
- Monthly Profit
- Category Performance
- Regional Performance
- Top Products
- Recent Transactions

> 📌 Add your dashboard screenshot to `screenshots/dashboard-overview.png` and uncomment the image below.

<!--
![Sales Dashboard](screenshots/dashboard-overview.png)
-->

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- Chart.js

### Backend

- Java 17
- Spring Boot
- Spring Data JPA
- REST API

### Database

- MySQL

### Build Tool

- Maven

### Development Tools

- Git
- GitHub
- IntelliJ IDEA / VS Code

---

## 🏗️ Project Architecture

```text
                 ┌─────────────────────┐
                 │        User         │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │   HTML / CSS / JS   │
                 │     Dashboard       │
                 └──────────┬──────────┘
                            │
                         REST API
                            │
                            ▼
                 ┌─────────────────────┐
                 │   Spring Boot API   │
                 │        Java         │
                 └──────────┬──────────┘
                            │
                         JPA / SQL
                            │
                            ▼
                 ┌─────────────────────┐
                 │        MySQL        │
                 │      Database       │
                 └─────────────────────┘
```

---

## 📁 Project Structure

```text
sales-dashboard/
│
├── backend/
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/
│           │       └── salesdashboard/
│           │           ├── controller/
│           │           ├── model/
│           │           ├── repository/
│           │           ├── service/
│           │           └── SalesDashboardApplication.java
│           │
│           └── resources/
│               └── application.properties
│
├── frontend/
│   ├── index.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── dashboard.js
│
├── database/
│   └── sales_dashboard.sql
│
├── screenshots/
│   └── README.md
│
├── .gitignore
├── pom.xml
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/sales-dashboard.git
```

Move into the project directory:

```bash
cd sales-dashboard
```

---

## 📋 Requirements

Make sure the following are installed:

- Java 17 or later
- Maven 3.9+
- MySQL 8+
- Git
- Modern web browser

---

## 🗄️ Database Setup

Open MySQL and run:

```sql
CREATE DATABASE sales_dashboard;
```

Or execute the provided SQL file:

```text
database/sales_dashboard.sql
```

You can run:

```bash
mysql -u root -p < database/sales_dashboard.sql
```

---

## 🔧 Configure MySQL

Open:

```text
backend/src/main/resources/application.properties
```

Update your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/sales_dashboard?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=your_password
```

---

## ▶️ Run the Backend

Navigate to the backend directory:

```bash
cd backend
```

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

The backend will start at:

```text
http://localhost:8080
```

---

## 🌐 Run the Frontend

Open:

```text
frontend/index.html
```

in your browser.

The dashboard will connect to the Spring Boot REST API.

The project also contains demo data, so the dashboard can display sample business data even when the backend/database is not available.

---

## 🔌 REST API Endpoints

### Dashboard Summary

```http
GET /api/dashboard/summary
```

Returns:

- Revenue
- Orders
- Customers
- Profit
- Growth

### Monthly Sales

```http
GET /api/dashboard/monthly
```

### Category Sales

```http
GET /api/dashboard/categories
```

### Regional Sales

```http
GET /api/dashboard/regions
```

### Top Products

```http
GET /api/dashboard/products
```

### Transactions

```http
GET /api/dashboard/transactions
```

---

## 📊 Dashboard Modules

### 1. Sales Overview

Displays the most important business KPIs:

```text
Total Revenue
Total Orders
Total Customers
Net Profit
```

### 2. Revenue Analytics

Interactive line chart showing:

```text
Monthly Revenue
Monthly Profit
```

### 3. Category Analysis

Displays revenue contribution from:

```text
Technology
Furniture
Office Supplies
```

### 4. Regional Performance

Analyzes sales across different business regions:

```text
North
South
East
West
```

### 5. Product Performance

Displays the highest revenue-generating products.

### 6. Transaction Management

Users can:

- Search transactions
- Filter categories
- Filter periods
- View transaction status
- Export data as CSV

---

## 📥 CSV Export

The dashboard includes an **Export** feature that generates a sales report in CSV format.

Example:

```text
Customer,Product,Category,Region,Amount,Profit,Status,Date
Aarav Mehta,MacBook Pro,Technology,South,145000,29000,Completed,2026-01-06
```

---

## 🎯 Key Learning Outcomes

This project demonstrates practical knowledge of:

- Java programming
- Object-Oriented Programming
- Spring Boot
- REST API development
- Spring Data JPA
- MySQL database integration
- HTML/CSS frontend development
- JavaScript DOM manipulation
- API integration
- Data visualization
- Responsive web design
- Git and GitHub
- Full-stack application architecture

---

## 🔮 Future Enhancements

The project can be extended with:

- 🔐 User authentication
- 👤 Admin and employee roles
- 🔑 JWT authentication
- 📄 PDF report generation
- 📊 Advanced analytics
- 🤖 Sales forecasting
- 📈 AI-based sales predictions
- ☁️ Cloud deployment
- 🔔 Real-time notifications
- 📤 Excel export
- 🗂️ Server-side pagination
- 🔍 Advanced search
- 🌙 Dark mode

---

## 💼 Resume Description

**Sales Dashboard | Java, Spring Boot, HTML, CSS, JavaScript, MySQL**

> Developed a responsive full-stack sales analytics dashboard using Java Spring Boot, JavaScript, HTML, CSS, and MySQL. Implemented REST APIs, interactive data visualizations, KPI monitoring, product and regional analysis, transaction search, filtering, and CSV report export to provide actionable business insights.

---

## 🎤 Interview Explanation

If an interviewer asks **"Tell me about your project"**, you can say:

> "My project is a Sales Dashboard developed using Java, Spring Boot, HTML, CSS, JavaScript, and MySQL. The main purpose of the project is to provide businesses with a centralized platform to monitor their sales performance. The dashboard displays important KPIs such as revenue, orders, customers, and profit. I also implemented interactive charts for monthly sales, category analysis, regional performance, and top products. The frontend communicates with the Java Spring Boot backend through REST APIs, while MySQL is used for storing sales information. I also added search, filtering, and CSV export functionality to make the dashboard more useful for business analysis."

---

## 👨‍💻 Author

**Your Name**

GitHub: `https://github.com/YOUR_USERNAME`

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for **educational and portfolio purposes**.
