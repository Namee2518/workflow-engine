# 🚀 Halleyx Workflow Engine

<div align="center">

![Workflow Engine Banner](https://img.shields.io/badge/Halleyx-Workflow%20Engine-6C63FF?style=for-the-badge&logo=github&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![REST API](https://img.shields.io/badge/REST-API-FF6B6B?style=for-the-badge&logo=postman&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A dynamic, rule-based workflow automation system designed to simulate real-world approval processes with conditional routing.**

[📺 Watch Demo](#-demo) • [🚀 Quick Start](#-setup--run) • [✨ Features](#-features) • [🔄 How It Works](#-how-it-works)

</div>

---

## 📌 Overview

The **Halleyx Workflow Engine** enables users to **create, manage, and execute workflows dynamically** — without hardcoding any business logic.

Rules are evaluated **at runtime**, automatically routing workflows to the correct next step based on input conditions. Built for scalability and real-world simulation, this engine reflects clean backend architecture and dynamic decision-making.

---

## 🎬 Demo

<div align="center">

### 📺 [▶️ Click here to Watch the Full Demo on YouTube](https://youtu.be/ntyYkPbNs-Y)

> See the Halleyx Workflow Engine in action — dynamic routing, rule evaluation, and real-time execution logs demonstrated live.

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔄 **Dynamic Workflow Creation** | Create workflows at runtime without code changes |
| 🧩 **Multi-Step Process Management** | Chain multiple approval stages seamlessly |
| ⚙️ **Rule-Based Decision Engine** | Evaluate conditions dynamically at each step |
| 🔀 **Conditional Step Routing** | Automatically route to the correct next step |
| 📊 **Execution Tracking & Logs** | Full audit trail for every workflow run |
| 🕒 **Timestamp-Based Monitoring** | Track when each step was executed |

---

## 🧠 How It Works

Each workflow has **three core components**:

```
┌─────────────┐     ┌─────────────┐     ┌──────────────────┐
│    Steps    │────▶│    Rules    │────▶│ Execution Engine │
│             │     │             │     │                  │
│ Individual  │     │ Conditions  │     │ Processes flows  │
│ workflow    │     │ that decide │     │ dynamically at   │
│ stages      │     │ next step   │     │ runtime          │
└─────────────┘     └─────────────┘     └──────────────────┘
```

> The system evaluates rules at runtime and automatically moves the workflow to the next step — no manual routing required.

---

## 🔄 Example Workflow — Expense Approval

### Steps

```
Step 1: Manager Approval  →  Step 2: Finance Approval  →  Completed
```

### Rule Logic

```
if amount > 100  →  route to Finance Approval
else             →  complete workflow
```

---

## 🧪 Execution Examples

### ▶️ Input 1 — High Amount

```json
{ "amount": 200 }
```

**Workflow Flow:**
```
Manager Approval → Finance Approval → ✅ Completed
```

**Execution Log:**
```json
{
  "stepId": 1,
  "nextStepId": 2,
  "time": "2026-03-18T17:30:24Z"
}
```

---

### ▶️ Input 2 — Low Amount

```json
{ "amount": 50 }
```

**Workflow Flow:**
```
Manager Approval → ✅ Completed
```

**Execution Log:**
```json
{
  "stepId": 1,
  "nextStepId": null,
  "time": "2026-03-18T17:32:10Z"
}
```

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Language** | JavaScript |
| **API Type** | REST APIs |

---

## ▶️ Setup & Run

```bash
# 1. Clone the repository
git clone https://github.com/Namee2518/workflow-engine.git

# 2. Navigate to the project directory
cd workflow-engine

# 3. Install dependencies
npm install

# 4. Start the server
node src/server.js
```

> Server will start and the workflow engine will be ready to accept API requests.

---

## 💡 Future Improvements

- [ ] 🗄️ Database integration (MongoDB / MySQL)
- [ ] 🔗 Advanced rule engine (AND / OR conditions)
- [ ] 🔔 Notification system for step completions
- [ ] 🖥️ Admin dashboard with full frontend UI

---

## 🎯 Why This Project Stands Out

- ✅ **Real-world workflow simulation** — mirrors actual enterprise approval systems
- ✅ **Clean, scalable backend design** — modular and maintainable architecture
- ✅ **Dynamic, rule-based execution** — no hardcoded logic
- ✅ **Easy to extend and customize** — plug in new steps or rules effortlessly

---

## 👩‍💻 Author

<div align="center">

**Nameetha**

[![GitHub](https://img.shields.io/badge/GitHub-Namee2518-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Namee2518)

</div>

---

<div align="center">

⭐ **If you found this project helpful, please give it a star!** ⭐

</div>
