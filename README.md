# Employee Management System

A full-stack web application that allows you to manage employees efficiently. The system is developed using **React** for the frontend and **Spring Boot** for the backend.

---

##  Features

-  View list of all employees
-  Add a new employee
-  View list of departments
-  Backend REST APIs using Spring Boot
-  Data stored using MySQL

---

##  Tech Stack

### Frontend
- React
- Bootstrap
- Axios

### Backend
- Spring Boot
- Spring Data JPA
- MySQL

---

##  Screenshots with Descriptions

### 👨‍💼 Employee List Page

<img width="1920" height="1200" alt="Screenshot 2025-07-15 193512" src="https://github.com/user-attachments/assets/527f87d4-91bd-4689-a475-564c98a2c614" />


> This screen displays a list of all employees stored in the database. Each employee's ID, name, email, and department details are shown. Options to update or delete an employee are available for each entry.

---

### ➕ Add New Employee Form

<img width="1920" height="1200" alt="Screenshot 2025-07-15 193525" src="https://github.com/user-attachments/assets/1cca3437-13aa-493a-aebd-d4d19260e130" />


> This is the form used to add a new employee to the system. It collects details like first name, last name, email, and department, which are then sent to the backend via a REST API.

---

### 🏢 Departments View

<img width="1920" height="1200" alt="Screenshot 2025-07-15 193534" src="https://github.com/user-attachments/assets/03a5c9f8-5919-4874-94a5-0eb836fb12bc" />


> This page displays a list of departments. Each department has a unique name and can be expanded to associate with employees. It lays the foundation for future department CRUD operations.

---

### 🛠 Spring Boot Backend Code (Controller Layer)

<img width="1920" height="1200" alt="Screenshot 2025-07-15 193541" src="https://github.com/user-attachments/assets/af4448a1-07bc-4cff-9c58-a964ecb9dedf" />


> This is a glimpse of the Spring Boot backend controller. It handles REST endpoints like `GET`, `POST`, `PUT`, and `DELETE` for managing employees. The controller connects with the service layer and repository.

---

## 📁 Project Structure

```plaintext
Employee-Management-System/
├── ems-frontend/         # React Frontend
└── ems-backend/          # Spring Boot Backend
