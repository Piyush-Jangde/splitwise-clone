# AI_CONTEXT.md

# Splitwise-Inspired Expense Sharing Application

## Project Purpose

This document serves as the single source of truth for the project.

Any engineer should be able to read this file and understand:

* Product requirements
* Business rules
* User flows
* Permissions
* Scope decisions
* Tradeoffs

The application is a Splitwise-inspired expense sharing platform built within a realistic 2–3 day internship assignment scope.

---

# Assignment Goals

The goal is to:

1. Reverse engineer Splitwise.
2. Scope a realistic MVP.
3. Build a deployed full-stack application.
4. Demonstrate product thinking, UX decisions, and engineering quality.

Primary priorities:

1. Balance correctness
2. User experience
3. Engineering quality

---

# User Personas

The application is intentionally generic and supports:

* Friends
* Roommates
* Couples
* Teams
* Event organizers
* Travel groups

No persona-specific functionality exists.

---

# MVP Scope

## Must Have

### Authentication

* Google Login

### Group Management

* Create groups
* Rename groups
* Add members
* Remove members
* Transfer ownership
* Delete groups
* Invite users through invite links
* Search existing users and add them

### Expense Management

* Create expense
* Edit expense
* Delete expense
* Equal split
* Unequal split
* Percentage split
* Share split

### Direct Expenses

* Direct expenses between friends

### Balances

* Group balances
* Individual balance summary
* Simplified debt view
* Real-time balance updates

### Settlements

* Record settlements
* Settlement history

### Activity

* Group activity feed
* User activity feed

---

## Nice To Have

### Authentication

* Phone number + password login

### Invitations

* WhatsApp invite
* SMS invite

### Communication

* Expense chat/comments

### Social

* Friend system improvements

### Attachments

* Receipt uploads

---

## Cut If Needed

* Group chat
* Multiple currencies
* Export spreadsheet

---

# User Roles

Only two roles exist.

## Owner

Permissions:

* Add members
* Remove members
* Delete group
* Edit group details
* Transfer ownership
* Override debt-settlement restrictions during member removal

## Member

Permissions:

* Create expenses
* Edit own expenses
* Delete own expenses
* Rename groups
* Record settlements
* View balances
* View activity

No admin role exists.

---

# Authentication

## Login Methods

Primary:

* Google Login

Optional:

* Phone Number + Password

## User Profile Fields

Required:

* Full Name
* Email
* Phone Number

Optional:

* Username
* Profile Photo

## Unique Identity

Email Address

Rules:

* Every account must have a unique email address.
* Google Login users are identified by their email.
* Phone Number + Password users must also provide an email address.
* Phone numbers may be used for search and invitations but are not the primary identity key.

## Session Behaviour

Users remain logged in after refresh and browser restart.

## Password Recovery

Not included in MVP.

Future enhancement.

---

# Friend System

Users can add friends.

Search is supported through:

* Name
* Phone Number

## Friend Removal

A friend cannot be removed while balances remain unsettled.

Flow:

1. Attempt removal
2. Reminder to settle balances
3. Settle balances
4. Remove friend

Historical records remain.

Retained:

* Expenses
* Settlements
* Activity history

---

# Groups

## Visibility

Groups are private.

Only members can access group data.

## Group Creation

Required fields:

* Group Name

Group creation flow:

1. Create group
2. Add members during creation

## Group Ownership

Groups have owners.

This differs from Splitwise.

### Why Ownership Exists

Ownership provides:

* Accountability
* Administrative control
* Protection against malicious edits
* Better support for large groups

## Ownership Transfer

Flow:

1. Owner selects member
2. Transfer request sent
3. Member accepts
4. Ownership transferred

## Group Renaming

Any member can rename a group.

Reason:

* Low-risk action
* Reduces administrative friction

## Leaving Groups

Users cannot leave until balances are settled.

Owners must transfer ownership before leaving.

## Member Removal

Normal Rule:

Members cannot be removed while balances remain unsettled.

### Owner Override

When removing a member with unsettled balances:

Show warning.

Owner chooses:

#### Option 1

Transfer:

* Debts
* Expenses

to owner.

#### Option 2

Remove member from all expenses.

Recalculate balances.

## Group Deletion

Owner may delete a group with unsettled balances.

Flow:

1. Warning
2. Second warning
3. Delete group

After deletion:

* Group disappears
* Activity entry added for all members

### Why Deletion Is Allowed

