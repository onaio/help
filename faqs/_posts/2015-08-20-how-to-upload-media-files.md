---
layout: post
title: "How do I upload media files?"
permalink: /faq/how-to-upload-media-files
category: faq
---

#### How do I add media files to my ODK Collect folder?

In cases where mobile data or WiFi connection is limited, downloading large media files from your Ona account to ODK Collect may be challenging.  In this case, you can manually add their media files to their device.

Below are step by step instructions on how to add media files to your /odk/forms directory on your device's storage:

1. Connect your device to your computer using a USB cable, double click on the **/odk/forms/** directory;
<br><br>
![](/content/screenshots/faq/adding-files-to-ODK-collect3.png)
1. Within that directory, locate the media subdirectory associated with your form, in our case we'll double click on **Birds-media**;
<br><br>
![](/content/screenshots/faq/adding-files-to-ODK-collect4.png)
1. Drag and drop all of your media files into that media subdirectory;
![](/content/screenshots/faq/adding-files-to-ODK-collect5.png)

#### Can I author an XLSForm that supports capturing of photos?

Yes, it is possible to introduce questions that will launch the smartphone device’s camera during data collection.

The [Tutorial XLSForm](https://docs.google.com/a/ona.io/spreadsheets/d/1wu-TsI7ZczO5fxsqJYOgWTXf9AZdiIK9eJGUKJLFgoA/edit?usp=sharing) is used as an example to illustrate how to include questions that allows one to capture an image. In your XLSForm, the question type for such a question should be image. In ODK Collect, the image capture relies on the configuration and capabilities of your device's camera application.

You either launch the camera by tapping on **Take Picture** or by selecting an image stored in devices storage by tapping on the **Choose Image** button.

![](/content/screenshots/faq/odk-collect-image1.png)

When collecting data via Enketo the camera cannot be launched, but the image will be uploaded from your local drive. 

#### Can I author an XLSForm that supports audio or video recordings?

Yes, it is possible to introduce questions that will launch device’s audio or video recorder during data collection. For example, to collect take an audio or video recording.

For example, you would write your questions as follows in your XLSForm:

| survey        |               |       |      |
| ------------- | ------------- | ----- | ---- |
|               | **type**          | **name**  |  **label** |
|               | audio         | audio_recording | Take an audio recording |
|               | video         | video_recording|  Take a video recording|

When collecting data using ODK Collect on your device you can either tap on **Record Sound** or **Record Video** button. You can also select a recorded audio or video file from your device by tapping on **Choose Sound** for audio and **Choose Video** for video.

![](/content/screenshots/faq/audio-video-capture.png)

> 
**Note**:<br/>Audio capture relies on the configuration and capabilities of the device's audio recorder app. On newer 4.x devices and tablets, the inbuilt audio recorder app may not provide a good user experience when launched from ODK Collect. To get audio capture to work on devices that do not come with a built-in audio recorder, installing [RecForge Lite](https://play.google.com/store/apps/details?id=dje073.android.audiorecorderlite) which is a free third party app and may also provide a better experience.  

#### How do I view media files data captured during data collection?

On the Project page, select the form that you wish to view the media data captured then follow the instructions below:

1. Navigate to the form’s **Table** view, scroll from left to right on the data table to locate the media file question;
<br><br>
![](/content/screenshots/faq/viewing-media-files1.png)
1. Double click on a row, from the single submission view you’ll be able to see the media file (i.e. image, video or audio). You can also click on the media file name to view or download a specific file;
<br><br>
![](/content/screenshots/faq/viewing-media-files1.png)
