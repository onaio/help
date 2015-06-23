---
layout: post
title: "How do I manage my form?"
permalink: /faq/how-to-manage-forms
category: faq
---

####How do I add media files to an XLSForm


Adding media files, such as image, audio, or even video to your XLSForm is a great way to take your data collection project to the next level! Media files can enhace your surveys by adding context to questions or providing visual and audio support to the user where necessary. [The Bird XLSForm](https://docs.google.com/spreadsheets/d/1-6Zc-FSd9siJqwhxqp2zAYu_GVKndz8Wvr-9FrcefKk/edit#gid=1220865154)

In the Birds survey, respondents are asked to select which bird they sighted from a list.  A picture of each bird species is included next to the bird name to help the respondent verify their selection. 

![Alt text](images/form_documentation_1.png)




The **survey** and **choices** tabs from this XLSForm are shown below.  Note the **media::image** column in the **choices** tab of your survey.Next to each answer choice of a bird, the corresponding image file name is written in the **media::image** column, including the image file extension (.png .jpg etc).   


![Alt text](images/form_documentation_2.png)
<br/>
<br/>
<br/>

![Alt text](images/form_documentation_3.png)



If you wanted to include audio or video in your form, then you would simply add separate **media::audio** and **media::video** columns to your form and add the corresponding audio and video file names in those columns.  Media files can be added to questions in the **survey** tab of your XLSForm in addition to answer **choices** in the choices tab.
  
![Alt text](images/form_documentation_4.png)



In addition, if your survey has multiple languages, you will need to have separate media columns for each language by appending **::language** to the media columns.

For example, to add image media files to a survey with both English and Swahili languages, you would add the following two columns to your XLSForm:

**media::image::English and media::image::Swahili** 

If using the same image for both languages, you simply write the same **image file name** in both columns.

For audio and video files, you would simply replace **image** with **audio** and **video**, respectively:

**media::audio::English and media::audio::Swahili** 

**media::video::English and media::video::Swahili** 


####How do I upload media files to my Ona account?


In order for media files to be displayed in the form, the media files need to be uploaded to the form on your Ona account.  

On the form’s **Details** page in your Ona account, upload your media files under the **Media** section.




Media files must be one of the below file types in order to be uploaded to the form: 
jpeg/png/mp3/wav/3gp/csv/zip

**Note**: The media file names that you upload to the form on Ona must match <u>exactly</u> the media file name
specified in the media column in your XLSForm.  Spelling and punctuation are important!  For example, if your media file is named as *blackbird.png*, then you cannot reference it as *Blackbird.png* or *blackbirdpng* in your XLSForm.

Once your media files are uploaded to the form, they are automatically displayed when viewing your Enketo webform.  If using ODK Collect, the media files will automatically download with the form to your phone or tablet and be stored in the form’s media folder on your device.  If downloading media files to your phone presents a challenge, see the next section for instructions on how to manually add media files to your phone instead.  

#####How do I add media files to my ODK Collect folder?

In settings where a network or wifi connection is limited, downloading large media files from your Ona account to ODK Collect may be challenging.  In these settings, users can manually add their media files to their phone or tablet device instead.

Below is a step by step procedure on how to add media files to your ODK Collect folder located in your phone or tablet.

- Connect your phone to your computer or laptop using a USB cable; 
- Locate/search for the Android File Transfer and double click to open;


![Alt text](images/form_documentation_6.png)
  

- Double click on the **odk** folder;

![Alt text](images/form_documentation_7.png)


- Double click on the **forms** folder to view all the forms you currently have in your ODK Collect app; 

![Alt text](images/form_documentation_8.png)

- Double click on the **Birds-media** folder;

![Alt text](images/form_documentation_9.png)

- Drag and drop all of your media files into the folder.

![Alt text](images/form_documentation_10.png)


#####How do I delete an XLSForm from my Ona account?

Forms uploaded to your Ona account can be deleted using the **Delete Form** option in the form’s dropdown menu.  Below are the steps to follow to delete a form in your Ona account. 

**Note: This cannot be undone.  Once a form is deleted, the form and any data already submitted or uploaded to the form will be gone and cannot be recovered.**

To **Delete** a form:
- Locate the form you would like to delete on your project page;
- Click the dropdown menu next to the form and select **Delete form**;

![Alt text](images/form_documentation_11.png)

Read the warning message and then click on the **Confirm** button when you are ready to delete the form. 


![Alt text](images/form_documentation_12.png)

####How do I make a form inactive? 

An inactive form cannot receive any submissions, and inactive forms do not show up in the list of forms available to download when using ODK Collect.  Essentially, making a form inactive archives the form and helps prevent any changes from being made to the form or its data.

Making a form inactive is a good option when data collection has finished, as it prevents users from making changes, and the inactive form and its data will be stored on Ona indefinitely.  It is also a good alternative to deleting a form from your account.  Data contained in an inactive form  will still be available in your account and can be accessed by making the form active once again.

You can make a form inactive one of two ways, i.e. when uploading your XLSForm and from the form’s drop-down menu.

1. ####When uploading your XLSForm
When uploading your XLSForm, you can choose “Inactive” from the form upload verification window.
![Alt text](images/form_documentation_13.png)
2. ####From the form drop-down menu
Forms already uploaded to your Ona account can be made inactive using the **Make Inactive**                               option in the form’s dropdown menu.

![Alt text](images/form_documentation_14.png)
