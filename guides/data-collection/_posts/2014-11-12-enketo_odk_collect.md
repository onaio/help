---
layout: guide-view
guide_name: Data Collection
title: "Using Enketo &amp; ODK Collect"
permalink: /guides/data-collection
categories: [topics, going-mobile]
---

* ##### Enketo vs. ODK Collect
* [Why use each?](#why-use-each)
* [Collecting data offline](#collecting-data-offline)
* ##### Using Enketo
* [An introduction to Enketo](#introduction-to-enketo)
* [Opening an Enketo webform](#loading-webform)
* [Queued records](queued-records)
* [Saving drafts](#saving-drafts)
* ##### ODK Collect
* [Installing ODK Collect](#install-odk-collect)
* [Configuring ODK Collect with your Ona account](#configure-odk-collect-with-ona)
* [Downloading forms to your phone](#downloading-forms)
* [Fill Blank Forms](#fill-blank-forms)
* [Edit Saved Forms](#edit-saved-forms)
* [Send Finalized Form](#send-finalized-form)
* [Delete Forms](#delete-forms)
* ##### Tips on using ODK Collect
* [auto sending of finalized forms](#auto-sending-of-finalized-forms)
* [navigation-settings](#navigation-settings)
* [bulk configuration of devices](#bulk-configuration-of-devices)


There are two options that one can use on Ona for data collection namely: **[Enketo Smart Paper](https://enketo.org/)** and **[ODK Collect](https://play.google.com/store/apps/details?id=org.odk.collect.android)**. The two options complement each other and it is recommended to decide on a survey-to-survey basis. There are benefits to using each; but it depends on your data collection needs. 

Enketo Smart Paper works on any modern web browser while ODK Collect is a native Android application needs Android devices for the actual collection of data in the field

<br><br>
![](/content/screenshots/enketo-logo.png)
![](/content/screenshots/odk-logo.png)
<br><br>

##### <a name="why-use-each"></a>Why use each

Ona has been integrated with Enketo and one has the option to use both ODK Collect and Enketo Smart Paper. Both tools use the same form format, you can use the same XLSForm on both tools. 

##### <a name="collecting-data-offline"></a>Collecting data offline

You can be able to launch and save data offline on both tools. This means that both Enketo and ODK Collect can be launched without Internet connection and maintain their core functionality whilst offline.


### Using Enketo

##### <a name="introduction-to-enketo"></a>An introduction to Enketo

Enketo is a lightweight web application that is used for data entry in Ona. Enketo forms, also known as webforms, launch in your computer or mobile device's web browser.  Along with ODK Collect, Enketo is a major component of Ona's ecosystem that, together with XLSForm authoring, provides a complete solution for collecting data and sharing information. 

Enketo has the following key features:

* **Offline capable** - Enketo webforms can be filled with data and saved without an Internet connection. Once a webform is  opened online for the first time, a copy of the webform is stored inside the web browser. The user can bookmark the webform, and from then onwards be able to access it with or without an Internet connection. Data that is entered while in offline mode is safely stored in the web browser until the user is able to connect to the Internet and upload the records later on. Users can safely close their web browser or computer without it affecting their saved data.  Your data is deleted from the web browser only after the record is successfully submitted to the server. 
* **Print-friendly forms** - Enketo can automatically generate a print-friendly version of each form for traditional data collection with paper and pen, without the need to maintain a separate paper version of the form.
* **Low technical requirements** - The only requirement to use Enketo is access to a modern web browser. One can deploy Enketo webforms easily and quickly on any laptop, computer or smart mobile device.

##### <a name="loading-webform"></a>Opening an Enketo webform

Once you have successfully [added a form](Uploading forms) to your Project on Ona, you can immediately open it in Enketo webforms and start collecting data following the steps below:

From the list of **Forms** in your Project, select the **Webform** icon next to the name of the form you wish to open.

<br><br>
![](/content/screenshots/webform-button-1.jpg)
<br><br>

You can also open the webform at any time from the form data page.

<br><br>
![](/content/screenshots/webform-button-2.png)
<br><br>

The webform will open in a new browser tab.

<br><br>
![](/content/screenshots/tutorial-xlsform.png)
<br><br>

If this is the first time you are opening the form, make sure you bookmark it for easy offline access.  In Chrome, you can do this by going to the Bookmarks menu and selecting Bookmark This Page... 

<br><br>
![](/content/screenshots/bookmark.png)
<br><br>

When you're ready, start entering data into the webform.  When you reach the end of the webform, click on the **Submit** button to save your form and submit it to the server.  If you do not have an Internet connection at the time, the form will be saved and queued in the web browser and uploaded automatically when an internet connection is available.  If there is more than one record queued for submission in the web browser, the records will be submitted automatically, one by one, when an internet connection is available.

<br><br>
![](/content/screenshots/submit.png)
<br><br>

##### <a name="queued-records"></a>Queued records

These are the records that are stored inside your web browser until there is an internet connection and they can be uploaded to the server.  They remain there even if you go offline or if you shut down your computer or laptop.  

It is highly recommended, however, that you do submit or export your saved form records as soon as they are finalized.  If your browser data is cleared before you are able to submit or export your saved records, you risk losing your data.  Be especially cognizant of this if you are not using a personal laptop or computer, as many public desktops have pre-installed software that intermittently clears website and browsing data from the computer, which would erase any saved records you have stored in the web browser.    

Queued records can be viewed in the webform's side bar menu. 

<br><br>
![](/content/screenshots/side-menu.png)
<br><br>

A record's border will turn red if the browser is currently attempting to upload it to the server.

<br><br>
![](/content/screenshots/red-border.png)
<br><br>

When an upload succeeds, the record's border turns green for a moment before it disappears from the queue.

If the upload fails, an error message is briefly shown underneath the record.  This mostly occurs because there is no internet connection.

<br><br>
![](/content/screenshots/failed-upload.png)
<br><br>
 
Queued records are uploaded automatically in the background, every 5 minutes when the web page is open and an Internet connection is available. To force an upload in between automatic attempts, click the **Upload** button underneath the queued records.
 

##### <a name="saving-drafts"></a>Saving drafts

If you are not ready to submit your form, you can save the form as a draft that you can open and edit later.  To do this, check the **Save as Draft** option at the end of the webform.  The **Submit** button changes to **Save Draft**.  

<br><br>
![](/content/screenshots/save-draft-button.png)
<br><br>

After clicking the **Save Draft** button, a dialog box will pop up, prompting you to enter a name for the draft record, to make it easy to find the draft record later on in the queue. Type the record name (or leave the default name given), then click on the **Save & Close** button.  The record will be saved in the queue as a draft form submission.

<br><br>
![](/content/screenshots/draft-popup.png)
<br><br>

To load the draft record later on, open the side menu of your webform and locate the record name in the queue list.  Click on the record name to load it in your web browser.  A message will pop up to notify you that the draft record was loaded on your web browser. 

<br><br>
![](/content/screenshots/draft-record.png)
<br><br>

You can easily differentiate between draft and finalized records in your queue by looking for the small edit icon next to records that are saved as drafts.  Only draft records can be loaded into your web browser for further edits

<br><br>
![](/content/screenshots/edit-icon.png)
<br><br>

Fill out the form as you normally would, then uncheck the **Save as Draft** checkbox when you are done.  Click on the **Submit** button to upload the record to the server.

**NOTE:**

When you click **Submit** on a record without marking it as a 'draft', it is considered final and is cleared for uploading as soon as a connection is available.  You will not be able to edit the unsubmitted record anymore. 

### ODK Collect

[Open Data Kit (ODK)](https://opendatakit.org/) is a free and open-source set of tools which help organizations author, field, and manage mobile data collection solutions.

[ODK Collect](https://opendatakit.org/use/collect/) is a smartphone application that is used to collect data and send it to an aggregate server such as [Ona](https://beta.ona.io/).  ODK Collect can be installed on any Android smartphone or tablet.

Ona users can download their forms from Ona onto ODK Collect and allow form submissions from ODK Collect back to Ona. 

##### <a name="install-odk-collect"></a>Installing ODK Collect

ODK Collect is an Android application that anyone can access and install for free from the [Google Play Store](https://play.google.com/store?hl=en).  On your Android smartphone or tablet, open your _Play Store_ application and search for the [latest version of ODK Collect](https://play.google.com/store/apps/details?id=org.odk.collect.android&hl=en).  Tap on the **Install** button, then tap **Accept** to start the download and installation.

<br><br>
![](/content/screenshots/install-odk.png)
<br><br>

Once installed, you can drag the ODK Collect app to your **Home Screen**; its icon looks like this:


##### <a name="configure-odk-collect-with-ona"></a>Configuring ODK Collect with your Ona account

After installing ODK Collect, the next step is to configure the application to your Ona account. 

1. In ODK Collect's **Main Menu**, press the **Menu button** on your device (note: the menu button location can vary by device), and select **General Settings**;

<br><br>
![](/content/screenshots/gen-setting.png)
<br><br>

1. Under **Server Settings**, tap on **Configure platform settings**;

<br><br>
![](/content/screenshots/configure.png)
<br><br>

1. Enter **_https://odk.ona.io_** as the url, then press **OK**;

<br><br>
![](/content/screenshots/odk-url.png)
<br><br>

1. Similarly, select **Username** and enter your Ona username, then select **Password** and enter your Ona password.

<br><br>
![](/content/screenshots/user-pass.png)
<br><br>

##### <a name="downloading-forms"></a>Downloading forms to your phone

After configuring ODK Collect to your Ona account, you can now download forms to your phone. 

Make sure you have internet connection before proceeding with the following steps! 

1. Confirm you have the correct server configuration (as explained in [Configuring ODK Collect with your Ona account](#configure-odk-collect-with-ona). 
1. Go back to ODK Collect’s **Main Menu** and click on **Get Blank Form**;

<br><br>
![](/content/screenshots/odk-get.png)
<br><br>

1. All of the published and *active* forms from your Ona account will be displayed.  Tap on the checkbox next to the form(s) you want to download, then tap on **Get Selected** to download the form(s) to your device;

<br><br>
![](/content/screenshots/get-select.png)
<br><br>

1. The download result will pop up in a window.  Click **OK**. You're ready to start collecting data!

<br><br>
![](/content/screenshots/download-result.png)
<br><br>

##### <a name="fill-blank-forms"></a>Fill Blank Forms

Once you have downloaded forms to your device, you're ready to start collecting data. 

1. On ODK Collect's main menu, select **Fill Blank Form**;

<br><br>
![](/content/screenshots/odk-fill.png)
<br><br>

1. You will see a list of the forms downloaded to your device.  Tap on the name of the form you want to fill out to launch the form (hint: if you have more than one form with the same name, use the **version number** underneath the form name to help you decide which version to open);

<br><br>
![](/content/screenshots/tutorial-xls.png)
<br><br>

1. The first screen of every form reminds you how to swipe the screen forward and backward to move through the form;

<br><br>
![](/content/screenshots/swipe.png)
<br><br>

1. You'll see the screen below when you reach the end of the form.  If you are finished editing the form, check the box that says **Mark form as finalized**.  This makes the form final and ready to be submitted to the server.  Forms can *only* be submitted to the server if this box is checked!  If you want to be able to edit the form later, leave this option unchecked.  This will save a draft of the form in ODK Collect, which you can edit later.  You also have the option to **Name this form**.  By default, the name that appears is the title of the form.  You can change the name of the form by tapping in the text box and updating the name.  This option is particularly helpful if you are saving multiple form records and want to name them differently to be able to distinguish them later on (note: the name you enter does not get submitted with the form). 

<br><br>
![](/content/screenshots/form-end.png)
<br><br>

Once you are finished, tap on **Save Form and Exit**. 

##### <a name="edit-saved-forms"></a>Edit Saved Forms

You are able to edit saved forms only if you saved the form or if you marked the form as finalized and not sent it to the server.
To access the saved form:	 

1. Go to ODK Collect’s **Main Menu**;
1. Tap on **Edit Saved Form**, you will notice that the number of saved forms is indicated as shown in the image below:
1. Find the form you were working on by time or name, review your answers before continuing with the survey;

##### <a name="send-finalized-form"></a>Send Finalized Form

After filling out your form and editing it to make sure that the data is accurate you need to submit it to your account. 

In ODK Collect’s **Main Menu**:

1. Tap on **Send Finalized Form**;
1. Select the form(s) you filled out;
1. Tap on **Send Selected** to submit the form to Ona;
1. Upload results will pop-up to show if the form has been successfully uploaded to the server as shown in the image below:

##### <a name="delete-forms"></a>Delete Forms

You can delete both saved and blank forms from your mobile device if you **no longer need them**. To delete forms;

On ODK Collect’s Main Menu:

1. Select **Delete Saved Form**;
1. You will see two tabs, **SAVED FORMS** and **BLANK FORMS**;
1. To delete blank forms, tap on the select **BLANK FORMS** tab and select the form you would like to delete by touching on the check box next to name of the form(s) or tap on **Toggle All** to delete all forms;
1. Tap on the **Delete Selected** button;
1. A dialog box will pop up prompting you to confirm deletion, tap **Delete Forms** to delete the form;
1. A deletion message will pop-up on the screen to confirm if the form has successfully been deleted as illustrated in the image below;

**NOTE:**

Once you delete a form, it will no longer be on your phone, you will lose it forever!


### Tips on using ODK Collect

There are a few features on ODK Collect that can help make your work easier. They include: auto sending of finalized forms, switching between swipes and forward/backward buttons for navigation and bulk configuration of devices.

##### <a name="auto-sending-of-finalized-forms"></a>Auto-sending of finalized forms

This feature enables you to automatically send finalized forms to the server hence ensuring that you data is immediately available for reports. The feature works even while ODK Collect is not running.

Once enabled, auto send will send all finalized forms whenever any form is saved and finalized. It will also try to send finalized forms whenever a Wi-Fi or cellphone network connection becomes available.

To enable auto send:

1. Go to the ODK Collect’s **Main Menu**;
1. Tap on the menu button;
1. Select **General Settings**;
1. Scroll to the **AUTO SEND** section and choose to **Auto send with Wi-Fi** or **Auto send with network or both**;

##### <a name="navigation-settings"></a>Navigation settings

One can switch between swipes and forward/backward buttons or both for navigation. 

To do this:

1. Go to the ODK Collect’s **Main Menu**;
1. Tap on the menu button;
1. Select **General Settings**;
1. Scroll to the **User Interface** section and tap on **Navigation**;
1. Tap on **Use horizontal swipes** (default settings), to select swipes;
1. To use the forward/backward buttons, tap on **Use forward/backward buttons**;
1. To use both, tap on **Use swipes and buttons**;

##### <a name="bulk-configuration-of-devices"></a>Bulk configuration of devices

This feature makes it easier to configure ODK Collect on many devices. Instead of configuring one device a time, you can easily configure all the devices at once.

1. Go to the ODK Collect’s Main Menu;
1. Tap on the the menu button;
1. Select **Admin Settings**;
1. Tap the menu button again, a dialog box will pop-up as illustrated in the image below;
1. Tap **Save Settings to Disk**, this will save your general and admin settings to the **_/odk/settings/collect.settings_**;
