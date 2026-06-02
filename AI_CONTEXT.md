# AI_CONTEXT.md

# Splitwise-Inspired Expense Sharing Application

## Project Purpose

This document is the single source of truth for the Splitwise Clone Internship Assignment.

The assignment is to reverse engineer Splitwise, scope a realistic MVP, and build a working deployed full-stack app using AI as the main development collaborator. The AI is expected to behave like a junior engineer, ask product and engineering questions before building, and help maintain context throughout the project.

Any engineer or evaluator should be able to read this file and understand:

- Product requirements
- MVP scope
- Business rules
- User flows
- Permissions
- Database schema
- Backend architecture
- Balance calculation rules
- Testing strategy
- Implementation progress
- Tradeoffs and known limitations

The project is being built as a Splitwise-inspired expense sharing platform with emphasis on correctness, clarity, and interview-readiness.

---

# Assignment Goals

The application must demonstrate:

1. Product understanding
2. Ability to scope a realistic MVP
3. Strong relational database design
4. Working backend and frontend implementation
5. AI-assisted development process
6. Continuously maintained documentation
7. A codebase that can be explained and modified during interview evaluation

Primary priorities:

1. Balance correctness
2. User experience
3. Engineering quality
4. Ability to explain decisions clearly

---

# Current Implementation Status

## Completed

- Product scope discussion
- AI_CONTEXT.md initial version
- BUILD_PLAN.md initial version
- ERD.md
- PostgreSQL local setup
- Prisma 7 setup
- Prisma schema design
- Full schema.prisma
- Database migrations
- Seed data
- Prisma Studio verification
- Split engine service
- Balance engine service
- Split engine tests
- Balance engine tests
- Express setup
- Prisma client setup
- Health check endpoint
- Error middleware
- Auth APIs
- Group API  
## Current Phase

- Expense APIs

## Current Backend API Plan

Planned order:

- Settlement APIs
- Balance APIs
- Activity APIs
- Frontend
- Realtime
- Deployment

### Backend API - Auth APIs

Completed:
- Email/password registration
- Password hashing with bcrypt
- JWT login
- Protected route middleware
- Logged-in user endpoint

Decision:
- Email/password auth implemented first for demo reliability.
- Google login remains planned/future because OAuth setup can slow down MVP delivery.

Endpoints:
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

Auth Implementation Decision:
Although Google Login is a must-have requirement, email/password authentication was implemented first to make backend testing faster and easier. Google Login remains required for the final MVP and will be implemented before submission.

---

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

# User Personas

The application is intentionally generic and supports:

- Friends
- Roommates
- Couples
- Teams
- Event organizers
- Travel groups

No persona-specific functionality exists.

---

# MVP Scope

## Must Have

### Authentication

- Login module
- Email/password authentication for local MVP implementation
- JWT-based session handling
- Google login can remain a planned enhancement if time does not permit full OAuth setup

### Group Management

- Create groups
- Rename groups
- Add members
- Remove members
- Transfer ownership
- Delete groups
- Invite users through invite links
- Search existing users and add them

### Expense Management

- Create expense
- Edit expense
- Delete expense
- Equal split
- Unequal split
- Percentage split
- Share split

### Direct Expenses

- Direct expenses between friends are planned but lower priority than group expense flows

### Balances

- Group balances
- Individual balance summary
- Raw debt view
- Simplified debt view
- Balance recalculation from expenses and settlements

### Settlements

- Record settlements
- Settlement history
- Settlements reduce outstanding debt

Settlement Authorization Rule:

Only the authenticated payer may record a settlement.

Reason:
Prevents users from recording payments on behalf of other members and improves trustworthiness of financial records.

### Activity

- Group activity feed
- User activity feed
- Activity entries for important actions

---

## Nice To Have

- Google OAuth login
- Phone number + password login
- WhatsApp invite
- SMS invite
- Expense chat/comments
- Receipt uploads
- Friend system improvements
- Realtime updates using Socket.IO

---

## Cut If Needed

- Group chat
- Multiple currencies
- Export spreadsheet
- Receipt uploads
- Full OAuth implementation
- Realtime chat/comments

