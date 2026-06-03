# BUILD_PLAN.md

# Splitwise Clone Internship Assignment

## 1. Product Research

### Objective

Build a simplified Splitwise-inspired expense sharing application that supports:

- Login
- Groups
- Friends/users
- Expense splitting
- Balance tracking
- Settlements
- Activity feed
- Realtime expense chat/comments if time permits

Primary goals:

1. Balance correctness
2. User experience
3. Engineering quality
4. Clear AI-assisted build process
5. Interview readiness

---

## Splitwise Workflows Studied

### Group Creation

User creates a group and adds members.

Important behavior:

- Groups are private.
- Only group members can view group data.
- The creator becomes the owner in this clone.

### Expense Creation

User records:

- Description
- Amount
- Payer
- Participants
- Split method

System generates debt relationships.

Supported split methods:

- Equal
- Unequal
- Percentage
- Share

### Balance Tracking

System calculates:

- Who owes whom
- Net balances
- Group balances
- Individual balance summary
- Simplified settlement recommendations

### Settlements

Users record payments.

Balances update based on settlement records.

### Activity Tracking

Every major action should be visible in an activity feed.

Examples:

- Expense created
- Expense edited
- Expense deleted
- Settlement recorded
- Group renamed
- Member added
- Member removed
- Ownership transferred

---

# 2. Features Included

## Authentication

MVP implementation priority:

- Email/password register
- Email/password login
- JWT authentication
- Protected routes

Originally considered:

- Google login
- Phone + password

These can be future enhancements if time does not permit full OAuth.

## Friends

Planned:

- Add friend
- Remove friend
- Search friend/user

## Groups

Included:

- Create group
- Rename group
- Delete group
- Add members
- Remove members
- Transfer ownership

## Expenses

Included:

- Create expense
- Edit expense
- Delete expense
- Equal split
- Unequal split
- Percentage split
- Share split

## Settlements

Included:

- Group settlements
- Settlement history
- Balance adjustment after settlement

## Balances

Included:

- Raw balances
- Simplified balances
- Individual balance summary

## Activity Feed

Included:

- Group activity
- User activity

## Realtime

Planned after core APIs:

- Expense chat/comments
- Balance update events
- Group update events

---

# 3. Features Excluded / Deferred

Out of scope for initial MVP:

- Multi-currency
- Notifications
- Recurring expenses
- OCR receipt scanning
- Full group chat
- Expense search
- Approval workflows
- Advanced invite expiration/permissions
- Native mobile app

---

# 4. Final Architecture

## Frontend

Planned:

- React
- Vite
- React Router
- Axios
- Socket.IO Client if realtime is implemented

## Backend

Current:

- Node.js
- Express
- CommonJS JavaScript

## Database

Current:

- PostgreSQL

## ORM

Current:

- Prisma 7

## Realtime

Planned:

- Socket.IO

## File Storage

Deferred:

- Cloudinary for receipts if time permits

## Deployment

Planned:

- Frontend: Vercel
- Backend: Render
- Database: Neon PostgreSQL

---

# 5. Current Implementation Progress

## Completed

- AI_CONTEXT.md created
- BUILD_PLAN.md created
- ERD.md created
- PostgreSQL setup completed
- Prisma 7 setup completed
- Full Prisma schema created
- Migrations completed
- Seed data added
- Prisma Studio verification completed
- Split engine implemented
- Balance engine implemented
- Split engine tests completed
- Balance engine tests completed
- Express setup
- Prisma client setup
- Health check endpoint
- Error middleware
- Auth APIs
- Group API 
## Current Phase

- Expense APIs

## Next Planned Order

Planned order:

- Settlement APIs
- Balance APIs
- Activity APIs
- Frontend
- Realtime
- Deployment


### Group APIs

Completed:
- Create group
- Get my groups
- Get group details
- Rename group
- Delete group
- Add member
- Remove member
- Join via invite code

Business Rules:
- Only owner can add/remove members.
- Any member can rename group.
- Only owner can delete group.
- Invite codes are unique and reusable.
---

### Expense APIs v1

Completed:
- Created expense API
- Tested equal split
- Tested unequal split
- Tested percentage split
- Tested share split
- ExpenseParticipant rows verified in Prisma Studio

Decision:
- Split calculations are handled by split.service.js.
- Expense controller handles authorization, validation, and database persistence.

