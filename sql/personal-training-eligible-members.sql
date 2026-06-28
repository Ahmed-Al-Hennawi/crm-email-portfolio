/*
Segment: Personal Training Eligible Members
Purpose: Select members who may benefit from personal training support.
CRM Use Case: Personal Training Promotion Email
*/

SELECT
    member_id,
    first_name,
    last_name,
    email,
    home_gym,
    start_date,
    training_focus,
    suggested_session,
    offer_name,
    offer_expiry
FROM
    members
WHERE
    membership_status = 'Active'
    AND has_booked_personal_training = 0
    AND email_opt_in = 1
    AND (
        start_date >= DATEADD(day, -14, GETDATE())
        OR last_visit_date <= DATEADD(day, -21, GETDATE())
    );