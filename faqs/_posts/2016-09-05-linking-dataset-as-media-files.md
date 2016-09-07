---
layout: post
title: "How do I link a dataset as a media file to another form?"
permalink: /faq/linking-dataset-as-media-files
category: faq
---

### Link a dataset as a media file to another form

Ona has now made it possible for a form or filtered dataset to be specified as a media file for another form. Used in conjunction with the **pulldata() function**, this allows you to pull data from other dynamic datasets and surveys (i.e., other forms in your Ona account which are still active and accepting submissions) in the same or different project, similar to [pulling data from a pre-loaded CSV file](http://xlsform.org/#how-to-pull-data-from-csv). This feature can only be used with ODK Collect at this time. 

To link another dataset to a form in your Ona account, navigate to the form’s **Settings** page, then select **Form Media Files**.

![](/content/screenshots/faq/linking-dataset-as-media-files_01.png)

Click on **Select dataset to link** to get a list of the forms and filtered datasets that you can link to your form.

![](/content/screenshots/faq/linking-dataset-as-media-files_02.png)

This opens the **Link a dataset** window where you can select the project in which the dataset is located, then name the dataset to be linked. In the **File name** field, fill in the name you wish to call the linked dataset. 

![](/content/screenshots/faq/linking-dataset-as-media-files_03.png)

Click on **Link Dataset** to save the changes. Your linked dataset will appear on the page. The file name given above will be prepended with **xform** and then a **number**, which you can ignore.


![](/content/screenshots/faq/linking-dataset-as-media-files_04.png)

Now that the dataset is linked to your form, you can pull data from the linked dataset into your form using the [pulldata function](http://xlsform.org/#how-to-pull-data-from-csv) under the calculation column.

The file name of the linked dataset entered above will be the file name referenced in the pulldata() function (i.e., locations).

![](/content/screenshots/faq/linking-dataset-as-media-files_05.png)

The field names from which data are being pulled from the linked dataset (i.e., the data values from the **region** columns in the linked dataset) should be referenced in the **pulldata()** function exactly as they appear in the linked dataset.

![](/content/screenshots/faq/linking-dataset-as-media-files_06.png)

>
**Note:** <br/> The linked dataset is a live dataset that can change after a user initially downloads. If the linked dataset changes (i.e., data is added, edited, or deleted), the form has to be downloaded again in ODK Collect because the changes are not updated automatically. Therefore, you will want to submit all data collected using your form **before** updating the linked dataset (i.e., submitting/deleting data)

You can then reference this value in notes (as in the example above), constraints, relevant fields, etc., just as you would reference any other field.
