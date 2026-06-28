/*
Segment: Renewal Due - Next 7 Days
Purpose: Select active members whose membership renewal is coming soon.
CRM Use Case: Membership Renewal Reminder Email
*/

SELECT
    member_id,
    first_name,
    last_name,
    email,
    membership_type,
    home_gym,
    renewal_date,
    renewal_amount,
    payment_method
FROM
    members
WHERE
    renewal_date BETWEEN GETDATE() AND DATEADD(day, 7, GETDATE())
    AND membership_status = 'Active'
    AND email_opt_in = 1;