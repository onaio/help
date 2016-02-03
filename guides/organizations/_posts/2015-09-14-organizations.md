---
layout: guide-view
guide_name: Organizations
title: "Managing your Organizations"
permalink: /guides/organizations/
categories: [guides, organizations]
---


* ##### [Organizations](#organization)
  * [What is an organization?](#what-is-an-organization)
  * [Creating an organization](#creating-an-organization)
  * [Organization settings](#organization-settings)
  
* ##### [Organization Members](#organization-members)
  * [How to add organization members](#add-organization-members)
  * [Organization member roles](#organization-member-roles)
  
* ##### [Organization Projects](#organization-projects)
   * [Creating org projects](#creating-org-projects) 
   * [Org project differences](#org-project-differences)

### Organizations

##### <a name="what-is-an-organization"></a>What is an organization?

An **organization** account on Ona allows you to better organize and manage your group-owned projects and data.  Org accounts have advanced permission levels over individual accounts.  This means an org admin can add other members to the organization and share admin privileges with them, or they still have the option of maintaining access privileges at the project level, by assigning individual collaborators to one project at a time.  

Org accounts are a great option for international organizations that implement projects in multiple countries or regions or for companies that simply require better data management and access controls for members on their team.  A user can even manage multiple organizations from a single Ona account, obviating the need to maintain separate accounts for each project.


##### <a name="creating-an-organization"></a>Creating an organization

To create a new organization account, click on the New Organization option from your account dropdown menu.  

![](/content/screenshots/organizations/org-creation-1.png)

> 
**Note:**<br/> Whichever account you are currently logged in to will be the new organization account owner.

Enter the **name** and **username** of your new organization account.  The org username will be used in the url.  We suggest something that is short, like a Twitter handle.

![](/content/screenshots/organizations/org-creation-2.png)

Click on **Create Organization** button;  

![](/content/screenshots/organizations/org-creation-3.png)

You will be redirected to the new organization home page;

![](/content/screenshots/organizations/org-creation-4.png)

As an org admin, you have full access to all of the organization settings. Some steps to get your new org set up are:

* Update your [org settings](http://help.ona.io/guides/organizations/#organization-settings), including adding an org avatar and background image;
* [Add members](http://help.ona.io/guides/organizations/#add-organization-members) to your organization through the Manage Members button from the organization home page; and
* [Create your first data collection project](http://help.ona.io/guides/organizations/#creating-org-projects) and start collaborating with other users.

#### <a name="organization-settings"></a>Organization settings

**Organization Settings** page is where all the information about the organization (org profile picture, org name, description, location, etc.) can be added.

* To navigate to the Organization Settings page, click on the **Settings** button from the org home page;
<br><br>
![](/content/screenshots/organizations/org-5.png)

> 
**Note:**<br/>If you do not see the **Settings** button, it means that you do not have 
permission to access the page. Only an org **Admin** can access this page.

You can also click on the **Edit Image** button to go to the **Org Settings** page, where you can upload a new background image:

![](/content/screenshots/organizations/org-5b.png)

* Update the **Name**; provide a short **Description** (up to 160 characters), add an **Org Profile Picture** and an **Org Background Image**;
<br><br>
![](/content/screenshots/organizations/org-6.png)

> 
**Note:**<br/>The recommended size for the **Org Profile Picture** is **300 x 300 pixels**, and the **Org Background Image** recommended size is **1500 x 500 pixels**.

* Click on **Save Changes** when finished;
<br><br>
![](/content/screenshots/organizations/org-7.png)

### Organization Members

##### <a name="add-organization-members"></a>How to add organization members

Organization members are other Ona users who have been added to the organization by an org admin and have access to the projects within the org account.

New members of an organization fall into one of three org roles. Org admins can add new members and assign them roles on the member list page by typing their Ona username in the top left search bar.

> 
**Note:**<br/> To be added to an organization, a member must have an existing Ona account. We do not support sending member invitations to join at this time. Read more on signing up for a new account [here](http://help.ona.io/guides/getting-started/#signing-up).

To add members to your organization:

1.  From the organization home page, click on the **Manage Members** link on the left side of the page;
<br><br>
![](/content/screenshots/organizations/org2.png)
1. To add a member, enter the member’s Ona username in the top left box and click the **Add Member** button. Once added, the new member will appear in the **Members** list below. If you do not see a text box to add members, you do not have permission to add members.
<br><br>
![](/content/screenshots/organizations/org-3.png)
1. New members will automatically be assigned the **Member** role. Click on the dropdown next to the member to change their role as shown in the screen shot below. Organization roles and their permissions in the organization are explained in the [Organization member roles section](#organization-member-roles) below.
<br><br>
![](/content/screenshots/organizations/org-4.png)

> 
**Note:**<br/>To learn more how org members differ from project collolaborators please have look at this [post](http://help.ona.io/faq/org-members-vs-project-collaborators).

##### <a name="organization-member-roles"></a>Organization member roles

The three organization roles are **Admin**, **Project Manager** and **Member**. By default, the user who creates the organization is granted **Admin** role. 

> 
**Note:**<br/>An organization can have more than one admin.


The following table shows the three organization roles and what permissions each role has:


<table style="border: 1px solid #E6E6E6;">
	  <thead>
	    <tr>
	      <th></th>
	      <th>Org Admin</th>
	      <th>Project Manager</th>
	      <th>Org Member</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td>Can add and remove members in the org and change the role for any member except self</td>
	      <td>x</td>
	      <td></td>
	      <td></td>
	    </tr>
	    <tr>
	      <td>Can change org settings</td>
	      <td>x</td>
	      <td></td>
	      <td></td>
	    </tr>
	    <tr>
	      <td>Can transfer org account</td>
	      <td>x</td>
	      <td></td>
	      <td></td>
	    </tr>
	    <tr>
	      <td>Can delete org account</td>
	      <td>x</td>
	      <td></td>
	      <td></td>
	    </tr>
            <tr>
	      <td>Has admin permissions on all org projects</td>
	      <td>x</td>
	      <td></td>
	      <td></td>
	    </tr>
            <tr>
	      <td>Can create projects in the org</td>
	      <td>x</td>
	      <td>x</td>
	      <td></td>
	    </tr>
	    <tr>
	      <td>Has admin permissions only on org projects they create</td>
	      <td></td>
	      <td>x</td>
	      <td></td>
	    </tr>
            <tr>
	      <td>Has member-level permissions, as stipulated by a project admin, on org projects they did not create</td>
	      <td></td>
	      <td>x</td>
	      <td></td>
	    </tr>
            <tr>
	      <td>Can view org member list, but cannot make any changes</td>
	      <td></td>
	      <td>x</td>
	      <td>x</td>
	    </tr>  
	    <tr>
	      <td>Cannot access org settings</td>
	      <td></td>
	      <td>x</td>
	      <td>x</td>
	    </tr>
	    <tr>
	      <td>Has member-level <a href="http://help.ona.io/guides/projects/#permission-levels">permissions</a> to all org projects as stipulated by a project admin.</td>
	      <td></td>
	      <td></td>
	      <td>x</td>
	    </tr>
	    <tr>
	      <td>Can leave the org</td>
	      <td>x</td>
	      <td>x</td>
	      <td>x</td>
	    </tr>
	  </tbody>
	</table>

In addition to the three organization roles above, a user can also be added individually to a project within the org and become an organization collaborator. An **organization collaborator** is a user that is shared on an organization project but isn't part of the organization. When viewing the organization home page, organization collaborators will see the list of projects that they have been added to and the list of organization collaborators. They will not be able to see the list of organization members, organization settings, or any other projects in the organization.    
    
### Organization Projects

##### <a name="creating-org-projects"></a>Creating org projects


An organization project lives in the organization account and will contain all of the forms and data related to the project. 

To create an organization project:

1. From the organization homepage, click on the **New Project** button;
<br><br>
![](/content/screenshots/organizations/org-8.png)
1. Follow the instructions provided in the [Create a project guide](http://help.ona.io/guides/projects/#create-a-project). 

##### <a name="org-project-differences"></a>Org project differences

Organization projects are similar to projects created in individual accounts, but have several key differences:

* An organization project can have multiple admins (the project creator and all org admins have admin permissions on the project as well as other users who are added invidually to the project as an admin).
* In the organization project share modal, the **Members in [organization name]** group is automatically added, and a project admin can adjust the permissions to the group of org members.  This obviates the need to add each org member individually to each project. 
* In addition to the regular [project permission levels](http://help.ona.io/guides/projects/#permission-levels), a project admin can also select **Cannot view** role for the **Members in [organization name]** group. 
* An organization project will not show up in an individual's home page project list unless she or he is specifically added to the org project's share modal (i.e., you have a specific line in the project share modal and not just part of the org admin or org member group). Similarly, any forms within the org project will not appear in the list of available forms to download in ODK Collect unless you are specifically added to the project with **Can submit** or higher permissions. This was done so that users have more control over what projects and forms are listed and shown in their own accounts. 
