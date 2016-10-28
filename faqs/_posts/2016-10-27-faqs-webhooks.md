---
layout: post
title: "How do I configure Webhooks?"
permalink: /faq/adding-a-webhook
category: faq
---

### How do Webhooks work?
Webhooks are a great way of being notified once an event occurs in your project. The webhook delivers data to your application as soon as it happens, meaning you get the data immediately.

When a form is submitted, Ona creates a JSON object. This object contains all the relevant information about the form’s submitted details, including  question field names, their respective answers, and metadata. Ona then sends the event object to all the URLs in your form’s webhooks settings via an HTTP POST in JSON format.
You can use webhooks to:
   * Create SMS or email notifications every time a form is submitted.
   * Send the data to another application with real-time data synchronization for further analysis.
 
### How do I configure Webhooks?

Webhooks are configured on a form-by-form basis under the form's Settings page. Select **Webhooks**, on the left side of the page, enabling you to add a new URL for receiving webhooks.

<kbd>![image](/content/screenshots/faq/faq-webhook-1.png)</kbd>

Insert your **URL** and select **Add Service**. 
You can enter any URL you would like submitted form information sent to, but this should be a dedicated page on your server.

<kbd>![image](/content/screenshots/faq/faq-webhook-2.png)</kbd>

Your linked URLs will be displayed on the page, as highlighted. You can create, configure, and manage more than one Webhook in Ona.

<kbd>![image](/content/screenshots/faq/faq-webhook-3.png)</kbd>

Once you add a webhook’s URL, Ona will issue a HTTP POST request containing the JSON object to the URL specified every time a form is submitted. 

### Example of JSON Object sent via Webhook 

<kbd>![image](/content/screenshots/faq/faq-webhooks-4.png)</kbd>

### Removing Webhooks
To remove a configured webhook, go to the form’s **Settings** page and navigate to **Webhooks**. Click the webhook you wish to remove, and click the remove option on the right.

<kbd>![image](/content/screenshots/faq/faq-webhooks-5.png)</kbd>



