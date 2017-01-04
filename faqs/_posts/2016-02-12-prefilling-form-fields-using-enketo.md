---
layout: post
title: "How do I prefill form fields using Enketo Express?"
permalink: /faq/prefilling-form-fields-using-enketo
category: faq
---

If there are multiple fields you would like to prefill then you would have to separate each of the other query parameters with an ampersand like the following example:
  
    https://enketo.ona.io/_/?d[/xpath/to/field_name]=<prefill-value>&d[/xpath/to/other_field_name]=<prefill-value>#ABC2

To retrieve the xpath of the field, you would need the xml of the form. You can retrieve the links to the xml representation of the forms you have access to by visiting `https://odk.ona.io/<your-username>/formList` and copying the contents in between `downloadUrl` tag for the specific form i.e when you visit `https://odk.ona.io/<your-username>/formList`, you will get something similar to the following:

     <xforms xmlns="http://openrosa.org/xforms/xformsList">
         <xform>
             <formID>form_a</formID>
             <name>Form A</name>
             <majorMinorVersion/>
             <version/>
             <hash>md5:64bdafcee354f536c99a790ab1668330</hash>
             <descriptionText/>
             <downloadUrl>https://odk.ona.io/john/forms/1234/form.xml</downloadUrl>
             <manifestUrl>https://odk.ona.io/john/xformsManifest/1234</manifestUrl>
         </xform>
         <xform>
             <formID>form_B</formID>
             <name>Form B</name>
             <majorMinorVersion/>
             <version/>
             <hash>md5:83436c39306a2e982ccc7ce28e12fe0b</hash>
             <descriptionText/>
             <downloadUrl>https://odk.ona.io/john/forms/2345/form.xml</downloadUrl>
             <manifestUrl>https://odk.ona.io/john/xformsManifest/2345</manifestUrl>
         </xform>
     </xforms>
 
 From the above example, to get the xml representation of **Form B** follow the steps below:
  
   * Copy text in between the tag `downloadUrl`in our case `https://odk.ona.io/jane/forms/2345/form.xml`and open in a new tab;
   * Once you get to the webpage, right click and select **View page Source** to open the xml page;
   * The section that has the xpath to the fields in that particular form have `bind` tags and the xpath value can be found on the `nodeset` attribute on the same tag. 
   
See the example below:
    
    ...
    <bind nodeset="/form_B/browser_name" type="select"/>
    <bind nodeset="/form_B/age_limit" type="int"/>
    <bind nodeset="/form_B/current_location" type="geopoint"/>
 
 This means that if I wanted to prefill field `age_limit` when the webform loads, my url would be as follows:
 

    https://enketo.ona.io/_/?d[/form_B/age_limit]=45#ABC2
 
 > 
 **Note:**<br/> The xpath is inside square brackets and it's preceeded with letter `d`.
 
The format for [multiple choice questions](http://xlsform.org/#multiple-choice) would be the same,  however the value has to be one of the names you have set on the **choices** worksheet for that specific field. Additionally, if you have mutliple select fields and you would like to prefill more than one option, you will have to seperate your value with `%20` which means space. See the example below:
 
    https://enketo.ona.io/_/?d[/form_B/multiple_select_field]=value1%20tvalue2
 
The url above means that the field `multiple_select_field`, which is a multiple select field, will have options with names **value1** and **value2** selected when the form loads.
 
If you have a geopoint field, the format would be:

    https://enketo.ona.io/_/?d[/test/locate]=<latitude>%20<longitude>#ABC2

  
This means you might have something like:
  
    https://enketo.ona.io/_/?d[/test/locate]=-2.3%2033.788<longitude>#ABC2
    
 >
 **Note:**<br/> The characters after the pound sign (#) are dependent on the Enketo webform URL, found in the **Overview** page of your form.