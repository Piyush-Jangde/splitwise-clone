# ERD.md

# Splitwise Clone - Entity Relationship Design

## Purpose

This document defines:

* Core entities
* Relationships
* Cardinalities
* Ownership rules
* Delete behaviors
* Data integrity constraints

This document acts as the source of truth before implementing the Prisma schema.

---

# Entity Overview

The system contains the following entities:

1. User
2. Friendship
3. Group
4. GroupMember
5. Expense
6. ExpenseParticipant
7. Settlement
8. Activity
9. OwnershipTransfer

---

# User

Represents an authenticated user.

## Attributes

* id
* fullName
* email
* phoneNumber
* username
* profilePhotoUrl
* authProvider
* passwordHash
* createdAt
* updatedAt

## Constraints

* Email must be unique.
* Email is the primary identity.
* Phone number is searchable but not unique identity.

## Relationships

User can:

* Own many Groups
* Belong to many Groups
* Create many Expenses
* Pay many Expenses
* Participate in many Expenses
* Create many Settlements
* Generate many Activities
* Have many Friendships

---

# Friendship

Represents a friendship between two users.

## Attributes

* id
* user1Id
* user2Id
* createdAt

## Constraints

Only one friendship can exist between two users.

These represent the same friendship:

(A,B)

(B,A)

Unique friendship pair must be enforced.

## Relationships

Friendship belongs to:

* User
* User

---

# Group

Represents a private expense sharing group.

## Attributes

* id
* name
* ownerId
* inviteCode
* createdAt
* updatedAt

## Constraints

* Group must have exactly one owner.
* Group name is required.

## Relationships

Group has:

* One Owner
* Many Members
* Many Expenses
* Many Settlements
* Many Activities
* Many Ownership Transfers

---

# GroupMember

Many-to-many bridge between User and Group.

## Attributes

* id
* groupId
* userId
* joinedAt

## Constraints

(groupId, userId) must be unique.

A user cannot join the same group twice.

## Relationships

Belongs to:

* User
* Group

---

# Expense

Represents a financial transaction.

Supports both:

* Group Expenses
* Direct Expenses

## Attributes

* id
* description
* amount
* splitType
* payerId
* creatorId
* groupId (nullable)
* receiptUrl
* createdAt
* updatedAt

## Split Types

* EQUAL
* UNEQUAL
* PERCENTAGE
* SHARE

## Rules

Group Expense:

groupId != null

Direct Expense:

groupId == null

## Relationships

Expense belongs to:

* Creator
* Payer
* Group (optional)

Expense has:

* Many ExpenseParticipants

---

# ExpenseParticipant

Stores participant allocations.

## Attributes

* id
* expenseId
* userId
* amountOwed
* percentage
* shares

## Rules

Equal Split:

amountOwed populated

Unequal Split:

amountOwed populated

Percentage Split:

percentage populated

Share Split:

shares populated

## Relationships

Belongs to:

* Expense
* User

---

# Settlement

Represents money paid between users.

Supports:

* Group Settlements
* Direct Settlements

## Attributes

* id
* amount
* payerId
* receiverId
* groupId (nullable)
* note
* screenshotUrl
* createdAt

## Rules

Group Settlement:

groupId != null

Direct Settlement:

groupId == null

## Relationships

Settlement belongs to:

* Payer
* Receiver
* Group (optional)

---

# Activity

Stores audit history.

## Attributes

* id
* actorId
* groupId (nullable)
* activityType
* entityId
* metadata
* createdAt

## Activity Types

* EXPENSE_CREATED
* EXPENSE_UPDATED
* EXPENSE_DELETED
* SETTLEMENT_CREATED
* MEMBER_ADDED
* MEMBER_REMOVED
* GROUP_RENAMED
* OWNERSHIP_TRANSFERRED
* GROUP_DELETED

## Rules

Activities should never be physically deleted.

Activities are immutable.

## Relationships

Activity belongs to:

* Actor
* Group (optional)

---

# OwnershipTransfer

Tracks ownership transfer requests.

## Attributes

* id
* groupId
* currentOwnerId
* proposedOwnerId
* status
* createdAt
* respondedAt

## Status Values

* PENDING
* ACCEPTED
* REJECTED

## Relationships

Belongs to:

* Group
* Current Owner
* Proposed Owner

---

# Cardinalities

## User -> Group (Owner)

One User can own many Groups.

One Group has exactly one Owner.

```text
User (1)
   |
   | owns
   |
Group (Many)
```

---

## User -> GroupMember

One User can belong to many Groups.

One Group can contain many Users.

```text
User
  |
  |
GroupMember
  |
  |
Group
```

Many-to-Many relationship.

---

## Group -> Expense

One Group can contain many Expenses.

Each Expense belongs to at most one Group.

```text
Group (1)
   |
   |
Expense (Many)
```

---

## Expense -> ExpenseParticipant

One Expense has many Participants.

```text
Expense (1)
   |
   |
ExpenseParticipant (Many)
```

---

## User -> ExpenseParticipant

One User can participate in many Expenses.

```text
User (1)
   |
   |
ExpenseParticipant (Many)
```

---

## Group -> Settlement

One Group can have many Settlements.

```text
Group (1)
   |
   |
Settlement (Many)
```

---

## User -> Settlement

One User can create many Settlement records.

```text
User (1)
   |
   |
Settlement (Many)
```

---

## Group -> Activity

One Group can generate many Activities.

```text
Group (1)
   |
   |
Activity (Many)
```

---

# Delete Behaviors

## User Deletion

Not supported in MVP.

Reason:

Removing a user would affect:

* Expenses
* Settlements
* Activities
* Ownership records

Future implementation may use soft deletes.

---

## Group Deletion

Allowed.

Delete:

* GroupMembers
* Expenses
* ExpenseParticipants
* Settlements

Keep:

* Activities

Activities should remain for historical audit purposes.

---

## Expense Deletion

Allowed by:

* Expense Creator
* Group Owner

Cascade delete:

* ExpenseParticipants

Generate activity entry.

---

## Settlement Deletion

Not supported in MVP.

Reason:

May invalidate balance history.

Instead create corrective settlement.

---

## Friendship Deletion

Allowed only when:

No outstanding balances exist.

Historical expenses remain intact.

Historical settlements remain intact.

Historical activity remains intact.

---

# Ownership Rules

## Transfer Ownership

Flow:

1. Owner initiates transfer.
2. OwnershipTransfer created.
3. Status = PENDING.
4. Member accepts.
5. Group.ownerId updated.
6. Activity generated.

---

## Owner Leaving Group

Owner cannot leave group.

Owner must:

1. Transfer ownership.
2. Transfer accepted.
3. Leave group.

---

# Balance Source Of Truth

The system does not store balances.

Balances are calculated dynamically from:

* Expenses
* Settlements

Balance table intentionally omitted.

Reason:

Prevents synchronization issues and ensures correctness.

---

# Realtime Scope

Realtime updates required for:

* Expense creation
* Expense edits
* Expense deletion
* Settlements
* Group balances
* Dashboard balances

Group chat is out of scope.
