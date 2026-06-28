# AMPscript Personalisation

This file shows how the Forge Fitness CRM email templates can be personalised using AMPscript.

AMPscript is used in Salesforce Marketing Cloud to display customer data, handle missing values, and create dynamic email content.

## First Name Fallback

```ampscript
%%[
SET @firstName = AttributeValue("first_name")

IF EMPTY(@firstName) THEN
  SET @firstName = "there"
ENDIF
]%%

Hi %%=v(@firstName)=%%,
```

## Welcome Email

```ampscript
%%[
SET @firstName = AttributeValue("first_name")
SET @membershipType = AttributeValue("membership_type")
SET @homeGym = AttributeValue("home_gym")

IF EMPTY(@firstName) THEN
  SET @firstName = "there"
ENDIF

IF EMPTY(@membershipType) THEN
  SET @membershipType = "gym"
ENDIF

IF EMPTY(@homeGym) THEN
  SET @homeGym = "your home gym"
ENDIF
]%%

Welcome to Forge Fitness, %%=v(@firstName)=%%.

Your %%=v(@membershipType)=%% membership at %%=v(@homeGym)=%% is now active.
```

## Membership Details

```ampscript
%%[
SET @membershipType = AttributeValue("membership_type")
SET @homeGym = AttributeValue("home_gym")
SET @startDate = AttributeValue("start_date")

IF EMPTY(@membershipType) THEN
  SET @membershipType = "Standard"
ENDIF

IF EMPTY(@homeGym) THEN
  SET @homeGym = "Forge Fitness London"
ENDIF
]%%

Membership: %%=v(@membershipType)=%%
Home Gym: %%=v(@homeGym)=%%
Start Date: %%=v(@startDate)=%%
```

## Class Booking Confirmation

```ampscript
%%[
SET @firstName = AttributeValue("first_name")
SET @className = AttributeValue("class_name")
SET @classDate = AttributeValue("class_date")
SET @classTime = AttributeValue("class_time")
SET @homeGym = AttributeValue("home_gym")
SET @instructorName = AttributeValue("instructor_name")

IF EMPTY(@firstName) THEN
  SET @firstName = "there"
ENDIF

IF EMPTY(@className) THEN
  SET @className = "your class"
ENDIF

IF EMPTY(@homeGym) THEN
  SET @homeGym = "Forge Fitness London"
ENDIF

IF EMPTY(@instructorName) THEN
  SET @instructorName = "your instructor"
ENDIF
]%%

Hi %%=v(@firstName)=%%,

Your %%=v(@className)=%% class is booked for %%=v(@classDate)=%% at %%=v(@classTime)=%%.

Location: %%=v(@homeGym)=%%
Instructor: %%=v(@instructorName)=%%
```

## Renewal Reminder

```ampscript
%%[
SET @firstName = AttributeValue("first_name")
SET @membershipType = AttributeValue("membership_type")
SET @renewalDate = AttributeValue("renewal_date")
SET @renewalAmount = AttributeValue("renewal_amount")
SET @paymentMethod = AttributeValue("payment_method")

IF EMPTY(@firstName) THEN
  SET @firstName = "there"
ENDIF

IF EMPTY(@membershipType) THEN
  SET @membershipType = "membership"
ENDIF

IF EMPTY(@paymentMethod) THEN
  SET @paymentMethod = "your saved payment method"
ENDIF
]%%

Hi %%=v(@firstName)=%%,

Your %%=v(@membershipType)=%% renews on %%=v(@renewalDate)=%%.

Renewal Amount: £%%=v(@renewalAmount)=%%
Payment Method: %%=v(@paymentMethod)=%%
```

## Failed Payment Recovery

```ampscript
%%[
SET @firstName = AttributeValue("first_name")
SET @amountDue = AttributeValue("amount_due")
SET @paymentMethod = AttributeValue("payment_method")
SET @accessPauseDate = AttributeValue("access_pause_date")

IF EMPTY(@firstName) THEN
  SET @firstName = "there"
ENDIF

IF EMPTY(@amountDue) THEN
  SET @amountDue = "0.00"
ENDIF

IF EMPTY(@paymentMethod) THEN
  SET @paymentMethod = "your saved payment method"
ENDIF
]%%

Hi %%=v(@firstName)=%%,

We could not process your payment of £%%=v(@amountDue)=%% using %%=v(@paymentMethod)=%%.

Please update your payment details before %%=v(@accessPauseDate)=%% to avoid interruption to your gym access.
```

## Win-Back Campaign

```ampscript
%%[
SET @firstName = AttributeValue("first_name")
SET @lastVisitDate = AttributeValue("last_visit_date")
SET @homeGym = AttributeValue("home_gym")
SET @recommendedClass = AttributeValue("recommended_class")

IF EMPTY(@firstName) THEN
  SET @firstName = "there"
ENDIF

IF EMPTY(@homeGym) THEN
  SET @homeGym = "your home gym"
ENDIF

IF EMPTY(@recommendedClass) THEN
  SET @recommendedClass = "a reset session"
ENDIF
]%%

Hi %%=v(@firstName)=%%,

It has been a while since your last visit on %%=v(@lastVisitDate)=%%.

We recommend starting again with %%=v(@recommendedClass)=%% at %%=v(@homeGym)=%%.
```

## Referral Campaign

