# AI_CONTEXT.md

# Splitwise-Inspired Expense Sharing Application

## 1. Project Purpose

This project is a Splitwise-inspired full-stack expense sharing application built for the Spreetail internship assignment.

The assignment required acting as both Product Manager and Developer: studying Splitwise, scoping a realistic MVP, building a deployed working app, and using AI as a primary development collaborator.

This document is the source of truth for the application. It captures the final product scope, architecture, database design, API behavior, frontend structure, testing status, tradeoffs, and known limitations.

The goal of this file is that another developer or AI agent should be able to understand and recreate a similar app from this context.

---

## 2. Product Understanding

Splitwise solves the problem of shared expenses between groups of people. Its core behavior is:

* Users create groups.
* Members add expenses.
* Expenses can be split in different ways.
* The system calculates who owes whom.
* Users can record settlements/payments.
* Balances update based on expenses and settlements.

This clone focuses on the core financial workflows:

* Authentication
* Group creation and membership
* Expense creation
* Multiple split types
* Balance calculation
* Settlement recording
* Activity tracking
* Ownership transfer

The app prioritizes correctness of balances over advanced social features.

---

## 3. Final MVP Scope

## Implemented

### Authentication

* Email/password registration
* Email/password login
* JWT-based protected routes
* Google OAuth backend route
* Auth state persistence on frontend using localStorage

### Groups

* Create group
* View user groups
* View group details
* Rename group
* Delete group
* Invite-code based group joining
* Remove group members
* Group ownership
* Ownership transfer request, accept, reject

### Expenses

* Create expense
* Edit expense
* Delete expense
* Equal split
* Unequal split
* Percentage split
* Share split
* Expense participants can be a subset of group members
* Expense creator is tracked
* Payer is tracked

### Balances

* Group raw balances
* Group simplified balances
* Logged-in user balance summary
* Balances calculated dynamically from expenses and settlements

### Settlements

* Record settlement
* View group settlement history
* Settlement affects balances
* User can only record settlements where they are the payer

### Activity

* Group activity feed
* User activity feed
* Activity records for:

  * Group creation
  * Group rename
  * Group deletion
  * Member addition
  * Member removal
  * Expense creation
  * Expense update
  * Expense deletion
  * Settlement creation
  * Ownership transfer

### Frontend

* Login page
* Register page
* Dashboard page
* Group detail page
* Settlement form
* Ownership transfer page
* Protected routes
* API service layer
* React Context based auth

---

## 4. Deferred / Not Implemented

The following were intentionally deferred due to time constraints:

* Realtime expense chat/comments
* Socket.IO realtime updates
* User search for adding members
* Full friend system UI
* Direct friend expenses
* Forgot password
* Receipt upload UI
* Multi-currency support
* Notifications
* Expense search
* Mobile app
* Advanced invite expiration/approval rules

---

## 5. Tech Stack

## Backend

* Node.js
* Express
* CommonJS JavaScript
* PostgreSQL
* Prisma 7
* JWT
* bcryptjs
* google-auth-library
* Morgan
* CORS
* dotenv

## Frontend

* React
* Vite
* TypeScript
* React Router DOM
* Axios
* React Context API
* Tailwind CSS / clean CSS
* localStorage for JWT persistence

## Deployment Plan

* Frontend: Vercel
* Backend: Render
* Database: Neon PostgreSQL

---

## 6. Backend Folder Structure

```txt
backend/
  src/
    app.js
    server.js

    config/
      prisma.js

    controllers/
      activity.controller.js
      auth.controller.js
      balance.controller.js
      expense.controller.js
      group.controller.js
      ownershipTransfer.controller.js
      settlement.controller.js

    generated/
      prisma/

    middleware/
      auth.middleware.js
      error.middleware.js

    routes/
      activity.routes.js
      auth.routes.js
      balance.routes.js
      expense.routes.js
      group.routes.js
      ownershipTransfer.routes.js
      settlement.routes.js

    services/
      activity.service.js
      balance.service.js
      balance.test.js
      split.service.js
      split.test.js

    utils/
      apiError.js
      asyncHandler.js
      generateToken.js
```

Important Prisma decision:

The Prisma client is generated into:

```txt
src/generated/prisma
```

This is configured in `schema.prisma`.

---

## 7. Frontend Folder Structure

