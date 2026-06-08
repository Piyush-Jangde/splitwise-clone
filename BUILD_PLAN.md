# BUILD_PLAN.md

# Splitwise Clone Internship Assignment - Build Plan

## 1. Assignment Understanding

The assignment was to build a simplified Splitwise-inspired app in a short time frame while acting as both Product Manager and Developer.

The project needed to demonstrate:

* Product understanding
* Realistic MVP scoping
* Full-stack implementation
* Relational database design
* AI-assisted development
* Clear documentation
* Ability to explain and modify the codebase during interview evaluation

The final app focuses on core expense-sharing workflows rather than perfectly cloning every Splitwise feature.

---

## 2. Product Research

Splitwise was studied as a shared-expense management product.

Core workflows identified:

1. Users create accounts.
2. Users create groups.
3. Group members add expenses.
4. Expenses can be split in different ways.
5. System calculates who owes whom.
6. Users record settlements.
7. Balances update automatically.
8. Activity history helps users understand what changed.

Important product behaviors selected for MVP:

* Group-based expense tracking
* Multiple split types
* Balance calculation
* Settlement recording
* Activity feed
* Basic group permissions

Features intentionally simplified:

* Invite code instead of user search
* Activity feed instead of notifications
* Dynamic balance calculation instead of stored balances
* Group ownership for clearer permissions
* No multi-currency
* No realtime chat in final MVP

---

## 3. Final MVP Scope

## Included

### Authentication

* Register
* Login
* JWT protected routes
* Google auth backend route

### Groups

* Create group
* View groups
* View group details
* Rename group
* Delete group
* Join group using invite code
* Remove member
* Ownership transfer

### Expenses

* Create expense
* Edit expense
* Delete expense
* Equal split
* Unequal split
* Percentage split
* Share split

### Balances

* Raw group balances
* Simplified group balances
* Personal balance summary

### Settlements

* Record settlement
* View settlement history
* Update balances through settlement calculation

### Activity

* Group activity feed
* User activity feed
* Audit trail for key actions

### Frontend

* Login page
* Register page
* Dashboard
* Group detail page
* Settlement form
* Ownership transfer page
* Protected routing
* API service layer

---

## 4. Deferred Scope

The following were moved out of final MVP:

* Realtime expense chat
* Socket.IO updates
* User search
* Friend management UI
* Direct friend expenses
* Forgot password
* Receipt upload
* Notifications
* Multi-currency
* Export features
* Mobile app

Reason:

The build prioritized core correctness, working flows, and interview-readiness over feature breadth.

---

## 5. Architecture

## Frontend

* React
* Vite
* TypeScript
* React Router DOM
* Axios
* React Context API
* Tailwind CSS / clean CSS

Frontend responsibilities:

* Render auth pages
* Store auth state
* Protect private routes
* Call backend APIs
* Display groups
* Display group details
* Create expenses
* Show balances
* Record settlements
* Show activity feed
* Manage ownership transfer UI

## Backend

* Node.js
* Express
* CommonJS JavaScript
* Prisma 7
* PostgreSQL
* JWT
* bcryptjs

Backend responsibilities:

* Authentication
* Authorization
* Group management
* Expense validation
* Split calculation
* Balance calculation
* Settlement recording
* Activity logging
* Ownership transfer

## Database

* PostgreSQL
* Prisma ORM
* Relational schema with explicit join tables and relations

## Deployment

Planned:

* Frontend: Vercel
* Backend: Render
* Database: Neon PostgreSQL

---

## 6. Database Design

Main entities:

* User
* Friendship
* Group
* GroupMember
* Expense
* ExpenseParticipant
* Settlement
* Activity
* OwnershipTransfer

## Key Design Decisions

### User

Email is the unique identity.

Reason:

* Reliable login identifier
* Common authentication pattern
* Better than phone number for OAuth compatibility

### GroupMember

Separate join table between User and Group.

Reason:

* Supports many-to-many relationship
* Prevents duplicate membership
* Allows future role/member metadata

### ExpenseParticipant

Separate table for participants.

Reason:

* Supports subset participation
* Supports multiple split types
* Keeps each user's owed amount explicit

### Settlement

Stored separately from expenses.

Reason:

* Preserves audit history
* Does not mutate original expense records
* Keeps balances explainable

### Activity

Separate audit table.

Reason:

* Tracks important actions
* Helps debug and explain group history
* JSON metadata allows flexible event details

### OwnershipTransfer

Separate model for ownership transfer requests.

Reason:

* Transfer is not immediate
* Proposed owner must accept/reject
* Pending transfer state must be tracked

---

## 7. Backend Build Plan and Progress

## Step 1: Backend Setup

Completed:

* Express app
* Server entry point
* CORS
* dotenv
* Morgan
* JSON parsing
* Error middleware
* Async handler utility
* ApiError utility
* Prisma client config

## Step 2: Database and Prisma

Completed:

* PostgreSQL setup
* Prisma setup
* Prisma schema
* Migrations
* Generated Prisma client
* Seed data
* Prisma Studio verification

## Step 3: Split Engine

Completed:

