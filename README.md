# 🚀 Workflow Engine – Halleyx Challenge

> A dynamic and rule-driven workflow automation system designed to simulate real-world approval processes.

---

## 📌 Overview

The **Workflow Engine** is a backend-driven system that enables dynamic creation, execution, and tracking of workflows with multiple steps and rule-based transitions.

This project demonstrates how complex business processes (like approvals) can be automated using configurable logic.

---

## ✨ Key Features

- 🔄 Dynamic Workflow Creation  
- 🧩 Multi-Step Process Management  
- ⚙️ Rule-Based Decision Engine  
- 🔀 Conditional Step Routing  
- 📊 Execution Tracking & Logs  
- 🕒 Timestamped Activity Monitoring  

---

## 🧠 Core Concept

Each workflow consists of:

- **Steps** → Individual stages (e.g., Manager Approval)
- **Rules** → Conditions that decide next step
- **Execution Engine** → Processes input dynamically

📌 The system evaluates rules at runtime and routes the workflow accordingly.

---

## 🔄 Example Workflow

### 🧾 Expense Approval System

**Steps:**
1. Manager Approval  
2. Finance Approval  

**Rule Logic:**

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

✔️ Helps in debugging and tracking workflow behavior

🏗️ Tech Stack

⚡ Node.js

🚀 Express.js

🌐 REST APIs

🧠 JavaScript (Logic Engine)

📂 Project Structure
workflow-engine/
│── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── services/
│── config/
│── server.js
│── package.json
⚙️ Setup & Run
# Clone repository
git clone https://github.com/Namee2518/workflow-engine.git

# Go to project folder
cd workflow-engine

# Install dependencies
npm install

# Run server
node src/server.js
🎬 Demo Video

👉 Watch the demo here:
🔗 https://github.com/Namee2518/workflow-engine/blob/main/Demo%20video.mp4

💡 Future Enhancements

🗄️ Database Integration (MongoDB / MySQL)

🧠 Advanced Rule Engine (AND, OR, Expressions)

🔔 Notification System

📊 Admin Dashboard & Analytics

🌐 Full Frontend UI

🎯 Why This Project Stands Out

Real-world workflow simulation

Clean separation of logic

Scalable architecture

Dynamic rule evaluation

Easily extendable system

👨‍💻 Author

Nameetha
GitHub: https://github.com/Namee2518

⭐ Final Note

If you find this project interesting, feel free to ⭐ the repository!