```txt
frontend/
  src/
    App.tsx
    main.tsx
    index.css

    components/
      ProtectedRoute.tsx
      SettlementForm.tsx

    context/
      AuthContext.ts
      AuthProvider.tsx
      useAuth.ts

    pages/
      Dashboard.tsx
      GroupDetail.tsx
      Login.tsx
      OwnershipTransfers.tsx
      Register.tsx

    services/
      activityService.ts
      api.ts
      balanceService.ts
      expenseService.ts
      groupService.ts
      ownershipTransferService.ts
      settlementService.ts

    types/
      activity.ts
      auth.ts
      balance.ts
      expense.ts
      group.ts
      groupDetail.ts
      settlement.ts
```

---

## 8. Database Schema

The database uses PostgreSQL through Prisma.

## User

Represents an authenticated user.

Important fields:

* id
* fullName
* email
* phoneNumber
* username
* profilePhotoUrl
* authProvider
* passwordHash
* googleId
* createdAt
* updatedAt

Rules:

* Email is required and unique.
* Google ID is optional and unique.
* Password hash is optional because Google users do not need passwords.
* Phone number is optional.

## Friendship

Represents a friendship between two users.

Fields:

* id
* user1Id
* user2Id
* createdAt

Constraint:

* Unique pair: `@@unique([user1Id, user2Id])`

Status:

* Schema exists.
* Full friend UI was deferred.

## Group

Represents a private expense group.

Fields:

* id
* name
* ownerId
* inviteCode
* createdAt
* updatedAt

Rules:

* Group has exactly one owner.
* Invite code is unique.
* Group has many members, expenses, settlements, activities, and ownership transfers.

## GroupMember

Join table between users and groups.

Fields:

* id
* groupId
* userId
* joinedAt

Rules:

* A user can join a group only once.
* Unique pair: `@@unique([groupId, userId])`
* Deleting a group cascades group members.

## Expense

Represents a financial transaction.

Fields:

* id
* description
* amount
* splitType
* payerId
* creatorId
* groupId
* receiptUrl
* createdAt
* updatedAt

Rules:

* Creator is tracked separately from payer.
* Payer must be a group member.
* Participants must be group members.
* Expense may support nullable groupId in schema, but implemented MVP focuses on group expenses.

## ExpenseParticipant

Represents each participant's share in an expense.

Fields:

* id
* expenseId
* userId
* amountOwed
* percentage
* shares

Rules:

* Unique pair: `@@unique([expenseId, userId])`
* Expense deletion cascades participants.
* `amountOwed` stores final calculated amount for each participant.
* `percentage` is used for percentage split.
* `shares` is used for share split.

## Settlement

Represents a payment from one user to another.

Fields:

* id
* amount
* payerId
* receiverId
* groupId
* note
* screenshotUrl
* createdAt

Rules:

* Amount must be greater than zero.
* Payer and receiver cannot be the same user.
* User can only record settlements where they are the payer.
* Payer and receiver must both be group members.

## Activity

Stores audit history.

Fields:

* id
* actorId
* groupId
* activityType
* entityId
* metadata
* createdAt

Rules:

* Activities act as audit trail.
* Metadata is JSON for flexible details.

## OwnershipTransfer

Tracks group ownership transfer requests.

Fields:

* id
* groupId
* currentOwnerId
* proposedOwnerId
* status
* createdAt
* respondedAt

Statuses:

* PENDING
* ACCEPTED
* REJECTED

Rules:

* Only current owner can create transfer request.
* Proposed owner must already be a group member.
* Proposed owner must accept or reject.
* Ownership changes only after acceptance.

---

## 9. Enums

## AuthProvider

```txt
GOOGLE
EMAIL_PASSWORD
```

## SplitType

```txt
EQUAL
UNEQUAL
PERCENTAGE
SHARE
```

## OwnershipTransferStatus

```txt
PENDING
ACCEPTED
REJECTED
```

## ActivityType

```txt
EXPENSE_CREATED
EXPENSE_UPDATED
EXPENSE_DELETED
SETTLEMENT_CREATED
MEMBER_ADDED
MEMBER_REMOVED
GROUP_RENAMED
OWNERSHIP_TRANSFERRED
GROUP_DELETED
GROUP_CREATED
```

---

## 10. Authentication Design

The app supports email/password login and has a backend Google login route.

Email/password flow:

