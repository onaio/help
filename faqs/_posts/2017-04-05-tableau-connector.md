---
layout: post
title: "How do I use the Tableau connector?"
permalink: /faq/tableau-connector
category: faq
---


Tableau is an interactive data visualization software that helps in the easy visualization of data and creation of beautiful dashboards. Ona has integrated this as an App to enable you visualize data collected on Ona.  You can easily connect form submission data on Ona to Tableau and update the data in Tableau, if any changes are made in the server, with only a few steps. 

### Using the Tableau App 

#### Finding the Tableau App on Ona

To find the Tableau App on Ona:

1. Log into your Ona account, go to your project, and then to the form whose data you would like to work on in Tableau.
2. Go to the **Settings** of this form, and select **Apps**.
 ![](/content/screenshots/faq/tableau_connector_1.png)
3. Select **Tableau** from among the Apps integrated into Ona. Select **Next**.
![](/content/screenshots/faq/tableau_connector_2.png)
4. Copy the URL displayed onto your clipboard. 
![](/content/screenshots/faq/tableau_connector_3.png)

#### Connecting your data into Tableau

Once you have the URL on your clipboard, open your Tableau software and proceed as follows:
1. On the left side of your Tableau window, you will see the option to connect to either a file or a server. Under the **To a Server** option, select **Web Data Connector** if it is listed under that option. If not, click on **More…** and select **Web Data Connector** from the options that appear.
![](/content/screenshots/faq/tableau_connector_4.png)
2. A Web Data Connector window will appear with a text box. Paste the URL copied earlier from your clipboard into this textbox and press the **Enter** key.
![](/content/screenshots/faq/tableau_connector_5.png)
3. The server will load, and a green button written **Get Ona Data** will appear. Click on this button and the schema will load.
![](/content/screenshots/faq/tableau_connector_6.png)
4. Click on the **Update Now** button, the data from the form you chose on Ona will be loaded into Tableau.
![](/content/screenshots/faq/tableau_connector_7.png)
5. You can then create your charts on Tableau using your loaded data. 
![](/content/screenshots/faq/tableau_connector_8.png)

### Refreshing data from Ona into Tableau

#### Tableau Public:

After you have loaded data into Tableau, you may add new submissions to your form in Ona. To update the data with these new submissions on Tableau:

1. Go to the Menu Bar on Tableau and click on **Data**.
2. Place your pointer on the data source that you want to update, a list will appear to the right.
![](/content/screenshots/faq/tableau_connector_9.png)
3. Click **Refresh**, and you will see a warning message pop up. Alternatively, you could press F5. Click **Yes** on the warning message. Your data and charts will be updated. 
![](/content/screenshots/faq/tableau_connector_10.png)

#### Tableau Desktop:

1. Go to the Menu Bar on Tableau and click on **Data**.
2. Place your pointer on the data source that you want to update, a list will appear to the right.
![](/content/screenshots/faq/tableau_connector_11.png)
3. Scroll down to **Extract**, another list will appear to the right.
![](/content/screenshots/faq/tableau_connector_12.png)
4. On this sub menu, there will be two main options in regards to refreshing your data:

    1. **Refresh (Incremental)** - This will pull in the new records only. This is recommended as it will take less time.
    2. **Refresh (Full)** -  This will overwrite the data that has been pulled in earlier with all the data from Ona, including new records. A warning message will pop up to warn you about the duration this could take. Click **Yes** on the warning message. Your data and charts will be updated. 
![](/content/screenshots/faq/tableau_connector_13.png)

#### Adding another Form/ Data Source

If you would like to link data from one form with another form, you could add another data source.

To do this:

1. Go to the **Menu Bar** on Tableau and click on **Data**.
![](/content/screenshots/faq/tableau_connector_14.png)	
2. Click on **New Data Source** and repeat the [steps explained above](#bookmark=id.jgf2xjd8oq5) on connecting to Ona up to loading the data into Tableau. You can now toggle between your data sources by clicking on them on the upper left side of your screen.
![](/content/screenshots/faq/tableau_connector_15.png)
**NOTE:** For forms with a lot of columns (over 300), the data may not load on the initial table view, but is already in Tableau. Go ahead and click on Sheet1 to create an extract.

