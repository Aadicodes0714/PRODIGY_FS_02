# PRODIGY_FS_02
# 👨‍💼 Employee Management System

A full-stack **Employee Management System** developed as part of my **PRODIGY Internship – Task 02**.

This web application allows an administrator to securely log in and manage employee records through a simple and user-friendly dashboard. The system supports complete **CRUD operations** including adding, viewing, updating, and deleting employee information.

---


## 🌐 Live Demo

🚀 **[View Live Demo →](https://prodigy-fs-02-0bd1.onrender.com/)**

## 📂 Source Code

💻 **[View GitHub Repository →](https://github.com/Aadicodes0714/PRODIGY_FS_02)**

---

## 🚀 Features

### 🔐 Admin Authentication
- Secure Admin Login
- Authentication using token-based authorization
- Protected employee management operations
- Logout functionality
- Session/token management using Local Storage

### 👨‍💼 Employee Management
The administrator can:

- ➕ Add new employees
- 👀 View all employees
- ✏️ Edit employee details
- 🗑️ Delete employees
- 🔄 Update existing employee information

### 📋 Employee Information

The system manages the following employee details:

- Employee ID
- Name
- Email
- Phone
- Position
- Department
- Salary

### 🎨 User Interface
- Clean and simple dashboard
- Responsive form layout
- Easy-to-use navigation
- Employee data displayed in a structured table
- Separate login and dashboard pages

---
# 📁 Project Structure
```
employee-management-system/
├── backend/
│   ├── config/db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Employee.js
│   ├── middleware/auth.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── employeeRoutes.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── employeeController.js
│   ├── .env
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── style.css
│   └── app.js
└── package.json
```

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- Fetch API

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB
- Mongoose

### Authentication & Security
- JWT (JSON Web Token)
- Password hashing
- Authentication middleware
- Environment variables using `.env`

### Development Tools
- Visual Studio Code
- Git
- GitHub
- GitHub Codespaces

---

## 🏗️ Project Architecture

The project follows a basic full-stack architecture:

```text
                ┌─────────────────────┐
                │      Frontend       │
                │ HTML / CSS / JS     │
                └──────────┬──────────┘
                           │
                           │ HTTP Requests
                           ▼
                ┌─────────────────────┐
                │       Backend       │
                │   Node.js + Express │
                └──────────┬──────────┘
                           │
                    REST API Routes
                           │
                           ▼
                ┌─────────────────────┐
                │      MongoDB        │
                │   Employee Data     │
                └─────────────────────┘