```ampscript
%%[
SET @firstName = AttributeValue("first_name")
SET @referralCode = AttributeValue("referral_code")
SET @rewardAmount = AttributeValue("reward_amount")
SET @friendReward = AttributeValue("friend_reward")
SET @offerExpiry = AttributeValue("offer_expiry")

IF EMPTY(@firstName) THEN
  SET @firstName = "there"
ENDIF

IF EMPTY(@referralCode) THEN
  SET @referralCode = "FORGEFRIEND"
ENDIF

IF EMPTY(@rewardAmount) THEN
  SET @rewardAmount = "10"
ENDIF

IF EMPTY(@friendReward) THEN
  SET @friendReward = "10"
ENDIF
]%%

Hi %%=v(@firstName)=%%,

Your referral code is %%=v(@referralCode)=%%.

Invite a friend and you get £%%=v(@rewardAmount)=%%. They get £%%=v(@friendReward)=%%.

Offer ends: %%=v(@offerExpiry)=%%
```

## Personal Training Promotion

```ampscript
%%[
SET @firstName = AttributeValue("first_name")
SET @homeGym = AttributeValue("home_gym")
SET @trainingFocus = AttributeValue("training_focus")
SET @suggestedSession = AttributeValue("suggested_session")
SET @offerName = AttributeValue("offer_name")
SET @offerExpiry = AttributeValue("offer_expiry")

IF EMPTY(@firstName) THEN
  SET @firstName = "there"
ENDIF

IF EMPTY(@homeGym) THEN
  SET @homeGym = "your home gym"
ENDIF

IF EMPTY(@trainingFocus) THEN
  SET @trainingFocus = "strength and technique"
ENDIF

IF EMPTY(@suggestedSession) THEN
  SET @suggestedSession = "a personal training consultation"
ENDIF

IF EMPTY(@offerName) THEN
  SET @offerName = "member intro offer"
ENDIF
]%%

Hi %%=v(@firstName)=%%,

Based on your activity at %%=v(@homeGym)=%%, we recommend %%=v(@suggestedSession)=%%.

Training Focus: %%=v(@trainingFocus)=%%
Offer: %%=v(@offerName)=%%
Available until: %%=v(@offerExpiry)=%%
```

## Home Gym Conditional Content

```ampscript
%%[
SET @homeGym = AttributeValue("home_gym")

IF @homeGym == "Forge Fitness Shoreditch" THEN
  SET @gymMessage = "Your Shoreditch team is ready to welcome you back."
ELSEIF @homeGym == "Forge Fitness Camden" THEN
  SET @gymMessage = "Your Camden team is ready to welcome you back."
ELSEIF @homeGym == "Forge Fitness Soho" THEN
  SET @gymMessage = "Your Soho team is ready to welcome you back."
ELSE
  SET @gymMessage = "Your Forge Fitness team is ready to welcome you back."
ENDIF
]%%

%%=v(@gymMessage)=%%
```

## Member Activity Conditional Content

```ampscript
%%[
SET @visitCount = AttributeValue("visit_count_last_30_days")

IF EMPTY(@visitCount) THEN
  SET @visitCount = 0
ENDIF

IF @visitCount >= 8 THEN
  SET @activityMessage = "You have been consistent this month. Keep the momentum going."
ELSEIF @visitCount >= 3 THEN
  SET @activityMessage = "You are building a strong routine. Book your next session today."
ELSE
  SET @activityMessage = "Start simple this week with one focused session."
ENDIF
]%%

%%=v(@activityMessage)=%%
```

## Membership Type Conditional Content

```ampscript
%%[
SET @membershipType = AttributeValue("membership_type")

IF @membershipType == "Premium" THEN
  SET @membershipMessage = "Your Premium membership gives you access to the gym floor, studio classes, and member benefits."
ELSEIF @membershipType == "Student" THEN
  SET @membershipMessage = "Your Student membership gives you flexible access while you study and train."
ELSE
  SET @membershipMessage = "Your Forge Fitness membership gives you access to our training spaces and member support."
ENDIF
]%%

%%=v(@membershipMessage)=%%
```

## Payment Status Conditional Content

```ampscript
%%[
SET @paymentStatus = AttributeValue("payment_status")

IF @paymentStatus == "Failed" THEN
  SET @paymentMessage = "Please update your payment details to avoid interruption to your membership."
ELSEIF @paymentStatus == "Successful" THEN
  SET @paymentMessage = "Your payment has been confirmed and your membership remains active."
ELSE
  SET @paymentMessage = "You can review your billing details from your member area."
ENDIF
]%%

%%=v(@paymentMessage)=%%
```

## Offer Expiry

```ampscript
%%[
SET @offerCode = AttributeValue("offer_code")
SET @offerExpiry = AttributeValue("offer_expiry")

IF EMPTY(@offerCode) THEN
  SET @offerCode = "FORGE10"
ENDIF
]%%

Your offer code %%=v(@offerCode)=%% is available until %%=v(@offerExpiry)=%%.
```

## CRM Use Cases

AMPscript can be used in the Forge Fitness email system to personalise:

* Member greetings
* Membership details
* Home gym information
* Class booking details
* Renewal reminders
* Failed payment messages
* Win-back campaigns
* Referral codes
* Personal training offers
* Conditional content based on activity, payment status, or membership type
