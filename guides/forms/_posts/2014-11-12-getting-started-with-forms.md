---
layout: guide-view
guide_name: Forms
title: "Authoring your Own Surveys"
permalink: /guides/forms
categories: [topics, forms]
---

* ##### XLSForm authoring intro
* [What is an XLSForm?](#what-is-xlsform)
* [Why does Ona use XLSForms?](#why-ona-uses-xlsforms)
* [Basics](#basics)
* [XLS for newbies](#xls-for-newbies)
* ##### Easy ways to create an XLSForm
* [Copy or modify an existing form](#copy-modify-existing-form)
* [Sample XLSForms](#sample-xlsforms)
* ##### Uploading your form
* ##### Previewing and testing
* ##### XLSForm authoring tips
* [Tips](#tips)
* [Common verification errors](#common-errors)
* ##### Adding media to forms in Ona
* [Adding photos,videos or audio ](#adding-media-files)
 * [How do I include media files in my form?](#include-media-files-in-forms)
 * [What type of media files are supported in Ona?](#media-files-type-supported)
* [Adding csv file to be referenced in a form](#adding-csv-files)
* ##### Managing Forms
* [Replace](replace-forms)
* [Delete](#delete-forms)
* [Inactive](#inactive-forms)
* ##### Data entry with Enketo webforms
* [Using Enketo](using-enketo)
* [How do I fill out forms in Enketo?](#filling-forms-via-enketo)
* [Secure vs open](#secure-vs-open)
* [Sending URL to others](#sending-enketo-url-to-others)

### XLSForm authoring intro

##### <a name="what-is-xlsform"></a>What is an XLSForm?
 XLSForm is a syntax used to author forms using Excel saved as **.xls** or **.xlsx** files. Authoring is done in a human readable format using a familiar tool that almost everyone knows - Excel. XLSForms provide a practical standard for sharing and collaborating on authoring forms.

##### <a name="why-ona-uses-xlsforms"></a>Why does Ona use XLSForms?
Ona uses XLSForm because it makes it easy to create, collaborate and edit forms of any length or complexity.

##### <a name="basics"></a>Basics
For this tutorial we will be using the following survey:

1. What's your name?
2. How old are you?
3. Gender
4. Take a picture 
5. Date
6. Where are you?
7. Do you like pizza?

To write a simple form, each Excel workbook usually has two main worksheets: **survey** and **choices**. The **survey worksheet** gives your form its overall structure and contains most of the content of the form. The **choices worksheet** is used specify the answer choices for multiple choice questions. Each row in this worksheet represents an answer choice

1. To author an XLSForm, create a new Excel workbook with a single sheet named survey; 
1. Add three columns **type**, **name**, and **label**:
 * **type** describes the question type.
 * **name** is the variable name as it will be stored in the database.
 * **label** is the question text.
1. To start populating the XLSForm, add the questions above to the survey worksheet:
 * On your **type** column, specify the type of the information to be entered (integer, text, date, etc). You can have look at a complete list of question types. 
 * Under the **name** column, add a unique name on the field;
 * Then,  add the text for your question on the **label** column;
1. Add a second worksheet named **choices**;
1. Create three columns **list_name**, **name** and **label**:
 * **list_name** specifies the name of a multiple-choice question type;
 * **name** specifies the internal value stored for a given choice;
 * **label** specifies the label to use for a given choice, in the form's default language;
1. In the survey worksheet, for the **select_one** [option] questions, set to **select_one** followed by space and replace [options] by the list of choices/options, in our case, the **Gender** question will be **select_one gender**;	
 * In the **choices worksheet**, copy and paste the **option** (i.e gender) to the column **list_name**; then populate the **name** and **label** with all the options that are anticipated.
1. Name your Excel file and save as **.xls** or **.xlsx** format.  Read more on [useful guidelines for XLSForm designers here]()
You can now upload your .xls file into your [Project](insert Projects link here) on Ona. Now you are ready to author a form of your own! Learn  more on form authoring at [http://xlsform.org]( http://xlsform.org)


##### <a name="xls-for-newbies"></a>XLS for newbies
Not sure why we have this here. Carolyn and I need to discuss what should be here. I feel like this was covered in the Basics.

### Easy ways to create an XLSForm

##### <a name="copy-modify-existing-form"></a>Copy or modify an existing form
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus. 

##### <a name="sample-xlsforms"></a>Sample XLSForms
 There are various xlsforms that have been authored and can be downloaded. The forms can be found [](here)
 
### Uploading your form

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

### Previewing and testing

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

### XLSForm authoring tips

##### <a name="tips"></a>Tips
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus. 

##### <a name="common-errors"></a>Common verification errors
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus. 

### Adding media to forms in Ona

##### <a name="adding-media-files"></a>Adding photos,videos or audio
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus.

##### <a name="include-media-files-in-forms"></a>How do I include media files in my form?
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus.

##### <a name="media-files-type-supported"></a>What type of media files are supported in Ona?
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus.

##### <a name="adding-csv-files"></a>Adding csv file to be referenced in a form
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus.

### Managing Forms

##### <a name="replace-forms"></a>Replace
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus.

##### <a name="delete-forms"></a>Delete
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus.

##### <a name="inactive-forms"></a>Inactive
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus.

### Data entry with Enketo webforms

##### <a name="using-enketo"></a>Using Enketo
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus.

##### <a name="filling-forms-via-enketo"></a>How do I fill out forms in Enketo?
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus.

##### <a name="secure-vs-open"></a>Secure vs open
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus.

##### <a name="sending-enketo-url-to-others"></a>Sending URL to others
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu lacus quis cursus.

