---
layout: guide-view
guide_name: Forms
title: "Creating Surveys"
permalink: /guides/forms/
categories: [topics, forms]
---


* ##### [Form Basics](#xlsform-authoring-intro)
  * [What is an XLSForm?](#what-is-xlsform)
  * [Why does Ona use XLSForms?](#why-ona-uses-xlsforms)
  * [How should I get started?](#get-started-xlsforms)
  * [XLSForm tips for beginners](#xls-for-beginners)
* ##### [Basic Form Tutorial](#basics)
* ##### [Advanced Form Authoring Techniques](#advanced-features)
  * [Adding photos,videos or audio](#adding-media-files)
  * [Where do I put media files that I want to add to a form?](#include-media-files-in-forms)
* ##### [Managing Forms in Ona](#managing-forms)
  * [Upload your form](#uploading-your-form)
  * [Replace forms](#replace-forms)
  * [Move forms](#move-forms)
  * [Make forms inactive](#inactive-forms)
      * [When uploading your XLSForm](#when-uploading-forms)
      * [From the form drop-down menu](#form-dropdown-menu)
      * [Show inactive forms](#show-inactive-forms)
  * [Delete forms](#delete-forms)  


<h1>Forms</h1>

This guide will show you how to create and manage forms using the [XLSForm syntax](http://xlsform.org/).

### <a name="xlsform-authoring-intro"></a>Form Basics

##### <a name="what-is-xlsform"></a>What is an XLSForm?
 XLSForm is a syntax used to author forms using a spreadsheet program such as Excel or Google Sheets. It is a practical standard for sharing and collaborating when creating forms. The XLSForm syntax is human readable, so it is easy to learn and use. As the name implies, XLSForm files are saved as **.xls** or **.xlsx** files for import into Ona.

##### <a name="why-ona-uses-xlsforms"></a>Why does Ona use XLSForms?
Ona uses XLSForm because it makes it easy to create, collaborate and edit forms of any length or complexity. It's also easy to work from previously-made forms, saving time and letting you share your form easily.

##### <a name="get-started-xlsforms"></a><a name="sample-xlsforms"></a>How should I get started?
We recommend that you start with the [basic form tutorial](#basics). You can also watch the [XLSForm Authoring video](https://www.youtube.com/watch?v=-0JCAnUQr9E). Next, if you already have a form you want to create, you can start authoring using [XLSForm.org](http://xlsform.org/) for reference and asking questions you might have on the [Ona Community Support Forum](https://groups.google.com/forum/#!forum/ona-community). 

<a name="easy-ways-to-create-xlsforms"></a><a name="download-existing-form"></a>We've also provided several [starter XLSForms](https://help.ona.io/faq/starter-forms) to give you a sense of the possibilities and give you a place to start if you are authoring a similar form. Another option for starting from an existing form is using a form that you have access to on Ona. You can download an existing form by going to the form's **Settings** page, clicking on the **Form Info** tab, then selecting **Download XLSForm** from the **Source** dropdown menu.

![](/content/screenshots/forms-management/download-xlsform.png)

##### <a name="xls-for-beginners"></a>XLSForm tips for beginners

These are three useful tips that the designers should be aware of:

1. **Test your form often!**  Don’t wait until your form is completely finished before trying to upload it to your Ona account.  It is much easier to identify and correct errors on a form that has 20 fields versus a form that has hundreds of fields.  You might notice a mistake in your syntax early on that will save you loads of time by catching it early and not repeating it throughout the rest of your form.
1. **XLSForm syntax is unforgiving**.  If you are one letter or one number off, or if there’s an extra space or an extra comma somewhere in your expression, you will most likely get an error when trying to upload your form.  In this case, practice makes almost perfect.  We say ‘almost’ perfect, because even seasoned XLSForm authors will make simple syntax errors every once in a while.  In general, though, the more you practice authoring forms in Excel, the more familiar you get with the syntax, and the easier it is to spot errors.  If you are simply really stuck on a line of syntax that keeps throwing errors, and you start to swear on your life that what you typed is absolutely correct, take a break!  Come back to your form later on, and you’d be surprised what your refreshed eyes will spot. Below are important guidelines to remember:
 * Your file should be saved in the **.xls** or **.xlsx** format and should contain no spaces or special characters (‘-’ and ‘_’ are allowed).
 * Sheet names should be appropriately named (i.e. “survey” not Sheet 1, “Survey” or “surveys”).
 * Column headers should be in lowercase (i.e. “label” or “name”, not “Label” or “Name”).
 * Field names should be unique and should not contain spaces or special characters (‘-’ and ‘_’ are allowed).
1. [XLSForm.org](http://xlsform.org/) **is your form authoring friend**.  This website is actively maintained and updated often as new features are introduced to the XLSForm standard.  It contains important reference documentation for all the basic and advanced features of XLSForm authoring.  Links are provided to sample surveys that demonstrate the use of each feature.   

### <a name="basics"></a>Basic Form Tutorial
For this tutorial we will be using the following survey:

1. What's your name?
2. How old are you?
3. Gender
4. Take a picture 
5. Date
6. Where are you?
7. Do you like pizza?

To write a simple form, each Excel workbook usually has two main worksheets: **survey** and **choices**. The **survey worksheet** gives your form its overall structure and contains most of the content of the form. The **choices worksheet** is used specify the answer choices for multiple choice questions. Each row in this worksheet represents an answer choice.

1. To author an XLSForm, create a new Excel workbook with a single sheet named survey; 
1. Add three columns **type**, **name**, and **label**:
 * **type** describes the question type;
 * **name** is the variable name as it will be stored in the database;
 * **label** is the question text;
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
1. Name your Excel file and save as **.xls** or **.xlsx** format. You can now upload your .xls file into your [Project](https://help.ona.io/guides/projects/) on Ona.


### <a name="advanced-features"></a>Advanced Form Authoring Techniques

##### <a name="adding-media-files"></a>Adding media files to forms

Adding media files, such as image, audio, or video to your XLSForm can add context to your questions and provide visual and audio support to surveyors or surveyees. <a name="media-files-type-supported"></a>You can add the following media files to your form:


|               |      Supported files |
| ------------- | ------------- |
|  Image files  | jpeg, jpg, png, zip|
|  Audio files  | mp3, wav         | 
|  Video files  | 3gp, mp4      | 
|  File attachments | csv |

An example of a form with media files is the [Bird Watching survey](https://docs.google.com/a/ona.io/spreadsheets/d/1FPe7sRfmfz75eds0aJ3XiviaA6BJRTchHa27rtby7VM/edit?usp=sharing). Respondents are asked to select which bird they sighted from a list.  A picture of each bird species is included next to the bird name to help the respondent verify their selection as shown in the screen shot below.

![](/content/screenshots/forms-management/form_documentation_1.png)

The survey worksheet from this XLSForm is shown in the screen shot below:

![](/content/screenshots/forms-management/form_documentation_2.png)

The **choices** worksheet can be seen in the screen shot below:

![](/content/screenshots/forms-management/form_documentation_3.png)

> 
**Note**:<br/> The **media::image** column in the **choices** worksheet of your survey. Next to each answer choice of a bird, the corresponding image file name is written in the **media::image** column, including the image file extension (_.png_ or _.jpg_). 

If you wanted to include audio or video in your form, then you would simply add separate **media::audio** and **media::video** columns to your form and add the corresponding audio and video file names in those columns.  Media files can be added to questions in the **survey** tab of your XLSForm in addition to answer **choices** in the choices tab.
  
![](/content/screenshots/forms-management/form_documentation_4.png)

In addition, if your survey has multiple languages, you will need to have separate media columns for each language by appending **::language** to the media columns. For example, to add image media files to a survey with both English and Swahili languages, you would add the following two columns to your XLSForm:

**media::image::English and media::image::Swahili** 

If using the same image for both languages, you simply write the same **image file name** in both columns.

For audio and video files, you would simply replace **image** with **audio** and **video**, respectively:

**media::audio::English and media::audio::Swahili** 

**media::video::English and media::video::Swahili** 

##### <a name="include-media-files-in-forms"></a>Where do I put media files that I want to add to a form?

In order for media files to be displayed in the form, the media files need to be uploaded to the form on your Ona account.  

1. On the form’s **Settings** page in your Ona account, select **Forms media files**;
<br><br>
![](/content/screenshots/forms-management/form_documentation_5.png)
1. Then click on **Select file to upload** button to upload your media file;
<br><br>
![](/content/screenshots/forms-management/form_documentation_5_1.png)

> 
**Note**:<br/> The media file names that you upload to the form on Ona must match <u>exactly</u> the media file name specified in the media column in your XLSForm.  Spelling and punctuation are important!  For example, if your media file is named as *blackbird.png*, then you cannot reference it as *Blackbird.png* or *blackbirdpng* in your XLSForm.

Once your media files are uploaded to the form, they are automatically displayed when viewing your Enketo webform.  If using ODK Collect, the media files will automatically download with the form to your phone or tablet and be stored in the form’s media folder on your device.  If downloading media files to your phone presents a challenge, see the next section for instructions on how to manually add media files to your phone instead.  


### <a name="managing-forms"></a>Managing Forms

##### <a name="uploading-your-form"></a>Upload your form

Once you have successfully authored your XLSForm, you can upload it to your desired project in Ona. After uploading, you can preview the webform. 
Read more on the various ways of uploading XLSForms [here](/faq/uploading-xlsform).

##### <a name="replace-forms"></a>Replace forms

Forms uploaded to your Ona account can be replaced using the **Replace Form** option in the form’s dropdown menu. You can to replace a form that has no submissions as explained in [this guide](/faq/replacing-forms-without-submissions). Ona also supports [replacing a form that has submissions](/faq/replacing-forms-that-have-submissions/).

> 
**Note**:<br/>In order to replace an existing form on Ona, the **form id’s** must be the same.  If you must change the form id on the updated version, then you will need to upload it as a new form.

##### <a name="inactive-forms"></a>Make forms inactive
An inactive form cannot receive any submissions, and inactive forms do not show up in the list of forms available to download when using ODK Collect.  Essentially, making a form inactive archives the form and helps prevent any changes from being made to the form or its data.

Making a form inactive is a good option when data collection has finished, as it prevents users from making changes, and the inactive form and its data will be stored on Ona indefinitely.  It is also a good alternative to deleting a form from your account.  Data contained in an inactive form  will still be available in your account and can be accessed by making the form active once again.

You can make a form inactive one of two ways; i.e. [when uploading your XLSForm](#when-uploading-forms) and [from the form’s drop-down menu](#form-dropdown-menu).

##### <a name="when-uploading-forms"></a>When uploading your XLSForm

When uploading your XLSForm, you can choose **Inactive** from the form upload verification window.

![](/content/screenshots/forms-management/form_documentation_13.png)

##### <a name="form-dropdown-menu"></a>From the form drop-down menu

Forms already uploaded to your Ona account can be made inactive using the **Make inactive** option in the form’s dropdown menu as highlighted in the screeen shot below;
<br><br>
![](/content/screenshots/forms-management/form_documentation_14.png)

##### <a name="show-inactive-forms"></a>Show inactive forms

When you first access the project view page, by default all inactive forms and the number of inactive forms are shown in paranthesis. The **Show inactive** checkbox is automatically selected, next the number of inactive forms is also revealed:

![](/content/screenshots/forms-management/reveal-inactive-forms-1.png)

If you not all the forms including the inactive forms you can turn off, click on the **Show inactive** checkbox, inactive forms will no longer be revealed:

![](/content/screenshots/forms-management/reveal-inactive-forms-2.png)

To make inactive forms active again, ensure the **Show inactive** checkbox is selected then from the inactive form's dropdown menu, select **Make active** option as shown in the screen shot below;

![](/content/screenshots/forms-management/reveal-inactive-forms-3.png)

##### <a name="move-forms"></a>Move forms

Forms uploaded to a project can be moved to a selected project as long as you have add form permissions in that project. 

To move a form to different project:

1. From the form's dropdown menu, select the **Move to** option;
<br><br>
![](/content/screenshots/forms-management/form_documentation_16.png)
1. Click on the name of the project you'd like to move the form to from the list of projects you have Admin access to;
<br><br>
![](/content/screenshots/forms-management/form_documentation_15.png)

##### <a name="delete-forms"></a>Delete forms

Forms uploaded to your Ona account can be deleted using the **Delete Form** option in the form’s dropdown menu.  Below are the steps to follow to delete a form in your Ona account.

To **Delete** a form:

1. Locate the form you would like to delete on your project page, from the form's dropdown menu select **Delete form**;
<br><br>
![](/content/screenshots/forms-management/form_documentation_11.png)
1. Read the warning message and then click on the **Confirm** button when you are ready to delete the form: 

![](/content/screenshots/forms-management/form_documentation_12.png)

> 
**Note**:<br/>Deleting a form cannot be undone.  Once a form is deleted, the form and any data already submitted or uploaded to the form will be gone and cannot be recovered.
