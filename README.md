# Splitwise Clone

A full-stack Splitwise-inspired expense sharing app built for the Spreetail Full Stack Intern assignment.

## Features

- User registration and login
- JWT-based authentication
- Group creation and management
- Invite-code based group joining
- Add and remove group members
- Create, edit, and delete expenses
- Equal, unequal, percentage, and share-based splits
- Group-wise raw and simplified balances
- Settlement/payment recording
- Activity feed for group events
- Ownership transfer flow

## Tech Stack

### Frontend
- React
- Vite
- TypeScript
- React Router
- Axios

### Backend
- Node.js
- Express
- PostgreSQL
- Prisma
- JWT
- bcryptjs

## Project Structure

```txt
splitwise-clone/
  backend/
  frontend/
  AI_CONTEXT.md
  BUILD_PLAN.md
  ERD.md
````

## Local Setup

### Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

Create a `.env` file in `backend/`:

```env
DATABASE_URL="your_postgresql_database_url"
JWT_SECRET="your_jwt_secret"
CLIENT_URL="http://localhost:5173"
PORT=5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file in `frontend/`:

```env
VITE_API_BASE_URL="http://localhost:5000/api"
```

## AI Usage

This project was built using ChatGPT as an AI development collaborator.
The AI was used for product scoping, schema design, build planning, code debugging, testing checklists, and documentation.

See:

* `AI_CONTEXT.md`
* `BUILD_PLAN.md`
* `ERD.md`

## Known Limitations

* Realtime expense chat is not implemented.
* User search is deferred; invite-code joining is used instead.
* Forgot password is not implemented.
* Receipt upload and multi-currency support are not included.


