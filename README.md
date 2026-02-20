Rice Bikes Repair Dashboard

Tech Stack
Backend: Node.js, Express.js
Frontend: React
Database: PostgreSQL
Testing: Jest, Supertest

Setup Instructions

1. Clone the repository:
git clone https://github.com/srmnn/rice-bikes-repair-dashboard

cd rice-bikes-repair-dashboard

2. Install backend dependencies:
cd backend
npm install

3. Install frontend dependencies:
cd ../frontend
npm install

Database Setup

1. Create the PostgreSQL database:
createdb rice_bikes

2. Seed the database:
psql -U your_postgres_username -d rice_bikes -f seed.sql
(replace your_postgres_username with your local PostgreSQL username)

3. Configure environment variables:
Create a .env file inside backend/ with the following:
PORT=3000
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=rice_bikes

Running the Backend
cd backend
npm run dev

Backend runs on http://localhost:3000

Running the Frontend
cd frontend
npm start

Frontend runs on http://localhost:3000

Test API Endpoint
curl http://localhost:3000/api/transactions

Notes / Assumptions

PostgreSQL should be running locally on port 5432.

Frontend fetches data from the backend at http://localhost:3000

Replace your_postgres_username and your_postgres_password with your local PostgreSQL credentials.