1. User registers with full name, email, and password.
2. Password is hashed using bcryptjs.
3. User logs in with email/password.
4. Backend returns JWT.
5. Frontend stores JWT and user in localStorage.
6. Axios interceptor attaches JWT to protected requests.

Google auth flow:

1. Frontend sends Google credential to backend.
2. Backend verifies token using google-auth-library.
3. Backend finds or creates user.
4. Backend returns app JWT.

Current note:

Email/password auth is the most reliable demo flow.

---

## 11. Group Rules

* Authenticated users can create groups.
* Creator becomes group owner.
* Creator is automatically added as member.
* Groups are private.
* Only group members can access group details.
* Invite codes are unique and reusable.
* Users can join groups through invite code.
* User search was deferred.

Ownership rules:

* Owner can remove members.
* Owner cannot remove themselves.
* Only owner can initiate ownership transfer.
* Proposed owner must be a member.
* Ownership changes only after proposed owner accepts.

---

## 12. Expense Rules

Supported split types:

* Equal
* Unequal
* Percentage
* Share

Creation rules:

* User must be authenticated.
* User must be a group member.
* Payer must be a group member.
* All participants must be group members.
* Participants are required.
* Description, amount, split type, payer, and group are required.
* Expense creator is stored as `creatorId`.

Edit/delete rules:

* Expense creator can edit/delete.
* Group owner can edit/delete.
* Expense edits rebuild participant allocations for simplicity and correctness.

---

## 13. Split Engine Logic

The split engine lives in:

```txt
src/services/split.service.js
```

## Equal Split

* Validates amount > 0.
* Divides amount equally among participants.
* Handles rounding by adjusting the first participant.

## Unequal Split

* Validates amount > 0.
* Requires each participant to have `amountOwed`.
* Amount owed cannot be negative.
* Sum of participant amounts must equal total expense amount.

## Percentage Split

* Validates amount > 0.
* Requires each participant to have percentage.
* Percentage must be greater than zero.
* Percentages must add up to 100.
* Calculates amount owed from total amount.
* Handles rounding difference by adjusting first participant.

## Share Split

* Validates amount > 0.
* Requires each participant to have shares.
* Shares must be positive integers.
* Splits amount proportionally by total shares.
* Handles rounding difference by adjusting first participant.

---

## 14. Balance Engine Logic

Balances are calculated dynamically.

There is no stored balance table.

Source of truth:

* Expenses
* Settlements

For every expense:

1. Read payer.
2. Read participants.
3. For each participant, get amount owed.
4. If participant is not payer, create debt edge:

   * debtor = participant
   * creditor = payer
   * amount = participant amount owed

For every settlement:

1. Read payer and receiver.
2. Treat settlement as reducing payer's debt to receiver.

Debt cancellation:

* Opposite direction debts are netted.

Example:

```txt
A owes B ₹500
B owes A ₹200
Net: A owes B ₹300
```

Simplified balances:

* Raw balances are converted into optimized debtor-creditor settlement suggestions.
* Goal is to reduce number of payments required to settle group.

---

## 15. Settlement Rules

Settlement creation requires:

* amount
* payerId
* receiverId
* groupId

Validation:

* Amount must be greater than zero.
* Payer and receiver cannot be the same user.
* Authenticated user must be the payer.
* Authenticated user must be a group member.
* Payer must be a group member.
* Receiver must be a group member.

Settlement behavior:

1. Create settlement record.
2. Create activity record.
3. Balance endpoint includes settlement while calculating balances.

---

## 16. Activity System

Activity records are created through:

```txt
src/services/activity.service.js
```

The helper accepts:

* actorId
* groupId
* activityType
* entityId
* metadata

Used for:

* Expense creation
* Expense update
* Expense deletion
* Settlement creation
* Group changes
* Ownership transfer

Reason:

* Keeps audit history separate from business tables.
* JSON metadata allows flexible event-specific information.

---

## 17. API Design

Base prefix:

```txt
/api
```

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

## 18. Frontend Routes

Implemented routes include:

```txt
/login
/register
/dashboard
/groups/:groupId
/ownership-transfers
```

Protected routes are wrapped with `ProtectedRoute`.

Auth state is provided through:

```txt
AuthProvider
AuthContext
useAuth
```

API calls are organized into service files:

* activityService
* balanceService
* expenseService
* groupService
* ownershipTransferService
* settlementService

---

## 19. Deployment Notes

