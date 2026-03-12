# Career Guidance MERN Web App

A full-stack career guidance platform that helps students explore career paths after 10th and intermediate streams (MPC, BIPC, CEC, MEC, HEC).

This project is built using the **MERN Stack** and includes a secure authentication system with JWT.

---

## Features

* Student career guidance after **10th**
* Career paths for **MPC, BIPC, CEC, MEC, HEC**
* Modern React UI
* Authentication modal (Register/Login)
* Secure password hashing
* JWT based login system
* MongoDB database integration
* Responsive layout
* Clean component structure

---

## Tech Stack

### Frontend

* React
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt password hashing

### Database

* MongoDB

---

## 📂 Project Structure

```
career-guidance-mern
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── .env
│
└── frontend
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

##  Authentication Flow

1. User visits the homepage.
2. Authentication modal appears.
3. User can **Register** or **Login**.
4. Passwords are hashed using bcrypt.
5. Backend generates a JWT token.
6. Token is stored in browser localStorage.

---

##  Installation

Clone the repository

```
git clone https://github.com/hezyoninimshiai-gif/career-guidance-mern.git
```

Go into the project folder

```
cd career-guidance-mern
```

---

### Backend Setup

```
cd backend
npm install
```

Create `.env` file

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend server

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

### Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

##  API Routes

### Register User

```
POST /api/auth/register
```

### Login User

```
POST /api/auth/login
```

---

##  Future Improvements

* User dashboard
* Career recommendation system
* Save career paths
* Admin panel
* Career articles
* AI-based career suggestions

---

## Author

** Hezyoni Nimshi Talluri**

GitHub:
https://github.com/hezyoninimshiai-gif

---

## ⭐ If you like this project

Give it a **star on GitHub** and feel free to contribute.
