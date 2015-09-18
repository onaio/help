---
layout: guide-view
guide_name: Organizations
title: "Managing your Organizations"
permalink: /guides/organizations/
categories: [guides, organizations]
---


* ##### Creating an Organization
  * [What is an organization?](#what-is-an-organization)
  * [Creating an organization](#creating-an-organization)
  * [Organization settings](#organization-settings)
  
* ##### [Organization Members](#organization-members)
  * [How to add organization members](#add-organization-members)
  * [Organization member roles](#organization-member-roles)
  
* ##### [Organization Projects](#organization-projects)
   * [Creating org projects](#creating-org-projects) 
   * [Org project differences](org-project-differences)

### Creating an Organization

##### <a name="what-is-an-organization"></a>What is an organization?

An **organization** account on Ona allows you to better organize and manage your group-owned projects and data.  Org accounts have advanced permission levels over individual accounts.  This means an org admin can add other members to the organization and share admin privileges with them, or they still have the option of maintaining access privileges at the project level, by assigning individual collaborators to one project at a time.  

Org accounts are a great option for international organizations that implement projects in multiple countries or regions or for companies that simply require better data management and access controls for members on their team.  A user can even manage multiple organizations from a single Ona account, obviating the need from before of having to maintain and log in and out of separate accounts for each project.


#### <a name="creating-an-organization"></a>Creating an organization

If you’d like to set up an organization account, email us at [sales@ona.io](sales@ona.io), and include the following information in your email:

* Name of the organization (up to 42 characters)
* Desired username of the organization (we suggest something short, like a Twitter handle)
* Short description of the organization (up to 160 characters)
* The Ona username for the account that will have org admin role

> 
**Note:**<br/> Make sure you email us from the email address that is associated with this Ona account to provide proof that you are the owner of this account.

Once we receive your email, we’ll set up your organization account within 48 business hours and notify you when it’s available. 

#### <a name="organization-settings"></a>Organization settings

**Organization Settings** page is where all the information about the organization (org profile picture, org name, description, location, etc.) can be added.

* To navigate to the Organization Settings page, click on the **Settings** button from the org home page;
<br><br>
![](/content/screenshots/organizations/org-5.png)

> 
**Note:**<br/>If you do not see the **Settings** button, it means that you do not have 
permission to access the page. Only an org **Admin** can access this page.

* You can update the **Name**; provide a short **Description** (up to 160 characters), add an **Org Profile Picture** and an **Org Background Image**;
<br><br>
![](/content/screenshots/organizations/org-6.png)

> 
**Note:**<br/>The recommended size for the **Org Profile Picture** is **300 x 300 pixels**, and the **Org Background Image** recommended size is **1500 x 500 pixels**.

* Click on **Save Changes** when finished;
<br><br>
![](/content/screenshots/organizations/org-7.png)

#### <a name="add-organization-members"></a>How to add organization members

Organization members are other Ona users who have been added to the organization by an org admin and have access to the projects within the org account.

New members of an organization fall into one of three org roles. Org admins can add new members and assign them roles on the member list page by typing their Ona username in the top left search bar.

Note: To be added to an organization, a member must have an existing Ona account. We do not support sending member invitations to join at this time. Read more on signing up for a new account [here](http://help.ona.io/guides/getting-started/#signing-up).

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

#### <a name="organization-member-roles"></a>Organization member roles

The three organization roles are **Admin**, **Project Manager** and **Member**. By default, the user who creates the organization is granted **Admin** role. 

 > 
**Note**<br/>An organization can have more than one admin.


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
	      <td>Can add and remove members in the org and change role for any member except self</td>
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
	      <td>Can create a project in the org</td>
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
	      <td>Has member-level [permissions](http://help.ona.io/guides/projects/permission-levels) to projects as stipulated by a project admin.</td>
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
* The [organization members](#organization-member-roles) (**Members in** [**organization**]) group is added to all [organization projects](#creating-org-projects) (_the members can [permissions](http://help.ona.io/guides/projects/#permission-levels) can be Can View, Can View & Download, Can Submit, Can Edit, can View,  or CANNOT view_). 
* Every new member that is added to organization has same permissions as other members,
* An organization member won’t see all organization projects in their list, even when they’re assigned the Can submit permissions through the **“Members in org”** group. The form will only show up if the user is explicitly added. This means that the member can only submit data will only if the link is shared directly with the user from outside means such as email.
* Organization projects can also be **Public**. If a project is made public, a new group **Anyone** is added to the share list, meaning there are 4 groups right off the bat in public project (i.e creator, organization admins, all members of org, and public anyone).