Completed:
- Edit expense API
- Delete expense API

Decision:
- Expense edits rebuild participant allocations instead of updating rows individually.
- This keeps split recalculation simple and reliable for MVP scale.

### Balance APIs v1

Completed:
- Group raw balances
- Group simplified balances
- Logged-in user balance summary

Temporary Decision:
- Settlement data is passed as an empty array until Settlement APIs are implemented.

### Settlement APIs

Completed:
- Record group settlement
- Get group settlement history
- Settlements integrated into group balance calculation
- Settlements integrated into user balance summary

Decision:
- Settlements are stored as independent records instead of modifying old expenses.
- This preserves audit history and keeps expenses as source-of-truth records.

### Activity System

Completed:
- Group activity feed API
- User activity feed API
- Activity service helper
- Activity entries for group changes
- Activity entries for expenses
- Activity entries for settlements

Decision:
- Activity records are stored separately as an audit trail.
- Metadata is JSON to support flexible activity details without changing schema.

Backend Status

Completed:
- Authentication
- Group Management
- Member Management
- Expense Management
- Balance Calculation
- Settlement Recording
- Activity Feed

Current Work:
- Ownership Transfer

Remaining:
- Frontend
- Realtime Updates
- Deployment

### Ownership Transfer

Completed:
- Create ownership transfer request
- Accept ownership transfer
- Reject ownership transfer
- Ownership change transaction
- Ownership transfer activity logging

Business Rules:
- Only owner can initiate transfer.
- Proposed owner must already be a group member.
- Only proposed owner may accept/reject.
- Ownership changes only after acceptance.

Backend MVP Status: Complete

Completed:
- Auth
- Groups
- Members
- Expenses
- Balances
- Settlements
- Activity Feed
- Ownership Transfer

Current Phase:
- Backend Stabilization

Next Phase:
- Frontend Development

## Google Auth Backend Implementation

Implemented `POST /api/auth/google`.

The route accepts a Google ID token as `credential`, verifies it using `google-auth-library`, then finds or creates the matching user.

The app still uses its own JWT after login, so protected routes work the same for both email/password and Google users.

Current Google Auth status:
- Route wired successfully.
- Missing credential returns validation error.
- Invalid credential reaches Google verification and is rejected.
- Real Google login will be tested after frontend GIS button is implemented.

## Google Auth Backend Implementation

Implemented `POST /api/auth/google`.

The route accepts a Google ID token as `credential`, verifies it using `google-auth-library`, then finds or creates the matching user.

The app still uses its own JWT after login, so protected routes work the same for both email/password and Google users.

Current Google Auth status:
- Route wired successfully.
- Missing credential returns validation error.
- Invalid credential reaches Google verification and is rejected.
- Real Google login will be tested after frontend GIS button is implemented.

# 6. Entity Model

## User

Represents an authenticated account.

Important fields:

- id
- full name/name
- email
- password hash if using local auth
- phone number if supported
- createdAt
- updatedAt

## Friendship

Represents accepted friendship between users.

## Group

Represents a private expense group.

## GroupMember

Links users to groups and stores role/ownership membership information.

## Expense

Stores expense metadata.

## ExpenseParticipant

Stores split allocation for each participant.

## Settlement

Stores debt settlement/payment records.

## Activity

Stores audit trail entries.

## OwnershipTransfer

Tracks owner transfer requests.

---

# 7. Database Design

## Tables

- User
- Friendship
- Group
- GroupMember
- Expense
- ExpenseParticipant
- Settlement
- Activity
- OwnershipTransfer

## Relationship Summary

- User → GroupMember
- Group → GroupMember
- Group → Expense
- Expense → ExpenseParticipant
- User → Expense
- User → Settlement
- Group → Activity
- Group → OwnershipTransfer

## Design Principle

Expenses and settlements are the source of truth.

Balances are calculated dynamically and not stored as running balances.

---

# 8. Balance Engine

## Source Of Truth

Balances are calculated from:

- Expenses
- Settlements

Balances are not stored permanently.

## Raw Balance Calculation

For each expense:

1. Calculate participant share.
2. Ignore payer's own share.
3. Create debt edges from participant to payer.
4. Aggregate edges.

Example:

Expense = ₹900  
Members = A, B, C, D  
Payer = A  
Each share = ₹225  

Generated debts:

