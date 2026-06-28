/*
Segment: New Members - Last 7 Days
Purpose: Select new Forge Fitness members for the onboarding journey.
CRM Use Case: Welcome Email + Membership Confirmation Email
Platform Style: Salesforce Marketing Cloud / CRM SQL
*/

SELECT
    member_id,
    first_name,
    last_name,
    email,
    membership_type,
    home_gym,
    start_date
FROM
    members
WHERE
    start_date >= DATEADD(day, -7, GETDATE())
    AND membership_status = 'Active'
    AND email_opt_in = 1;