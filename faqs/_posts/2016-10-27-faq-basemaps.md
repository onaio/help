---
layout: post
title: "How do I add a Basemap?"
permalink: /faq/adding-a-basemap
category: faq
---

### How do I add a basemap?

A basemap provides background or geographical context for the data you want to display on a map.  

Some examples of basemaps include: 

  * Specialized basemaps that highlight specific types of data (e.g. basemaps for transport or cycle route);
  * Special maps or custom built maps (e.g. Pirate and Comic maps from Mapbox);
  * Aerial or satellite views of houses in a rural area; and
  * Neutral maps, which use color gradients to display data (e.g. a population density map or a heat map).

With Ona, it is easy to configure basemaps for your data.
On your form’s **Map View**, you can find several basemaps from Mapbox already added, as shown below:

 ![](/content/screenshots/faq/faq-basemap-1.png)
 
Or you can create and configure your own basemaps using a [Mapbox](https://www.mapbox.com/) account. To add a new basemap to your form from your Mapbox account, navigate to the form’s **Settings page**, then select **Basemaps**.

 ![](/content/screenshots/faq/faq-basemap-2.png)

Click on **Add Basemap**.

![](/content/screenshots/faq/faq-basemap-3.png)
  
This opens the **Add basemap** window where you can input the below information in order to link the new basemap to your data. 

  ![](/content/screenshots/faq/faq-basemap-4.png)
  
1. **Map Provider** - The website used to create the basemap (currently, Ona supports basemaps from Mapbox).
2. **Style URL** - The style url for the basemap.

    To get the **style url** for a map on [Mapbox](https://www.mapbox.com/), select the options icon next to **Edit** for the basemap you want to use, then click on **Share, develop and use**.

    ![](/content/screenshots/faq/faq-basemap-5.png)
   
    A new page will be displayed with the style url as highlighted below. Copy this and add it to the **Add Basemap** window.

    ![](/content/screenshots/faq/faq-basemap-6.png)
   
3. **Name** - The name of your basemap. This will be displayed on the list of available maps for your form.
4. **Attribution** - (Optional) Any attribution to the appropriate organization(s) owning the copyright to the basemap. This attribution will appear in the map view. 

**Save** the information entered.

  ![](/content/screenshots/faq/faq-basemap-7.png)
  
Now that your basemap is linked to your form, you can view it by going to the form’s **Map View** and selecting the layer button in the bottom left as shown below;

  ![](/content/screenshots/faq/faq-basemap-9.png)
  
Select your basemap from the list.

  ![](/content/screenshots/faq/faq-basemap-10.png)
 

>**Note:**<br/>
>
Ona supports vector tiles on all basemaps. Vector tiles are able to deliver large amounts of geographic data in small chunks to a browser or client app. This results in a few key benefits:

<br><br>
  * Styling - As vectors, tiles can be styled when requested allowing one to create maps using many styles on global data;
<br><br>
  * Size - Vector tiles are small, enabling high resolution maps, faster loading times, and efficient caching; and
<br><br>
  * The combination of tile access performance and vector drawing allows the tiles to adapt to any display resolution, which often varies across devices.