---

# User Roles

Only two roles exist.

## Owner

Permissions:

- Add members
- Remove members
- Delete group
- Edit group details
- Transfer ownership
- Override debt-settlement restrictions during member removal

## Member

Permissions:

- Create expenses
- Edit own expenses
- Delete own expenses
- Rename groups
- Record settlements
- View balances
- View activity

No admin role exists.

---

# Authentication

## Login Methods

Final MVP implementation priority:

- Email + password authentication
- JWT token authentication
- Protected backend routes

Originally considered:

- Google Login
- Phone number + password login

Google login is useful but may be deferred because the assignment requires a login module, not necessarily OAuth.

## User Profile Fields

Required:

- Full name
- Email
- Password hash

Optional:

- Phone number
- Username
- Profile photo

## Unique Identity

Email address.

Rules:

- Every account must have a unique email address.
- Email is the primary identity key.
- Phone numbers may be used later for search and invitations but are not the primary identity key.

## Session Behaviour

Frontend should store the JWT and use it for protected requests.

## Password Recovery

Not included in MVP.

Future enhancement.

---

# Friend System

Users can add friends.

Search is supported through:

- Name
- Email
- Phone number if available

## Friend Removal

A friend cannot be removed while balances remain unsettled.

Flow:

1. Attempt removal
2. Reminder to settle balances
3. Settle balances
4. Remove friend

Historical records remain.

Retained:

- Expenses
- Settlements
- Activity history

---

# Groups

## Visibility

Groups are private.

Only group members can access group data.

## Group Creation

Required fields:

- Group name

Group creation flow:

1. Authenticated user creates group
2. Creator becomes owner
3. Creator is added as group member
4. Optional members can be added

## Group Ownership

Groups have owners.

This differs from Splitwise.

### Why Ownership Exists

Ownership provides:

- Accountability
- Administrative control
- Protection against malicious edits
- Better support for large groups

## Ownership Transfer

Flow:

1. Owner selects member
2. Transfer request is created
3. Member accepts
4. Ownership is transferred

## Group Renaming

Any member can rename a group.

Reason:

- Low-risk action
- Reduces administrative friction

## Leaving Groups

Users cannot leave until balances are settled.

Owners must transfer ownership before leaving.

## Member Removal

Normal rule:

Members cannot be removed while balances remain unsettled.

### Owner Override

When removing a member with unsettled balances:

1. Show warning
2. Owner chooses handling strategy

Possible strategies:

- Transfer unresolved responsibility to owner
- Remove member from future group membership while preserving historical records

The safer MVP implementation is to preserve historical records and prevent removal unless debts are settled.

## Group Deletion

Owner may delete a group.

Recommended MVP behavior:

- Allow only owner to delete
- Show warning in frontend
- Keep implementation simple by deleting or soft-deleting depending on schema support

---

# Invitations

Supported plan:

## Existing User Search

Search and add existing users.

## Invite Link

Flow:

1. Generate invite code
2. User opens invite link
3. User logs in if necessary
4. User joins group

Invite links:

- No expiration in MVP
- No approval workflow in MVP
- No usage limits in MVP

Future:

- WhatsApp invites
- SMS invites
- Expiring invite links

---

# Expenses

## Expense Fields

Required:

- Description/title
- Amount
- Payer
- Participants
- Split type

Automatically generated:

- Creation date
- Creator
- Group or direct context

Optional:

- Receipt

## Expense Permissions

Create:

- Any group member

Edit:

- Creator
- Owner

Delete:

- Creator
- Owner

## Expense Creator

Creator information remains permanently attached to expenses.

Even if creator later leaves the group.

## Participants

An expense can include only a subset of group members.

Group membership does not imply participation.

---

# Split Types

The split engine has been implemented and tested.

## Equal Split

Amount is divided equally among participants.

## Unequal Split

Custom amount per participant.

Validation:

- Sum of custom participant amounts should match total expense amount.
- MVP may auto-adjust small rounding differences.

## Percentage Split

Custom percentages.

Validation:

