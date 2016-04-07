---
layout: post
title: "What is an XLS Report?"
permalink: /faq/what-is-an-xls-report
category: faq
---

### What is an XLS Report?

An XLS Report is an analytic tool available to Ona users that allows you to create custom reports in Excel™ using your data on Ona.  At the heart of XLS Reports is the flexible power of Excel.  Everything that’s possible in Excel, from formulas to pivot tables to charts, can be used in your XLS Reports.      

XLS Reports are always updated with your form’s latest data and can be downloaded at any time from the form’s Overview page on your Ona account.  

The sections below walk you through the steps for generating an XLS Report from Ona.  The [Mali Airports dataset](https://ona.io/acme/2280/18477) is used as an example

### How do I create an XLS Report Template? 

An XLS Report Template is the Excel file that is used to generate an XLS Report on Ona.  An XLS Report Template is written in Excel, and it contains all of the formulas, macros, and formatting that you want included in your final XLS Report.  Once the XLS Report Template is uploaded to your form on Ona, Ona sends the template and the data to [j2x.ona.io](https://j2x.ona.io/) which in return sends back a downloadable report to Ona.

Here is the [XLS Report Template](https://docs.google.com/a/ona.io/spreadsheets/d/1bfeYJOWt72NBP_nZYruJOgEVIUvIgPTo2av4bjw67X4/edit#gid=965777567) created for the Mali Airports dataset.  You can use it to follow the instructions below.

### Tags in an XLS Template

In order to generate a report based on specific parameters, you must clearly indicate on the template what information is to be extracted from the data submitted. You will use tags to pull specific information from the raw data.

jXLS tags control how your  report will look like after being generated:

<br>
![](/content/screenshots/faq/xls-reports-1.png)

A.  `</jx:forEach items= "${data}" var=”airport”>`is known as the opening tag. This means that the entire data collected will be named "airport". It is advisable you choose a relevant name for your dataset (data collected). In the  example above, we settled on naming the dataset "airport" because the data collected was regarding airports in Mali. 

After naming the dataset "airport", you move to ordering the dataset based on parameters of your choice. 
In the example used above, you have ordered the “airport” dataset based on region, municipality, code, name, type, scheduled service and elevation feet parameters. 

>
**Note:** <br/> You  must order the dataset based on existing information. For example you cannot choose a parameter such as "village" because no data was collected on the village where the airport is located and therefore no information on village is available in the dataset.

Region, municipality, code, name, type, scheduled service and elevation feet are parameters available in the dataset. It means information based on the listed parameters was collected.

B.  `<jx:forEach>` is known as the closing tag. It invokes an end of the dataset.

C.  `${airport.iso_region}` tag searches for region from ‘airport data’ and put it into the corresponding cell.

D.  `${airport.municipality}` tag searches for municipality from ‘airport data’ and put it into the corresponding cell.

E.  `${airport.ident}` tag searches for ident from ‘airport data’ and put it into the corresponding cell.

F.  `${airport.name}` tag searches for name from ‘airport data’ and put it into the corresponding cell.

G.  `${airport.type}` tag searches for type from ‘airport data’ and put it into the corresponding cell.

H.  `${airport.scheduled_service}`tag searches for type from ‘airport data’ and put it into the corresponding cell.

I.  `${airport.deviation_ft}` tag searches for type from ‘airport data’ and put it into the corresponding cell.

>
**Note:** <br/>  If the parameter is within a group, remember to include the group name in your tag e.g. `${group_name_parameter_name}` 

When you upload your template and generate a report, you will get the following [output](https://docs.google.com/a/ona.io/spreadsheets/d/16Lt-FgO-M0NwlNysQlVN_kw0y7__5242BocIL5ZBNsM/edit?usp=sharing):

<br>
![](/content/screenshots/faq/xls-reports-2.png)

### How do I filter data in my report?

You can introduce filters into an XLS Template so as to retrieve only specific information. If you would like to share specific subsets of data you can be able to retrieve that from your dataset. 

For example, you have a dataset capturing number of mobile users in Africa; you can filter to view a dataset that only depicts mobile users in East Africa. You can as well filter the East African data set only to retrieve number of mobile users in Kenya.

In our case, the filter function is introduced on the [Mali Airport XLS Template](https://docs.google.com/a/ona.io/spreadsheets/d/16Lt-FgO-M0NwlNysQlVN_kw0y7__5242BocIL5ZBNsM/edit?usp=sharing) only to display airports which are 1000 ft above ground level.

<br>
![](/content/screenshots/faq/xls-reports-3.png)

`<jx:forEach items="${data}"var=“airport”select=“${airport.deviation_ft>1000}”>`

The line of code above invokes that from the data named ‘d’, you only retrieve elevation feet that is above 1000.

`${airport.iso_region}|${airport.municipality}|${airport.ident}|${airport.name}|${airport.type}|${airport.deviation_ft}`

The line of code above invokes that you retrieve information about region, municipality, code, name, type and elevation feet. It is important to note that all the information retrieved will be subjected to our filter.

Below is an example of the report that is generated from the above template:

<br>
![](/content/screenshots/faq/xls-reports-4.png)

>
**Note:** <br/> All the elevation feet displayed in the above example are over 1000 feet.

### How do I do summation on my report?

You can sum up values in a report by introducing a summation function on an XLS Template.
<br>
![](/content/screenshots/faq/xls-reports-5.png)
<br>
The Excel formula introduced above will sum up the elevation feet values that will be generated in the report.
<br><
 ![](/content/screenshots/faq/xls-reports-6.png)

### How can I generate charts or graphs in an XLS Report?

You can generate graphical representations on an XLS Report provided you introduce an Excel function into the XLS Template that will capture what you intend to graphically display.

You can display a pie chart to show the distribution between the two types of airports in Mali (small airport and medium airport)

1. Create a new worksheet on your template and call it calculations. This will hold the formula for getting the distribution between the two airports.
<br><br>
![](/content/screenshots/faq/xls-reports-7.png)
2. Insert a new worksheet and call it dashboard. It will hold our blank chart.
<br><br>
![](/content/screenshots/faq/xls-reports-8.png)
<br><br>
3. You'll generate the output below. On the calculation sheet you'll notice that when you click on a result (e.g 26) the formula being displayed is similar to the one we introduced in our XLS Template.
<br><br>
![](/content/screenshots/faq/xls-reports-9.png)
<br><br>
4. When you switch to the dashboard sheet of the report you will view the following output.
<br><br>
![](/content/screenshots/faq/xls-reports-10.png)

### Where do I upload my XLS Report Template?

Once your XLS Report Template is authored, follow the steps below to upload your template to your form on Ona:

1. In your project view, select the name of the form that you authored the XLS Report Template for; navigate to the form’s  **Settings** tab, then click **XLS Report Templates** option on the left;
<br><br>
![](/content/screenshots/faq/xls-reports-11.png)
<br><br>
2. Once your template is uploaded, you can download the XLS Report that is generated from the form’s **Overview** page, scroll down to the **XLS Reports section**;
<br><br>
![](/content/screenshots/faq/xls-reports-12.png)
<br><br>
3. Click on the name of the XLS Report Template that you previously uploaded to download it to your computer;
<br><br>
![](/content/screenshots/faq/xls-reports-13.png)

> 
**Note:** <br/> 
* This feature is still in beta. If your template has an error, the report generated will be blank. If you experience this, go through each and every aspect of your template to diagnose the error and upload the template afresh.
<br>
* XLS Reports that contain large data-sets may fail to download and result in a timeout error.  Please notify the Ona team when this happens.

If you have MySQL Workbench installed with an Excel COM add-in, you must disable any MySQL add-ins for Excel so as to be in a position to successfully generate an XLS Reports.

This is the case because Excel add-in hide names and other junk to an excel spreadsheet and therefore will break any scripting you added to the template tab. 
