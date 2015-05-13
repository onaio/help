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


There are two options that Ona users have for data collection: **[Enketo Smart Paper](https://enketo.org/)** and **[ODK Collect](https://play.google.com/store/apps/details?id=org.odk.collect.android)**.  

Enketo is a web application that works on any modern web browser (although we highly recommend Chrome), while ODK Collect is an Android application that can be installed on any Android smartphone or tablet device.

<br><br>
![](/content/screenshots/enketo-logo.png)
![](/content/screenshots/odk-logo.png)
<br><br>

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

![](/content/screenshots/webform-button-1.jpg)

You can also open the webform at any time from the form data page.

![](/content/screenshots/webform-button-2.png)

The webform will open in a new browser tab.

![](/content/screenshots/tutorial-xlsform.png)

If this is the first time you are opening the form, make sure you bookmark it for easy offline access.  In Chrome, you can do this by going to the Bookmarks menu and selecting Bookmark This Page... 

![](/content/screenshots/bookmark.png)

When you're ready, start entering data into the webform. When you reach the end of the webform, click on the **Submit** button to save your form and submit it to the server. If you do not have an Internet connection at the time, the form will be saved and queued in the web browser and uploaded automatically when an internet connection is available. If there is more than one record queued for submission in the web browser, the records will be submitted automatically, one by one, when an internet connection is available.

![](/content/screenshots/submit.png)

##### <a name="queued-records"></a>Queued records

These are the records that are stored inside your web browser until there is an internet connection and they can be uploaded to the server. They remain there even if you go offline or if you shut down your computer or laptop.

Queued records can be seen on the webform's side bar with a list of records and their upload status.
![](/content/screenshots/side-menu.png)

> It is highly recommended, however, that you do submit or export your saved form records as soon as they are finalized. If your browser data is cleared before you are able to submit or export your saved records, you risk losing your data. Be especially cognizant of this if you are not using a personal laptop or computer, as many public desktops have pre-installed software that intermittently clears website and browsing data from the computer, which would erase any saved records you have stored in the web browser.

To reveal the queued records:
 
 1. Click on the **Records Queued** icon;
 1. A record's border will turn orange when an upload is going;
 1. When an upload succeeds, the border turns green and then the record disappears from the queue;
 1. The record turns red if an error occurs, an error message is briefly shown underneath. The error message can be revealed and hidden at any time by clicking the record.
 
Queued records are uploaded automatically in the background, every 5 minutes when the web page is open and an Internet connection is available. 

To force an upload in between automatic attempts, click **Upload** as shown below:
 

##### <a name="saving-drafts"></a>Saving drafts

If you are not ready to submit your form, you can save the form as a draft that you can open and edit later.

1. Click on the **Save as Draft** checkbox above the **Submit** button;
1. Then click on **Save Draft** button to save the record;
1. A dialog box will pop-up prompting you to enter the **Record Name** to make it easy to find a draft record later in a long list of records. The name exists locally in the browser storage only and will not be transferred back to the server!
1. Type the record name then click on the **Save & Close** button;

To load the draft record:

1. Click on the **Records Queued** icon;
1. In the sidebar, click on the record that has a little pencil icon;
1. A notification message will pop up to notify you that the draft record has been loaded on your browser;
1. Continue filling out the form, then uncheck the **Save as Draft** checkbox when you are done;
1. Then, finally click on the **Submit** button to upload the record to the server.

**NOTE:**

When a record is saved without marking it as a 'draft', it is considered cleared for uploading as soon as a connection is available. 

### ODK Collect

**[Open Data Kit](https://opendatakit.org/)** is a free and open-source set of tools which help organizations author, field, and manage mobile data collection solutions.

ODK Collect is used to collect the data on a mobile device and send it to an aggregate server such as [Ona](https://beta.ona.io/).

Ona being a mobile data collection tool uses ODK Collect to download already designed surveys and allow submission of the finalized forms back to Ona. For one to be able to use ODK collect, they need to install the application on an Android device.

##### <a name="install-odk-collect"></a>Installing ODK Collect

Below are steps that can be followed to install ODK collect:

1. On your Android device, go to _[Google Play Store](https://play.google.com/store?hl=en)_ and search for the latest version of ODK Collect; 
1. Tap, **Install**;
1. Tap **Accept**,  to start the download;
1. You can drag the ODK Collect application to your **Home Screen**

##### <a name="configure-odk-collect-with-ona"></a>Configuring ODK Collect with your Ona account

After installing ODK Collect, the next step is to configure the application to your Ona account.

1. In ODK Collect's **Main Menu**, press the **Menu button** on your device (note: the menu button location can vary by device), and select **General Settings**;
![](/content/screenshots/gen-setting.png)
1. Under **Server Settings**, tap on **Configure platform settings**;
![](/content/screenshots/configure.png)
1. Enter **_https://odk.ona.io_** as the url, then press **OK**;
![](/content/screenshots/odk-url.png)
1. Similarly, select **Username** and enter your Ona username, then select **Password** and enter your Ona password.
![](/content/screenshots/user-pass.png)

##### <a name="downloading-forms"></a>Downloading forms to your phone

After configuring ODK Collect to your Ona account, you can now download forms to your phone.
Make sure you have internet connection before proceeding with the following steps! 
<br><br>

1. Confirm you have the correct server configuration (as explained in [Configuring ODK Collect with your Ona account](#configure-odk-collect-with-ona). 
1. Go back to ODK Collect’s **Main Menu** and click on **Get Blank Form**;
![](/content/screenshots/odk-get.png)

1. All of the published and *active* forms from your Ona account will be displayed.  Tap on the checkbox next to the form(s) you want to download, then tap on **Get Selected** to download the form(s) to your device;
![](/content/screenshots/get-select.png)
1. The download result will pop up in a window.  Click **OK**. You're ready to start collecting data!
![](/content/screenshots/download-result.png)

##### <a name="fill-blank-forms"></a>Fill Blank Forms

Once you have downloaded forms to your device, you're ready to start collecting data. To fill in forms:

1. On ODK Collect's main menu, select **Fill Blank Form**;
1. Select the form you are interested in to fill out the form, to choose a form, touch the form title e.g touch **Tutorial XLSForm**, to select the tutorial xlsform
1. Swipe the screen to go forward;
1. Fill out the XLSForm to the end, navigate by swiping the screen to go backward and forward;
1. At the end of the form, type the title of the form, under **Name this form**;
1. Make sure you tap on the checkbox to **Mark the form as finalized**. The form must be marked as 
 finalized to be sent to the server!
1. Then once you are finished, tap on **Save Form and Exit**.

##### <a name="edit-saved-forms"></a>Edit Saved Forms

Forms that are not marked as finalized are saved as drafts in the **Edit Saved Form** menu in ODK Collect. From the home screen in ODK Collect, you can see the number of saved draft forms in parentheses.

![](/content/screenshots/odk-edit.png)

Tap on **Edit Saved Form**.  You'll see a list of your saved draft forms.  You will also see any forms that were marked as finalized, but not yet submitted to the server.  Tap on the name of the form you want to edit.  Once you are finished editing your form, you again have the option to mark the form as finalized before pressing **Save Form and Exit**.

##### <a name="send-finalized-form"></a>Send Finalized Form

Forms that are marked as finalized appear in the **Send Finalized Form** menu in ODK Collect (note: forms marked as finalized can still be edited from the **Edit Saved Form** menu up until they are successfully submitted to the server).

Once you have established an internet connection and are ready to submit your form to the server, tap on **Send Finalized Form** from the ODK Collect main menu.

![](/content/screenshots/odk-send.png)

Check the form(s) you are ready to submit to the server and tap on the **Send Selected** button.

![](/content/screenshots/send-selected.png)

Upload results will pop-up in a window to show if the form has been successfully uploaded to the server.

![](/content/screenshots/send-result.png)

>
**Note**
If you are having difficulties submitting your forms to the server, check your internet connection. For persistent connectivity problems, consider using **ODK Briefcase**, which can be used to extract form submissions from a mobile device without an internet connection.

##### <a name="delete-forms"></a>Delete Forms

Deleting forms is done through the **Delete Saved Form** menu in ODK Collect.

![](/content/screenshots/odk-delete.png)

On the **Saved Forms** tab, you'll find a list of all forms that were submitted to the server as well as all forms currently saved as a draft in ODK Collect.  To delete each form instance, mark the checkbox next to the name of the form and tap **Delete Selected**.

![](/content/screenshots/delete-saved.png)

>
**Note**
Deleting a form only deletes it from the phone; it does not delete the form submission from the server, if it was already submitted.  Be cautious when deleting saved form drafts, as this cannot be undone.  One can distinguish between saved forms and sent forms by reading the **Saved on...** vs. **Sent on...** date underneath the form name.

On the **Blank Forms** tab, you'll find a list of all blank forms currently downloaded on your phone.  To delete a blank form instance, mark the checkbox next to the name of the form and tap **Delete Selected**.

![](/content/screenshots/delete-blank.png)

A dialog box will pop up prompting you to confirm deletion; tap **Delete Forms** to continue.  
 
**Hint:** 

It's a good idea to delete an older version of a form before downloading a new version of the same form to your phone.  This will help prevent users from opening and entering data in the wrong version of the form.

>
**NOTE:**
Once you delete a form, it will no longer be on your phone, you will lose it forever!


### Tips on using ODK Collect

ODK Collect has a number of user settings that can be adjusted to better meet the context and needs of a project or simply a data collector's personal preference. While this list is by no means exhaustive, we've found that the following features have been very useful for our users.

##### <a name="auto-sending-of-finalized-forms"></a>Auto-sending of finalized forms

This feature enables you to automatically send finalized forms to the server as soon as there is an internet connection.  This feature works even if you're not currently using ODK Collect.

Once enabled, auto-send will attempt to send forms to the server automatically once they are marked as finalized and saved, essentially allowing the user to bypass sending the forms manually through the **Send Finalized Form** menu.  If there is no internet connection, ODK Collect will retry sending the form at intervals until it succeeds.

To enable the auto-send feature, go to **General Settings** in the ODK Collect main menu.  Under the **AUTO SEND** section, you can choose to **Auto send with Wi-Fi** and/or **Auto send with network**.

![](/content/screenshots/.png)

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

