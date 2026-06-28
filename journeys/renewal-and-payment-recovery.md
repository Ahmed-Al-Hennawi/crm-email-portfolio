# Renewal and Payment Recovery Journey

## Purpose

This journey helps Forge Fitness reduce failed payments and avoid membership interruptions.

## Audience

Active members with upcoming renewal dates or failed payment attempts.

## Entry Trigger

A member has a renewal date approaching.

## Journey Flow

```mermaid
flowchart TD
    A[Renewal date approaching] --> B[Send renewal reminder]
    B --> C{Payment successful?}
    C -- Yes --> D[Membership continues]
    C -- No --> E[Send failed payment email]
    E --> F{Payment updated?}
    F -- Yes --> G[Access remains active]
    F -- No --> H[Send support reminder]
    H --> I[Possible access pause]