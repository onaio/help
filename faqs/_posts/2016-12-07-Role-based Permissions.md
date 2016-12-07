---
layout: post
title: "How do I add role-based permission restrictions to a form?"
permalink: /faq/adding-role-based-permissions
category: faq
---

### How do I add role-based permission restrictions to a form?

Role-based permission restrictions levels allow the **Admin** of the project to set restrictions for the project’s collaborators. Unlike the normal project permissions, these restrictions are set for individual forms in the project and *do not* apply to all forms in the project.

By default, every project collaborator can have the following [permission levels](https://help.ona.io/guides/projects/#permission-levels) Admin, Can view, Can view and download, Can submit, and Can edit. With role-based permission restrictions, you can add more restrictions on the **Can Submit** and **Can Edit** roles. For example, you may use restrictions to hide sensitive data collected by other users, or hide data collected by others because if it is irrelevant to a user.

### About the permission restriction levels

![](/content/screenshots/faq/faq_role_based-permission1.png)

*Above: Permission restriction options available in Ona*

1. Project collaborators with the **Can Submit** role can have any of the following access restrictions to a form

    1. **Allow access to all data** - These users can view and download all the data submitted by all collaborators for that particular form. The collaborators will have access to the data, maps, charts, and dashboard.

    2. **Block access to data submitted by other users** - These users can view and download the data they have submitted. Data that has been been submitted by other collaborators is blocked. The users will only view the records they have submitted on table view. In the screenshot below, this user has submitted only 1 record and does not know how many other records have been submitted by other users.

    3. **Block access to all data **- These users cannot view or download any data, they will only be able to submit data. The table view, chart, and dashboard will be disabled and users will get a notification as shown below.

2. Project collaborators with **Can Edit** roles can have any of the below access restrictions to a form:

    4. **Allow access to all data** - The users can view, edit and download all the data submitted by all collaborators for that particular form.

    5. **Block access to data submitted by other users** - The collaborators can view and download only the data they have submitted. Data submitted by other collaborators is blocked.

### How to change permission restrictions

Role-based permission restrictions are set under the form’s **Settings** page. Select the **Permission** **Restrictions option as shown below.

![](/content/screenshots/faq/faq_role_based-permission2.png)

The default permission restriction for the collaborators with Can Submit and Can Edit roles on every form allows them **access to all data**.

 ![](/content/screenshots/faq/faq_role_based-permission3.png)

If you want to change the setting, select new permissions for each collaborator role (i.e Can Submit and Can Edit) you would like to modify, then click on the **Update Permissions** button to save the changes.

![](/content/screenshots/faq/faq_role_based-permission4.png)

### How changes are reflected when viewing data

Users with Can Edit and Can Submit permissions with **Allow access to all data** selected are able to view the map, table, charts, and dashboard tab. These users can also download data. No data will be hidden as shown in the screenshot below.

![](/content/screenshots/faq/faq_role_based-permission5.png)

Users with Can Edit and Can Submit permissions with **Block access to data submitted by other users** selected can only export data and view the data they submitted on the Table tab. The Charts and Dashboard tabs will be disabled, as shown below.

![](/content/screenshots/faq/faq_role_based-permission6.png)

The table below shows users with **Can Submit** permission but are blocked from accessing data submitted by other users. They can only access data submitted the them.

![](/content/screenshots/faq/faq_role_based-permission7.png)

Users with **Can Edit** permission but have been blocked to access data submitted by other users can only edit data submitted by them as shown below. 

![](/content/screenshots/faq/faq_role_based-permission8.png)

Block access to all data is not an option for **Can Edit** users because the permission level assumes access to data in order to edit data. For users with **Can submit** permission and have been blocked from accessing all data will not have access any data as shown in the table below.

![](/content/screenshots/faq/faq_role_based-permission9.png)

### What non-admin users see on the permission restriction options

Only the **Admin** of a project can set these restrictions in both **personal** and **organisation** accounts. A user with a lesser permission will not be able to change the restriction and will see a notification when they select the **Permission Restriction** settings, as shown below.

![](/content/screenshots/faq/faq_role_based-permission10.png)

>**Note:**<br/>
   >
 * When using Enketo, users will need to set **require_auth true** on the form to ensure the user authenticates when submitting. This will allow the '**submitted by'** field to be populated with the user name. Please note that require authentication can only be turned on for the entire account and not just for one form.

     You can set this by following the below steps:

   * Go to [https://classic.ona.io](https://classic.ona.io/)

   * Log in using your Ona account credentials.

   * Select the Settings Option under your profile.

 * Check the **_Require Phone Authentication_** option.

 * Select **Update** to save the changes.

 * If a project or form is public, the permissions restrictions will be overridden, and the forms will be accessible by anyone. These permissions only apply to private forms.

