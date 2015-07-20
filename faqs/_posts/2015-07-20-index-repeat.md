---
layout: post
title: "index repeat"
permalink: /faq/index-repeat
category: faq
---

**Documentation on Repeats**

Index repeat allows you to ask preceding questions based on the specific order given to a previous response.

For example, you want to ask about household information (age and sex) based on the order in which household member names were previously given within a household

![](/content/screenshots/faq/index-repeat/index repeat 1.png)

i.e. if Jane was the **first** name given among the two members present in the households, she will be the **first** to be asked about her age and sex. David will proceed to be asked about his sex and age after Jane has given her age and sex. 

The sections below show the steps for authoring an XLSForm which captures the index repeat concept. The [baseline household survey](https://docs.google.com/spreadsheets/d/10LpWAr7dzlcUjO3BiFWu4ez3TDJUn83VvNkIn8RGdXk/edit#gid=398822303)  is used as an example.


![](/content/screenshots/faq/index-repeat/index repeat 2.png)


**${num_hh_members}** - The question “Name of household member” will appear as many times as the number given on the question “How many people live in this household” i.e If a household had 3 people living in it, the question on the household member name will be asked thrice before proceeding to the next question.

**position(..)** This ensures that the display of the question “Name of household member”  follows a sequential order i.e. if you said you have two household members, you will view the question “Name of household member #1 before you view the question “Name of household member #2. This sequential flow is possible because of position(..) syntax

**count(${hh_member_name})** - The household information question (based on age and sex) will be repeated based on names given under the question“ Name of household member”. If we only had two names the question will only be administered to the two names. 

**indexed-repeat(${hh_member_name}, ${hh_member_names_repeat}, position(..))**- 
The household information question (based on age and sex) will be repeated based on on the **specific order** in which the names were given i.e. If the name first name was Jane, she will be asked about her age and sex then we will proceed to the second household member name and begins the process again.
