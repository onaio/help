---
layout: post
title: "How to configure webhooks"
permalink: /faq/services-and-webhooks
category: faq
---

### Services and Webhooks

A webhook is a way for Ona to provide other **URLs (Services)** with real-time information on every form submitted. The webhook delivers data to the URL as soon as it happens, meaning you get the data immediately. 

When a form is submitted, Ona creates a **JSON object**. This object contains all the submitted form’s details, including question field name, their respective submitted answers, and metadata, which is sent in real-time to all the URLs in your form’s webhooks settings via a HTTP request and posts them in JSON format.

### Using Webhooks

How you use it is up to you and whatever you want to accomplish. Among other things, you can create notifications, put the data in another app or process the data sent and repost it.

### How to configure Webhooks

To add your URL on Ona, navigate to the form’s **Settings page** and select **Webhooks.**

![](/content/screenshots/faq/services-webhooks1.png)

Insert your **URL** and select **Add Service**

![](/content/screenshots/faq/services-webhooks2.png)

The added URLs will be listed.

![](/content/screenshots/faq/services-webhooks3.png)

Once you register a webhook's URL, Ona will issue a HTTP POST request containing the JSON object to the URL specified every time a form is submitted. 

**Example of JSON Object sent via Webhook**

![](/content/screenshots/faq/services-webhooks4.png)

### Deleting Webhooks

Select the **Settings page** from your form’s page and navigate to **Webhooks**. All added webhooks will be displayed. Click the **remove icon** next to the added webhook to delete it.

![](/content/screenshots/faq/services-webhooks5.png)