- B owes A ₹225
- C owes A ₹225
- D owes A ₹225

## Settlement Handling

Settlement creates a negative debt edge.

Example:

B pays A ₹100.

Generated adjustment:

- B owes A -₹100

## Debt Cancellation

Opposite direction debts are cancelled.

Example:

- B owes A ₹500
- A owes B ₹200

Net:

- B owes A ₹300

## Simplified Balances

Use min-cash-flow style simplification.

Goal:

- Reduce number of transactions required to settle the group.

---

# 9. Split Engine

The split engine supports four split types.

## Equal Split

Amount is divided equally among participants.

## Unequal Split

Each participant receives a custom amount.

Validation:

- Total participant amount should match expense amount.
- Small rounding corrections may be handled automatically.

## Percentage Split

Each participant receives a percentage.

Validation:

- Percentages should total 100.
- Normalization may be used where appropriate.

## Share Split

Each participant receives a number of shares.

Amount is distributed proportionally.

Example:

- A = 1 share
- B = 2 shares
- C = 3 shares

Total shares = 6.

---

## Group Testing Notes

Group module tested successfully.

Confirmed implementation details:
- Join group endpoint is `POST /api/groups/join/:inviteCode`.
- Group rename is allowed for any group member by current product design.
- Owner cannot be removed from the group.
- Owner self-removal error message: `"Owner cannot be removed from the group"`.
- Test group was not deleted because it is needed for expense, balance, and settlement testing.

## End-to-End Backend Test

Tested full backend flow:
- Created group
- Added members by invite code
- Created equal expense
- Created percentage expense
- Verified group balances
- Recorded settlement
- Verified balances changed after settlement
- Verified activity feed

Result:
- Backend modules work together correctly.
- Remaining Google Auth valid-token test will be done after frontend GIS integration.

Frontend tech stack updated:
- React + Vite
- TypeScript
- Axios
- React Router DOM
- Tailwind CSS or clean CSS
- Google Identity Services
- React Context API
- localStorage for JWT persistence

Frontend foundation completed:
- Created React + Vite + TypeScript frontend.
- Added Axios and React Router DOM.
- Added centralized API client using VITE_API_BASE_URL.
- Added Axios request interceptor to attach JWT token from localStorage.
- Added auth type definitions for User and AuthResponse.
- Added AuthContext, AuthProvider, and useAuth hook.
- Used lazy useState initialization to restore auth state from localStorage without useEffect.
- Split context/provider/hook files to avoid React Fast Refresh warning.
- Added ProtectedRoute for authenticated pages.
- Added initial routes for login, register, and dashboard.

# 10. API Design

All API routes should use `/api` prefix.

## Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/auth/logout` optional for JWT frontend cleanup

## Friends

- `GET /api/friends`
- `GET /api/friends/search`
- `POST /api/friends`
- `DELETE /api/friends/:id`

## Groups

- `GET /api/groups`
- `GET /api/groups/:id`
- `POST /api/groups`
- `PATCH /api/groups/:id`
- `DELETE /api/groups/:id`

## Members

- `POST /api/groups/:id/members`
- `DELETE /api/groups/:id/members/:userId`

## Invite Links

- `POST /api/groups/:id/invite-link`
- `POST /api/groups/join/:inviteCode`

## Ownership

- `POST /api/groups/:id/ownership-transfer`
- `POST /api/ownership-transfer/:id/accept`
- `POST /api/ownership-transfer/:id/reject`

## Expenses

- `POST /api/expenses`
- `PATCH /api/expenses/:id`
- `DELETE /api/expenses/:id`
- `GET /api/expenses/:id`
- `GET /api/groups/:id/expenses`

## Settlements

- `POST /api/settlements`
- `GET /api/groups/:id/settlements`

## Balances

- `GET /api/groups/:id/balances`
- `GET /api/balances/summary`

## Activity

- `GET /api/groups/:id/activity`
- `GET /api/activity`

---

# 11. Backend Folder Structure

Recommended structure from current phase:

```txt
backend/
  generated/
  prisma/
    schema.prisma
    migrations/
    seed.js
  src/
    app.js
    server.js
    config/
      prisma.js
    controllers/
    middleware/
    routes/
    services/
      split.service.js
      balance.service.js
    utils/
  .env
  package.json
  prisma.config.ts
  tsconfig.json
```

Notes:

