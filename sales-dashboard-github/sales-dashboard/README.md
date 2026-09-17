# Sales Dashboard

A professional full-stack business analytics dashboard built with **Java, Spring Boot, HTML, CSS, JavaScript, and MySQL**.

## Highlights

- Executive KPI cards for revenue, orders, customers, and profit
- Interactive monthly revenue/profit chart
- Category performance doughnut chart
- Regional sales analysis
- Recent transaction table
- Product performance view
- Customer insights
- Date range and category filters
- Responsive business-focused UI
- REST API powered by Spring Boot
- MySQL-ready database schema
- Demo mode with built-in sample data, so the dashboard runs immediately

## Technology Stack

| Layer | Technology |
|---|---|
| Backend | Java 17, Spring Boot |
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Charts | Chart.js |
| Database | MySQL |
| Build Tool | Maven |
| API | REST |

## Project Structure

```text
sales-dashboard/
├── backend/
│   ├── src/main/java/com/salesdashboard/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   │   └── service/
│   └── src/main/resources/
│       └── application.properties
├── frontend/
│   ├── index.html
│   ├── css/style.css
│   └── js/dashboard.js
├── database/
│   └── sales_dashboard.sql
├── screenshots/
│   └── README.md
├── .gitignore
├── pom.xml
└── README.md
```

## Run Locally

### 1. Requirements

- Java 17+
- Maven 3.9+
- MySQL 8+ (optional for demo mode)

### 2. Start the backend

```bash
cd backend
mvn spring-boot:run
```

The API starts at:

```text
http://localhost:8080
```

### 3. Open the dashboard

Open `frontend/index.html` in a browser.

The frontend automatically tries the API first and falls back to realistic demo data when the backend/database is unavailable.

## API Endpoints

```text
GET /api/dashboard/summary
GET /api/dashboard/monthly
GET /api/dashboard/categories
GET /api/dashboard/regions
GET /api/dashboard/products
GET /api/dashboard/transactions
```

## Database

Create the database and sample data:

```bash
mysql -u root -p < database/sales_dashboard.sql
```

Then update `backend/src/main/resources/application.properties` with your MySQL credentials.

## GitHub Upload

```bash
git init
git add .
git commit -m "Initial professional sales dashboard"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Resume Description

**Sales Dashboard | Java, Spring Boot, HTML, CSS, JavaScript, MySQL**

Developed a responsive full-stack sales analytics dashboard that provides business KPIs, revenue and profit trends, category/region analysis, product performance, customer insights, filtering, and REST-based data integration using Java Spring Boot and JavaScript.

## Future Enhancements

- JWT authentication and role-based access
- CSV/PDF report export
- Sales forecasting
- Real-time notifications
- Pagination and server-side filtering
- Cloud deployment
