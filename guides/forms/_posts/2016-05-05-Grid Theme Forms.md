layout: "guide-view"
guide_name:Forms
title: "Grid Theme Forms"
permalink: "/guides/forms/"
published: true
category: guides
---


##### Grid Theme Forms

Grid theme forms are like traditional paper surveys whereby multiple questions are grouped into one row. This is achieved by using the **theme-grid** style in the **settings tab** of your xlsform. Please click on the link for more information [http://xlsform.org/#grid](http://xlsform.org/#grid)

Grid theme forms work well with grouped questions. This is defined in the **survey tab ** whereby you should group together the questions you intend to have under each section then set the appearance for each field according to the desired width. See the example below 

| survey   |               |       |      |  |
| -------- | ------------- | ----- | ---- |---|
|          | type    | name  |  label  | appearance |
|          |  begin group     | basicdata  |  Section1| w8 |
|         |  date    | interview_date | Enter the date | w3 |
|         |  text    | enum_name  | Enumerator's name |w3  |
|         |  integer  | enum_phone  | Enumerator's phone number |  w2|
|         |  select_one region  |region   | Region | minimal w4|
|         |  select_one sub_office    | sub_office |  WFP Sub Office| minimal w4 |
|         |  text    | zone | Enter the zone | w2 |
|         |  text    | wereda  | Enter the wereda |w2 |
|         |  text | kebele  | Enter the Kebele |  w2|
|         |  text  |village   | Enter the village | w2|
|         |  select_one interview_timing  |interview_timing   |At what time are you conducting this interview? | w4 horizontal|
|         |  end group    |  |  |  |


The appearance column allows you to change the appearance of questions in your form. See [this link](http://xlsform.org/#appearance) for more details on appearance attributes
The fields width should tally with the group's width so as to ensure the questions are well aligned under each group.See the above example. Well defined fields width give a nice print out as shown in the image below.

 ![](/content/screenshots/forms-management/print-out.png)

See [this link](http://xlsform.org/#grid) for more information on creating Grid forms.

