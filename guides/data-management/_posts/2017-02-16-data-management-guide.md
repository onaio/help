---
layout: guide-view
guide_name: "Data Management" 
title: Data Management Guide
permalink: /guides/data-management/
categories: 
    - guides
    - "datamanagement"
published: true   
---

* ##### [Viewing Data](#viewing-data) 
 * [Overview page](#overview-page)
 * [Map view](#map-view)
 * [Photo view](#photo-view)
 * [Summary charts](#summary-charts)
 * [Exporting data](#exporting-data)
* ##### [XLS Reports](#xls-reports)
* ##### [Managing Data](#managing-data)
 * [Editing and cleaning submitted data](#editing-cleaning-data)
 * [Sharing data](#sharing-data)
 * [Deleting form data/submissions](#deleting-form-data)
* ##### [Importing Data from external sources to Ona](#importing-data)
 * [ODK Briefcase](#odk-briefcase)
 * [CSV imports](#csv-imports)

### Data visualisation & analysis

Once data has been submitted to Ona, it is ready to be analyzed in real-time. GPS-tagged data can be viewed on the [map](https://ona.io/onahelp/2839/51147#/map). Users can click on any point to view the full form submission or filter points based on specific answers. Data can also be viewed in the [Table](https://ona.io/onahelp/2839/51147#/table) tab that makes searching and filtering across submissions easy. With the [Charts feature](https://ona.io/onahelp/2839/51147#/chart), you can perform summary statistical analysis of your data and save your charts to a dashboard to access later. You can also take advantage of the formula capabilities of Excel by creating [XLS Reports](https://help.ona.io/faq/what-is-an-xls-report) that update in real-time with the latest data.

In this guide, we will discuss all data visualization features in detail and how to use each. 

### Viewing data

Submitted data can be viewed by loading the form on Ona. 

##### <a name="overview-page"></a>Overview Page

This is the first page of the form. The **Overview** page gives a general summary of your data. There are several smaller sections within the Overview page.

The **Activity** log depicts the number of records submitted to a form, the last date when data was submitted and the number of contributors submitting data. 

The **Submissions** graph under this window displays real-time data, and you can check the number of submissions made on certain dates by moving your cursor over the graph. 

![](/content/screenshots/data-management/data-mgt1.png)

It’s from the **Overview** page that you can export your data under the **Export data** section. This section will be discussed in more details in the exporting data portion of this guide. 

![](/content/screenshots/data-management/data-mgt2.png)

This page also displays a description of your survey if it had been included under the form’s **Settings** page.

![](/content/screenshots/data-management/data-mgt3.png)

[Filtered datasets](https://help.ona.io/faq/filtered-datasets) associated with the form are displayed under the **Linked Filtered Dataset** section of the Overview page. This includes filtered datasets saved in different projects other than the one in which the form is. Both the project and dataset names are indicated. 

![](/content/screenshots/data-management/data-mgt4.png)

You can see the [XLS Report templates](https://help.ona.io/faq/what-is-an-xls-report) uploaded to the form under the **XLS Reports** section. The XLS Report can be downloaded from this page by clicking on the report name. The help icon redirects you to the XLS Reports faq when you click on it.

![](/content/screenshots/data-management/data-mgt5.png)

The **Submit data** section includes links to use when collecting data using either [Enketo](https://enketo.org/) or [ODK Collect](https://play.google.com/store/apps/details?id=org.odk.collect.android). 

It’s under this section that you can upload form submissions to a blank form using the [Import CSV feature](https://help.ona.io/faq/import-data). 

![](/content/screenshots/data-management/data-mgt6.png)

##### <a name="map-view"></a>Map View

For a form that contains GPS points, the data will automatically show up in the **Map** tab as points or geoshapes. You can click on any point to view all the data (including images) associated with that point on the map single submission popup.

![](/content/screenshots/data-management/data-mgt7.png)

You can also filter points on a map based on specific answers by selecting the questions from the **View by** dropdown on the top left corner of the map. 

![](/content/screenshots/data-management/data-mgt8.png)

#### Vector tiles

Map view has been improved through enabling support for vector tile maps. Vector tiles are smaller in size compared to raster tiles. This translates to higher resolution and improved performance allowing you to serve up larger datasets to maps. Have a look at this [blog post](https://blog.ona.io/features/2016/07/22/launching-vector-tile-map-support.html) for more information on the key benefits of vector tiles. 

#### Layer button

The layer button on the Map view groups different map layers together. 

![](/content/screenshots/data-management/data-mgt9.png)

Each layer references the dataset and specifies how it will be portrayed. Ona Maps have several types of layers;

* *Mapbox Basic* - displays simple and flexible maps.

* *Mapbox Outdoors* - a terrain map with detailed elevation and landcover data.

* *Mapbox Streets* - a comprehensive general purpose map that emphasizes accurate legible styling of road and transit networks.

* *Mapbox Bright* - renders complex custom basemaps.

* *Mapbox Light* - provides geographic context while highlighting data on your dashboard.

* *Mapbox Dark* - renders the same geographic context as *Mapbox Light.*

* *Mapbox Satellite* - global map of high resolution imagery.

* *Hi-Res Satellite* (DigitalGlobe) - A global basemap that offers the highest level of detail and accuracy.

#### Adding colors to your Map

You can specify the colors for specific responses to data by assigning colors to specific categories (options) on the choices worksheet of your XLSForm. All you have to do is add an appearance column, then define the colors you want under this column for instance color:blue.

![](/content/screenshots/data-management/data-mgt10.png)

Refer to this [blog post](https://blog.ona.io/general/2015/12/16/custom-color-maps.html) for more infomation on how to give your questions colors. 

##### <a name="photo-view"></a>Photo View

You can view all the images uploaded with data in a photos gallery under the **Photos** tab.

![](/content/screenshots/data-management/data-mgt11.png)

For more information, see the [faq](https://help.ona.io/faq/viewing-images-on-the-photos-tab) on the **Photos** tab.

Images can also be viewed online, both on the **Map** and **Table** tabs, by clicking the links to open the images as shown below. The images open in a different window on the browser. 

![](/content/screenshots/data-management/data-mgt12.png)

You can also click on the view icon on the **Table** tab to see the attached images.  

![](/content/screenshots/data-management/data-mgt13.png)

##### <a name="data-tables"></a>Data Tables

The **Table tab** gives you an overview of submitted data. It’s on this page that you can search across submissions for specific records by typing variable names in the search tab. 

Repeat groups data is usually not displayed on the table. To view data under repeat groups, click on view icon of a single submission, then click on the **Show Repeats** link. 

![](/content/screenshots/data-management/data-mgt14.png)

If your form is authored in multiple languages, you can view your data in a different language besides the default language by selecting a different one from the language dropdown menu. 

![](/content/screenshots/data-management/data-mgt15.png)

Refer to this [faq](https://help.ona.io/faq/adding-multiple-languages) for more information on multiple language forms. 

##### <a name="summary-charts"></a>Summary Charts

Charts enable you to perform summary statistical analysis on your data by creating bar graphs and pie charts. 

You can do simple disaggregation by variables on graphs using the **Aggregate by** icon next to the chart title. 

![](/content/screenshots/data-management/data-mgt16.png)

>
**Note:** <br/> You can only disaggregate charts by a select one question type.

You can get the percentages on the category data for select_one questions by clicking on the percentage button.

![](/content/screenshots/data-management/data-mgt17.png)

Grouping a numeric variable by a select_one question allows you to get the sum and averages on category data. To get the values, click on either value on the **SUM/AVG** toggle button.

![](/content/screenshots/data-management/data-mgt18.png)

You can save charts to a dashboard for future reference or even download them. Charts are downloaded in .png format. Click on the save icon to save a chart to the dashboard or download it.

![](/content/screenshots/data-management/data-mgt19.png)

>
**Note:** <br/> Saving charts to the dashboard is an advanced feature which is included with the paid plans.

#### Editing Chart Titles 

Chart titles are editable from the dashboard. To edit a chart title, save it to the dashboard, then click on the pencil icon. 

![](/content/screenshots/data-management/data-mgt20.png)

This opens a text box where you can type in the new title. Once done, click on **Save Changes** to save the new chart title. 

![](/content/screenshots/data-management/data-mgt21.png)

However, not all users can save and edit charts. Below are the permission levels supported for both saving charts and editing chart title features; 

<table>
  <tr>
    <td></td>
    <td>Can view</td>
    <td>Can view and download</td>
    <td>Can submit</td>
    <td>Can Edit</td>
    <td>Is admin</td>
  </tr>
  <tr>
    <td>Can save charts to the dashboard </td>
    <td></td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
  </tr>
  <tr>
    <td>Can edit chart title</td>
    <td></td>
    <td></td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
  </tr>
</table>


##### <a name="exporting-data"></a>Exporting Data

You can export data in different formats under the **Export Data** section of the form Overview page. The following formats are available for exporting data; 

![](/content/screenshots/data-management/data-mgt22.png)

#### CSV(comma separated values). 

All data is exported in one worksheet with each column following the order of the questionnaire. 

When data with repeat groups is exported in CSV format, the questions in the CSV export don't follow the same order as the questions in the XLSForm if [repeat_count](http://xlsform.org/#repeats) is not used.

#### CSV (Windows Compatible)

This works in a similar way as CSV exports, with the only difference being that, it supports encoding of CSV exports on Windows. 

#### Excel(formatted spreadsheet)

Allows you to export data in xlsx format. For repeat groups data, each repeat group is exported in a different worksheet, but uniquely indexed to the appropriate parent unit of observation.

#### CSV Zip 

With this format, you can export your data in a zipped folder. Data is exported in the same format as CSV exports. 

#### Google Sheet

Google Sheets integration allows you to sync your data directly from your form in Ona to a spreadsheet in Google Sheets. You can learn more about Google Sheets exports from this [guide](https://help.ona.io/guides/onaapps/#google-sheets).

>
**Note:** <br/> Google Sheets exports is an advanced feature which is included with the paid plans.


#### JSON

Exports your data in a JSON file. The JSON file should be openned in a text editor e.g [Brackets](http://brackets.io/) to view the downloaded data.

#### SAV 

SAV exports are compatible with the **SPSS** packages. With SAV exports, you can view choice labels upon opening the file on **SPSS**.

#### KML 

KML stands for Keyhole Markup Language. This format allows you to export all the GPS points collected in one file. Downloaded KML files are primarily opened with the [Google Earth application](https://www.google.com/earth/download/ge/agree.html) which has to be installed to your computer.

#### Zip folder of media attachments

Media files in your data can be downloaded in bulk as a zipped folder using this format. Read more on media files export on this [faq](https://help.ona.io/faq/media-files-export). 

#### Advanced export options

In addition to the above export formats, you can also use **Advanced export options** when exporting your data to include or exclude some parameters. 

![](/content/screenshots/data-management/data-mgt23.png)

Below is a brief description of each option. 

You can opt to split multiple answer choices into separate columns by checking the **Split select multiple answers into separate columns** checkbox. Leaving this checkbox unchecked, exports multiple answer choices in one column separated by a space. 

This is most preferable when uploading your data back using [Import CSV feature](https://help.ona.io/faq/import-data). When a dataset with split multiple answers is imported, the multiple answers are normally hidden. 

Selecting **Remove prefixed group names**, exports your data without the group names. 

To download data with images, select **Include links of images**. This option downloads the image files with links to the filenames of the media attachments but not the files themselves. You can click on the links to view the images online. 

With the checkbox unchecked, only the image filenames are downloaded, which are not viewable. 

**Include labels** allows you to download your data with both field names and labels. 

**Include labels only** downloads your data with the labels only. 

You can choose the delimiter for separating group names from field names under the **Delimiter to use for separating group names form field names** dropdown. There are two options that are currently supported, the **Slash(/)** and **Dot(.).**

![](/content/screenshots/data-management/data-mgt24.png)

You can download data within a specific date range by entering the dates in the **From** and **To** fields. The dates specified are the submission dates.

![](/content/screenshots/data-management/data-mgt25.png)

#### Caveat on exporting data for a form that was replaced

When a form is replaced, the previous form version is overwritten by the new form version with the changes included in the new form. No data is lost, but the changes incorporated in the updated form hide data in the edited/deleted fields. The data as a result is not viewable both online and on data exports. 

Replacing a form with submissions creates different form versions after each form replacement. 

When exporting data from a form that has been replaced, you can only download data from the current form version and not the entire dataset with all the form versions. This is due to the fact that different form versions could be radically different making it difficult to unify them into a single export. 

##### Metadata Fields

There are several metadata fields that are added to the dataset when data is uploaded to Ona. These fields include;

* **Instance ID** - this is a [universal unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier) that's automatically generated once a submission has been finalized. 

* **_submission_time** - time recorded when a submission has been uploaded to the server

* **_tags** - a metadata field that gives more information about format specifications of your data. If no tag has been specified in the XLSForm, then this column is normally blank.

* **_version** - a value used for version control of the form. The recommended format is **year/month/day** 

* **_duration** - renders the total time taken from when a survey starts to when it ends. This value is only captured if both start and end metadata fields have been included in the XLSForm.

* **_submitted_by** - shows the username of a [project collaborator](https://help.ona.io/guides/projects/#sharing-projects) who is assigned Can submit or a higher [permission level](https://help.ona.io/guides/projects/#permission-levels) on a project.

### XLS Reports
Custom XLS Reports are a helpful analytics service from Ona. Ona users can access a beautiful Excel™ report with customized metrics and indicators, updated with the latest data. Read more on how to create XLS Reports on this [faq](https://help.ona.io/faq/what-is-an-xls-report)

### Managing Data

##### <a name="editing-cleaning-data"></a>Editing and Cleaning Submitted Data

Submitted data can be edited online from the **Table** tab. Currently, bulk editing of submissions is not supported, hence you can only edit a single submission at a time. 

To edit data, click on the edit icon in the first column on the left side of a record. 

![](/content/screenshots/data-management/data-mgt26.png)

This opens the record in [Enketo](https://enketo.org/) where you can make edits to your data. Once done editing your data, click on the **Submit** button to submit the changes. 

You can view the changes made to the record by reloading the page. All the edits show up on the **Table** tab. 

##### <a name="sharing-data"></a>Sharing Data

You can share submitted data by creating [filtered datasets](https://help.ona.io/faq/filtered-datasets) including only the fields that you would like to share with other users. You can achieve this by saving the filtered datasets in different projects owned by other users other than in the project where the form is. 

![](/content/screenshots/data-management/data-mgt27.png)

##### <a name="deleting-form-data"></a>Deleting form data/submissions

You can delete unwanted data from the **Table** tab. Bulk deletion of records is not yet supported. You can only delete one record at a time. 

To delete a submission, click on the view icon then select the delete link. 

![](/content/screenshots/data-management/data-mgt28.png)

#### Importing Data from External Sources to Ona.

##### <a name="odk-briefcase"></a>ODK Briefcase
[ODK Briefcase](https://help.ona.io/faq/odk-briefcase) is used to gather and pull data from (or push data to) an ODK Aggregate server, e.g. ona.io.  Additionally, ODK Briefcase can be used to aggregate form submission data from ODK Collect when you are offline 

##### <a name="csv-imports"></a>CSV imports
The [Import CSV feature](https://help.ona.io/faq/import-data) is used to upload data to blank forms.

A platform that doesn’t use the XLSForm standard may not be aggregate compatible. In this case, you should use the data export options in the platform to export your data in csv format first before uploading it to Ona using the Import CSV feature. 


