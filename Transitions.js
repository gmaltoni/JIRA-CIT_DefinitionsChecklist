// ==UserScript==
// @name         JIRA - Defining Issues Status
// @namespace    https://jiracloud.cit.com.br
// @version      1.0
// @description  Setting definitions in status transitions
// @author       gmaltoni
// @require      https://raw.githubusercontent.com/gmaltoni/jnj-vpro/master/Definitions.js
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

            $('#definitions-submit').click(function(evt) {
                evt.stopPropagation();
                evt.preventDefault();

                var checkedItems = [];

                $("#definitions-content :input").attr("disabled", true);

                for (var definitionsType in definitions) {
                    $("input:checkbox[name=" + definitionsType + "-item]:checked").each(function() {
                        (checkedItems[definitionsType] = checkedItems[definitionsType] || []).push($(this).val());
                    });
                }

                if (checkedItems) {
                    // Set focus on comment functionality
                    $("#comment-issue").click();

                    // Create comment
                    $("#comment").text(createJiraComment(issueStatus, definitions, checkedItems));
                    $("#issue-comment-add-submit").click();
                }
            });
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
        if (consideredIssuesStatus[index].toUpperCase() === issueStatus.replace(/\s/g,'').toUpperCase()) {
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
        mainDiv.innerHTML = "<p><b>Did you fulfill the definitions?</b></p>";
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

            for (index = 0; index < definitions[definitionType].length; ++index) {
                var item = document.createElement("li");
                orderedList.appendChild(item);

                var label = document.createElement('label');
                label.htmlFor = "id";
                label.appendChild(document.createTextNode(definitions[definitionType][index]));

                var checkbox = document.createElement('input');
                checkbox.name = definitionType + "-item";
                checkbox.id = definitionType + "-item-" + index;
                checkbox.type = "checkbox";
                checkbox.value = index;

                item.appendChild(label);
                item.appendChild(checkbox);
            }
        }
    }

    // Create submit button
    if ($("#definitions-submit").length === 0) {
        var button = document.createElement("input");
        button.id = "definitions-submit";
        button.type = "submit";
        button.value = "Add Comment";
        button.className = "aui-button";
        $("#definitions-content").append(button);
    }
}

/**
 * Create JIRA comment that will be pusblished
 */
function createJiraComment(issueStatus, definitions, checkedItems) {
    var comment = "";

    for (var definitionType in definitions) {
        comment += '\n{panel:title=' + definitionType.toUpperCase() + ' - ' + issueStatus + '}';

        for (index = 0; index < definitions[definitionType].length; index++) {
            var jiraIcon = '(i)';
            var itemWasChecked = (checkedItems[definitionType].indexOf(index.toString()) > -1);
            if (itemWasChecked) {
                jiraIcon = '(/)';
            }

            comment += '\n|' + jiraIcon + '|' + definitions[definitionType][index] + '|';
        }

        comment += '\n{panel}';
    }

    if (comment.length > 0) {
        comment += '\n*Checklist legend:*\n(i) Pending\n(!) Not Applicable\n(x) Failed\n(/) Passed';
    }

    return comment;
}
