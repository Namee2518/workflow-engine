# 🚀 Workflow Engine – Halleyx Challenge

A dynamic and rule-based workflow automation system designed to simulate real-world approval processes.

---

## 📌 Overview

The Workflow Engine allows users to create, manage, and execute workflows dynamically using rules.

Instead of hardcoding logic, this system evaluates conditions at runtime and automatically routes the workflow to the appropriate next step.

---

## ✨ Features

- 🔄 Dynamic workflow creation  
- 🧩 Multi-step process management  
- ⚙️ Rule-based decision engine  
- 🔀 Conditional step routing  
- 📊 Execution tracking & logs  
- 🕒 Timestamp-based monitoring  

---

## 🧠 How It Works

Each workflow consists of:

- **Steps** → Individual stages (e.g., Manager Approval)  
- **Rules** → Conditions that determine the next step  
- **Execution Engine** → Processes the workflow dynamically  

The system evaluates rules at runtime and moves the workflow accordingly.

---

## 🔄 Example Workflow

### 🧾 Expense Approval

**Steps:**
1. Manager Approval  
2. Finance Approval  

**Rule:**

amount > 100 → Finance Approval


---

## 🧪 Example Execution

### ▶️ Input
```json
{
  "amount": 200
}
🔁 Flow
Manager Approval → Finance Approval → Completed
▶️ Input
{
  "amount": 50
}
🔁 Flow
Manager Approval → Completed
📊 Execution Logs
{
  "stepId": 1,
  "nextStepId": 2,
  "time": "2026-03-18T17:30:24Z"
}
🏗️ Tech Stack

Node.js

Express.js

JavaScript

REST APIs

▶️ Setup & Run
npm install
node src/server.js
🎬 Demo Video

👉 Click below to watch the demo:

💡 Future Improvements

Database integration (MongoDB / MySQL)

Advanced rule engine (AND, OR conditions)

Notification system

Admin dashboard

Full frontend UI

🎯 Why This Project Stands Out

Real-world workflow simulation

Clean and scalable backend design

Dynamic rule-based execution

Easy to extend and customize

👨‍💻 Author

Nameetha
GitHub: https://github.com/Namee2518