* Equal split
* Unequal split
* Percentage split
* Share split
* Rounding handling
* Validation for invalid amounts and invalid split inputs

## Step 4: Balance Engine

Completed:

* Raw balance calculation
* Debt cancellation
* Settlement adjustment
* Simplified balance calculation
* User balance summary

## Step 5: Auth APIs

Completed:

* Register
* Login
* Get current user
* JWT generation
* Password hashing
* Protected route middleware
* Google auth backend route

## Step 6: Group APIs

Completed:

* Create group
* Get my groups
* Get group details
* Rename group
* Delete group
* Join group using invite code
* Remove member

## Step 7: Expense APIs

Completed:

* Create expense
* Get group expenses
* Get expense by ID
* Update expense
* Delete expense
* Activity logging for expense events

## Step 8: Settlement APIs

Completed:

* Record settlement
* Get group settlements
* Settlement validation
* Settlement activity logging

## Step 9: Activity APIs

Completed:

* Group activity feed
* User activity feed
* Activity service helper

## Step 10: Ownership Transfer APIs

Completed:

* Create ownership transfer request
* Accept transfer
* Reject transfer
* Get pending transfers
* Ownership transfer activity logging

---

## 8. Frontend Build Plan and Progress

## Step 1: Frontend Setup

Completed:

* React + Vite + TypeScript
* Axios
* React Router DOM
* Tailwind CSS / clean CSS
* Project folder structure

## Step 2: Auth Frontend

Completed:

* AuthContext
* AuthProvider
* useAuth hook
* localStorage auth persistence
* Axios JWT interceptor
* Login page
* Register page
* ProtectedRoute

## Step 3: Dashboard

Completed:

* Fetch user groups
* Display groups
* Create group
* Join group using invite code
* Navigate to group detail

## Step 4: Group Detail

Completed:

* Fetch group details
* Show group name
* Show invite code
* Show members
* Show expenses
* Show balances
* Show activity
* Create expense
* Remove members where permitted

## Step 5: Settlements

Completed:

* Settlement form
* Frontend validation for settlement fields
* Record settlement API call
* Refresh balances after settlement

## Step 6: Ownership Transfers

Completed:

* Ownership transfer page
* View pending transfers
* Accept transfer
* Reject transfer

---

## 9. API Summary

## Auth

```txt
POST /api/auth/register
POST /api/auth/login
GET /api/auth/me
POST /api/auth/google
```

## Groups

```txt
GET /api/groups
GET /api/groups/:id
POST /api/groups
PATCH /api/groups/:id
DELETE /api/groups/:id
POST /api/groups/join/:inviteCode
DELETE /api/groups/:id/members/:userId
```

## Expenses

```txt
POST /api/expenses
GET /api/expenses/:id
GET /api/groups/:id/expenses
PATCH /api/expenses/:id
DELETE /api/expenses/:id
```

## Balances

```txt
GET /api/groups/:groupId/balances
GET /api/balances/summary
```

## Settlements

```txt
POST /api/settlements
GET /api/groups/:groupId/settlements
```

## Activity

```txt
GET /api/groups/:id/activity
GET /api/activity
```

## Ownership Transfer

```txt
POST /api/groups/:groupId/ownership-transfer
POST /api/ownership-transfer/:id/accept
POST /api/ownership-transfer/:id/reject
GET /api/ownership-transfer/pending
```

---

## 10. Balance Calculation Plan

The balance system was designed around one principle:

Expenses and settlements are the source of truth.

No running balance table is stored.

## Raw Balance Flow

For each expense:

1. Read payer.
2. Read participants.
3. For every participant except payer:

   * participant owes payer their amountOwed.
4. Aggregate debts.

For settlements:

1. Settlement payer paid receiver.
2. This reduces payer's debt to receiver.
3. The settlement is treated as an adjustment edge.

Opposite debts are netted.

## Simplified Balance Flow

Raw balances are converted into simplified settlement suggestions to reduce the number of payments needed.

Example:

```txt
A owes B ₹500
B owes C ₹500

Simplified:
A pays C ₹500
```

---

## 11. Split Calculation Plan

## Equal Split

* Divide amount equally.
* Adjust first participant for rounding.

## Unequal Split

* User provides amount per participant.
* Amounts must add up to total expense.

## Percentage Split

* User provides percentage per participant.
* Percentages must add up to 100.

## Share Split

* User provides shares per participant.
* Amount is divided in proportion to shares.

---

## 12. Testing Plan and Results

## Engine Tests

Completed:

* Split engine tests
* Balance engine tests

Tested:

* Equal split
* Unequal split
* Percentage split
* Share split
* Rounding behavior
* Raw balance calculation
* Settlement adjustment
* Debt cancellation
* Simplified balances

## Backend Manual Testing

Completed:

* Register
* Login
* Protected auth
* Create group
* Join group by invite code
* Rename group
* Remove member
* Create equal expense
* Create unequal expense
* Create percentage expense
* Create share expense
* Invalid split validations
* Balance calculation
* Settlement creation
* Negative settlement rejection
* Activity feed
* Ownership transfer request
* Ownership transfer accept/reject

