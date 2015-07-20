---
layout: post
title: "How do I upload media files?"
permalink: /faq/how-to-upload-media-files
category: faq
---

####How do I add media files to an XLSForm?

Adding media files, such as image, audio, or even video, to your XLSForm is a great way to take your data collection project to the next level!  Media files can enhance your surveys by adding context to questions or providing visual and audio support to the user where necessary.  The section below walks you through the steps on including media files in your XLSForm. The [Birds XLSForm](https://docs.google.com/spreadsheets/d/1-6Zc-FSd9siJqwhxqp2zAYu_GVKndz8Wvr-9FrcefKk/edit#gid=1220865154) is used as an example.

In the Birds survey, respondents are asked to select which bird they sighted from a list.  A picture of each bird species is included next to the bird name to help the respondent verify their selection. 


![](/content/screenshots/faq/media-uploads/adding media files 1.png)


The **survey** and **choices** tabs from this XLSForm are shown below.  Note the **media::image** column in the choices tab of your survey.  Next to each answer choice of a bird, the corresponding image file name is written in the **media::image** column, including the image file extension (.png .jpg etc).   



![](/content/screenshots/faq/media-uploads/adding media files 2.png)

![](/content/screenshots/faq/media-uploads/adding media files 3.png)

If you wanted to include audio or video in your form, then you would simply add separate **media::audio** and **media::video** columns to your form and add the corresponding audio and video file names in those columns.  Media files can be added to questions in the **survey** tab of your XLSForm in addition to answer choices in the **choices** tab.
  

![](/content/screenshots/faq/media-uploads/adding media files 4.png)


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

![](/content/screenshots/faq/media-uploads/uploading file.png)


Media files must be one of the below file types in order to be uploaded to the form: 
jpeg/png/mp3/wav/3gp/csv/zip

**Note:** The media file names that you upload to the form on Ona must match exactly the media file name specified in the media column in your XLSForm.  Spelling and punctuation are important!  For example, if your media file is named as *blackbird.png*, then you cannot reference it as *Blackbird.png* or *blackbirdpng* in your XLSForm.

Once your media files are uploaded to the form, they are automatically displayed when viewing your Enketo webform.  If using ODK Collect, the media files will automatically download with the form to your phone or tablet and be stored in the form’s media folder on your device.  If downloading media files to your phone presents a challenge, see the next section for instructions on how to manually add media files to your phone instead.  

####How do I add media files to my ODK Collect folder?

In settings where a network or wifi connection is limited, downloading large media files from your Ona account to ODK Collect may be challenging.  In these settings, users can manually add their media files to their phone or tablet device instead.

Below is a step by step procedure on how to add media files to your ODK Collect folder located in your phone or tablet.

* Connect your phone to your computer or laptop using a USB cable; 
* Locate/search for the Android File Transfer and double click to open;

  ![](/content/screenshots/faq/media-uploads/adding files to ODK collect 1.png)

Double click on the **odk** folder;


![](/content/screenshots/faq/media-uploads/adding files to ODK collect 2.png)

Double click on the **forms** folder to view all the forms you currently have in your ODK Collect app; 

![](/content/screenshots/faq/media-uploads/adding files to ODK collect 3.png)

Double click on the **Birds-media** folder;

![](/content/screenshots/faq/media-uploads/adding files to ODK collect 4.png)

Drag and drop all of your media files into the folder.


![](/content/screenshots/faq/media-uploads/adding files to ODK collect 5.png)

####How do I delete an XLSForm from my Ona account?

Forms uploaded to your Ona account can be deleted using the **Delete** Form option in the form’s dropdown menu.  Below are the steps to follow to delete a form in your Ona account. 

**Note: This cannot be undone.  Once a form is deleted, the form and any data already submitted or uploaded to the form will be gone and cannot be recovered.**

To **Delete** a form:
* Locate the form you would like to delete on your project page;
* Click the dropdown menu next to the form and select **Delete form**;

![](/content/screenshots/faq/media-uploads/deleting a form 1.png)

* Read the warning message and then click on the **Confirm** button when you are ready to delete the form. 

![](/content/screenshots/faq/media-uploads/deleting a form 2.png)

####How do I make a form inactive? 

An inactive form cannot receive any submissions, and inactive forms do not show up in the list of forms available to download when using ODK Collect.  Essentially, making a form inactive archives the form and helps prevent any changes from being made to the form or its data.  
Making a form inactive is a good option when data collection has finished, as it prevents users from making changes, and the inactive form and its data will be stored on Ona indefinitely.  It is also a good alternative to deleting a form from your account.  Data contained in an inactive form  will still be available in your account and can be accessed by making the form active once again.
You can make a form inactive one of two ways, i.e. when uploading your XLSForm and from the form’s drop-down menu.

1. ####When uploading your XLSForm
When uploading your XLSForm, you can choose “Inactive” from the form upload verification window.

![](/content/screenshots/faq/media-uploads/making a form inactive 1.png)

2. ####From the form drop-down menu
Forms already uploaded to your Ona account can be made inactive using the **Make Inactive**                               option in the form’s dropdown menu.

![](/content/screenshots/faq/media-uploads/making a form inactive 2.png)



####Can I author an XLSForm that supports capturing of photos?

Yes, it is possible to introduce questions that will launch the phone/tablet camera during data collection.

The [Tutorial XLSForm](https://docs.google.com/spreadsheets/d/1lHBLgZKFZRdBFyBe6hZk0G79WYp574mBO4sKoODKMHs/edit#gid=162873983) is used as an example to illustrate how to include questions that launch the camera or audio recorder during data collection.

To launch the camera, you introduce a question type known as **“image”**



![](/content/screenshots/faq/media-uploads/authouring forms 1.png)





When collecting data using your phone the question will be displayed as shown below:


![](/content/screenshots/faq/media-uploads/authouring forms 2.png)


You can choose to either launch the camera (by clicking on **Take Picture**) or by selecting an image stored in your phone (by clicking on **Choose Image**)

When collecting data using enketo the question will be displayed as follows:

![](/content/screenshots/faq/media-uploads/authouring forms 3.png)

Unlike when collecting data using the phone (ODK Collect), Enketo cannot launch the camera. On enketo you can only choose an image from your local drive.



####Can I author an XLSForm that supports audio or video recordings?

Yes, it is possible to introduce questions that will launch the phone/tablet audio or video recorder during data collection.

To be able to launch the audio recorder, you introduce a question type known as **“audio”**

To be able to launch the camera, you introduce a question type known as **“video”**


![](/content/screenshots/faq/media-uploads/audio and video recording.png)


When collecting data using your phone the question will be displayed as shown below:

 ![](/content/screenshots/faq/media-uploads/authouring forms 4.png)  

You can choose to either launch the audio recorder (by clicking on **Record Sound**) or by selecting a sound file stored in your phone (by clicking on **Choose Sound**)

Some devices do not come with inbuilt recording apps and you need to [install a 3rd party app (e.g RecForge Lite)](https://docs.google.com/document/d/1dq9LZSgPT9b0UDQ3s8HN_xyqq2AyS0LD3bWt6T2tmv0/edit)


####How do I view photos, audio and video recordings taken during data collection

Below is a step by step procedure on how to view the media files captured:

From the Project view, select the name of the form that you wish to view data which contain the media files captured:

* Navigate to the form’s **Table page**
* Scroll from left to right on the data table to locate the media file question;


![](/content/screenshots/faq/media-uploads/viewing media files 1.png)


* Double click on a row, from the single submission view you’ll be able to see the media file (i.e. photo, video or audio)

 
![](/content/screenshots/faq/media-uploads/viewing media files 2.png)

