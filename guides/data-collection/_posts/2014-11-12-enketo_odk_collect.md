---
layout: "guide-view"
guide_name: Data Collection
title: "Using Enketo & ODK Collect"
permalink: "/guides/data-collection"
categories: 
  - topics
  - "going-mobile"
published: true
---

* ##### Enketo vs. ODK Collect
* [Collecting data offline](#collecting-data-offline)
* ##### Using Enketo
* [An introduction to Enketo](#introduction-to-enketo)
* [Opening an Enketo form](#opening-webform)
* [Queued records](queued-records)
* [Saving drafts](#saving-drafts)
* ##### ODK Collect
* [Install ODK Collect](#install-odk-collect)
* [Configuring ODK Collect with your Ona account](#configure-odk-collect-with-ona)
* [Downloading forms to your phone](#downloading-forms-forms-to-your-forms)
* [Fill Blank Forms](#fill-blank-forms)
* [Edit Saved Forms](#edit-saved-forms)
* [Send Finalized Form](#send-finalized-form)
* [Delete Forms](#delete-forms)
* ##### Tips on using ODK Collect
* [auto sending of finalized forms](#auto-sending-of-finalized-forms)
* [navigation-settings](#navigation-settings)
* [bulk configuration of devices](#bulk-configuration-of-devices)


There are two options that Ona users have for data collection: **[Enketo Smart Paper](https://enketo.org/)** and **[ODK Collect](https://play.google.com/store/apps/details?id=org.odk.collect.android)**.  

Enketo is a web application that works on any modern web browser (although we highly recommend Chrome), while ODK Collect is an Android application that can be installed on any Android smartphone or tablet device.

Enketo and ODK Collect can work in tandem, meaning that a single form can be deployed at the same time with Enketo and ODK Collect; there is no need to author separate forms for each.  This guide walks you through the steps for collecting data in both Enketo and ODK Collect.  Whether you use Enketo or ODK Collect (or both) is primarily based on your data collection and user needs.

##### <a name="collecting-data-offline"></a>Collecting data offline

Both Enketo and ODK Collect work offline, meaning that users can launch forms and collect and save their data without an internet or data connection.

### Using Enketo

##### <a name="introduction-to-enketo"></a>An introduction to Enketo

Enketo is a lightweight web application that is used for data entry in Ona. Enketo forms, also known as webforms, launch in your computer or mobile device's web browser.  Along with ODK Collect, Enketo is a major component of Ona's ecosystem that, together with XLSForm authoring, provides a complete solution for collecting data and sharing information. 

Enketo has the following key features:

* **Offline capable** - Enketo webforms can be filled with data and saved without an Internet connection. Once a webform is  opened online for the first time, a copy of the webform is stored inside the web browser. The user can bookmark the webform, and from then onwards be able to access it with or without an Internet connection. Data that is entered while in offline mode is safely stored in the web browser until the user is able to connect to the Internet and upload the records later on. Users can safely close their web browser or computer without it affecting their saved data.  Your data is deleted from the web browser only after the record is successfully submitted to the server. 

* **Print-friendly forms** - Enketo can automatically generate a print-friendly version of each form for traditional data collection with paper and pen, without the need to maintain a separate paper version of the form.

* **Low technical requirements** - The only requirement to use Enketo is access to a modern web browser. One can deploy Enketo webforms easily and quickly on any laptop, computer or smart mobile device.

##### <a name="opening-webform"></a>Opening an Enketo form

Once you have successfully [added a form](Uploading forms) to your Project on Ona, you can immediately open it in Enketo webforms and start collecting data following the steps below:

From the list of **Forms** in your Project, select the **Webform** icon next to the name of the form you wish to open.

<br><br>
![](/content/screenshots/webform-button-1.jpg)
<br><br>

You can also open the webform at any time from the form data page.

![](/content/screenshots/webform-button-2.png)
<br><br>

The webform will open in a new browser tab.

![](/content/screenshots/tutorial-xlsform.png)
<br><br>

1. From the list of **Forms** on your Project, select the **Webform** icon of a specific form;
1. The web form will be launched as shown in the screen shot below: 
1. Once the form is loaded, bookmark it for easy offline access;
1. An icon at the top left of the form can be seen as shown in the image below. The icon signifies that the form is succesfully installed in the browser and ready for offline use;
1. Fill out your Web form;
1. Click on the **Submit** button at the bottom of the form when you are done. The records will be automatically stored and queued on your computer until an Internet connection is available. When the application is online, records will be automatically submitted - one by one.

##### <a name="queued-records"></a>Queued records

These are the records that are stored inside your browser (even if you turn off your computer or go offline) until they have been uploaded to the server. 

Queued records can be seen on the form's side bar with a list of records and their upload status. 
 
 To reveal the queued records:
 
 1. Click on the **Records Queued** icon;
 1. A record's border will turn orange when an upload is going;
 1. When an upload succeeds, the border turns green and then the record disappears from the queue;
 1. The record turns red if an error occurs, an error message is briefly shown underneath. The error message can be revealed and hidden at any time by clicking the record.
 
Queued records are uploaded automatically in the background, every 5 minutes when the web page is open and an Internet connection is available. 

To force an upload in between automatic attempts, click **Upload** as shown below:
 

##### <a name="saving-drafts"></a>Saving drafts

You can **Save records as Draft** then continue filling them at a later time. To mark a record as draft:

1. Click on the **Save as Draft** checkbox above the **Submit** button;
1. Then click on **Save Draft** button to save the record;
1. A dialog box will pop-up prompting you to enter the **Record Name** to make it easy to find a draft record later in a long list of records. The name exists locally in the browser storage only and will not be transferred back to the server!
1. Type the record name then click on the **Save&Close** button;

To load the draft record:

1. Click on the **Records Queued** icon;
1. In the sidebar, click on the record that has a little pencil icon;
1. A notification message will pop up to notify you that the draft record has been loaded on your browser;
1. Continue filling out the form, then uncheck the **Save as Draft** checkbox when you are done;
1. Then, finally click on the **Submit** button to upload the record to the server.

**NOTE:**

When a record is saved without marking it as a 'draft', it is considered cleared for uploading as soon as a connection is available. 

### ODK Collect

**Open Data Kit (ODK)** is a free and open-source set of tools which help organizations author, field, and manage mobile data collection solutions.

ODK Collect is used to collect the data on a mobile device and send it to an aggregate server such as [Ona](https://beta.ona.io/).

Ona being a mobile data collection tool uses ODK Collect to download already designed surveys and allow submission of the finalized forms back to Ona. For one to be able to use ODK collect, they need to install the application on an Android device.

##### <a name="install-odk-collect"></a>Install ODK Collect

Below are steps that can be followed to install ODK collect:

1. On your Android device, go to _Google Play Store_ and search for the latest version of ODK Collect; 
1. Tap, **Install**;
1. Tap **Accept**,  to start the download;
1. You can drag the ODK Collect application to your **Home Screen**, its icon is shown in the figure below:

##### <a name="configure-odk-collect-with-ona"></a>Configuring ODK Collect with your Ona account

After installing ODK Collect one needs to configure the application in order to begin data collection and submission. Follow the steps below to link ODK Collect to your Ona account:

1. Find ODK Collect from your applications and tap on the icon to launch it;
1. You should be able to see the screen shown below: 
1. In ODK Collect's **Main Menu**, press the **Menu button** on your device;
1. Select **General Settings**;
1. On **Server Settings**, tap on **Configure platform settings**;
1. Enter **_https://odk.ona.io_** as the url;
1. Select **Username** and enter your Ona account username;
1. Finally, tap on **Password** and enter the account password;

##### <a name="downloading-forms-forms-to-your-forms"></a>Downloading forms to your phone

After configuring your mobile device with the correct server settings, you can now download XLSForms from the Ona server. 
Make sure you have internet connection before proceeding with the following steps! 
<br><br>

1. Open **ODK Collect**.
1. Confirm you have the correct server url (as explained in the [Configuring ODK Collect with your Ona account](#configure-odk-collect-with-ona). 
1. Go back to the ODK Collect’s **Main Menu** and click on **Get Blank Form**;
1. All the published forms on your Ona account will be displayed;
1. Tap on the checkbox to select the form you are interested in. There is no limit to the number of forms you can select, you can select more than one form;
1. Then, tap on **Get Selected** to download the form(s) to your device;
1. The download result will pop-up to show if the form(s) was successfully downloaded, as illustrated in the image below:

##### <a name="fill-blank-forms"></a>Fill Blank Forms

Now that you have the form(s) on your device, you're ready to start collecting data. This section provides a step by step explanation of how to fill forms.
<br><br>

1. Go back to ODK Collect’s **Main Menu**;
1. Select **Fill Blank Form**;
1. Select the form you are interested in to fill out the form, to choose a form, touch the form title e.g touch **Employee Expense Report**, to select the tutorial xlsform
1. Swipe the screen to go forward;
1. Fill out the XLSForm to the end, navigate by swiping the screen to go backward and forward;
1. At the end of the form, type the title of the form, under **Name this form**;
1. Make sure you tap on the checkbox to **Mark the form as finalized**. The form must be marked as 
 finalized to be sent to the server!
1. Then, tap on **Save Form and Exit**. 

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
1. Copy the settings file;  **/odk/settings/collect.settings** to **/odk/collect.settings** of any other device running ODK Collect; 
When you re-launch ODK Collect, it will automatically load those settings, and delete that file.

