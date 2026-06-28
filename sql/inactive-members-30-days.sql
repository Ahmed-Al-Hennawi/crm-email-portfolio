/*
Segment: Inactive Members - 30 Days
Purpose: Select members who have not visited the gym recently.
CRM Use Case: Win-Back Campaign Email
*/

SELECT
    member_id,
    first_name,
    last_name,
    email,
    home_gym,
    last_visit_date,
    recommended_class,
    offer_code,
    offer_expiry
FROM
    members
WHERE
    last_visit_date <= DATEADD(day, -30, GETDATE())
    AND membership_status = 'Active'
    AND email_opt_in = 1;