The application tracks debts.

It does not enforce payments.

Users should not be trapped in abandoned groups forever.

---

# Invitations

Supported:

## Existing User Search

Search and add existing users.

## Invite Link

Flow:

1. Open invite link
2. Login if necessary
3. Join group immediately

Invite links:

* No expiration
* No approval workflow
* No usage limits

Future:

* WhatsApp invites
* SMS invites

---

# Expenses

## Expense Fields

Required:

* Description / Title
* Amount
* Payer
* Participants
* Split Type

Automatically generated:

* Creation Date

Optional:

* Receipt

## Expense Permissions

Create:

* Any group member

Edit:

* Creator
* Owner

Delete:

* Creator
* Owner

## Expense Creator

Creator information remains permanently attached to expenses.

Even if creator later leaves the group.

## Participants

An expense can include only a subset of group members.

Group membership does not imply participation.

---

# Split Types

## Equal Split

Amount divided equally among participants.

## Unequal Split

Custom amounts per participant.

Validation:

If total does not equal expense amount:

System auto-adjusts.

## Percentage Split

Custom percentages.

Validation:

Percentages automatically normalized.

## Share Split

Users receive shares.

Example:

A = 1 share

B = 2 shares

C = 3 shares

Amount distributed proportionally.

---

# Receipts

Receipts may be attached to expenses.

Receipts are lower priority than core expense functionality.

---

# Balance System

## Source Of Truth

Expenses and settlements are the source of truth.

Balances are calculated dynamically.

Running balances are not stored.

## Why

* Correctness first
* Single source of truth
* Easier reconciliation

## Recalculation Triggers

Balances update when:

* Expense created
* Expense edited
* Expense deleted
* Settlement recorded

## Simplified Debt View

Users can switch between:

### Raw Balances

Display every debt pair.

### Simplified Balances

Display optimized settlement suggestions.

---

# Direct Expenses

Supported.

Direct expenses are separate from groups.

Requirements:

* Both users must be friends.

Flow:

Dashboard → Add Expense → Enter Details → Select Friend

---

# Settlements

Users can record settlements.

Supported:

* Group settlements
* Direct settlements

## Settlement Fields

Required:

* Amount

Optional:

* Note
* Payment Screenshot

## Settlement Behaviour

Recording a settlement:

1. Updates balances
2. Adds activity entry

---

# Activity System

## Group Activity Feed

Default tab inside groups.

Tracks:

* Expense creation
* Expense edits
* Expense deletion
* Settlements
* Member additions
* Member removals
* Ownership transfers
* Group renames
* Group deletion

All members can view all entries.

## User Activity Feed

Tracks user activity across all groups.

Includes:

* Direct expenses
* Settlements
* Group events
* Ownership changes

## Retention

Retention based on maximum number of entries.

Not time-based.

## Why Activity Instead Of Notifications

Activity feeds:

* Reduce notification fatigue
* Provide context
* Act as an audit trail

---

# Real-Time Requirements

Real-time updates are required for:

* Expense creation
* Expense edits
* Expense deletion
* Settlements
* Group balances
* Individual balances
* Dashboard totals

Priority:

Real-time balances are more important than real-time chat.

---

# Search

Supported searches:

* Groups
* Friends

Not supported:

* Expenses
* Global user directory

---

# Currency

MVP uses a single currency system.

Reason:

* Simpler balance calculations
* Faster implementation
* Lower risk

---

# Navigation

## First-Time User Flow

1. Login
2. Optional tutorial (not implemented)
3. Groups page

## Bottom Navigation

* Groups
* Balance Summary
* Activity

## Dashboard

Displays:

* Groups list
* Search
* Add expense
* Add friend
* Total owed
* Total owed to user

## Group Screen

Tabs:

### Activity

Default tab.

### Balances

Displays debts and settlements.

### Totals

Displays financial summary.

---

# Product Tradeoffs

## Group Ownership

Added for accountability and security.

## Group Deletion

Allowed to avoid abandoned groups.

## Open Group Renaming

Allowed because it is low-risk.

## Activity Feed

Chosen over notifications.

## Real-Time Balances

Prioritized over real-time chat because financial correctness is the core product value.

---

# Future Enhancements

* Phone + Password Login
* Password Recovery
* WhatsApp Invites
* SMS Invites
* Group Chat
* Receipt Management UI
* Export Spreadsheet
* Multi-Currency Support
* Enhanced Friend System

```
```
