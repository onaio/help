---
layout: post
title: "How do I use organizations?"
permalink: /faq/how-do-i-use-organizations
category: faq
---

Organization are a way to simplify group-owned datasets, expand on access permissions, and focus data workflow for organization projects. If you ever had to manage multiple Ona accounts, desired a company-specific project list, or needed central control of project data, email <info@ona.io> to try Organizations for yourself.

###Adding Organization Members

1. Choose an organization from the “Organizations” drop down in the top bar.
2. Once on your organization page, click “Manage Members” on the left side of the page.
3. To add a member, enter the member username in the top right box and click the “Add Member” button. Once added, the users will appear in the list below. If you do not see a text box to add members, you do not have permissions to add members.
4. People you add to the organization will automatically be in the role of organization “Member”. You can use the dropdown in the member row to change a member’s role. The roles have the following permissions in the organization:

	<table style="border: 1px solid #E6E6E6;">
	  <thead>
	    <tr>
	      <th></th>
	      <th>Member</th>
	      <th>Project Manager</th>
	      <th>Org Admin</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td>Has member-level permissions to organization projects (defined by project admins for all organization members)</td>
	      <td>x</td>
	      <td>x</td>
	      <td>x</td>
	    </tr>
	    <tr>
	      <td>Can leave the organization</td>
	      <td>x</td>
	      <td>x</td>
	      <td>x</td>
	    </tr>
	    <tr>
	      <td>Can create a project in the organization and is an admin for those organizations</td>
	      <td></td>
	      <td>x</td>
	      <td>x</td>
	    </tr>
	    <tr>
	      <td>Can add members to the organization and change member roles</td>
	      <td></td>
	      <td></td>
	      <td>x</td>
	    </tr>
	    <tr>
	      <td>Has [admin level permission](http://help.ona.io/faq/what-are-the-share-settings/) to every project in the organization, including projects that are hidden to organization members</td>
	      <td></td>
	      <td></td>
	      <td>x</td>
	    </tr>
	    <tr>
	      <td>Can change organization account info</td>
	      <td></td>
	      <td></td>
	      <td>x</td>
	    </tr>
	    <tr>
	      <td>Can delete organization account</td>
	      <td></td>
	      <td></td>
	      <td>x</td>
	    </tr>
	  </tbody>
	</table>


###Share permissions for organization projects

All projects in Ona have the same [basic sharing permissions](http://help.ona.io/faq/what-are-the-share-settings/). There are three differences in the sharing permissions for organization projects:

1. An **all members in the organization** group is added to all organization projects. You can set permission levels for all members in the organization just as you would anybody, with the addition of hiding the project using the *cannot view* permission. 
2. An **all org admins** group is added to projects to make it clear that organization admins have access to the project you created in the organization. 
3. Organization projects can have multiple admins.
