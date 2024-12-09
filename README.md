# Task Management System

A task management system that allows users to register, log in, manage tasks (CRUD operations), and filter tasks based on their status. The system uses a full-stack approach with React.js on the frontend, Node.js/Express.js on the backend, and a relational SQL database (MySQL, PostgreSQL, or SQLite) for storing user and task data.

## Features

- **User Authentication**: Allows users to register, log in, and authenticate using JWT.
- **CRUD Operations**: Users can create, read, update, and delete tasks.
- **Task Filtering**: Filter tasks based on their status (To Do, In Progress, Completed).
- **Responsive UI**: Built using React.js and Bootstrap (or custom CSS).
- **Backend API**: RESTful API built with Node.js and Express.js.
- **Secure**: JWT-based authentication for secure access to task data.

## Technologies Used

- **Frontend**: React.js, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MySQL / PostgreSQL / SQLite (Relational Database)
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure

task-management-system │ ├── /frontend # React app (UI) │ ├── /public # Public static files (index.html) │ ├── /src # React source code │ │ ├── /components # React components (Login, Signup, Dashboard, etc.) │ │ ├── /api # Axios API functions │ │ ├── App.js # Main React app with routing │ │ ├── index.js # Entry point for React │ │ └── ... │ └── package.json # Frontend dependencies and scripts │ └── /backend # Node.js / Express backend ├── /controllers # API route handlers (auth, tasks) ├── /models # Database models (User, Task) ├── /routes # API route definitions ├── /middleware # JWT authentication middleware ├── server.js # Server entry point └── package.json # Backend dependencies and scripts

bash
Copy code

## Installation and Setup

### Frontend Setup (React.js)

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-management-system.git
   cd task-management-system/frontend
Install frontend dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
The app should now be running at http://localhost:3000.

Backend Setup (Node.js/Express.js)
Navigate to the backend directory:

bash
Copy code
cd task-management-system/backend
Install backend dependencies:

bash
Copy code
npm install
Create the .env file for environment variables (you can copy .env.example if available):

bash
Copy code
touch .env
Add the following to the .env file:

makefile
Copy code
DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=task_management
JWT_SECRET=your_jwt_secret
PORT=5000
Set up the database schema (MySQL/PostgreSQL/SQLite). For MySQL:

sql
Copy code
CREATE DATABASE task_management;
Then run migrations to create the users and tasks tables.

Start the backend server:

bash
Copy code
npm start
The server should now be running at http://localhost:5000.

API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in and receive a JWT token.
GET /api/auth/validate: Validate the JWT token (protected route).
Tasks
GET /api/tasks: Fetch tasks for the logged-in user.
POST /api/tasks: Create a new task.
PUT /api/tasks/:id: Update a task by ID.
DELETE /api/tasks/:id: Delete a task by ID.
Usage
Sign Up: Navigate to the Signup page and create an account.
Log In: After signing up, log in to your account to access your tasks.
Dashboard: After logging in, you will be redirected to the Dashboard where you can view, create, update, and delete tasks.
Task Status Filtering: Filter tasks by their status (To Do, In Progress, Completed) using the dropdown filter.
Notes
Ensure that your backend is running before starting the frontend app.
The frontend uses JWT tokens for authentication, which are stored in localStorage.
You can modify the database configuration and JWT secret in the .env file.
This project is set up with a simple SQL database schema, but you can customize it to suit your needs.
