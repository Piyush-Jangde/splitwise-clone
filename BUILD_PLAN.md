# BUILD_PLAN.md

# Splitwise Clone Internship Assignment

## 1. Product Research

### Objective

Build a simplified Splitwise-inspired expense sharing application that supports:

* Groups
* Friends
* Expense splitting
* Debt tracking
* Settlements

Primary goals:

1. Balance correctness
2. User experience
3. Engineering quality

---

## Splitwise Workflows Studied

### Group Creation

User creates a group and adds members.

### Expense Creation

User records:

* Description
* Amount
* Payer
* Participants
* Split Method

System generates debt relationships.

### Balance Tracking

System calculates:

* Who owes whom
* Net balances
* Simplified settlement recommendations

### Settlements

Users record payments.

Balances update immediately.

### Activity Tracking

Every major action is visible in an activity feed.

---

## Features Included

### Authentication

* Google Login
* Optional Phone + Password

### Friends

* Add Friend
* Remove Friend
* Search Friend

### Groups

* Create Group
* Rename Group
* Delete Group
* Add Members
* Remove Members
* Transfer Ownership

### Expenses

* Equal Split
* Unequal Split
* Percentage Split
* Share Split

### Settlements

* Group Settlements
* Direct Settlements

### Balances

* Raw Balances
* Simplified Balances

### Activity Feed

Tracks:

* Expense create/edit/delete
* Settlements
* Group changes
* Ownership changes

### Realtime

Realtime updates for:

* Expenses
* Settlements
* Balances

---

## Features Excluded

### Out Of Scope

* Multi-currency
* Notifications
* Group chat
* Expense search
* Approval workflows
* Recurring expenses
* OCR receipt scanning

---

# 2. Final Architecture

## Frontend

React
Vite
React Router
Axios
Socket.IO Client

## Backend

Node.js
Express

## Database

PostgreSQL

## ORM

Prisma

## Realtime

Socket.IO

## File Storage

Cloudinary

## Deployment

Frontend: Vercel

Backend: Render

Database: Neon PostgreSQL

---

# 3. Entity Model

## User

Represents an authenticated account.

## Friendship

Represents accepted friendships.

## Group

Represents a private expense group.

## GroupMember

Links users to groups.

## Expense

Stores expense metadata.

## ExpenseParticipant

Stores split allocations.

## Settlement

Stores debt settlement records.

## Activity

Stores audit trail entries.

## OwnershipTransfer

Tracks owner transfer requests.

---

# 4. Database Design

## Tables

users

friendships

groups

group_members

expenses

expense_participants

settlements

activities

ownership_transfers

---

## Relationship Summary

User → GroupMember

Group → GroupMember

Group → Expense

Expense → ExpenseParticipant

User → Expense

User → Settlement

Group → Activity

---

# 5. Balance Engine

## Source Of Truth

Balances are never stored.

Balances are calculated from:

* Expenses
* Settlements

---

## Raw Balance Calculation

For each expense:

1. Calculate participant share.
2. Ignore payer's own share.
3. Create debt edges from participant to payer.

Example:

Expense = ₹900

Members:
A
B
C
D

Payer = A

Each share = ₹225

Generated debts:

B -> A : ₹225

C -> A : ₹225

D -> A : ₹225

---

## Settlement Handling

Settlement creates a negative debt edge.

Example:

B pays A ₹100

Generated edge:

B -> A : -₹100

---

## Net Balance Calculation

Aggregate all debt edges.

Result:

Debtor

Creditor

Amount

---

## Simplified Balances

Use Min-Cash-Flow style simplification.

Goal:

Minimize number of transactions.

---

# 6. API Design

## Authentication

POST /auth/google

POST /auth/register

POST /auth/login

GET /auth/me

POST /auth/logout

---

## Friends

GET /friends

GET /friends/search

POST /friends

DELETE /friends/:id

---

## Groups

GET /groups

GET /groups/:id

POST /groups

PATCH /groups/:id

DELETE /groups/:id

---

## Members

POST /groups/:id/members

DELETE /groups/:id/members/:userId

---

## Invite Links

POST /groups/:id/invite-link

POST /groups/join/:inviteCode

---

## Ownership

POST /groups/:id/ownership-transfer

POST /ownership-transfer/:id/accept

POST /ownership-transfer/:id/reject

---

## Expenses

POST /expenses

PATCH /expenses/:id

DELETE /expenses/:id

GET /expenses/:id

GET /groups/:id/expenses

---

## Settlements

POST /settlements

GET /groups/:id/settlements

---

## Balances

GET /groups/:id/balances

GET /balances/summary

---

## Activity

GET /groups/:id/activity

GET /activity

---

# 7. Frontend Structure

## Routes

/login

/dashboard

/groups/create

/groups/:id

/groups/:id/expense/new

/groups/:id/expense/:id

/groups/:id/settle

/activity

/profile

---

## Main Pages

Login

Dashboard

Group Details

Create Expense

Expense Details

Settlement

Activity Feed

Profile

---

## Group Tabs

Activity

Balances

Totals

---

# 8. Realtime Design

## Socket Rooms

group:<groupId>

user:<userId>

---

## Events

expense.created

expense.updated

expense.deleted

settlement.created

balance.updated

group.updated

member.added

member.removed

---

# 9. Testing Plan

## Authentication

Login

Session persistence

Protected routes

---

## Groups

Create

Rename

Delete

Transfer ownership

---

## Expenses

Create

Edit

Delete

Equal split

Unequal split

Percentage split

Share split

---

## Settlements

Create settlement

Balance updates

---

## Balances

Raw balances

Simplified balances

---

## Activity

Activity generation

Activity ordering

---

# 10. Tradeoffs

## Simplifications

Single currency

No notifications

No recurring expenses

No OCR

No group chat

---

## Engineering Tradeoffs

Dynamic balance calculation over stored balances.

Private groups only.

Ownership model added.

Activity feed instead of notification system.

---

# 11. Future Improvements

Multi-currency

Notifications

Receipt OCR

Recurring expenses

Advanced debt simplification

Mobile application

Group chat

Push notifications

Expense search

Analytics
