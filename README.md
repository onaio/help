The Help Site is a site that contains useful documentation on using the new [Ona platform](https://beta.ona.io).

 Following the [Help site outline](https://docs.google.com/a/ona.io/document/d/1AQDsoaK1Tae_ZZBMmNck5TPP12qH5uDy5geZlSwwJWE/edit?usp=sharing) the guidelines below should help one upload content on the site:
 
 * [Setting up GIT](#setting-git)
 * [Setting up Jekyll](#setting-up-jekyll) 
 * [Creating Branches](#branches)
 * [Documentation Collaboration](#documentation-collaboration)
 * [Markdown structure](#structure)
 * [Screenshots](#screenshots)
 
### <a name="collecting-data-offline"></a>Setting up GIT
 
 The Help site is hosted on Github pages, thus all development goes through the [onaio/help github repository](https://github.com/onaio/help). Install Git and clone the Help site source as explained below:

* Setting up locally:
 * [Install GIT](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git);
 * [Set up your GIT installation](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git);
* Cloning Help site from repository:
 * In your command line/ terminal, type  `git clone git@github.com:onaio/help`  and press **Enter**. Wait till cloning has completed;
 * Change into the  help  directory created and start adding content, refer to [Documentation Collaboration](#documentation-collaboration);
 * To view your changes you will need to install [Jekyll](http://jekyllrb.com/).
 
 To learn Git, refer to the documentation [here](http://git-scm.com/).
 
### <a name="setting-up-jekyll"></a>Setting up Jekyll
 
Install the following dependencies to enable jekyll installation. _Installations of each requirement may vary depending on OS_. Programs like [Ruby](https://www.ruby-lang.org/en/downloads/) may already to be installed in MacOS and Linux distributions, with Windows being the exception.

* Setting up Jekyll locally by installing the following:
 * [Node](https://nodejs.org/)
 * [Ruby](https://www.ruby-lang.org/en/downloads/)
 * [Ruby Gems](https://rubygems.org/pages/download)
 * [Ruby-dev utils](http://dev-utils.rubyforge.org/)
 * [Jekyll](http://jekyllrb.com/)
* Running the help site locally
 * Once you have successfully installed Jekyll, navigate to the Help Folder and run `jekyll serve --watch`;
 * Jekyll has a number of options when serving the site: 
   * **`jekyll serve`** : Runs the Jekyll site without autobuilding changes;
   * **`jekyll build`**: Builds a Jekyll static site in the  **`_site`**  folder, generated in the Help site directory;
   * **`jekyll serve --watch`** : Runs the Jekyll site in auto-build mode, where changes to files can be automatically run on refreshing the page on your browser.
   * More options are available at [Jekyll docs](http://jekyllrb.com/docs/usage/);
 * Go to [http://localhost:4000](http://localhost:4000) on your browser to view the site;
 * You can now edit the changes using a Markdown editor such as [Brackets](http://brackets.io/). 
 
### <a name="branches"></a>Creating Branches

Any documentation that is to be added will be created as an issue on Github. This means that:
* The branch should be based on issues assigned;
* Issue number should be at the beginning of branch name and hyphen separations e.g. 34-issue-title-with-hyphen-separators
* Making pull requests for QA to be done.

### <a name="documentation-collaboration"></a>Documentation Collaboration
 
* Use Google Docs for documentation sections before adding to Markdown. Google doc content should be saved in their specific  guide folder as indicated [here](https://drive.google.com/a/ona.io/folderview?id=0BzZ4hMHTat-YaTctUVF5Z25JYTg&usp=sharing);
* Docs should be reviewed and edited to ease addition to Markdown. After working on the content share the link on the assigned issue.

### <a name="structure"></a>Markdown structure

* Use blockquotes for important points;
* All screenshots should be inserted without any line breaks before/after (margins will be handled in CSS)

For guidelines on using Markdown, see the documentation at [http://daringfireball.net](http://daringfireball.net/).

### <a name="screenshots"></a>Screenshots

* Use [Skitch](https://evernote.com/skitch/) to highlight images;
 * Use lines/pointer arrows having the HEX colour code #FF2E6C;
 * Use rectangles to highlight;
 * Use the second brush-size in the Skitch tools panel;
* Resize your browser to increase visibility of detail;
* All images should be saved in **content/screenshots/guide-name** folder (with _guide-name_ being the name of the respective guide).
* On the markdown file, add the image URL e.g. **/content/screenshots/guides/getting-started/how-ona-works.jpg** (NOTE: the URL starts with a slash '/' )