- `generated/` should be retained because it is likely Prisma 7 generated client output.
- Existing `services/` folder should be reused.
- Split and balance services already exist and should not be overwritten.

---

# 12. Express Setup Plan

Install inside `backend` folder:

```bash
npm install express cors dotenv morgan
npm install -D nodemon
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  }
}
```

Add health check endpoint:

`GET /api/health`

Expected response:

```json
{
  "status": "ok",
  "service": "splitwise-clone-backend"
}
```

---

# 13. Environment Variables

Current planned `.env`:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
DATABASE_URL="postgresql://..."
JWT_SECRET="temporary_dev_secret_change_later"
```

Notes:

- `JWT_SECRET` can be added before JWT setup.
- It will be used during Auth API implementation.
- Replace it with a strong value before deployment.
- Do not commit `.env`.

---

# 14. Frontend Structure

Planned routes:

- `/login`
- `/register`
- `/dashboard`
- `/groups/create`
- `/groups/:id`
- `/groups/:id/expense/new`
- `/groups/:id/expense/:id`
- `/groups/:id/settle`
- `/activity`
- `/profile`

## Main Pages

- Login
- Register
- Dashboard
- Group Details
- Create Expense
- Expense Details
- Settlement
- Activity Feed
- Profile

## Group Tabs

- Activity
- Balances
- Totals

---

# 15. Realtime Design

Planned after core API completion.

## Socket Rooms

- `group:<groupId>`
- `user:<userId>`

## Events

- `expense.created`
- `expense.updated`
- `expense.deleted`
- `settlement.created`
- `balance.updated`
- `group.updated`
- `member.added`
- `member.removed`
- `activity.created`
- `expense.comment.created`

---

# 16. Testing Plan

## Completed Tests

- Split engine tests
- Balance engine tests

## Backend API Manual Test Order

1. Health check
2. Register user
3. Login user
4. Get current user
5. Create group
6. Get groups
7. Get group by id
8. Rename group
9. Add member
10. Create equal expense
11. Create unequal expense
12. Create percentage expense
13. Create share expense
14. Get group balances
15. Record settlement
16. Verify updated balances
17. Get activity feed
18. Delete/edit expense permissions
19. Group delete permissions

## Interview Readiness Checklist

Be ready to explain:

- Why balances are calculated dynamically
- How each split type works
- How settlements reduce debts
- How debt simplification works
- Why group ownership was added
- Why email is the unique identity
- Why realtime is deferred until after core APIs
- How Prisma schema maps to product behavior
- How tests prove correctness of split and balance logic

---

# 17. Tradeoffs

## Simplifications

- Single currency
- No notifications
- No recurring expenses
- No OCR
- No full group chat initially
- Email/password auth before Google OAuth
- Dynamic balances instead of stored running balances

## Engineering Tradeoffs

### Dynamic Balance Calculation

Pros:

- Correct source of truth
- Easier to debug
- Avoids stale stored balances

Cons:

- More computation at read time

Acceptable because MVP scale is small.

### Owner Role

Pros:

- Clear permissions
- Easier group management
- Better interview defense

Cons:

- Slightly different from Splitwise

Accepted as a deliberate product decision.

### Realtime Later

Pros:

- Core correctness comes first
- Reduces early complexity

Cons:

- Expense chat is delayed

Accepted because core financial logic is more important.

---

# 18. Deployment Plan

## Database

- Neon PostgreSQL

## Backend

- Render

Required environment variables:

- `DATABASE_URL`
- `JWT_SECRET`
- `CLIENT_URL`
- `PORT`

## Frontend

- Vercel

Required environment variables:

- `VITE_API_BASE_URL`

---

# 19. Documentation Maintenance Plan

AI_CONTEXT.md and BUILD_PLAN.md must be updated throughout the project.

Do not wait until the end.

Update them after:

- Backend setup changes
- API route additions
- Schema changes
- Auth implementation
- Expense API implementation
- Balance API implementation
- Frontend route/page implementation
- Deployment decisions
- Testing completion
- Any tradeoff or scope change

---

# 20. Future Improvements

- Google OAuth
- Phone + password login
- Password recovery
- WhatsApp invites
- SMS invites
- Receipt upload
- Cloudinary integration
- Multi-currency support
- Group chat
- Push notifications
- Expense search
- Analytics
- Mobile app
