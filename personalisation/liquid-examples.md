# Liquid Personalisation

This file shows how the Forge Fitness CRM email templates can be personalised using Liquid-style syntax.

Liquid is commonly used in CRM and marketing automation platforms such as Braze, Shopify, Customer.io, and similar lifecycle messaging tools.

## First Name Fallback

```liquid
Hi {{ first_name | default: "there" }},
```

## Welcome Email

```liquid
Welcome to Forge Fitness, {{ first_name | default: "there" }}.

Your {{ membership_type | default: "gym" }} membership at {{ home_gym | default: "your home gym" }} is now active.
```

## Membership Details

```liquid
Membership: {{ membership_type | default: "Standard" }}
Home Gym: {{ home_gym | default: "Forge Fitness London" }}
Start Date: {{ start_date | default: "your start date" }}
```

## Class Booking Confirmation

```liquid
Hi {{ first_name | default: "there" }},

Your {{ class_name | default: "class" }} is booked for {{ class_date | default: "your selected date" }} at {{ class_time | default: "your selected time" }}.

Location: {{ home_gym | default: "Forge Fitness London" }}
Instructor: {{ instructor_name | default: "your instructor" }}
```

## Renewal Reminder

```liquid
Hi {{ first_name | default: "there" }},

Your {{ membership_type | default: "membership" }} renews on {{ renewal_date | default: "your next billing date" }}.

Renewal Amount: £{{ renewal_amount | default: "0.00" }}
Payment Method: {{ payment_method | default: "your saved payment method" }}
```

## Failed Payment Recovery

```liquid
Hi {{ first_name | default: "there" }},

We could not process your payment of £{{ amount_due | default: "0.00" }} using {{ payment_method | default: "your saved payment method" }}.

Please update your payment details before {{ access_pause_date | default: "your access pause date" }} to keep your membership active.
```

## Win-Back Campaign

```liquid
Hi {{ first_name | default: "there" }},

It has been a while since your last visit on {{ last_visit_date | default: "your last visit" }}.

We recommend starting again with {{ recommended_class | default: "a reset session" }} at {{ home_gym | default: "your home gym" }}.
```

## Referral Campaign

```liquid
Hi {{ first_name | default: "there" }},

Your referral code is {{ referral_code | default: "FORGEFRIEND" }}.

Invite a friend and you get £{{ reward_amount | default: "10" }}. They get £{{ friend_reward | default: "10" }}.

Offer ends: {{ offer_expiry | default: "soon" }}
```

## Personal Training Promotion

```liquid
Hi {{ first_name | default: "there" }},

Based on your activity at {{ home_gym | default: "your home gym" }}, we recommend {{ suggested_session | default: "a personal training consultation" }}.

Training Focus: {{ training_focus | default: "strength and technique" }}
Offer: {{ offer_name | default: "member intro offer" }}
Available until: {{ offer_expiry | default: "soon" }}
```

## Home Gym Conditional Content

```liquid
{% if home_gym == "Forge Fitness Shoreditch" %}
Your Shoreditch team is ready to welcome you back.
{% elsif home_gym == "Forge Fitness Camden" %}
Your Camden team is ready to welcome you back.
{% elsif home_gym == "Forge Fitness Soho" %}
Your Soho team is ready to welcome you back.
{% else %}
Your Forge Fitness team is ready to welcome you back.
{% endif %}
```

## Member Activity Conditional Content

```liquid
{% if visit_count_last_30_days >= 8 %}
You have been consistent this month. Keep the momentum going.
{% elsif visit_count_last_30_days >= 3 %}
You are building a strong routine. Book your next session today.
{% else %}
Start simple this week with one focused session.
{% endif %}
```

## Membership Type Conditional Content

```liquid
{% if membership_type == "Premium" %}
Your Premium membership gives you access to the gym floor, studio classes, and member benefits.
{% elsif membership_type == "Student" %}
Your Student membership gives you flexible access while you study and train.
{% else %}
Your Forge Fitness membership gives you access to our training spaces and member support.
{% endif %}
```

## Payment Status Conditional Content

```liquid
{% if payment_status == "Failed" %}
Please update your payment details to avoid interruption to your membership.
{% elsif payment_status == "Successful" %}
Your payment has been confirmed and your membership remains active.
{% else %}
You can review your billing details from your member area.
{% endif %}
```

## Offer Expiry

```liquid
Your offer code {{ offer_code | default: "FORGE10" }} is available until {{ offer_expiry | default: "the offer end date" }}.
```

## CRM Use Cases

Liquid can be used in the Forge Fitness email system to personalise:

* Member greetings
* Membership details
* Home gym information
* Class booking details
* Renewal reminders
* Failed payment messages
* Win-back campaigns
* Referral codes
* Personal training offers
* Conditional content based on activity or membership type
