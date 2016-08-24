---
layout: post
title: "What are the effects of changing a question type on a form?"
permalink: /faq/changing-xlsform-question-type
category: faq
---

### What are the effects of changing a question type on a form which has existing data?

Once an XLSForm is authored according to the xlsform standards, it's possible the project will need to change necessitating a change in the field types. For example, the project might have been collecting the actual ages of their clients, but they decide to have age categories instead within the project data collection period.

#### Integer to Select_One Question Type
##### How changing a question type on an XLSForm will affect existing data?

In such a scenario, an XLSForm with an integer question type can be uploaded to your Ona account and submissions made to it:

![](/content/screenshots/faq/changing-xlsform-question-type-1.png)

Once data is collected using this form, the form submissions will appear in the data-view page as seen below:
 
 ![](/content/screenshots/faq/changing-xlsform-question-type-2.png)

At this point, assume you change the age question type on your XLSForm from integer to select_one (in this case an age-bracket) and use the changed XLSForm to replace the original XLSForm.

![](/content/screenshots/faq/changing-xlsform-question-type-3.png)
 
Once the form is replaced and more data are entered through the new forms, the submissions will appear on the replaced form as seen below:
   
![](/content/screenshots/faq/changing-xlsform-question-type-4.png)
 
Ona will retain your previously entered data and also accept the new data which capture the age categories.

##### What happens when you try to edit an earlier submission?

If at some point in the data entry process you want to edit a submission (e.g. in the submission #1, you want to change Mike’s age), your web form will appear as below.

![](/content/screenshots/faq/changing-xlsform-question-type-5.png)

You will notice that when you go to edit this form, Mike’s age is not filled. This is because we changed the question type from integer to select_one, but the data saved in the form previously was an integer. To update this field with an age bracket, you will have to go into this submission’s webform and choose the option 30-35, the data will be updated and displayed as below:

![](/content/screenshots/faq/changing-xlsform-question-type-6.png)

#### Text to Select_One Type
##### How changing a question type on an XLSForm will affect existing data?

Assume in your second scenario, you have an XLSForm with a text question type uploaded to your Ona account and submissions made to it:

![](/content/screenshots/faq/changing-xlsform-question-type-7.png)

Once the XLSForm has been used for data collection and submissions made to your Ona account; below is how the submissions will appear in the data-view page:

![](/content/screenshots/faq/changing-xlsform-question-type-8.png)

Assume due to changing project demands, you decide to change the county question type on your XLSForm from text to select_one and use the changed XLSForm to replace the original XLSForm.

![](/content/screenshots/faq/changing-xlsform-question-type-9.png)

Once the form is replaced and more data entered through the new forms, below is how the submissions will appear on the replaced form.

![](/content/screenshots/faq/changing-xlsform-question-type-10.png)

Ona will retain your previously entered data and also accept the new 5 submissions made using the new form.

##### What happens when you try to edit an earlier submission?

If at some point in the data entry process you want to edit a submission (e.g. in the submission #2, you want to change Mark’s home county (Kakamega)), below is how your web form will appear.

![](/content/screenshots/faq/changing-xlsform-question-type-11.png)

You notice this time round, where Mark comes from, is not checked. This is because we changed the question type from text to select_one. If you choose the option Nairobi, the data view page will be displayed as below:

![](/content/screenshots/faq/changing-xlsform-question-type-12.png)