## ODK Briefcase

ODK Briefcase is used to gather and pull data from (or push data to) an ODK Aggregate server, e.g. ona.io.  Additionally, ODK Briefcase can be used to aggregate form submission data from ODK Collect when you are offline.

ODK Briefcase can: 

1. Export forms with submissions from Ona or any other ODK Aggregate server - **PULL** 
1. Make bulk form submissions to Ona and any other ODK Aggregate server - **PUSH**
1. Export form submission data in CSV format.
1. Pull forms and submissions collected by ODK Collect from a mobile device.
1. Decrypt form submission data: ODK Briefcase is required to decrypt form submission data from ona.io when exporting the data to CSV format.

Points 1 and 2 require an internet connection, while points 3-5 can be done offline.

Encrypted form submission data cannot be viewed on ona.io.  Ona stores these form submissions in encrypted format.  In order to view the data, the user must export the submission data using ODK Briefcase and provide the private key while exporting the data in CSV format.

### How to install ODK Briefcase

1. Java 6 or higher must be installed on your computer. If you do not have Java on your computer, you can download it here: [http://java.com/en/download/index.jsp](http://java.com/en/download/index.jsp).
1. Once Java is installed, download ODK Briefcase here: [http://opendatakit.org/downloads/download-info/odk-briefcase/](http://opendatakit.org/downloads/download-info/odk-briefcase/). 


### How to PULL forms with submissions from Ona

1. When first starting ODK Briefcase, you will need to specify the location of the ODK Briefcase storage area on your computer.  This will create the ODK Briefcase Storage folder, which will hold all your forms and submission data.
<br><br>
![](https://farm3.staticflickr.com/2943/15341618302_a0da6beeff.jpg)
<br>
1. On the tab **Pull**, click on the bar to the right of **Pull data from**, and choose Aggregate 1.0.	
<br>
![](https://farm4.staticflickr.com/3889/15155222130_f74371435d.jpg)
<br><br>
1. Click on **Connect** to pull data from the **Aggregate server**: 
<br><br>
![](https://farm3.staticflickr.com/2943/15341924225_81fdfc6b9d.jpg)
<br><br>
1. In the new window that opens, specify the url for the Ona account, along with the **username** and **password** to the account. Then, click on the **Connect** button,
<br><br>
![](https://farm3.staticflickr.com/2944/15155390807_80b9c1ee46.jpg)
<br><br>
1. In the main window, add a check to the form(s) you wish to download;
<br><br>
![](https://farm4.staticflickr.com/3884/15155342508_74828b00be.jpg)
<br><br>
1. Click on the **Pull** button at the bottom right of the window.	
<br><br>
![](https://farm4.staticflickr.com/3900/15341924045_12a1a9607d.jpg)
1. Wait until you see the **SUCCESS!** message under the **Pull status**.
<br><br>
![](https://farm4.staticflickr.com/3874/15155342588_bb960e379d.jpg)

### Get data off your mobile devices and do bulk submissions to Ona with ODK Briefcase

ODK Briefcase can also be used to pull data from ODK Collect from your mobile device and then push to Ona.  This is especially useful for users who are unable to make form submissions directly to Ona due to slow or lack of internet connectivity on their mobile device.

Before going through the steps below, please ensure that all forms on the mobile device are finalized; this is due to the fact that ODK Briefcase does not discriminate between incomplete and finalized forms when pulling form submissions from ODK Collect.  Steps 3-5, below, are slightly different for Android 4.x and Android 2.x (or earlier) devices. 

1. Switch your Android device off and then on; this ensures that your device only shows the current set of files;
1. Mount your mobile device to your computer using the USB cable;
1. For Android 4.x devices, copy the entire **odk** directory from the mounted MTP/Android device to a local hard drive.  For Mac OS/X, use Android File Transfer.  For Windows, drag-and-drop the entire **odk** directory into a folder on your PC;
1. Open ODK Briefcase.  On the **Pull** tab, click on the drop down menu to the right of Pull data from and choose **Custom Path to ODK Directory** (for Android 4.x devices) or **Mounted Android SD Card** (for Android 2.x (or earlier) devices).
<br><br>
![](https://farm4.staticflickr.com/3850/15318889926_1335f07c7d.jpg)
<br><br>
1. Click on the **Choose** button.  In the window that opens, select either the **odk** folder that was copied onto your local hard drive (Android 4.x devices) or the mounted SD card (Android 2.x or earlier devices).
<br><br>
![](https://farm4.staticflickr.com/3853/15155222300_32c900e820.jpg)
<br><br>
1. In the main window, tick off the check box next to the form(s) you want to pull. 
<br><br>
![](https://farm4.staticflickr.com/3868/15161953457_b31880e6df.jpg)
<br><br>
1. Click the **Pull** button at the bottom right of the window.  The form submissions that were copied off of the device will be loaded into the ODK Briefcase storage location.
<br><br>
![](https://farm4.staticflickr.com/3880/15318889806_5f9b8396a1.jpg)
<br><br>
1. Wait until you see the **SUCCESS!** message for the form(s) you pulled:
<br><br>
![](https://farm3.staticflickr.com/2947/15325634016_0321b0faa8.jpg)
<br><br>
1. Confirm that the form submissions have been successfully pulled by locating them within the **instances** directory inside the ODK Briefcase Storage folder (e.g., **ODK Briefcase Storage/forms/Tutorial XLSForm 2/instances**). 
<br>
1. Once you have verified that the form submissions have been successfully transferred, you can delete the forms in ODK Collect to prevent duplicate form submissions.


### How to make bulk form submissions to Ona - PUSH

Once form submissions have been pulled from an ODK Aggregate server or from a mobile device’s ODK Collect application, ODK Briefcase can be used to **Push** these submissions to the Ona server. 

1. In the ODK Briefcase application, click on the **Push** tab;
<br><br>
![](https://farm4.staticflickr.com/3929/15338749511_d2fb11d1f8.jpg)
<br><br>
1. Then, click on the drop down to the right of **Push data to** and choose **Aggregate 1.0**;
<br><br>
![](https://farm3.staticflickr.com/2944/15318889546_4d033e1c33.jpg)
<br><br>
1. Click on the **Connect** button;
<br><br>
![](https://farm4.staticflickr.com/3925/15338749611_df46d57017.jpg)
<br><br>
1. A dialog box will pop up; enter the server details, i.e., your Ona account **url**, **username** and **password**, then click on the **Connect** button;	
<br>
![](https://farm3.staticflickr.com/2943/15338749651_b6fec0065b.jpg)
<br><br>
1. In the main window, check the box next to the form submission(s) you want to push to Ona;
<br><br>
![](https://farm3.staticflickr.com/2942/15341923845_378da19d5b.jpg)
<br><br>
1. Click on the **Push** button at the bottom right of the window and the data will be submitted to the Ona server;	
<br><br>
![](https://farm4.staticflickr.com/3880/15318889806_5f9b8396a1.jpg)
<br><br>
1. Wait until you see the **Successful upload!** message in the **Pull Status** section on the application; 
<br><br>
![](https://farm4.staticflickr.com/3874/15155342588_bb960e379d.jpg)


**Note**:

If the form already exists in the Ona account that you are pushing data to, then the form publishing will fail but the data submission will pass, and the **Push Status** in this case will be **Partially successful!**

### Difference between pulling from directory and drive

#### Android 4.x devices

 ![](https://farm3.staticflickr.com/2942/15338750261_fe30e081fc.jpg)
 
#### Android 2.x devices

 ![](https://farm3.staticflickr.com/2944/15155390787_e55b40f931.jpg)


