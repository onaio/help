---
layout: post
title: "How do I use ODK Briefcase?"
permalink: /faq/odk-briefcase
category: faq
---

### <span id="odk-briefcase"></span>What is ODK Briefcase?

ODK Briefcase is used to gather and pull data from (or push data to) an ODK Aggregate server, e.g. ona.io.  Additionally, ODK Briefcase can be used to aggregate form submission data from ODK Collect when you are offline.

ODK Briefcase can:

1. Export forms with submissions from Ona or any other ODK Aggregate server - **PULL**
1. Make bulk form submissions to Ona and any other ODK Aggregate server - **PUSH**
1. Export form submission data in CSV format.
1. Pull forms and submissions collected by ODK Collect from a mobile device.
1. Decrypt form submission data: ODK Briefcase is required to decrypt form submission data from ona.io when exporting the data to CSV format.

Points 1 and 2 require an internet connection, while points 3-5 can be done offline.

Encrypted form submission data cannot be viewed on ona.io.  Ona stores these form submissions in encrypted format.  In order to view the data, the user must export the submission data using ODK Briefcase and provide the <a href="https://help.ona.io/faq/encrypted-forms">private key</a> while exporting the data in CSV format.

### How to install ODK Briefcase

1. Java 6 or higher must be installed on your computer. If you do not have Java on your computer, you can download it here: [http://java.com/en/download/index.jsp](http://java.com/en/download/index.jsp).
1. Once Java is installed, download ODK Briefcase here: [http://opendatakit.org/downloads/download-info/odk-briefcase/](http://opendatakit.org/downloads/download-info/odk-briefcase/).


### How to PULL forms with submissions from Ona

1. When first starting ODK Briefcase, you will need to specify the location of the ODK Briefcase storage area on your computer.  This will create the ODK Briefcase Storage folder, which will hold all your forms and submission data;
![](/content/screenshots/faq/faq_odk_briefcase_01.png)

1. On the tab **Pull**, click on the bar to the right of **Pull data from**, and choose Aggregate 1.0;
![](/content/screenshots/faq/faq_odk_briefcase_02.png)

1. Click on **Connect** to pull data from the **Aggregate server**;
![](/content/screenshots/faq/faq_odk_briefcase_03.png)

1. In the new window that opens, enter [https://odk.ona.io/YOUR_USERNAME](https://odk.ona.io/YOUR_USERNAME) as the **URL**, along with your Ona **username** and **password**. Then, click on the **Connect** button,
![](/content/screenshots/faq/faq_odk_briefcase_04.png)

1. In the main window, add a check to the form(s) you wish to download;
![](/content/screenshots/faq/faq_odk_briefcase_05.png)

1. Click on the **Pull** button at the bottom right of the window;
![](/content/screenshots/faq/faq_odk_briefcase_06.png)

1. Wait until you see the **SUCCESS!** message under the **Pull status**.
![](/content/screenshots/faq/faq_odk_briefcase_07.png)


### Get data off your mobile devices and do bulk submissions to Ona with ODK Briefcase

ODK Briefcase can also be used to pull data from ODK Collect from your mobile device and then push to Ona.  This is especially useful for users who are unable to make form submissions directly to Ona due to slow or lack of internet connectivity on their mobile device.

Before going through the steps below, please ensure that all forms on the mobile device are finalized; this is due to the fact that ODK Briefcase does not discriminate between incomplete and finalized forms when pulling form submissions from ODK Collect.  Steps 3-5, below, are slightly different for Android 4.x and Android 2.x (or earlier) devices.

1. Switch your Android device off and then on; this ensures that your device only shows the current set of files;
1. Mount your mobile device to your computer using the USB cable;
1. For Android 4.x devices, copy the entire **odk** directory from the mounted MTP/Android device to a local hard drive.  For Mac OS/X, use Android File Transfer.  For Windows, drag-and-drop the entire **odk** directory into a folder on your PC;
1. Open ODK Briefcase.  On the **Pull** tab, click on the drop down menu to the right of Pull data from and choose **Custom Path to ODK Directory** (for Android 4.x devices) or **Mounted Android SD Card** (for Android 2.x (or earlier) devices).
![](/content/screenshots/faq/faq_odk_briefcase_08.png)

1. Click on the **Choose** button.  In the window that opens, select either the **odk** folder that was copied onto your local hard drive (Android 4.x devices) or the mounted SD card (Android 2.x or earlier devices).
![](/content/screenshots/faq/faq_odk_briefcase_09.png)

1. In the main window, tick off the check box next to the form(s) you want to pull;
![](/content/screenshots/faq/faq_odk_briefcase_10.png)

1. Click the **Pull** button at the bottom right of the window.  The form submissions that were copied off of the device will be loaded into the ODK Briefcase storage location;
![](/content/screenshots/faq/faq_odk_briefcase_11.png)

1. Wait until you see the **SUCCESS!** message for the form(s) you pulled;
![](/content/screenshots/faq/faq_odk_briefcase_12.png)

1. Confirm that the form submissions have been successfully pulled by locating them within the **instances** directory inside the ODK Briefcase Storage folder (e.g., **ODK Briefcase Storage/forms/Tutorial XLSForm 2/instances**).
1. Once you have verified that the form submissions have been successfully transferred, you can delete the forms in ODK Collect to prevent duplicate form submissions.


### How to make bulk form submissions to Ona - PUSH

Once form submissions have been pulled from an ODK Aggregate server or from a mobile device’s ODK Collect application, ODK Briefcase can be used to **Push** these submissions to the Ona server.

1. In the ODK Briefcase application, click on the **Push** tab;
![](/content/screenshots/faq/faq_odk_briefcase_13.png)

1. Then, click on the drop down to the right of **Push data to** and choose **Aggregate 1.0**;
![](/content/screenshots/faq/faq_odk_briefcase_14.png)

1. Click on the **Connect** button;
![](/content/screenshots/faq/faq_odk_briefcase_15.png)

1. A dialog box will pop up; enter the server details, enter [https://odk.ona.io/YOUR_USERNAME](https://odk.ona.io/YOUR_USERNAME) as the **URL**, along with your Ona account **username** and **password**, then click on the **Connect** button;
![](/content/screenshots/faq/faq_odk_briefcase_16.png)

1. In the main window, check the box next to the form submission(s) you want to push to Ona;
![](/content/screenshots/faq/faq_odk_briefcase_17.png)

1. Click on the **Push** button at the bottom right of the window and the data will be submitted to the Ona server;
![](/content/screenshots/faq/faq_odk_briefcase_18.png)

1. Wait until you see the **Successful upload!** message in the **Pull Status** section on the application.

>**Note**<br/>
If the form already exists in the Ona account that you are pushing data to, then the form publishing will fail but the data submission will pass, and the **Push Status** in this case will be **Partially successful!**

![](/content/screenshots/faq/faq_odk_briefcase_19.png)

### Difference between pulling from directory and drive

#### Android 4.x devices

![](/content/screenshots/faq/faq_odk_briefcase_20.png)

#### Android 2.x devices

![](/content/screenshots/faq/faq_odk_briefcase_21.png)