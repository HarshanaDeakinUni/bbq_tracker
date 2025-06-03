# 🔥 BBQ Tracker – Dockerised Edition for SIT725 8.2HD

This is a dockerised version of the BBQ Tracker project for SIT725 Task 8.2HD. This version allows the entire web application to be run as a container, complete with REST API routes, including a unique student identifier endpoint for grading purposes.

---

## 📦 Technologies Used

- Node.js + Express.js
- MongoDB
- Docker + Docker Compose
- REST APIs
- Mongoose ODM

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/HarshanaDeakinUni/bbq_tracker.git
cd bbq_tracker
git checkout Docker-for-the-8.2HD
```

---

### 2. Environment Setup

Create a file named `.env.dev` in the `env/` folder with the following contents:

```env
PORT=5000
MONGODB_URI=mongodb://mongo:27017/bbq_tracker
JWT_SECRET=some_secret_key
```

> You may change the `PORT` value if needed.

---

### 3. Build and Run the Container

```bash
docker-compose up --build
```

This will:
- Build the Node.js app
- Connect to MongoDB (via service alias `mongo`)
- Run on [http://localhost:5000](http://localhost:5000)

---

### 4. Test `/api/student` Endpoint

The following endpoint is required for the HD task:

```http
GET http://localhost:5000/api/student
```

Example Response:

```json
{
  "name": "CoolStudentName",
  "studentId": "SstandardStudentId"
}
```

---

## 📁 Project Structure

```
bbq_tracker/
├── docker/             # Dockerfile and related configs
├── env/                # Environment variable files
├── models/             # Mongoose schemas
├── controllers/        # Express controllers
├── routes/             # Express routers
├── services/           # Business logic
├── public/             # Static frontend (if any)
├── server.js           # App entry point
├── docker-compose.yml
└── package.json
```

---

## 🧠 Reflection

Dockerising this project was a valuable experience. I initially encountered issues with port binding and MongoDB not connecting. I resolved this by linking the containers via `docker-compose.yml` and ensuring environment variables were correctly passed through. I found it particularly rewarding to encapsulate the app into a consistent environment, which makes deployment easier and avoids "it works on my machine" problems.

---

## ✅ Checklist for Marker

- [x] Dockerfile created and working
- [x] `.env.dev` file included
- [x] `/api/student` route added
- [x] README contains full run instructions
- [x] Docker container runs app correctly
- [x] Screenshots of `/api/student` included in PDF
