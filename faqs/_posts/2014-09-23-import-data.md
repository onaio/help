---
layout: post
title: "How do I import data to a form using Import CSV?"
permalink: /faq/import-data
category: faq
---

Using **Import CSV** to upload data is a great way to add form records in bulk using spreadsheet software. Keep in mind you can only import data into blank forms (i.e. forms without submissions). The safest way to do this is working from a CSV file downloaded from Ona. Here's a step by step process:

1. Upload your form and send a sample form submission so you can download a data file. Make sure every question has an answer so you have an idea of what new data should look like.

2. Download a CSV of the data using the download CSV dropdown option on the data view page.

    <img src="/content/screenshots/faq/faq_upload_csv_01.png" width="568px" style="border: 1px solid #cccccc;">

3. Use a spreadsheet software to delete the sample submission and add new data. Each submission should go into a new row. We recommend Google Sheets because it supports UTF-8 encoding/characters, which is required when you upload the file back to Ona. UTF-8 encoded CSVs support special characters (umlaut, grave accent, acute accent, etc) found in non-English languages i.e. French or Spanish.


4.  When you are done with edits, save the file as a UTF-8 encoded CSV. Microsoft Excel does not currently support this. However, there is a [manual workaround](https://help.salesforce.com/apex/HTViewSolution?id=000003837&language=en_US). To download a UTF-8 encoded CSV from Google Sheets, go to File-> Download as->Comma-separated values:

    <img src="/content/screenshots/faq/faq_upload_csv_03.png" width="500px" style="border: 1px solid #cccccc;">


5. Before uploading, delete the sample submission on the Ona website because Import CSV only works with empty forms. Go to the table data view, double-click the row to open the submission view, and click Delete. After deleting the submission, upload the file to the Import CSV section of the Details tab of your form data view.

    <img src="/content/screenshots/faq/faq_upload_csv_02.png" width="568px" style="border: 1px solid #cccccc;">

After uploading, your data will update. You may need to reload the page to see changes to the data.

A few rules about how importing data currently works:

* Currently, Import CSV only works for blank datasets. You cannot add data to a form that has existing submissions.
* Files should be in CSV format (UTF-8 encoded).
* Form logic is not applied to data uploaded through Import CSV.
* Right now, Import CSV has no "undo" option, so please test it out before making large changes.
* Currently, errors are not reported. If data doesn't show up, the import probably did not work.