---
layout: post
title: "How do I import data to an existing form without messing my data up?"
permalink: /faq/import-data
category: faq
---

Using **Import CSV** to upload data is a great way to add form records in bulk or make edits using spreadsheet software rather than Ona's web interface. The most fool-proof way to do this is working from CSV file downloaded from Ona. Here's the step by step process:

1. Make sure data already exists on the form you want to upload data to. You can do this through Enketo webforms or ODK Collect. Make sure every question has an answer.

2. Download a CSV of the data using the download CSV dropdown option on the data view page.

    <img src="/content/screenshots/faq_upload_csv_01.png" width="568px">

3. Use your favorite spreadsheet software to add data to new rows or edit data in existing rows. Note: deleting rows will not delete records. You will need to use the Ona website to delete whole records.

4. When you are finished updating the CSV file, upload the file to the Import CSV section of the Details tab of your form data view.

    <img src="/content/screenshots/faq_upload_csv_02.png" width="568px">

5. After uploading, your data will update. You may need to reload the page to see changes to the data.

A few rules about how importing data works:

* Files should be in CSV format.
* New rows will be added as new records in Ona.
* Changes to existing rows will edit the existing records. Editing records happens when the instanceID or _uuid matches an existing record's instanceID or _uuid, which is the case if the data was originally exported from Ona.
* No deletions are done. Ona cannot detect if a unique row was removed. To delete a record, select a submission on the map or table view and click "Delete".



