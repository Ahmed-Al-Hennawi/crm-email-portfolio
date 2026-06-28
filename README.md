# Forge Fitness CRM Email Portfolio

A professional CRM and HTML email development portfolio project for a fictional commercial gym brand called **Forge Fitness**.

This project simulates a real customer lifecycle email system used by a modern fitness business. It includes responsive MJML/HTML email templates, CRM journey planning, SQL segmentation examples, and personalisation logic using Liquid and AMPscript.

The goal of this project is to demonstrate practical skills for roles such as:

* HTML Email Developer
* CRM Email Developer
* Junior CRM Developer
* Marketing Automation Developer
* Salesforce Marketing Cloud Developer
* Email Marketing Developer

---

## Project Overview

Forge Fitness is a fictional premium gym brand based in London.

The brand offers:

* Monthly gym memberships
* Personal training sessions
* Studio classes
* Member referrals
* Renewal reminders
* Failed payment recovery
* Inactive member reactivation campaigns

This portfolio shows how a CRM/email developer could support the business by building automated email communications across the customer lifecycle.

---

## What This Project Demonstrates

This project demonstrates skills in:

* Responsive HTML email development
* MJML email development
* CRM lifecycle campaign planning
* Transactional email design
* Retention email strategy
* Revenue recovery communication
* SQL audience segmentation
* Liquid personalisation
* AMPscript personalisation
* Email accessibility and structure
* Git and GitHub project organisation

---

## Email Templates

The project includes 8 professional email templates.

| Email                       | Type                   | Purpose                                           |
| --------------------------- | ---------------------- | ------------------------------------------------- |
| Welcome Email               | Lifecycle / Onboarding | Welcomes new members and encourages first action  |
| Membership Confirmation     | Transactional CRM      | Confirms membership activation and access details |
| Class Booking Confirmation  | Transactional CRM      | Confirms booked classes and session details       |
| Membership Renewal Reminder | Retention CRM          | Reminds members about upcoming renewal            |
| Failed Payment Recovery     | Revenue Recovery       | Helps recover failed membership payments          |
| Win-Back Campaign           | Retention Marketing    | Reactivates inactive members                      |
| Referral Campaign           | Growth CRM             | Encourages members to refer friends               |
| Personal Training Promotion | Upsell CRM             | Promotes personal training consultations          |

---

## CRM Journeys

The project includes journey maps for key customer lifecycle flows.

| Journey                      | Purpose                                                      |
| ---------------------------- | ------------------------------------------------------------ |
| New Member Onboarding        | Move new members from signup to first visit or class booking |
| Renewal and Payment Recovery | Reduce failed payments and protect recurring revenue         |
| Inactive Member Win-Back     | Reactivate members who have not visited recently             |
| Referral Growth Campaign     | Encourage active members to invite friends                   |
| Personal Training Upsell     | Promote personal training to eligible members                |

Journey files are stored in:

```text
journeys/
```

---

## SQL Segmentation

The project includes CRM-style SQL examples that show how customer audiences could be selected for different campaigns.

Segments include:

* New members from the last 7 days
* Members due to renew in the next 7 days
* Members with failed payments
* Members inactive for 30 days
* Referral-eligible members
* Personal training eligible members

SQL files are stored in:

```text
sql/
```

These examples are written in a CRM-friendly SQL style similar to what could be used in platforms such as Salesforce Marketing Cloud Query Activities.

---

## Personalisation

The project includes examples of how the emails could be adapted for real CRM platforms using:

* Liquid
* AMPscript

Personalisation examples include:

* First name fallback logic
* Membership details
* Renewal details
* Failed payment data
* Home gym conditional messaging
* Activity-based content
* Referral codes
* Personal training recommendations

Files are stored in:

```text
personalisation/
```

---

## Brand Assets

The project uses a fictional premium gym identity called **Forge Fitness**.

Brand assets include:

* Logo
* Main gym area image
* Free weights area image
* Reception area image
* Studio area image

Assets are stored in:

```text
assets/images/forge-fitness/
```

---

## Project Structure

```text
crm-email-portfolio/
├── assets/
│   └── images/
│       └── forge-fitness/
│           ├── logo.png
│           ├── main-area.png
│           ├── free-weight-area.png
│           ├── reception-area.png
│           └── studio-area.png
├── emails/
│   ├── welcome-email/
│   │   ├── README.md
│   │   ├── welcome.mjml
│   │   └── welcome.html
│   ├── membership-confirmation/
│   ├── class-booking-confirmation/
│   ├── renewal-reminder/
│   ├── failed-payment/
│   ├── win-back/
│   ├── referral/
│   └── personal-training-promotion/
├── journeys/
├── sql/
├── personalisation/
├── screenshots/
├── qa/
├── package.json
└── README.md
```

---

## Technologies Used

* HTML
* CSS
* MJML
* SQL
* Liquid
* AMPscript
* Git
* GitHub

---

## How to Run the Project

Install dependencies:

```bash
npm install
```

Build all email templates:

```bash
npm run build
```

Generated HTML files are created inside each email folder.

Example:

```text
emails/welcome-email/welcome.html
```

---

## Portfolio Context

This is a portfolio project, not a real commercial project for an existing gym.

The purpose is to demonstrate how I would structure, design, and document a professional CRM email system for a subscription-based fitness company.

The project combines visual email design with CRM strategy, segmentation logic, and personalisation examples to reflect the type of work used in real marketing automation and customer lifecycle teams.

---

## Author

**Ahmed Alhennawi**
MSc Computer Science
University of the Arts London
London, United Kingdom

Interested in roles related to HTML email development, CRM email development, and marketing automation.
