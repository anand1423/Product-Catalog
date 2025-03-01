# 🛍️ Product Catalog - Backend (NestJS)

This is the **backend** for the Product Catalog application, built using **NestJS**, **TypeORM**, and **PostgreSQL**. It provides a secure authentication system using **JWT** and supports product management.

---

## 🚀 Features

- **User Authentication** (Register, Login, JWT-based Authentication)
- **Product Management** (CRUD operations)
- **Role-based Access Control (RBAC)**
- **Secure Password Hashing** using bcrypt
- **Database Management** with TypeORM & PostgreSQL
- **Dockerized PostgreSQL for Local Development**
- **Modular and Scalable Architecture**

---

## 📦 Tech Stack

- **NestJS** - Modular & Scalable Node.js Framework
- **TypeScript** - Strongly Typed JavaScript
- **PostgreSQL** - Relational Database
- **TypeORM** - ORM for database interactions
- **JWT Authentication** - Secure API access
- **Passport.js** - Authentication middleware
- **Bcrypt** - Password hashing
- **Docker** - Containerized PostgreSQL database

## Install Dependencies

npm install

## Setting Up PostgreSQL with Docker

Make sure Docker is installed and running before proceeding. To verify if Docker is running:
docker --version
docker run --name product-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
This will:

- Create a PostgreSQL container named product-db
- Set up a PostgreSQL user (postgres) and password (postgres)
- Expose port 5432 for database connections

# Start the Server

npm run start:dev
The API will be available at http://localhost:8000.

## API Endpoints

**Authentication Routes**
Method Endpoint
POST /auth/register
POST /auth/login Login
**Product Routes**
Method Endpoint
GET /products
POST /products
DELETE /products/:id
