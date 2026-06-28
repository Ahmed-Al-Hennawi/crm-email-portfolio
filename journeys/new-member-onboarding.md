# New Member Onboarding Journey

## Purpose

This journey helps a new Forge Fitness member become active after joining.

The goal is to move the customer from signup to first visit, first class booking, and early engagement.

## Audience

New members who have successfully completed signup and payment.

## Entry Trigger

A customer completes membership registration and payment.

## Journey Flow

```mermaid
flowchart TD
    A[Member signs up] --> B[Membership confirmation email]
    B --> C[Welcome email]
    C --> D{Booked first class?}
    D -- Yes --> E[Class booking confirmation email]
    D -- No --> F[Reminder to book first session]
    E --> G[Member attends first class]
    F --> H{Booked after reminder?}
    H -- Yes --> E
    H -- No --> I[Send personal training promotion]