---
layout: post
title: "How do filtered data views work?"
permalink: /faq/filtered-data-view
published: true
category: faq
---

A filtered data view is a subset of form submission data that fulfils certain conditions set by the user. They are useful when you want to share a dataset with other people, but would like to keep certain fields or records private. 

Filtered data views allow you to select certain fields from the data you’d want to show, enabling you to hide data such as names or sensitive details. You can also filter responses so records only appear if specific answers show up.

Access to filtered data views work the same way as datasets projects. You can save it to a different project than the original parent dataset and control who has access to the data.

### Creating a filtered data view

Filtered data views can be created from a form (with submissions) using the **Create filtered data view** option in the form’s dropdown menu. Below are the steps to follow to create Filtered Data Views:

1. Locate the dataset you would like to create a filtered data view for on your Project page. Click on the dropdown menu next to the form and select **Create filtered data view.**
<br><br>
![](/content/screenshots/faq/faq-create-filtered-data-view.png)
<br><br>
2. In the create filtered data view wizard, select the fields you want to show by ticking the checkboxes to the left of the fields. Click the checkbox above your fields to toggle **All fields.** Leave the checkbox unchecked in fields that you want to hide in your filtered data view. 
<br><br>
![](/content/screenshots/faq/faq-filtered-all-fields.png)
<br>
3. When you are done selecting which fields you want to show, click the **Next** button at the bottom.
<br><br>
![](/content/screenshots/faq/faq-filtered-data-view-next.png)
4. In the next step, you can **Add filters** to show records that match specific answers to fields. For example, if you have a field for “Gender of household Head”, you can add a filter for “Female” (in our dataset , the option "Female" is represented by the variable name "2") so that only records that answered that field with “Female” show up in the filtered data view and records that have the answer “Male” are hidden. There is more information on this step below in the [How filters work](#filters) section. Click the **Next** button when you are done adding filters.
<br><br>
![](/content/screenshots/faq/faq-add-filters.png)

5. To **Confirm and Save** your created filtered data view, enter the **Name of linked data view** in the textbox.
<br><br>
![](/content/screenshots/faq/faq-linked-dataview-name.png)

6. From the Project dropdown menu, select the project you’d like the filtered data view to be placed in. If you’d like filtered data view to be placed in a different project than the original parent dataset select the **New Project** option.
<br><br>
![](/content/screenshots/faq/faq-filtered-dataview-project.png)

7. Once you’re done click on the **Save** button.
<br><br>
![](/content/screenshots/faq/faq-filtered-dataview-save.png)

8. You should see a label with the text **filtered data view** next to your created filtered data view. The created filtered data view can be accessed in the Project it is in.
<br><br>
![](/content/screenshots/faq/faq-filtered-data-view.png)

> 
**Note:**<br/> 
>
* A filtered data view inherits the same permission settings as the project it is in. The permissions of the parent dataset does not impact the permissions of the child filtered data view.
<br><br>
* If you choose to hide fields in a filtered data view, editing records in that filtered data view will be disabled for all users. Read more about why in the [When editing becomes disabled...](#disabled) section below. 


### How filters work<a name="filters"></a>

Filters in filtered data views allow you to show only records with specific answers. In other words, if you were viewing the data table, only show specific rows with fields that match your filter would show and rows that do not will be hidden.

After selecting the fields you want to show (step 3 above), you’ll navigate to the **Add Filters** page. To add a filter follow the steps below:

1. Select a specific field from your dataset on the **Select Field** drop-down menu, e.g.Informal settlement
<br><br>
![](/content/screenshots/faq/faq-select-filtered_field.png)
2. From the constraint list, select a **Constraint.** The constraint selected varies from the type of question, for instance if it’s a text field then a constraint like Equals will be selected. For integer fields a constraints such as Greater than or Less than.
<br><br>
![](/content/screenshots/faq/faq-filtered-dataview-constraint.png)
3. Enter the **Filter value** in the text box and click the **Next** button to create the filtered data view;
<br><br>
![](/content/screenshots/faq/faq-filtered-dataview-constraint.png)
3. Enter the **Filter value** in the text box and click the **Next** button;
<br><br>
![](/content/screenshots/faq/faq-filtered-dataview-value.png)

>
**Note:** <br/> You can add as more filters by clicking on the **Add Filter** button.

### Adding and editing records in filtered data views<a name="editing"></a>

Records in a filtered data view are not actually new, duplicate records &mdash; they are the same records of the parent dataset with hidden information. For adding and editing records, this has a few implications:

- For new records: records cannot be added to the filtered data view, they must be added to the parent dataset. Otherwise, there is a chance that the new submission won't match the filters of the filtered data view. A user must be have **Can Submit** or greater [permissions](https://help.ona.io/guides/projects/#permission-levels) on the parent dataset to be able to do add new records to the parent dataset.

- For editing records: when those records are edited from the filtered data view, the data in the parent dataset is changed. Therefore, all of the "child" filtered data views of the parent dataset will reflect the changes.

### When editing becomes disabled in a filtered data view <a name="disabled"></a>

Filtered data views are a helpful way to share information without compromising private data. However, because Ona data is form based, data editing is implicitly tied to the form. This means editing data is done through the form which must be shown in its entirety due to technical reasons &mdash; which in turn means editing data must be disabled when fields are hidden in order to ensure privacy permissions are upheld.
