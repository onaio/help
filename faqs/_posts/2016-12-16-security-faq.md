---
layout: post
title: "What security features are incorporated into the design of Ona to protect my data?"
permalink: /faq/security-faq
category: faq
---

Our clients use Ona to collect, analyze, and disseminate mission critical data. We have worked on both the data collection side as well as the platform side and understand the importance of knowing your data is stored safely and securely. Here we'll talk about the specific technologies we use to secure our users' data.

### Security

Whenever data is transmitted from one of our servers to a web browser, phone, or accessed via our application programming interface (API), we send it via HTTPS.

Specifically relating to data security, the highlights of the standards we incorporate are:

* Encrypted server-client connections using TLS/HTTPS

* A+ certified server-client TLS configuration, [https://www.ssllabs.com/ssltest/analyze.html?d=ona.io](https://www.ssllabs.com/ssltest/analyze.html?d=ona.io)

* Encrypted at-rest database and encrypted database backups using AES-256

* [ISO 27001 security management certification](http://aws.amazon.com/compliance/iso-27001-faqs/) via AWS data centers

### Backups

To make sure that your data stays secure during events that we cannot anticipate, such as a hardware failure with our hosting provider, we create nightly replicas of our entire database. This way, should the worst happen, we will be able to recover quickly and get back up and running with minimal data loss.

### Privacy

The privacy protections afforded your data are described in our [privacy policy](https://ona.io/privacy.html).  One of the most important parts:

> We take the privacy, confidentiality, and security of any data you submit or upload to Ona very seriously, because it is your data. You retain ownership of the data. We will never share or access your data, unless granted permission by you, in order to provide you with technical assistance.
 
Please read the full [policy](https://ona.io/privacy.html) along with our [terms of service](https://ona.io/tos.html) for more details.

### Steps you can take

1. Security is only effective when the user follow best practices. E.g. do not share passwords, do not write down passwords, and do not use public computers, but if unavoidable always log out of the site when finished using the site on public computers.

2. Ona also allows you to [encrypt your forms](https://help.ona.io/faq/encrypted-forms) with decryption only possible using ODK Briefcase and keys.

