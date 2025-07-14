# diet-calculator-dbms
A DBMS-based diet tracker app to log meals, track calories, and suggest personalized plans.

# 🥗 Diet Calculator App – Powered by DBMS

The **Diet Calculator App** is a simple yet powerful diet and nutrition tracking system built using **DBMS (Database Management Systems)** principles. It allows users to log their meals, track daily calories, and get nutritional suggestions based on their inputs. Ideal for students learning SQL, DBMS, and real-world health applications.

---

## 📌 Key Features

- 👤 User Registration and Login
- 🍽️ Log Daily Meals with Calories & Nutrients
- 📊 Track Daily, Weekly, Monthly Intake
- ⚖️ Set and Monitor Daily Calorie Goals
- 📚 Suggest Diet Plans based on intake trends
- 🗄️ Efficient SQL queries for CRUD operations
- 📦 Backend built using MySQL / PostgreSQL (Pluggable)

---

## 🧱 Tech Stack

| Layer        | Technologies Used            |
|--------------|------------------------------|
| Frontend     | HTML, CSS, JavaScript        |
| Backend      | Python (Flask) / PHP / Java  |
| Database     | MySQL / PostgreSQL           |
| Query Language | SQL                         |
| Hosting (Optional) | XAMPP / Localhost / Cloud SQL |

---

## 🗃️ DBMS Concepts Applied

- ER Modeling (User, Food, Log, Goals, etc.)
- Normalization (3NF schema design)
- SQL Joins for historical data insights
- Triggers for meal suggestions
- Stored Procedures for generating reports
- Transactions for secure log updates

---

## 🛠️ How to Use

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/diet-calculator-dbms.git
cd diet-calculator-dbms
# 🥗 Diet Calculator App – Powered by DBMS

The **Diet Calculator App** is a simple yet powerful diet and nutrition tracking system built using **DBMS (Database Management Systems)** principles. It allows users to log their meals, track daily calories, and get nutritional suggestions based on their inputs. Ideal for students learning SQL, DBMS, and real-world health applications.

---

## 📌 Key Features

- 👤 User Registration and Login
- 🍽️ Log Daily Meals with Calories & Nutrients
- 📊 Track Daily, Weekly, Monthly Intake
- ⚖️ Set and Monitor Daily Calorie Goals
- 📚 Suggest Diet Plans based on intake trends
- 🗄️ Efficient SQL queries for CRUD operations
- 📦 Backend built using MySQL / PostgreSQL (Pluggable)

---

## 🧱 Tech Stack

| Layer        | Technologies Used            |
|--------------|------------------------------|
| Frontend     | HTML, CSS, JavaScript        |
| Backend      | Python (Flask) / PHP / Java  |
| Database     | MySQL / PostgreSQL           |
| Query Language | SQL                         |
| Hosting (Optional) | XAMPP / Localhost / Cloud SQL |

---

## 🗃️ DBMS Concepts Applied

- ER Modeling (User, Food, Log, Goals, etc.)
- Normalization (3NF schema design)
- SQL Joins for historical data insights
- Triggers for meal suggestions
- Stored Procedures for generating reports
- Transactions for secure log updates

---

## 🛠️ How to Use

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/diet-calculator-dbms.git
cd diet-calculator-dbms
```


### Set Up the Database

Import the SQL schema from database/schema.sql

Populate with sample food items using database/data.sql

Configure Backend Connection

## In config.py or .env, update DB credentials:
```bash
DB_HOST = "localhost"
DB_NAME = "diet_db"
DB_USER = "root"
DB_PASS = "your_password"
```

### 4. Run the App

python app.py
Open http://localhost:5000 in your browser.


### 📁 Folder Structure

```bash
diet-calculator-dbms/
├── static/               # CSS, JS
├── templates/            # HTML pages
├── database/
│   ├── schema.sql        # DB schema
│   └── data.sql          # Sample food data
├── app.py                # Backend logic
├── config.py             # DB config
└── README.md

```

### 👨‍💻 Developed By
Mohammed Adnan

