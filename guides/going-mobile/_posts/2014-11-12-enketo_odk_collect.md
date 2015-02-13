---
layout: guide-view
guide_name: Data Collection
title: "Using Enketo &amp; ODK Collect"
permalink: /guides/going-mobile
categories: [topics, going-mobile]
---

* ##### Enketo vs. ODK Collect on smartphones
* [Which to use](#which-to-use)
* [Why use each](#why-use-each)
* [Collecting data offline](#collecting-data-offline)
* ##### Using Enketo
* [An introduction to Enketo](#introduction-to-enketo)
* [Loading a Web form](#loading-webform)
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
* ##### ODK Briefcase
* [What is ODK Briefcase](#what-is-odk-briefcase)
* [How to install ODK Briefcase](#how-to-install-odk-briefcase)
* [How to PULL forms with submissions from Ona](#pull-forms-from-ona)
* [Get data off your mobile devices and do bulk submissions to Ona](#get-data-off-mobile-devices)
* [How to make bulk form submissions to Ona - PUSH](#push-using-odk-briefcase)

### Enketo vs. ODK Collect on smartphones

##### <a name="which-to-use"></a>Which to use

There are two options that one can use on Ona for data collection namely: **[Enketo Smart Paper](https://enketo.org/)** and **[ODK Collect](https://play.google.com/store/apps/details?id=org.odk.collect.android)**. The two options complement each other and it is recommended to decide on a survey-to-survey basis. There are benefits to using each; but it depends on your data collection needs. 

Enketo Smart Paper works on any modern web browser while ODK Collect is a native Android application needs Android devices for the actual collection of data in the field

##### <a name="why-use-each"></a>Why use each

Ona has been integrated with Enketo and one has the option to use both ODK Collect and Enketo Smart Paper. Both tools use the same form format, you can use the same XLSForm on both tools. 

##### <a name="collecting-data-offline"></a>Collecting data offline

You can be able to launch and save data offline on both tools. This means that both Enketo and ODK Collect can be launched without Internet connection and maintain their core functionality whilst offline.Enketo are


### Using Enketo

##### <a name="introduction-to-enketo"></a>An introduction to Enketo

Enketo is a lightweight web application that is used for data entry. Enketo , also known as Web Forms, are used by Ona to enter data directly on your computer or mobile device via a web browser. It forms one component of Ona's ecosytem system that together with XLSForm authoring and provides a complete solution to collect, create and share information. 

Enketo has the following key features:

* **Offline capable** - Has the ability to enter data in a browser without an Internet connection. After a form has been opened once online, a copy is kept inside the browser. You can bookmark a form and from then onwards access it whether offline or online. Enketo also safely stores entered data in the browser and uploads records automatically when the user is connected to the Internet. Your data is deleted from the browser after a successful upload. You can safely close the browser or laptop and work for weeks (or months) without an Internet connection!
* **Print-friendly forms** - Enketo can automatically generate a print-friendly version of each form for old-fashioned collection by paper and pen without the need to maintain a separate print-version of the form.
* **Low technical requirements** - You only need a modern browser to run. You can easily deploy Enketo very quickly on any laptop or desktop and also it's quite usable on mobile devices as well.

##### <a name="loading-webform"></a>Loading a Web form/Enketo form

Once you have [added and published your form](Uploading forms) to your Project you can load the webform. To load a Web form on your web browser follow the following simple steps;

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

### ODK Briefcase

##### <a name="what-is-odk-briefcase"></a>What is ODK Briefcase?

ODK Briefcase is used to gather and pull data from (or push data to) an ODK Aggregate server, e.g. [Ona](https://beta.ona.io/).  Additionally, ODK Briefcase can be used to aggregate form submission data from ODK Collect when you are offline.

ODK Briefcase can:

1. Export forms with submissions from Ona or any other ODK Aggregate server - **PULL** 
1. Make bulk form submissions to Ona and any other ODK Aggregate server - **PUSH**
1. Export form submission data in CSV format
1. Pull forms and submissions collected by ODK Collect from a mobile device
1. Decrypt form submission data: ODK Briefcase is required to decrypt form submission data from ona.io when exporting the data to CSV format.

Encrypted form submission data cannot be viewed on [Ona](https://beta.ona.io/).  Ona stores these form submissions in encrypted format.  In order to view the data, the user must export the submission data using ODK Briefcase and provide the private key while exporting the data in CSV format.

##### <a name="how-to-install-odk-briefcase"></a>How to install ODK Briefcase

1. Java 6 or higher must be installed on your computer. If you do not have Java on your computer, you can download it here: [http://java.com/en/download/index.jsp](http://java.com/en/download/index.jsp).
1. Once Java is installed, download ODK Briefcase here: [http://opendatakit.org/downloads/download-info/odk-briefcase/](http://opendatakit.org/downloads/download-info/odk-briefcase/).

##### <a name="pull-forms-from-ona"></a>How to PULL forms with submissions from Ona

1. When first starting ODK Briefcase, you will need to specify the location of the ODK Briefcase storage area on your computer.  This will create the ODK Briefcase Storage folder, which will hold all your forms and submission data;
1. On the tab **Pull**, click on the bar to the right of **Pull data from**, and choose **Aggregate 1.0**;
1. Click on **Connect** to pull data from the **Aggregate server**;
1. In the new window that opens, specify the url for the Ona account, along with the **username** and **password** to the account. Then, click on the **Connect** button;
1. In the main window, add a check to the form(s) you wish to download;
1. Click on the **Pull** button at the bottom right of the window;
1. Wait until you see the **SUCCESS!** message under the **Pull status**.	

##### <a name="get-data-off-mobile-devices"></a>Get data off your mobile devices and do bulk submissions to Ona

ODK Briefcase can also be used to pull data from ODK Collect from your mobile device and then push to Ona.  This is especially useful for users who are unable to make form submissions directly to Ona due to slow or lack of internet connectivity on their mobile device.

Before going through the steps below, please ensure that all forms on the mobile device are finalized; this is due to the fact that ODK Briefcase does not discriminate between incomplete and finalized forms when pulling form submissions from ODK Collect.  Steps 3-5, below, are slightly different for Android 4.x and Android 2.x (or earlier) devices. 

1. Switch your Android device off and then on; this ensures that your device only shows the current set of files;
1. Mount your mobile device to your computer using the USB cable;
1. For Android 4.x devices, copy the entire **odk** directory from the mounted MTP/Android device to a local hard drive.  For Mac OS/X, use Android File Transfer.  For Windows, drag-and-drop the entire **odk** directory into a folder on your PC;
1. Open ODK Briefcase.  On the **Pull** tab, click on the drop down menu to the right of **Pull data** from and choose **Custom Path to ODK Directory** (for Android 4.x devices) or **Mounted Android SD Card** (for Android 2.x (or earlier) devices);
1. Click on the **Choose** button.  In the window that opens, select either the **odk** folder that was copied onto your local hard drive (Android 4.x devices) or the mounted SD card (Android 2.x or earlier devices);
1. In the main window, tick off the check box next to the form(s) you want to pull; 
1. Click the **Pull** button at the bottom right of the window.  The form submissions that were copied off of the device will be loaded into the ODK Briefcase storage location;
1. Wait until you see the **SUCCESS!** message for the form(s) you pulled;
1. Confirm that the form submissions have been successfully pulled by locating them within the **instances** directory inside the ODK Briefcase Storage folder (e.g., **_ODK Briefcase Storage/forms/Tutorial XLSForm 2/instances_**);
1. Once you have verified that the form submissions have been successfully transferred, you can [delete the forms](#delete-forms) in ODK Collect to prevent duplicate form submissions.

##### <a name="push-using-odk-briefcase"></a>How to make bulk form submissions to Ona - PUSH

Once form submissions have been pulled from an ODK Aggregate server or from a mobile device’s ODK Collect application, ODK Briefcase can be used to **Push** these submissions to the Ona server.

1. In the ODK Briefcase application, click on the **Push** tab;
1. Then, click on the drop down to the right of **Push data to** and **choose Aggregate 1.0**;
1. Click on the **Connect** button;
1. A dialog box will pop up; enter the server details, i.e., your Ona account **url**, **username** and **password**, then click on the **Connect** button;
1. In the main window, check the box next to the form submission(s) you want to push to Ona;
1. Click on the **Push** button at the bottom right of the window and the data will be submitted to the Ona server;	
1. Wait until you see the **Successful upload!** message in the **Pull Status** section on the application;

**NOTE:**

If the form already exists in the Ona account that you are pushing data to, then the form publishing will fail but the data submission will pass, and the **Push Status** in this case will be **Partially successful!**





