---
layout: post
title: How do I replace a form that has submissions?
permalink: /faq/replacing-forms-that-have-submissions/
category: faq
published: true
---

### Can I replace a form that has submissions?
Yes! 

Ona now supports replacing a form with submissions.  See [How to replace a form](/faq/replacing-forms-without-submissions) for step by step instructions on replacing forms. 

When replacing a form with existing submissions, be aware that Ona will only pay attention to the fields from the updated form.  This means that if you have removed any fields from your form, you will lose any data that was previously submitted for those fields.  You’ll see this reminder warning on Ona before replacing a form with submissions.  

![](/content/screenshots/topics_replace_form_with_submissions.png)

**There can be unintended consequences to your data if there are significant changes to the structure and/or content of your form.**  As such, it’s a good idea to export your data before attempting to replace a form with submissions.

Check out the examples below to help you better understand what kinds of changes are ok to make to a form with existing submissions and what kinds of changes you should avoid.

### Changes that are OK to make to a form with submissions


**Adding new columns**: Adding new columns to your form to better tailor it to your project’s needs is OK.  For example, adding a new column such as required, constraint, or appearance, or adding a new language column to support additional languages, will not affect your existing data. 

> 
**Note:**<br/>If a field in an existing submission is blank, and then you make this field **required** in the updated form, then you open this submission in the **edit** view after updating the form, you will have to fill in a response before you can save your edits. This also applies to **constraints**; if a field did not have a constraint before, then a constraint is added in the updated form, when editing an old record, fields that become invalid because of the new constraint will have to be corrected before you can save your edits.

**Adding new fields to your form**: new questions can be added to a form. New fields will be blank for submissions that existed before the form was replaced with the updated version. 
**Adding more answer choices** to a select_one or select_multiple question is fine to do and will not affect any existing data. 

**Changing labels and hints**; you can safely change the wording or spelling of the labels and hints in your form, but be careful that the meaning of the field doesn’t change, so that your existing data can still be interpreted correctly with the updated form.

### Make these changes with EXTREME caution


**Renaming fields;** when replacing a form, Ona cannot tell whether an existing field’s name has been changed.  It will treat any name changes as new fields, and it will treat the existing field as a deleted field.  As such, you will lose all previously submitted data.

**Deleting fields;** fields can be deleted in your form.  Refer to the warning message when replacing a form about losing data from fields that were deleted.  

**Changing question types;** changing the question type of a field should be avoided, because it can affect existing data. For instance, if a question changes from an integer to a select multiple question in the updated form.

**Removing repeat groups;** this is strongly discouraged as it will affect the structure of the dataset.

**Adding groups;** this is strongly discouraged because it completely changes the data structure which will leads to data not being visualized on the online (Map and table) or the data exports.
