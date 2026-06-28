# SQL Segmentation Examples

This folder contains CRM-style SQL segmentation examples for the Forge Fitness email lifecycle portfolio.

The purpose of these queries is to demonstrate how customer data can be used to select the right audience for each automated email campaign.

## Segments Included

1. New Members - Last 7 Days
2. Renewal Due - Next 7 Days
3. Failed Payment Members
4. Inactive Members - 30 Days
5. Referral Eligible Members
6. Personal Training Eligible Members

## CRM Purpose

These SQL examples show how a CRM or marketing automation platform could identify members based on behaviour, membership status, payment activity, visit history, and campaign eligibility.

## Example Use Cases

- Send onboarding emails to new members.
- Send renewal reminders before billing dates.
- Recover failed payments.
- Reactivate inactive members.
- Promote referral campaigns.
- Upsell personal training sessions.

## Assumed Data Tables

### members

Contains customer and membership information.

Example fields:

- member_id
- first_name
- last_name
- email
- membership_type
- membership_status
- home_gym
- start_date
- renewal_date
- renewal_amount
- payment_method
- last_visit_date
- visit_count_last_30_days
- referral_code
- referral_eligible
- email_opt_in
- has_booked_personal_training
- training_focus
- suggested_session

### payments

Contains billing and payment history.

Example fields:

- payment_id
- member_id
- payment_date
- payment_status
- payment_method
- amount_due

## Notes

These examples are written in a CRM-friendly SQL style similar to what could be used in platforms such as Salesforce Marketing Cloud Query Activities.

The queries are part of a portfolio project and are designed to demonstrate CRM segmentation logic, not to connect to a live production database.