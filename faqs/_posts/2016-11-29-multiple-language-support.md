---
layout: post
title: "How do I add multiple Languages to a form?"
permalink: /faq/adding-multiple-languages
category: faq
---

### How do I add multiple languages to a form?

When collecting data, it’s often necessary to translate survey instruments into multiple languages. With XLSForms, users can write a single form in multiple languages. When collecting data or viewing data in Ona with a form that has different languages, you can toggle between them from a language dropdown.

### Adding multiple languages to a form

1. On the **survey** worksheet, add label columns for each language you’d like to author your survey in. In the example below, we have **label::English**,**label::French** and **label::Swahili** columns.

   Under each language column, add the corresponding label translation in each row. Do not leave label cells blank because the question will appear blank in the survey.

   ![](/content/screenshots/faq/faq-multiple-langauge-support-1.png)

2. In the **choices** worksheet, the label columns should have the same languages used in the survey worksheet. Repeat the first step for all the choices, adding columns and translations for each language.

   ![](/content/screenshots/faq/faq-multiple-langauge-support-2.png)

   >**Note:**<br/>
   >
   Adding a hint or constraint message in a different language or adding unique media files for each language is also possible by appending *::language name* to the column, for example, **hint::Swahili, constraint_message::Swahili**, and **media::audio::Swahili**. Repeat this for each language.

3. Set the default language in the **settings** worksheet under the **default_language** column as shown below:

   ![](/content/screenshots/faq/faq-multiple-langauge-support-3.png)

### Collecting data

You can switch to the preferred language when conducting a survey on both [Enketo webforms and ODK Collect.](https://help.ona.io/guides/data-collection/)

To change the survey language:

1. **On a webform**

    [Open the webform](https://help.ona.io/guides/data-collection/#opening-webform) to view your survey. The survey will be displayed in the default language as specified in the settings worksheet of your XLSForm. You can switch to a different language by clicking on the language button on the top right of the first page of your survey. 

    ![](/content/screenshots/faq/faq-multiple-langauge-support-4.png)

2. **On ODK Collect**

    When using ODK Collect, the form will also be displayed in the default language. To switch to a different language, tap on the **Settings** button on the first page of your survey, then select **Change Language settings**. 

    ![](/content/screenshots/faq/faq-multiple-langauge-support-5.png)

### Viewing data

You can view your data on the **Table** view in any of the languages defined in the XLSForm by clicking on the language button, then selecting a language. The labels will be displayed in the language selected as shown below.

![](/content/screenshots/faq/faq-multiple-langauge-support-6.png)

[Summary charts](https://help.ona.io/guides/getting-started/#summary-charts) the label in the charts will be viewed in the languauge selected.

![](/content/screenshots/faq/faq-multiple-langauge-support-7.png)

When viewing the data on **Map** view, the labels will be displayed in the language selected as shown below;

![](/content/screenshots/faq/faq-multiple-langauge-support-8.png)

