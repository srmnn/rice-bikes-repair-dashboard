# Rice Bikes Repair Dashboard

A full-stack web application for managing bike repair transactions at Rice Bikes. The dashboard allows staff to track repair status, view customer information, 
and monitor repair activity.

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
code .
```

### 2. Install Backend Dependencies
In a new terminal:
```bash
cd backend
npm install
npm install cors
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

---

## Database Setup

Open a new terminal. 

### 1. Create the PostgreSQL Database (if it doesn't already exist)
```bash
cd backend
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
> Replace `your_postgres_username` with your local PostgreSQL username 
(for example: `shriyaramanan`) and `your_postgres_password` with your password.

> If your local PostgreSQL setup does not require a password, leave it blank (DB_PASSWORD=).

### 3. Seed the Database
```bash
cd backend
psql -U your_postgres_username -d rice_bikes -f seed.sql
```

> Replace `your_postgres_username` with your local PostgreSQL username.

---

## Running the Backend
```bash
cd backend
npm run dev
```

The backend runs on `http://localhost:3000`. You should see the output "Server running on port 3000".

> Note: If port 3000 is already in use on your machine, you can change the PORT in backend/.env to another port (e.g., 3001). Make sure to update the frontend fetch URL accordingly.

---

## Running the Frontend

Return to the frontend terminal.

```bash
cd frontend
npm run dev
```

The frontend runs on `http://localhost:5173`. 
Now, you can open your browser and navigate to `http://localhost:5173`. 

---

## Test API Endpoint
Create a new terminal and enter the following:
```bash
curl http://localhost:3000/api/transactions
```

If the backend is running correctly, you should see a JSON response containing a list of transactions.

> Note: To format the JSON output for easier reading (optional), you can pipe it to jq:
```bash
curl http://localhost:3000/api/transactions | jq
```
This gives the expected response as a list of all transactions:
[
  {
    "transaction_id": 10,
    "transaction_date": "2026-01-28",
    "total_cost": 55,
    "service": "Flat Tire Repair",
    "customer": {
      "id": 4,
      "first_name": "Sophie",
      "last_name": "Kim",
      "email": "sophie.kim@email.com",
      "phone_number": "7135550104"
    },
    "bike": {
      "id": 5,
      "make": "Santa Cruz",
      "model": "Hightower"
    }
  }, ...
  
> If you don’t have jq installed, you can install it with brew install jq on macOS.

---

## Other Notes

- PostgreSQL must be running locally.
- If port 3000 is already in use, update the PORT in backend/.env.
- Ensure the frontend API URL matches the backend port.