Frontend deployment requires SPA rewrite configuration because React Router handles client-side routes.

Vercel configuration:

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

Reason:

Refreshing nested routes like `/groups/:groupId` causes server-side 404 unless all routes are rewritten to `index.html`.

Environment variables:

Backend:

```env
DATABASE_URL=
JWT_SECRET=
CLIENT_URL=
PORT=
GOOGLE_CLIENT_ID=
```

Frontend:

```env
VITE_API_BASE_URL=
```

---

## 20. Testing Status

## Backend Tested

* Register
* Login
* Protected route access
* Create group
* Join group through invite code
* Rename group
* Add/remove group members
* Create equal split expense
* Create unequal split expense
* Create percentage split expense
* Create share split expense
* Invalid unequal split rejection
* Invalid percentage split rejection
* Invalid settlement amount rejection
* Record settlement
* Balance recalculation after settlement
* Activity feed
* Ownership transfer request
* Ownership transfer accept
* Ownership transfer reject

## Frontend Tested

* Register page
* Login page
* Dashboard loading
* Create group
* Join group by invite code
* Open group detail page
* Create expenses
* Display balances
* Record settlement
* Refresh balances after settlement
* Display activity feed
* Member removal UI
* Ownership transfer page

---

## 21. Known Limitations

## Realtime Expense Chat Deferred

The assignment mentioned expense chat with realtime updates. This was deferred because the project prioritized financial correctness, database design, split logic, balances, and deployment-readiness.

Future implementation:

* Add ExpenseComment model.
* Add Socket.IO.
* Join group/expense rooms.
* Broadcast comment and balance events.

## User Search Deferred

The database includes Friendship, and early product planning included user search. The final MVP uses invite-code joining instead.

Reason:

* Invite codes are simpler.
* No search endpoint needed.
* Faster to test and demo.

Future implementation:

* Search users by name/email/phone.
* Add user to group directly.
* Build friend system UI.

## Forgot Password Deferred

Password recovery is not implemented.

Future implementation:

* Password reset token table.
* Email delivery.
* Expiring reset links.

## Browser Title and Favicon Pending

Final browser tab title and favicon customization were noted as final polish items.

## Direct Expenses Deferred

The schema supports nullable `groupId`, but final MVP focuses on group expenses.

## Receipt Upload Deferred

Receipt URL fields exist, but upload UI/storage integration was not implemented.

## Frontend Paid By UX Issue

During final testing, a possible UX issue was noted around creating an expense without clearly selecting a payer.

Backend validation requires payerId and verifies payer membership, but frontend UX should be improved by forcing a visible payer selection before submit.

Future fix:

* Add frontend validation message.
* Disable submit until payer is selected.

---

## 22. Product Tradeoffs

## Invite Code Instead Of User Search

Implemented invite-code joining instead of user search.

Reason:

* Faster MVP implementation.
* Easier to test.
* Still supports multi-user groups.

Tradeoff:

* Less convenient than searching users by email/name.

## Dynamic Balances Instead Of Stored Balances

Balances are calculated from expenses and settlements.

Reason:

* Prevents stale balance data.
* Easier to reason about correctness.
* Better for interview explanation.

Tradeoff:

* More computation at read time.

## Ownership Added

Splitwise is mostly flat, but this clone adds group ownership.

Reason:

* Clear permissions.
* Safer member removal.
* Ownership transfer demonstrates deeper product thinking.

Tradeoff:

* Slightly different from Splitwise.

## Activity Feed Instead Of Notifications

Activity feed was implemented before notifications.

Reason:

* Easier to build.
* Useful for audit history.
* Less noisy than notifications.

## Realtime Deferred

Realtime was deferred until after the financial core.

Reason:

* Correct balances matter more than realtime polish.
* Time was limited.

Tradeoff:

* Assignment realtime chat requirement is not fully satisfied.

---

## 23. AI Collaboration Process

AI was used as a junior engineering collaborator.

The process followed:

1. Clarified product scope.
2. Discussed Splitwise workflows.
3. Chose MVP features.
4. Designed database schema.
5. Built backend services.
6. Tested split and balance logic.
7. Built API controllers and routes.
8. Built frontend pages and service layer.
9. Tested core flows manually.
10. Updated context and build plan throughout.

Important AI usage principle:

The AI was not treated as a magic code generator. It was used to reason through product rules, implementation decisions, edge cases, and tradeoffs.

---


