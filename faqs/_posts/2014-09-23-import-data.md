---
layout: post
title: "How do I import data to an existing form without messing my data up?"
permalink: /faq/import-data
category: faq
---

Using **Import CSV** to upload data is a great way to add form records in bulk or make edits using spreadsheet software rather than Ona's web interface. The safest way to do this is working from a CSV file downloaded from Ona. Here's a step by step process:

1. Make sure data already exists on the form you want to upload data to. You can do this by adding a submisssion through Enketo webforms or ODK Collect. Make sure every question has an answer so you have an idea of what new data should look like.

2. Download a CSV of the data using the download CSV dropdown option on the data view page.

    <img src="/content/screenshots/faq_upload_csv_01.png" width="568px" style="border: 1px solid #cccccc;">

3. Use a spreadsheet software to add data to new rows or edit data in existing rows. For our users, we recommend Google Sheets because it supports UTF-8 encoding/characters, which is required when you upload the file back to Ona. UTF-8 encoded CSVs support special characters (umlaut, grave accent, acute accent, etc) found in non-English languages i.e. French or Spanish. Note: deleting rows will not delete records. You will need to use the Ona website to delete whole records.


4.  When you are done with edits, save the file as a CSV. Note: the file must be UTF-8 encoded. Microsoft Excel does not currently support this. However, there is a [manual workaround](https://help.salesforce.com/apex/HTViewSolution?id=000003837&language=en_US). To download a UTF-8 encoded CSV from Google Sheets, go to File-> Download as->Comma-separated values:

    <img src="/content/screenshots/faq_upload_csv_03.png" width="368px" style="border: 1px solid #cccccc;">

    Then you can upload the file to the Import CSV section of the Details tab of your form data view.

    <img src="/content/screenshots/faq_upload_csv_02.png" width="568px" style="border: 1px solid #cccccc;">

5. After uploading, your data will update. You may need to reload the page to see changes to the data.

A few rules about how importing data currently works:

* Files should be in CSV format (UTF-8 encoded).
* New rows will be added as new records in Ona.
* Changes to existing rows will edit the existing records. Editing records happens when the instanceID or _uuid matches an existing record's instanceID or _uuid, which is the case if the data was originally exported from Ona.
* No deletions are done. Ona cannot detect if a unique row was removed. To delete a record, select a submission on the map or table view and click "Delete".
* Form logic is not applied to data uploaded through Import CSV.
* Right now, Import CSV has no "undo" option, so please test it out before making large changes.
* Currently, errors are not reported. If data doesn't show up, the import probably did not work.