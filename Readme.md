# JIRA CI&T - Definitions Checklist
[![Jira|CI&T](https://image.ibb.co/m7Q6s7/jira_cit.png)](https://jiracloud.cit.com.br/)

The JIRA CI&T - Definitions Checklist is a User Script written in JavaScript that allow you to tweak the look and feel of a JIRA Cloud issue webpage on your browser.

# What is a User Script?
Userscripts (a.k.a user scripts, User scripts, or .user.js) are open-source licensed add-ons for web browsers that change web pages as they are loaded (they only effect your browser, not the actual webpage). They give users the power to make websites do what they want them to, rather than what was originally intended. 

# What is the JIRA CI&T - Definitions Checklist?
The JIRA CI&T - Definitions Checklist script allows you to configure definitions (of Ready, of Done, or any other type) to be displayed as a checklist in the issues of your project. The advantages? he JIRA user is instantly reminded to complete the form, ensuring the issue to be worked has all the minimum requirements to be fulfilled and confirming that the work performed followed all the project standards.

# Installation and Configuration
Before actually installing the script, it is necessary to install the [Tampermonkey](https://tampermonkey.net/) plugin, responsible for the management and execution of JIRA CI&T - Definitions Checklist.

Once this is done, download the [repository](https://github.com/gmaltoni/JIRA-CIT_DefinitionsChecklist), where there are two files:

* **DefinitionsExample.js**, which is only a configuration file template. You must copy and configure your variables according to the file comments. The values entered must be referring to the needs of your project. This file, which is now customized, **must be hosted and shared with other team members!**

* **Transitions.js**, which is the core. This script should be copied and inserted as a new script in Tampermonkey plugin. Important detail: **you should update the commented line below with your configuration file link.**

Before updating:
```javascript
// @require https://raw.githubusercontent.com/gmaltoni/JIRA-CIT_DefinitionsChecklist/master/DefinitionsExample.js
```

After updating:
```javascript
// @require https://[YOUR_CONFIGURATION_FILE_LINK]
```

# Using
Once the installation and configuration is complete, the script is ready to use! Just access any issue in your project. A form with the definitions as a checklist will be displayed, as shown below:

![Checklist](https://image.ibb.co/mgd19n/checklist.png)

After selecting the correct options and clicking **Add Comment**, the checklist is registered as a comment on the issue, as shown below:

![Comment](https://image.ibb.co/nG6GaS/comment.png)

# About
* **Author/Developer:** Gustavo Semeão Maltoni - gmaltoni@ciandt.com
* **Script Idealization/Test:** Bruno Batista Marques - bmarques@ciandt.com
* **Project Support:** Mario Jose Silvestre Junior - marioj@ciandt.com
* **Technical Support:** Marlon Leandro Pereira - marlonp@ciandt.com
