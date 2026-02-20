# Rice Bikes Repair Dashboard

A web-based dashboard for managing bike repair transactions at Rice Bikes.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** React
- **Database:** PostgreSQL
- **Testing:** Jest, Supertest

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/srmnn/rice-bikes-repair-dashboard
cd rice-bikes-repair-dashboard
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

---

## Database Setup

### 1. Create the Database
```bash
createdb rice_bikes
```

### 2. Configure Environment Variables

Create a `.env` file inside `backend/` with the following:
```env
PORT=3000
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=rice_bikes
```

### 3. Seed the Database
```bash
psql -U your_postgres_username -d rice_bikes -f seed.sql
```

> Replace `your_postgres_username` with your local PostgreSQL username.

---

## Running the Backend
```bash
cd backend
npm run dev
```

The backend runs on `http://localhost:3000`.

---

## Running the Frontend
```bash
cd frontend
npm start
```

The frontend runs on `http://localhost:3001`.

---

## Test API Endpoint
```bash
curl http://localhost:3000/api/transactions
```

---

## Notes & Assumptions

- PostgreSQL must be running locally on port `5432`.
- The frontend fetches data from the backend at `http://localhost:3000`.
- Replace `your_postgres_username` and `your_postgres_password` with your local PostgreSQL credentials.
