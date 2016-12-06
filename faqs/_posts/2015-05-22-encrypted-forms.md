---
layout: post
title: "How do I use encrypted forms?"
permalink: /faq/encrypted-forms
category: faq
---

### <span id="data-encryption"></span>How does data encryption work?

You can encrypt form submissions to the Ona server using ODK Collect (encryption is not yet supported in Enketo forms). Encrypted forms are useful for projects that have strict data security requirements from ethical review boards.

### How does it work?

Forms are encrypted on your mobile device once they are marked as finalized in ODK Collect. The data remains encrypted on your mobile device until it is uploaded to the Ona server.  Once the form is submitted, Ona serves as a storage locker for your encrypted files - they are safely stored and encrypted on the server until they are downloaded and decrypted using [ODK Briefcase](http://help.ona.io/faq/odk-briefcase/).  Since the form submissions on Ona are encrypted, you will not be able to use the view data features in your account, such as the map view or table maker, and  you will not be able to view the data in csv or xls formats until it is decrypted using ODK Briefcase.

### Encryption keys

In order to encrypt your form, you need to generate public and private encryption keys:

* the **public key** is included in your XLSForm, as described below;
* the **private key** (which you never share) is pulled into ODK Briefcase to decrypt the data locally after you’ve downloaded it from Ona.

The public key is used to encrypt your form data while the private key decrypts it. Anyone with the private key can decrypt the data, so keep the private key in a secure place. To understand more about public and private key infrastructure, check out [this page](http://en.wikipedia.org/wiki/Public-key_cryptography) on Wikipedia.

### Generation of RSA Encyption Keys

To generate your private and public encryption keys, you can use the OpenSSL software package.  This software comes pre-installed on OSX and Linux systems, and it can be downloaded [here](https://code.google.com/p/openssl-for-windows/downloads/list) for Windows.  Instructions on generating key-pairs using OpenSSL software can be found at [this ODK site](http://opendatakit.org/help/encrypted-forms/).

#### How to generate RSA keys for use with encrypted forms

#### On Windows

1. Ensure that you have downloaded OpenSSL from this [site]( https://code.google.com/p/openssl-for-windows/downloads/list).
2. Extract the downloaded zip file to a directory of your choice, i.e. Desktop;
3. Then, add the directory where OpenSSL was extracted to the Windows environment path. For example C:\Users\William\Desktop\openssl\bin. Check on this [link](http://www.computerhope.com/issues/ch000549.htm) for more details on adding to a path;
4. Open your Windows ‘cmd’ window;
5. Create a 2048-bit private key and write it to the MyPrivateKey.pem file by typing the following command then press **Enter** :`openssl genrsa -des3 -out MyPrivateKey.pem 2048`
<br>
![](/content/screenshots/faq/encrypted-forms-windows-private-key.png)
<br>
6. You will be asked to enter a passphrase - a passphrase is a string of characters similar to a password but is usually longer in length. Type in the passphrase without spaces; for example: mytwosecretkeys; and press Enter. You will not see the passphrase on the screen, so make sure that you type correctly. Verify the passphrase by typing it again in the terminal.
<br>
![](/content/screenshots/faq/encrypted-forms-windows-passphrase.png)
<br>
7. In order to extract your public key, which will be written to a MyPublicKey.pem file, type the following command on the terminal, then press **Enter**: `openssl rsa -in MyPrivateKey.pem -outform PEM -pubout -out MyPublicKey.pem`
<br>
![](/content/screenshots/faq/encrypted-forms-windows-public-key.png)
<br>

#### On OSX

1. Open terminal by typing Cmd+Space and search for Terminal then press **Enter**;
2. Generate a 2048-bit private key and write it to a MyPrivateKey.pem file by typing the following command on the terminal, then pressing **Enter**: `openssl genrsa -des3 -out MyPrivateKey.pem 2048`
<br>
![](/content/screenshots/faq/encrypted-forms-mac-private-key.png)
<br>
3. You will be asked to enter a passphrase, which is a string of characters similar to a password but is usually longer in length. Type in your passphrase without spaces; for example: mytwosecretkeys; and press **Enter**. You will not see the passphrase on the screen, so make sure that you type correctly. Verify the passphrase by typing it again in the terminal.
<br>
![](/content/screenshots/faq/encrypted-forms-mac-passphrase.png)
<br>
4. Then, in order to extract your public key, you need to export it to a MyPublicKey.pem file by typing the following command on the terminal, then pressing Enter:  `openssl rsa -in MyPrivateKey.pem -outform PEM -pubout -out MyPublicKey.pem`
<br>
![](/content/screenshots/faq/encrypted-forms-mac-public-key.png)
<br>

#### On Linux

1. Open terminal by typing Ctrl+Alt+T;
2. Generate a 2048-bit private key and write it to the MyPrivateKey.pem file by typing the following command on the OpenSSL terminal, then pressing **Enter**: `openssl genpkey -out MyPrivateKey.pem -outform PEM -algorithm RSA -pkeyopt rsa_keygen_bits:2048`
<br>
![](/content/screenshots/faq/encrypted-forms-linux-private-key.png)
<br>
3. Then, in order to extract your public key, you need to export it to a MyPublicKey.pem file, by typing the following command on the terminal, then pressing **Enter**: `openssl rsa -in MyPrivateKey.pem -inform PEM -out MyPublicKey.pem -outform PEM -pubout`
<br>
![](/content/screenshots/faq/encrypted-forms-linux-public-key.png)
<br>

Finally, you have your two keys:
<br>
1. **MyPrivateKey.pem** - your private key that you need to save in a secure location. This is the key that you will use to decrypt your data. 
2. **MyPublicKey.pem** - your public key that you can share with anyone you want to be able to share information securely with. This is the public key that you will use to encrypt your data. Paste this into the public_key field in the XLSForm settings worksheet. 

### XLSForm syntax for encrypted forms

Follow these steps to add the correct encryption syntax in your XLSForm:

1. Add a worksheet called **settings**;
2. In this worksheet, create three columns: **id_string**, **submission_url**, and **public_key**. 
* The **id_string** column specifies the form id name.  
* The **submission_url** is the url that will accept the encrypted form submissions. This is the same url that you type into the ODK Collect application under settings to download the forms from your account, which for encrypted forms should be `https://odk.ona.io/your_username`. However, you must add `/submission` to the end of this url (i.e. `https://odk.ona.io/your_username/submission`).  
* The **public_key** column contains the public key (without any spaces or line breaks) that was generated using the OpenSSL software. To include the public_key:
  * Open MyPrivateKey.pem in a text Editor (e.g. Notepad for Windows, TextEdit for OSX, and Vi/Vim Editor for Linex). 
  * Remove leading (- - -) and trail (...) lines and all new-lines.
  * Copy and paste this into the **public_key** field.
<br>
![](/content/screenshots/faq/encrypted-forms-public-key.png)
<br><br>
3. Upload the XLSForm to Ona as usual. You should see a label with the text **encrypted** next to your form name on Ona, as illustrated in the image below:
<br><br>
![](/content/screenshots/faq/encrypted-forms-encrypted-tag.png)
<br><br>
4. Download your encrypted form to your mobile phone using ODK Collect and start collecting data!
<br><br>

### How to decrypt your form

You must use ODK Briefcase to download the encrypted files from Ona and decrypt them locally on your computer using the private key generated earlier. In addition, you will also need Java Cyrptography Extension (JCE) Unlimited Jurisdiction Policy Files for decryption to be successful. Follow these steps to download ODK Briefcase and JCE and decrypt your data:

1. Create a folder on your local machine to store the data once it is decrypted;
2. If you haven’t already done so, download [ODK Briefcase](http://opendatakit.org/downloads/download-info/odk-briefcase/) to your local machine;
3. Also, download and install [JCE](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
  * Select the downloaded UCE zipped archive file in the download folder.
  * Extract the files from the downloaded zipped archive folder
  * Navigate to the extracted directory tree and copy the `local_policy.jar` and `US_export_policy.jar` files to the `/lib/security` directory for Linux/OSX and `\lib\security` for Windows under the installation directory of the Java Runtime Environmen (JRE) for your computer. 
4. Double click the downloaded file to open ODK Briefcase;
5. **PULL** the encrypted form to your local machine.  See the [ODK Briefcase page](http://help.ona.io/faq/odk-briefcase/) for more information on how to pull forms.
6. The form is decrypted only during export. Go to the **Export** tab;
<br><br>
![](/content/screenshots/faq/encrypted-forms-odk-briefcase-export.png)
<br><br>
7. Select the form from the **Form** dropdown;
<br><br>
![](/content/screenshots/faq/encrypted-forms-odk-briefcase-dropdown-form.png)
<br><br>
8. On the **Export Type** dropdown, select **.csv** and **media files**;
<br><br>
![](/content/screenshots/faq/encrypted-forms-odk-briefcase-decrypt-as-csv-media.png)
<br><br>
9. Locate the **Export Directory**, which is the folder you created in step 1;
<br><br>
![](/content/screenshots/faq/encrypted-forms-odk-briefcase-export-directory.png)
<br><br>
10. Search for and choose the **PEM Private Key File** that you generated previously;
11. Click on **Export**. The form data will be decrypted and exported to the folder you created in step 1.
<br><br>
![](/content/screenshots/faq/encrypted-forms-odk-briefcase-decrypt-form.png)
<br>