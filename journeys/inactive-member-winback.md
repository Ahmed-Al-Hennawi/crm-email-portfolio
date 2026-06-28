# Inactive Member Win-Back Journey

## Purpose

This journey encourages inactive members to return to Forge Fitness before they cancel their membership.

## Audience

Members who have not visited the gym recently.

## Entry Trigger

A member has not checked in for 30 days.

## Journey Flow

```mermaid
flowchart TD
    A[No gym visit for 30 days] --> B[Send win-back email]
    B --> C{Booked class or session?}
    C -- Yes --> D[Send class booking confirmation]
    C -- No --> E[Send personal training offer]
    E --> F{Booked consultation?}
    F -- Yes --> G[Member reactivated]
    F -- No --> H[Continue low-frequency retention emails]