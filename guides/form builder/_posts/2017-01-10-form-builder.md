---
layout: guide-view
guide_name: "Form Builder" 
title: "Ona Form Builder"
permalink: /guides/formbuilder/
categories: 
  - guides
  - "formbuilder"                
published: true
---

* [Creating Forms with Ona Form Builder](#ona-form-builder)
* [Creating a Form](#creating-a-form) 
   * [Adding a Question](#adding-question)
   * [Deleting a Question](#deleting-question)
   * [Moving a Question](#moving-question)
   * [Duplicating a Question](#duplicating-question)
   * [Form Preview](#form-preview)
   * [Saving a Form](#saving-form)
* [Question Settings](#question-settings)
  * [Question Options](#question-options)
  * [Adding a Skip Logic](#skip-logic)
  * [Validation Criteria or Constraints](#constraints)
* [Grouping Questions and Repeating Groups](#grouping-repeating-questions)
  * [Group Settings](#group-settings)
  * [Adding or Removing Questions in a Group](#adding-removing-questions)
  * [Creating a Group of Repeating Questions](#group-repeating-questions)
* [Form Settings](#form-settings)
  * [Form Layout](#form-layout)
  * [Form ID](#form-ID)
* [Advanced Question Options](#advanced-options)
  * [Adding Calculate Questions](#calculate-questions)
  * [Adding Choices to a Question](#adding-choices)
  * [Metadata Questions](#metadata-questions)
  * [Cascading Select Questions](#cascading-select-questions)
* [Editing an Existing Form](#editing-existing-form)

### <a name="ona-form-builder"></a>Creating Forms with Ona Form Builder

Ona Form Builder is another way for you to create and build questionnaires. The form builder saves time and allows everyone to quickly start collecting data.

##### <a name="creating-a-form"></a>Creating a Form

Open the project in which the form is to be published, then click on **Form builder** as shown below:

![](/content/screenshots/formbuilder/form-builder-1.png)

A new window will appear to create a new form. Start with entering the form’s title on the **Enter form name tab**, for example, **Test Form**.

![](/content/screenshots/formbuilder/form-builder-2.png)

##### <a name="adding-question"></a>Adding a Question

Add questions in your form by clicking on the ‘+’ sign that is below every textbox.  

![](/content/screenshots/formbuilder/form-builder-3.png)

Once you have typed in the question, click on the **Add question** button as shown below.

![](/content/screenshots/formbuilder/form-builder-4.png)

A list of **question types** will be displayed. Select the option that’s applicable to the question. 

![](/content/screenshots/formbuilder/form-builder-5.png)

Read more about the [different question types](http://xlsform.org/#question-types) that can be used when creating a form.

##### <a name="deleting-question"></a>Deleting a Question

Delete a question by clicking on the trash can icon as shown. A pop-up window will appear to confirm that the question will be permanently deleted. Please note that this action cannot be undone.

![](/content/screenshots/formbuilder/form-builder-6.png)

##### <a name="moving-question"></a>Moving a Question

Drag and drop to move a question and place it where you prefer.

##### <a name="duplicating-question"></a>Duplicating a Question

If you want use the same question again, you can select the **duplicate icon** as shown below.

![](/content/screenshots/formbuilder/form-builder-7.png)

##### <a name="form-preview"></a>Form Preview

Preview your form anytime by selecting the preview icon as shown below. 

![](/content/screenshots/formbuilder/form-builder-8.png)

A pop window will appear showing a snapshot of how the form will be displayed on [Enketo](https://help.ona.io/guides/data-collection/#introduction-to-enketo).

![](/content/screenshots/formbuilder/form-builder-9.png)

You can **validate** the form to see if there are any errors as seen below.

![](/content/screenshots/formbuilder/form-builder-10.png)

##### <a name="saving-form"></a>Saving a Form

Select the **Save** option on the form builder, as shown, to **upload** the form to Ona. The form will be saved using the title provided.

![](/content/screenshots/formbuilder/form-builder-11.png)

A message will be displayed to indicate that the form has been successfully updated and published to Ona.

![](/content/screenshots/formbuilder/form-builder-12.png)

Refresh the page to view the uploaded form in the project page.

### <a name="question-settings"></a>Question Settings

You can add advanced settings for each question by selecting the **Settings** button as shown.

![](/content/screenshots/formbuilder/form-builder-13.png)

##### <a name="question-options"></a>1. Question Options 

![](/content/screenshots/formbuilder/form-builder-14.png)

Question options have the following features:

* **Data Column Name** - This specifies the unique variable name for the entry. When creating a form, ensure that two entries do not have the same name.

  **(Optional)** Rename the column name to have a unique_id. Only letters, numbers and underscores are allowed (separate the words using underscores, spaces are not allowed).

* **Hints** - Hints will be displayed in the data collection form beneath the question to direct users on how to answer the question. Read more on [adding hints ](http://xlsform.org/#hints)to your form.

* **Mandatory Response** - This option should be selected if the question requires a response before submitting the form.

* **Default Response** - Adding a default field means that a question will be pre-populated with an answer when the user first sees the question.

* **Appearance** - This allows you to use different [appearance attributes](http://xlsform.org/#appearance) to determine how questions will be formatted in the form. 

##### <a name="skip-logic"></a>2. Adding a Skip Logic

![](/content/screenshots/formbuilder/form-builder-15.png)

 *  **Adding a condition** - By default, all questions are visible in the form. This function enables you to skip a question or make an additional question appear based on the response to a previous question. 
   
Below are steps to follow when adding a skip logic.

1. Click on **Add a condition**, a drop down list of the previous questions will be displayed.

    ![](/content/screenshots/formbuilder/form-builder-16.png)

2. Select the relevant question as shown below.

    ![](/content/screenshots/formbuilder/form-builder-17.png)

3. Enter the relevant condition that should be met before the question is displayed.

    ![](/content/screenshots/formbuilder/form-builder-18.png)

4. The condition set for the below example means the question will be displayed when the choice option ‘**Yes**’ is selected for the question **Are there any children in the household?**

    ![](/content/screenshots/formbuilder/form-builder-19.png)

5. You can enter more relevant conditions or skip logic by selecting **Add another condition** as shown below.

    ![](/content/screenshots/formbuilder/form-builder-20.png)

6. If you have more than one relevant condition for a question, you can determine whether the question should match all or either of the criteria set.

    ![](/content/screenshots/formbuilder/form-builder-21.png)

7. Delete a set condition by clicking on the trash can icon highlighted below.

    ![](/content/screenshots/formbuilder/form-builder-22.png)

 
 * **Manually enter your skip logic in XLSForm code** - You can also enter skip logic using [XLSform code](http://xlsform.org/#relevant). 

    ![](/content/screenshots/formbuilder/form-builder-23.png)

##### <a name="constraints"></a>3. Validation Criteria or Constraints

 Constraints allow you to avoid invalid responses from the interviewers and respondents. When an invalid response is entered, a message is displayed to help the user understand why. Add a constraint, similar to how you did a skip logic, by adding a condition or using XLSForm code.  Read more on [constraints](http://xlsform.org/#constraints) and find more examples. 
 
 To add a constraint select the **validation criteria** under the question settings as shown. Add a custom message to better guide the user, or a default error message will appear. This is the message the respondent will receive after entering an invalid response.

 ![](/content/screenshots/formbuilder/form-builder-24.png)

### <a name="grouping-repeating-questions"></a>Grouping Questions and Repeating Groups

This is a way to group related questions. Click on all the questions (*highlighted in blue*) you would like to group and select the group button as shown below. When using a Windows machine, press **control** while selecting the questions and **command** when using a Mac machine.

![](/content/screenshots/formbuilder/form-builder-25.png)

**Rename** the group label for your survey.

![](/content/screenshots/formbuilder/form-builder-26.png)

##### <a name="group-settings"></a>Group Settings

These settings allow you to customize the group will function in your form. Select the settings option on the right as shown below.

![](/content/screenshots/formbuilder/form-builder-27.png)

  (Optional) Rename the group name to have a unique_id. Only letters, numbers and underscores are allowed (separate the words using underscores, spaces are not allowed).

   ![](/content/screenshots/formbuilder/form-builder-28.png)

  Select the appearance checkbox if you would like to have the questions  appear in the same screen. 

   ![](/content/screenshots/formbuilder/form-builder-29.png)

  You can also add a [skip logic](https://help.ona.io/guides/formbuilder/#skip-logic) for the group.

##### <a name="adding-removing-questions"></a>Adding or Removing Questions in a Group

Add or remove questions from the group by dragging them in and out of the group.

![](/content/screenshots/formbuilder/form-builder-30.png)

##### <a name="group-repeating-questions"></a>Creating a Group of Repeating Questions

Repeat questions can be asked/answered multiple times. Follow the below steps to create a group of repeating questions.

  1. Select the questions to be repeated and [group](https://help.ona.io/guides/formbuilder/#grouping-repeating-questions) them. 

      ![](/content/screenshots/formbuilder/form-builder-31.png)

  2. Click on the group settings option and check the **repeat group if necessary**. The user will be able to enter details in this group as many times as required.

      ![](/content/screenshots/formbuilder/form-builder-32.png)

### <a name="form-settings"></a>Form Settings

##### <a name="form-layout"></a>Form Layout

In Enketo webforms, you can customize how your form is displayed. In addition to the default theme, there are two alternative themes that can be used and combined: **Multiple Pages** and **Grid Theme**.

To define the theme or layout for your form, select the **Layout** option as shown below and select the desired theme/layout.

 ![](/content/screenshots/formbuilder/form-builder-33.png)

1. **Grid theme** - This displays questions nicely and compactly. It can display multiple questions per row, where the default is 4 questions per row, and is determined in appearance column of each question. It also automatically adjusts for questions with skip logic by showing or hiding questions. See this [documentation](http://xlsform.org/#grid) or [blog post](http://blog.enketo.org/gorgeous-grid/) for more details.

   ![](/content/screenshots/formbuilder/form-builder-34.png)

2. **Multiple pages** - The theme displays questions on multiple pages. It can display one question or a group of questions at one time on a screen. See this [documentation](http://xlsform.org/#multiple) or [blog post](http://blog.enketo.org/pages/) for more details.

   ![](/content/screenshots/formbuilder/form-builder-35.png)

3. **Multiple pages + Grid theme** - This combines both the multiple page and grid theme layout on the survey form. Each question or group of questions will be displayed in a grid as seen here.

   ![](/content/screenshots/formbuilder/form-builder-36.png)

##### <a name="form-ID"></a>Form ID

Form ID refers to the unique ID string that helps users to identify a form in Ona. Forms created using the form builder will have a random form-id generated to avoid having duplicate forms. You can access the form-id by viewing it on the Setting page in the selected Form on Ona as shown.

 ![](/content/screenshots/formbuilder/form-builder-37.png)

### <a name="advanced-options"></a>Advanced Question Options

##### <a name="calculate-questions"></a>Adding Calculate Questions

Some forms might need advanced [calculations](http://xlsform.org/#calculation). This can be done by selecting the **calculate** question type when adding the question. 

Referencing another question to write the calculate expression might be needed. If this is the case, ensure the referenced question has a fixed name on the **Settings** option. When referencing other questions always use the unique name or the data column name inside the question, referencing the style. E.g.**${question_name}**

Here is a step-by-step description on how to add a calculate question.

 1. Add the questions to be referenced to the calculate questions.

     ![](/content/screenshots/formbuilder/form-builder-38.png)

 2. (Optional) Edit the column name of the questions, since this is what will be used for referencing when writing the calculate expression. 

     ![](/content/screenshots/formbuilder/form-builder-39.png)

 3. Add the calculate expression, reference the relevant questions and select the* calculate *question type as shown below.

     ![](/content/screenshots/formbuilder/form-builder-40.png)
     
You can use the answer to this Calculate question for other purposes, such as building your skip logic (for example only ask a follow-up question above a certain income threshold) or by displaying it inside a Note.

##### <a name="adding-choices"></a>Adding Choices to a Question

When adding a question with choices, you will need to choose either **Select One** or **Select Multiple** as the question type.

Below is a step-by-step description on how to add choices to a question:

  1. Add the desired question and select **Select One** as the question type as shown below.

     ![](/content/screenshots/formbuilder/form-builder-41.png)

  2. A dialogue box will be displayed to add the different choice options as shown in the screenshot below. Click in the textbox and delete the default option. Fill in your desired choices to be included.

     ![](/content/screenshots/formbuilder/form-builder-42.png)

  3. Enter the value for the option on the text box highlighted below.

     ![](/content/screenshots/formbuilder/form-builder-43.png)

  4. (Optional) Add "Other" as part of the choice list.

     ![](/content/screenshots/formbuilder/form-builder-44.png)

  5. Add a followup question with a ‘Text’ question type for the respondent to manually specify if "Other" is selected.

     ![](/content/screenshots/formbuilder/form-builder-45.png)

  6. Include skip logic for this question using question’s settings.  It should be displayed when ‘Other country’ is selected in the previous question (i.e. Where was the household member born?) as shown below.

     ![](/content/screenshots/formbuilder/form-builder-46.png)

##### <a name="metadata-questions"></a>Metadata Questions

These are optional advanced features that can be added in the survey. Click the **metadata settings** icon at the beginning of the form as shown.

![](/content/screenshots/formbuilder/form-builder-47.png)

Select the data you would like collected during data collection.The [metadata questions](http://xlsform.org/#metadata) have been preset on the form builder as shown below, select one or all of the options.

![](/content/screenshots/formbuilder/form-builder-48.png)

##### <a name="cascading-select-questions"></a>Cascading Select Questions

Cascading select questions are questions whose choices depend on the answers from previous questions. Cascading select questions help filter only relevant choices by simplifying the number of choices available to the respondent. This feature is commonly utilized for determining a respondent’s location, where the subsequent locations are filtered based on previous responses (i.e. region > district > village).

Below are steps to follow when adding Cascading Select Questions 

Follow along with these instructions by using [this example template](https://docs.google.com/a/ona.io/spreadsheets/d/19RyMpsDcFHGbl6rn_EQ2m-jNz2b3WPV6GWVmBzLlYU0/edit?usp=sharing). 

1. In a spreadsheet program such as Google Spreadsheet or Excel, create a template for the questions and response you want to add. 

    a. Label the first column **list_name**. Each unique item in this column will result in a new question in the formbuilder. Repeat the text for this unique item for each possible response. The unique items should all be in lowercase. E.g. The first unique item is ‘providence’ as seen in screenshot below. 

    b. Label the second column **name**. For each unique item in the list_name column, there will be a list of options in this column, which will be a unique value consisting of only letters, numbers, and underscores. E.g For the providence question, these unique values are ‘Coast’ and ‘Rift Valley’ - as seen in screenshot below.

    c. Label the third column **label**. These will be what is displayed in the form for each associated unique value in the name column. E.g. nairobi has a label of Nairobi.

    d. Each response will need a name and a label as seen in screenshot below. 

    ![](/content/screenshots/formbuilder/form-builder-49.png)

2. For each parent question, create an additional column heading by copying and pasting the parent question name used in the list_name.

    ![](/content/screenshots/formbuilder/form-builder-50.png)

3. To specify the parent to the response, write it to the right in its respective column using the same parent name used in the name column. Each response can have only one parent response (e.g The Kilifi district only has the parent providence of Coast). 

    ![](/content/screenshots/formbuilder/form-builder-51.png)

4. Select the insert cascade select option at the top of the formbuilder as shown below.

    ![](/content/screenshots/formbuilder/form-builder-52.png)

5. Copy and paste the whole template into the Import Cascade and select **Done** to import as shown below. If there are any formatting mistakes, the template will not import. 

    ![](/content/screenshots/formbuilder/form-builder-53.png)

6. The imported questions will be shown as below. You can edit and move the questions anywhere in the form. You can also change labels of the questions or response and delete responses.

   ![](/content/screenshots/formbuilder/form-builder-54.png)

7. To add additional responses to the cascading list, you can delete the imported questions and re-import the new list from your updated template in your spreadsheet.

### <a name="editing-existing-form"></a>Editing an Existing Form

Once a form is saved on the form builder and the window is closed, you can edit an existing form by clicking on the drop-down menu next to the form as shown below and selecting **Edit form**. (*Please note that this option is only available for forms created using the form builder*).

 ![](/content/screenshots/formbuilder/form-builder-57.png)
 
Once you click on Edit form, the form builder window will open as shown, make the necessary changes/edits and **Save**.

 ![](/content/screenshots/formbuilder/form-builder-58.png)
 
 