- Percentages should total 100.
- MVP may normalize values where appropriate.

## Share Split

Users receive shares.

Example:

- A = 1 share
- B = 2 shares
- C = 3 shares

Amount is distributed proportionally.

---

# Balance System

The balance engine has been implemented and tested.

## Source Of Truth

Expenses and settlements are the source of truth.

Balances are calculated dynamically.

Running balances are not stored.

## Why

- Correctness first
- Single source of truth
- Easier reconciliation
- Avoids stale balance data

## Recalculation Triggers

Balances update when:

- Expense is created
- Expense is edited
- Expense is deleted
- Settlement is recorded

## Raw Balance Calculation

For every expense:

1. Determine each participant's owed share.
2. Ignore payer's own share.
3. Create debt edge from participant to payer.
4. Aggregate debt edges.

Example:

Expense = ₹900  
Payer = A  
Participants = A, B, C, D  
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

Opposite direction debts are cancelled/netted.

Example:

- B owes A ₹500
- A owes B ₹200

Net result:

- B owes A ₹300

## Simplified Debt View

Users can switch between:

### Raw Balances

Display direct calculated debt pairs.

### Simplified Balances

Display optimized settlement suggestions using a min-cash-flow style approach.

Goal:

- Reduce number of transactions required to settle the group.

---

# Direct Expenses

Direct expenses are planned.

Requirements:

- Both users should be friends.
- Direct expenses are not tied to a group.

Flow:

Dashboard → Add Expense → Select Friend → Enter Details

Priority:

- Lower than group expense APIs for MVP completion.

---

# Settlements

Users can record settlements.

Supported:

- Group settlements
- Direct settlements if direct expense flow is implemented

## Settlement Fields

Required:

- Amount
- Payer
- Receiver

Optional:

- Note
- Payment screenshot

## Settlement Behaviour

Recording a settlement:

1. Creates settlement record
2. Updates calculated balances
3. Adds activity entry

---

# Activity System

## Group Activity Feed

Default tab inside groups.

Tracks:

- Expense creation
- Expense edits
- Expense deletion
- Settlements
- Member additions
- Member removals
- Ownership transfers
- Group renames
- Group deletion

All members can view group activity entries.

## User Activity Feed

Tracks user activity across all groups.

Includes:

- Direct expenses
- Settlements
- Group events
- Ownership changes

## Retention

Retention is based on maximum number of entries.

Not time-based.

## Why Activity Instead Of Notifications

Activity feeds:

- Reduce notification fatigue
- Provide context
- Act as an audit trail

---

# Realtime Requirements

Realtime is required by the assignment for user chat in an expense.

Project priority:

1. Financial correctness
2. Group and expense CRUD
3. Balances
4. Settlements
5. Activity
6. Realtime updates/chat

Realtime candidates:

- Expense creation
- Expense edits
- Expense deletion
- Settlement creation
- Balance updates
- Expense comments/chat

Socket.IO is planned for realtime if time permits.

---

# Search

Supported searches:

- Groups
- Friends/users

Not supported in MVP:

- Expense search
- Global public user directory

---

# Currency

MVP uses a single currency system.

Reason:

- Simpler balance calculations
- Faster implementation
- Lower risk

Currency display can use INR for demo purposes.

---

# Navigation

## First-Time User Flow

1. Login/register
2. Dashboard/groups page

## Bottom Navigation / Main Navigation

- Groups
- Balance Summary
- Activity

## Dashboard

Displays:

- Groups list
- Search
- Add expense
- Add friend
- Total owed
- Total owed to user

## Group Screen

Tabs:

### Activity

Default tab.

### Balances

Displays debts and settlement suggestions.

### Totals

Displays financial summary.

---

# Current Backend Architecture

## Runtime

- Node.js
- Express
- CommonJS JavaScript backend

## Database

- PostgreSQL

## ORM

- Prisma 7

## Existing Backend Files/Folders

The backend currently includes:

- Prisma config
- TypeScript config generated/used by Prisma tooling
- Prisma schema
- Prisma migrations
- Generated Prisma client output folder
- Existing services folder
- Split engine service
- Balance engine service
- Tests for split and balance engines

