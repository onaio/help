---
layout: post
title: "How do I link a dataset as a media file to another form?"
permalink: /faq/linking-dataset-as-media-files
category: faq
---

### Link a dataset as a media file to another form

Ona has now made it possible for a form or filtered dataset to be specified as a media file for another form. Used in conjunction with the **pulldata() function**, this allows you to pull data from other dynamic datasets and surveys (i.e., other forms in your Ona account which are still active and accepting submissions) in the same or different project, similar to [pulling data from a pre-loaded CSV file](http://xlsform.org/#how-to-pull-data-from-csv).

To link another dataset to a form in your Ona account, navigate to the form’s **Settings** page, then select **Form Media Files**.

![](/content/screenshots/faq/linking-dataset-as-media-files_01.png)

Click on **Select dataset to link** to get a list of the forms and filtered datasets that you can link to your form.

![](/content/screenshots/faq/linking-dataset-as-media-files_02.png)

This opens the **Link a dataset** window where you can select the project in which the dataset is located, then the name of the dataset to be linked. In the **File name** field, fill in the name you wish to call the linked dataset. 


![](/content/screenshots/faq/linking-dataset-as-media-files_03.png)


Click on **Link Dataset** to save the changes. Your linked dataset will appear on the page.


![](/content/screenshots/faq/linking-dataset-as-media-files_04.png)

Now that the dataset is linked to your form, you can pull data from the linked dataset into your form using the [pulldata function](http://xlsform.org/#how-to-pull-data-from-csv) under the calculation column.

The file name of the linked dataset entered above will be the file name referenced in the **pulldata()** function (i.e., locations).

![](/content/screenshots/faq/linking-dataset-as-media-files_05.png)

The field name from which data is being pulled from the linked dataset (i.e., the data value from the **region** column in the linked dataset) should be referenced in the **pulldata()** function exactly as it appears in the linked dataset.

![](/content/screenshots/faq/linking-dataset-as-media-files_06.png)

You can then reference this value in notes (as in the example above), constraints, relevant fields, etc., just as you would reference any other field.

### Pulling data from a group

To pull data from a group, define both the group name and field name of the column in the linked dataset where the data will be pulled from in the pulldata() function. Make sure to use the **Period(.)** as the separator between the group and field names as shown in the example below; 

![](/content/screenshots/faq/linking-dataset-as-media-files-07.png)

Below is a brief description of the parameters in the function **pulldata('locations', 'section1.county', 'secction1.id', ${id})** 

* `locations` is the file name of the linked dataset.
* `section1.county` is the column in the linked dataset where the data will be pulled from. **section1** is the group name, and **county** is a field name defined under the group.
* `section1.id` is the key field to lookup with **section1** being the group name and **id** a field name defined under that group.
* `id` is the link to the row in the lookup field, which is defined in the XLSForm that's pulling data from the linked dataset.

>
**Note:** <br/> The linked dataset is a live dataset that can change after a user initially downloads the form that it is linked to. If the linked dataset changes (i.e., data is added, edited, or deleted), the form it is linked to has to be downloaded again in ODK Collect for the user to be able to have the latest updates to the linked dataset. Before downloading the form again, make sure you submit all pending form submissions in ODK Collect.

