// ==UserScript==
// @name         JIRA CI&T - Definitions Checklist
// @namespace    https://jiracloud.cit.com.br
// @version      1.0
// @description  Creates a definitions checklist for each issue
// @author       gmaltoni
// @require      https://raw.githubusercontent.com/gmaltoni/JIRA-CIT_DefinitionsChecklist/master/DefinitionsExample.js
// @match        https://jiracloud.cit.com.br/browse*
// @grant        none
// ==/UserScript==

(function() {
    // Get current issue type and status
    var issueType = $('#type-val').text().trim();
    var issueStatus = $('#status-val').first().text().trim();

    // Check if current issue type is configured to be considered
    if ($.inArray(issueType, consideredIssueTypes) != -1) {
        var definitions = getDefinitions(issueStatus);

        if (definitions) {
            createForm(definitions);
        }
    }
})();

$(document).ajaxComplete(function(event, request, settings) {
    // Refresh page (to reload script) only when the user updates issue status
    if (settings.url.indexOf('/secure/CommentAssignIssue.jspa?') > -1) {
        window.location.reload();
    }
});

/**
 * Given an issue status, returns all configured definitions
 */
function getDefinitions(issueStatus) {
    var definitions;
    var consideredIssuesStatus = Object.keys(definitionsByIssueStatus);

    for (var index = 0; index < consideredIssuesStatus.length; index++) {
        var issueStatusWithoutSpaces = issueStatus.replace(/\s/g,'').toUpperCase();

        if (consideredIssuesStatus[index].toUpperCase() === issueStatusWithoutSpaces ||
            consideredIssuesStatus[index].toUpperCase() === issueStatusWithoutSpaces.replace('&', 'And').toUpperCase()) {
            definitions = definitionsByIssueStatus[consideredIssuesStatus[index]];
        }
    }

    return definitions;
}

/**
 * Create form layout
 */
function createForm(definitions) {
    // Create main div
    if ($("#definitions-content").length === 0) {
        var mainDiv = document.createElement("div");
        mainDiv.style.border = "#961b31 solid 2px";
        mainDiv.style.background = "#f5f5f5";
        mainDiv.style.margin = "0 0 25px";
        mainDiv.style.padding = "8px";
        mainDiv.id = "definitions-content";
        $("#descriptionmodule").prepend(mainDiv);
    }

    // Create each definition type div
    for (var definitionType in definitions) {
        if ($("#" + definitionType + "-content").length == 0) {
            var definitionDiv = document.createElement("div");
            definitionDiv.id = definitionType + "-content";
            definitionDiv.innerHTML = "<p><b>" + definitionType.toUpperCase() + ":</b></p>";
            definitionDiv.style.margin = "10px 0";
            $("#definitions-content").append(definitionDiv);

            var form = document.createElement("form");
            form.id = definitionType + "-form";
            definitionDiv.appendChild(form);

            var orderedList = document.createElement("ol");
            orderedList.id = definitionType + "-ordered-list";
            form.appendChild(orderedList);

            for (var index = 0; index < definitions[definitionType].length; ++index) {
                var item = document.createElement("li");
                orderedList.appendChild(item);

                var label = document.createElement('label');
                label.htmlFor = "id";
                label.appendChild(document.createTextNode(definitions[definitionType][index]));
                item.appendChild(label);
            }
        }
    }
}