## Frontend Manual Testing

Completed:

* Register UI
* Login UI
* Dashboard
* Create group
* Join group by invite code
* Group detail page
* Expense creation
* Balance display
* Settlement recording
* Activity display
* Member removal
* Ownership transfer page

Final issues found:

* Browser tab title/favicon still need final polish.
* React Router nested route refresh needs deployment rewrite.
* Frontend payer selection UX can be improved.
* Realtime chat not implemented.

---

## 13. Deployment Plan

## Frontend

Platform:

```txt
Vercel
```

Build command:

```txt
npm run build
```

Environment variable:

```txt
VITE_API_BASE_URL
```

SPA routing fix:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Backend

Platform:

```txt
Render
```

Start command:

```txt
npm start
```

Environment variables:

```env
DATABASE_URL=
JWT_SECRET=
CLIENT_URL=
PORT=
GOOGLE_CLIENT_ID=
```

## Database

Platform:

```txt
Neon PostgreSQL
```

Required setup:

```bash
npx prisma generate
npx prisma migrate deploy
```

---

## 14. AI Collaboration Process

AI was used as a junior engineer and product-thinking partner.

The process:

1. Started with assignment understanding.
2. Asked product and engineering questions before coding.
3. Decided MVP scope.
4. Created AI_CONTEXT.md.
5. Created BUILD_PLAN.md.
6. Designed ERD and schema.
7. Built split and balance engines first.
8. Tested core financial logic.
9. Built backend APIs module by module.
10. Built frontend screens after backend stabilization.
11. Tested end-to-end flows.
12. Updated docs with tradeoffs and limitations.

AI was used for:

* Requirement clarification
* Product scoping
* Schema reasoning
* API planning
* Code generation assistance
* Debugging
* Testing checklists
* Documentation updates
* Interview preparation

---

## 15. Tradeoffs

## Invite Code Instead Of User Search

Chosen because it allowed group membership without building a search endpoint.

Pros:

* Faster
* Simpler
* Easy to demo
* Avoids privacy/search complexity

Cons:

* Less convenient than searching users directly

Future improvement:

* Add user search by name/email/phone.

## Dynamic Balance Calculation

Chosen over stored running balances.

Pros:

* More correct
* Avoids stale data
* Easier to debug
* Clear source of truth

Cons:

* More read-time computation

Acceptable for MVP scale.

## Ownership Role Added

Added even though Splitwise is flatter.

Pros:

* Clear permissions
* Safer group management
* Better accountability
* Enables ownership transfer feature

Cons:

* Slightly different from Splitwise

## Realtime Deferred

Realtime chat was deferred.

Pros:

* Core financial correctness completed first
* Lower implementation risk
* Easier to finish working MVP

Cons:

* Realtime assignment requirement not fully implemented

Future improvement:

* Add Socket.IO and expense comments.

## Friend System Deferred

Friendship model exists in schema, but UI and APIs were not completed.

Reason:

* Group-based flows were more important.
* Invite-code group joining provided a workable alternative.

## Receipt Upload Deferred

Receipt URL exists in schema, but upload flow was not completed.

Reason:

* File storage adds deployment complexity.

## Frontend Payer UX Tradeoff

Backend validates required payer and group membership, but the frontend payer selection UX should be improved.

Future improvement:

* Add clear frontend error if no payer is selected.
* Disable submit until payer is selected.

---

## 16. Known Limitations

* No realtime expense chat.
* No forgot password.
* No complete friend system UI.
* No direct friend expense UI.
* No receipt upload.
* No multi-currency.
* No notifications.
* Browser favicon/title polish pending.
* Frontend payer selection UX needs improvement.
* Deployment requires SPA rewrite config for nested route refresh.

---

## 17. Final Status

The app reached a working MVP stage.

Completed core flows:

* Authentication
* Group creation
* Invite-code joining
* Expense creation
* Multiple split types
* Balance calculation
* Settlement recording
* Activity feed
* Ownership transfer
* Frontend screens for main flows

The strongest parts of the project are:

* Relational schema design
* Split engine
* Balance engine
* Settlement integration
* Ownership transfer workflow
* Clear tradeoff documentation

The main weakness is that realtime expense chat was deferred to protect the quality of the core financial product.

## Post-Assignment Improvements

### 1. Google Authentication

Goal:
Improve onboarding and login UX by allowing users to sign in with Google in addition to email/password.

Implementation:
- Used `@react-oauth/google` on frontend.
- Used `google-auth-library` on backend.
- Backend verifies Google ID token before trusting user data.
- Existing users are linked by email if they do not already have a `googleId`.
- App continues issuing its own JWT after Google verification.
- Added frontend environment separation:
  - `.env.development`
  - `.env.production`
- Added global 401 handling through Axios interceptor.

Tradeoffs:
- Kept the existing `authProvider` enum unchanged.
- Did not introduce a separate auth provider table yet.
- Google button added only to Login page for now.
- Register page can be updated later if needed.

Testing:
- Tested local Google login.
- Tested stale JWT handling.
- Tested repeated Google login.
- Tested that existing email/password auth still works.