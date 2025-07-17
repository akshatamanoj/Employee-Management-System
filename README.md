# Employee Management System

A full-stack web application that allows you to manage employees efficiently. The system is developed using **React** for the frontend and **Spring Boot** for the backend.

---

## 📌 Features

- ✅ View list of all employees
- ➕ Add a new employee
- 🏢 View list of departments
- 🛠 Backend REST APIs using Spring Boot
- 💽 Data stored using MySQL

---

## 🚀 Tech Stack

### Frontend
- React
- Bootstrap
- Axios

### Backend
- Spring Boot
- Spring Data JPA
- MySQL

---

## 🖼️ Screenshots with Descriptions

### 👨‍💼 Employee List Page

![Employee List](screenshots/employees.png)

> This screen displays a list of all employees stored in the database. Each employee's ID, name, email, and department details are shown. Options to update or delete an employee are available for each entry.

---

### ➕ Add New Employee Form

![Add Employee](screenshots/add-employee.png)

> This is the form used to add a new employee to the system. It collects details like first name, last name, email, and department, which are then sent to the backend via a REST API.

---

### 🏢 Departments View

![Departments](screenshots/departments.png)

> This page displays a list of departments. Each department has a unique name and can be expanded to associate with employees. It lays the foundation for future department CRUD operations.

---

### 🛠 Spring Boot Backend Code (Controller Layer)

![Backend Code](screenshots/backend-controller.png)

> This is a glimpse of the Spring Boot backend controller. It handles REST endpoints like `GET`, `POST`, `PUT`, and `DELETE` for managing employees. The controller connects with the service layer and repository.

---

## 📁 Project Structure

```plaintext
Employee-Management-System/
├── ems-frontend/         # React Frontend
└── ems-backend/          # Spring Boot Backend
