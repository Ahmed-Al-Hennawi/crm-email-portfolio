# Failed Payment Recovery Email

## Purpose

This email notifies a Forge Fitness member that their latest membership payment was unsuccessful.

## Trigger

The email is sent automatically after a failed membership payment attempt.

## Audience

Active or recently active members whose payment method failed during renewal billing.

## Personalisation Fields

- first_name
- membership_type
- amount_due
- payment_date
- payment_method
- access_pause_date

## Goal

The goal of this email is to recover failed payments, reduce involuntary membership cancellations, and keep the member's gym access active.

## CRM Logic

1. Membership payment is attempted.
2. Payment fails.
3. CRM checks member status and billing details.
4. Failed payment email is sent.
5. Member is directed to update payment details.
6. Access continues if payment is completed before the pause date.

## Email Type

Revenue recovery / transactional CRM email.