## Important Decision

The generated Prisma folder should not be deleted.

It is likely produced by Prisma 7 custom client output and is needed by the existing services/tests.

---

# Backend API Development Plan

## Step 1: Express Setup

Add:

- `src/app.js`
- `src/server.js`
- CORS
- JSON body parsing
- Morgan logging
- Health check route

Expected health endpoint:

`GET /api/health`

Expected response:

```json
{
  "status": "ok",
  "service": "splitwise-clone-backend"
}
```

## Step 2: Prisma Client Setup

Add:

- `src/config/prisma.js`

Purpose:

- Create one shared Prisma client instance.
- Avoid creating multiple clients across controllers/services.

## Step 3: Auth APIs

Planned endpoints:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

Auth implementation:

- bcrypt password hashing
- JWT signing
- auth middleware for protected routes

## Step 4: Group APIs

Planned endpoints:

- `GET /api/groups`
- `GET /api/groups/:id`
- `POST /api/groups`
- `PATCH /api/groups/:id`
- `DELETE /api/groups/:id`

## Step 5: Expense APIs

Planned endpoints:

- `POST /api/expenses`
- `GET /api/expenses/:id`
- `GET /api/groups/:id/expenses`
- `PATCH /api/expenses/:id`
- `DELETE /api/expenses/:id`

## Step 6: Settlement APIs

Planned endpoints:

- `POST /api/settlements`
- `GET /api/groups/:id/settlements`

## Step 7: Balance APIs

Planned endpoints:

- `GET /api/groups/:id/balances`
- `GET /api/balances/summary`

## Step 8: Activity APIs

Planned endpoints:

- `GET /api/groups/:id/activity`
- `GET /api/activity`

---

# Known Limitations / Setup Requirements:
 
Prisma generated client is intentionally excluded from Git using .gitignore.

After cloning the repository, developers must run:

npx prisma generate

before starting the backend.

# Environment Variables

Current planned `.env` values:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
DATABASE_URL="postgresql://..."
JWT_SECRET="temporary_dev_secret_change_later"
```

JWT secret can exist before JWT setup.

It will be used once auth APIs are implemented.

For deployment, the JWT secret must be changed to a strong production value.

---

# Testing Strategy

## Completed Tests

- Split engine tests
- Balance engine tests

## Split Engine Test Coverage

- Equal split
- Unequal split
- Percentage split
- Share split
- Validation/rounding behavior

## Balance Engine Test Coverage

- Debt generation
- Settlement adjustment
- Debt cancellation
- Debt simplification

## Planned Backend API Tests

Manual testing using Postman/Thunder Client first.

Test order:

1. Health check
2. Register
3. Login
4. Get current user
5. Create group
6. Add members
7. Create equal expense
8. Create unequal expense
9. Create percentage expense
10. Create share expense
11. Get group balances
12. Record settlement
13. Verify updated balances
14. Get activity feed

---

# Product Tradeoffs

## Group Ownership

Added for accountability and security.

## Dynamic Balances

Chosen over stored balances because correctness is more important than query speed for the MVP.

## Single Currency

Chosen to simplify calculations.

## Activity Feed

Chosen over notifications.

## Realtime Deferred Until Core APIs

Realtime is important, but APIs and balance correctness are more foundational.

## Email/Password First

Chosen for implementation speed and reliability.

Google OAuth can be added later if time permits.

---

# Future Enhancements

- Google OAuth login
- Phone + password login
- Password recovery
- WhatsApp invites
- SMS invites
- Expense chat/comments
- Receipt upload UI
- Cloudinary receipt storage
- Export spreadsheet
- Multi-currency support
- Enhanced friend system
- Push notifications
- Mobile app
- Analytics dashboard

---

# Documentation Maintenance Rule

This file must be updated whenever any of the following change:

- Product scope
- Business rules
- Database schema
- API routes
- Folder structure
- Authentication design
- Balance logic
- Deployment approach
- Testing results
- Known limitations

At each major checkpoint, add a short progress note rather than waiting until the end.
