# Personal Training Upsell Journey

## Purpose

This journey promotes personal training consultations to members who may benefit from extra support.

## Audience

New members, inactive members, or members who have not booked personal training before.

## Entry Trigger

A member becomes eligible for a personal training offer.

## Journey Flow

```mermaid
flowchart TD
    A[Member eligible for PT offer] --> B[Send personal training promotion]
    B --> C{Booked consultation?}
    C -- Yes --> D[Trainer consultation booked]
    C -- No --> E[Send follow-up reminder]
    E --> F{Booked after reminder?}
    F -- Yes --> D
    F -- No --> G[Exit journey]