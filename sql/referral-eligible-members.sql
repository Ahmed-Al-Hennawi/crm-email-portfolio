/*
Segment: Referral Eligible Members
Purpose: Select active and engaged members for the referral campaign.
CRM Use Case: Referral Campaign Email
*/

SELECT
    member_id,
    first_name,
    last_name,
    email,
    home_gym,
    referral_code,
    reward_amount,
    friend_reward,
    offer_expiry
FROM
    members
WHERE
    membership_status = 'Active'
    AND visit_count_last_30_days >= 4
    AND referral_eligible = 1
    AND email_opt_in = 1;