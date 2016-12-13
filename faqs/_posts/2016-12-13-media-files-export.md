---
layout: post
title: How do download media files?
permalink: /faq/media-files-export
category: faq
published: true
---


### Media Files Export

If your form includes an image , video, or audio recording question, these files will be uploaded to the server along with your other data. When exporting your dataset in CSV or Excel formats these files will include links to the filenames of the media attachments, but not the files themselves. 

### How do I download media files

To download a single media file, navigate to the form’s **Table view** then right click on the file link and select **Save link as** to download it. 

![](/content/screenshots/faq/media-export-1.png)

You can download all the media files in one folder by selecting the **ZIP folder of media attachments** option under the **Export data** section of the form’s **Overview** page.

![](/content/screenshots/faq/media-export-2.png)

For a large number of collected media files, you can use a download manager/accelerator to download the files as quickly as possible. The download manager allows you to pause and resume the download. Below is a step by step guide on how to use a download manager.

#### Add direct hyperlinks to collected media in Excel

* Download your data in **Excel** format and open the file

* In a new column next to the one that contains the filenames of your images, enter the followingformula: =HYPERLINK("https://ona.io/attachment/original?media_file=username/attachments/"&A2)

* In the formula replace 'username' with your account username and 'A2' with the first cell reference that contains the filename of your media data. Then copy the formula down for all your records. 

#### Create an alternative batch download of collected media 

* Save your Excel file with the added hyperlinks (see instructions above) as an HTML file to your Desktop, using the File > Save as... option (choose 'Web page') 

* Log in to your Ona account using the Firefox browser 

* In Firefox install the [DownThemAll extension](https://addons.mozilla.org/en-US/firefox/addon/downthemall/)

* Still in Firefox, open the HTML web page saved on your Desktop

* Right-click somewhere on that page and choose **DownThemAll!...**

* Choose a folder on your computer where the images should be saved 

* Under **Filters** choose **All files** and then click **Start!**

* Optional: In the window that opens set a download speed limit to avoid using all available bandwidth. The settings also allow you to set the number of attempts that should be made for each file in case of connection issues. 

>**Note:**<br/>If you have a lot of media files this will take a while to download. But the DownThemAll download manager will make sure you have downloaded all the images and let you know in case any of them were not downloaded so you can try again.
<br><br>

 

