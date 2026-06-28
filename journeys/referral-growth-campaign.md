# Referral Growth Campaign Journey

## Purpose

This journey encourages active Forge Fitness members to refer friends and help grow the member base.

## Audience

Active and engaged members who are eligible for referral rewards.

## Entry Trigger

A member meets referral eligibility criteria.

## Journey Flow

```mermaid
flowchart TD
    A[Member eligible for referral campaign] --> B[Send referral email]
    B --> C{Referral link clicked?}
    C -- Yes --> D[Friend visits signup page]
    C -- No --> E[Send reminder before offer expiry]
    D --> F{Friend joins?}
    F -- Yes --> G[Apply member reward]
    F -- No --> H[No reward applied]