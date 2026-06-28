/*
Segment: Failed Payment Members
Purpose: Select members whose latest renewal payment failed.
CRM Use Case: Failed Payment Recovery Email
*/

SELECT
    m.member_id,
    m.first_name,
    m.last_name,
    m.email,
    m.membership_type,
    m.home_gym,
    p.amount_due,
    p.payment_date,
    p.payment_method,
    DATEADD(day, 3, p.payment_date) AS access_pause_date
FROM
    members m
INNER JOIN
    payments p
ON
    m.member_id = p.member_id
WHERE
    p.payment_status = 'Failed'
    AND m.membership_status = 'Active'
    AND m.email_opt_in = 1;