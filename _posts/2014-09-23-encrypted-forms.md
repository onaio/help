---
layout: post
title: "Encrypted Forms"
permalink: /faq/ecnrypted-forms
---

You can encrypt form submissions to the Ona server using ODK Collect (encryption is not yet supported in Enketo webforms). Encrypted forms are useful for projects that have strict data security requirements from ethical review boards.  

### How does it work?

Forms are encrypted on your mobile device once they are marked as finalized in ODK Collect. The data remains encrypted on your mobile device until it is uploaded to the Ona server.  Once the form is submitted, Ona serves as a storage locker for your encrypted files - they are safely stored and encrypted on the server until they are downloaded and decrypted using ODK Briefcase.  Since the form submissions on Ona are encrypted, you will not be able to use the view data features in your account, such as the map view or table maker, and you will not be able to download data in csv or xls formats within Ona.  

### Encryption keys

In order to encrypt your form, you need to generate public and private encryption keys:

* the **public key** is included in your XLSForm, as described below; 
* the **private key** (which you never share) is pulled into ODK Briefcase to decrypt the data locally after you’ve downloaded it from Ona.

The public key is used to encrypt your form data while the private key decrypts it. Anyone with the private key can decrypt the data, so keep the private key in a secure place. To understand more about public and private key infrastructure, check out [this page](http://en.wikipedia.org/wiki/Public-key_cryptography) on Wikipedia.

To generate your private and public encryption keys, you can use the OpenSSL software package.  This software comes pre-installed on OSX and Linux systems, and it can be downloaded [here](http://slproweb.com/products/Win32OpenSSL.html) for Windows.  Instructions on generating key-pairs using OpenSSL software can be found at [this ODK site](http://opendatakit.org/help/encrypted-forms/).  

### XLSForm syntax for encrypted forms

Follow these steps to add the correct encryption syntax in your XLSForm:

1. Add a worksheet called **settings**;
1. In this worksheet, create three columns: **id_string**, **submission_url**, and **public_key**. The **id_string** column specifies the form id name.  The **submission_url** is the url that will accept the encrypted form submissions.  This is the same url that you type into the ODK Collect application under settings to download the forms from your account; however, you must add **/submission** to the end of this url.  Finally, the **public_key** column contains the public key (without any spaces or line breaks) that was generated using the OpenSSL software.   
<br>
![](https://farm4.staticflickr.com/3925/15162494098_d44d69d71b.jpg)
<br><br>
1. Upload the XLSForm to Ona as usual. You should see a label with the text **ENCRYPTED** next to your form name on Ona, as illustrated in the image below:
<br><br>
![](https://farm4.staticflickr.com/3885/15162494168_9a428fb56a.jpg)
<br><br>
1. Download your encrypted form to your mobile phone using ODK Collect and start collecting data!
<br><br>
![]()

### How to decrypt your form

You must use ODK Briefcase to download the encrypted files from Ona and decrypt them locally on your computer using the private key generated earlier. Follow these steps to download ODK Briefcase and decrypt your data: 

1. Create a folder on your local machine to store the data once it is decrypted; 
1. If you haven’t already done so, download [ODK Briefcase](http://opendatakit.org/use/briefcase/) to your local machine;
1. Double click the downloaded file to open ODK Briefcase;
1. **PULL** the encrypted form to your local machine.  See the ODK Briefcase page for more information on how to pull forms.
1. The form is decrypted only during export. Go to the **Export** tab;
<br><br>
![](https://farm4.staticflickr.com/3874/15162544187_67d921e139.jpg)
<br><br>
1. Select the form from the **Form** dropdown;
<br><br>
![](https://farm4.staticflickr.com/3858/15348761702_ef299d25bb.jpg)
<br><br>
1. On the **Export Type** dropdown, select **.csv** and **media files**;
<br><br>
![](https://farm3.staticflickr.com/2943/15348761732_e2e89bd634.jpg)
<br><br>
1. Locate the **Export Directory**, which is the folder you created in step 1;
<br><br>
![](https://farm4.staticflickr.com/3927/15162313579_383bec78e2.jpg)
<br><br>
1. Search for and choose the **PEM Private Key File** that you generated previously;
1. Click on **Export**. The form data will be decrypted and exported to the folder you created in step 1.
<br><br>
![](https://farm3.staticflickr.com/2941/15349066455_dd6745eba9.jpg)
