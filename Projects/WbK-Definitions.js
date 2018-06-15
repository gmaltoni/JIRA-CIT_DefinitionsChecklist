/**
 * Configuration file.
 *     This file must be filled in!
 */

/**
 * consideredIssueTypes: script will only work for the configured issues types
 *     Example:
 *         consideredIssueTypes = [
 *             "1º Issue Type"
 *         ];
 */
consideredIssueTypes = [
    "Story",
    "Improvement",
    "Bug"
];

/**
 * definitionsByIssueStatus: script will only work for the configured relations
 *     Example:
 *         definitionsByIssueStatus = {
 *             issueStatus: {
 *                 dor: [
 *           	       "1º Item"
 *         	   ],
 *         	   dod: [
 *           	       "1º Item"
 *                 ],
 *                 ...
 *             },
 *             ...
 *         };
 */
definitionsByIssueStatus = {
    doingBusinessGrooming: {
        dod: [
	    "Business requirements were detailed and no outstanding questions are open.",
            "No dependencies in business are blocking the start of the story.",
            "Broke Epics in Stories.",
            "Mobile and Desktop layouts provided and validated with no pending items.",
            "No blocking issues opened.",
            "Acceptance Criteria defined and documented on Environment field.",
            "Scope size determined (Complexity Points calculated).",
            "Work hours logged in Jira.",
            "Write user stories in a way like."
        ]
    },
    doneBusinessGrooming: {
        dor: [
	    "Business requirements were detailed and no outstanding questions are open.",
            "No dependencies in business are blocking the start of the story.",
            "Broke Epics in Stories.",
            "Mobile and Desktop layouts provided and validated with no pending items.",
            "No blocking issues opened.",
            "Acceptance Criteria defined and documented on Environment field.",
            "Scope size determined (Complexity Points calculated).",
            "Work hours logged in Jira.",
            "Write user stories in a way like."
        ]
    },
    doingTechGrooming: {
        dod: [
            "Solution design was created with no further questions.",
            "Be sure that all the Impacts that a activity can cause at the solution.",
            "Create a POC (if necessary).",
            "Document the solution on Jira.",
            "If necessary, update the Acceptance Criteria.",
            "Insert work hours in Jira."
        ]
    },
    doneTechGrooming: {
        dor: [
            "Solution design was created with no further questions.",
            "Be sure that all the Impacts that a activity can cause at the solution.",
            "Create a POC (if necessary).",
            "Document the solution on Jira.",
            "If necessary, update the Acceptance Criteria.",
            "Insert work hours in Jira."
    	]
    },
    /*doingA&D: {
        dod: [
            "Story Opening.",
            "Blocks registered on Jira."
        ]
    },
    doneA&D: {
        dor: [
            "Story Opening.",
            "Blocks registered on Jira."
        ]
    },*/
    doingDev: {
    	dor: [
    	    "Feature branch created.",
            "Create all necessary tasks."
    	],
        dod: [
    	    "PHPCS executed.",
    	    "All Development tasks were completed.",
    	    "Ensure that all Unit tests were made.",
    	    "Check if the code is committed and pushed.",
    	    "Check if the results are align with the acceptance criteria.",
    	    "Running the build  and test in ACQUIA DEV environment.",
    	    "Check Sonar.",
    	    "Set permissions.",
    	    "Ensure all exported configurations and contents are imported and work correctly.",
    	    "Frontend test in all devices (List here).",
    	    "Pull request created.",
    	    "Insert hours in Jira."
        ]
    },
    doneDev: {
        dor: [
    	    "PHPCS executed.",
    	    "All Development tasks were completed.",
    	    "Ensure that all Unit tests were made.",
    	    "Check if the code is committed and pushed.",
    	    "Check if the results are align with the acceptance criteria.",
    	    "Running the build  and test in ACQUIA DEV environment.",
    	    "Check Sonar.",
    	    "Set permissions.",
    	    "Ensure all exported configurations and contents are imported and work correctly.",
    	    "Frontend test in all devices (List here).",
    	    "Pull request created.",
    	    "Insert hours in Jira."
        ]
    },
    doingCR: {
        dod: [
    	    "Review the Code Developed (Ensure that the written code follows all good practices).",
    	    "Code review was done by the architect or dev senior.",
    	    "Check Sonar.",
    	    "Execute PHPCS.",
    	    "Ensure that the build is executed (Code and DB moved to QA environment).",
    	    "Check no-functional requirements.",
    	    "Insert hours in Jira."
        ]
    },
    doneCR: {
        dor: [
    	    "Review the Code Developed (Ensure that the written code follows all good practices).",
    	    "Code review was done by the architect or dev senior.",
    	    "Check Sonar.",
    	    "Execute PHPCS.",
    	    "Ensure that the build is executed (Code and DB moved to QA environment).",
    	    "Check no-functional requirements.",
    	    "Insert hours in Jira."
        ]
    },
    doingTest: {
        dod: [
	    "Ensure that all the tests plan are created.",
	    "Tester executed planned functional test cases on testing environment.",
	    "Ensure that all the bugs are fixed.",
	    "Validated basic and alternative flows.",
	    "Test execution on all browsers and devices (List here).",
	    "Test automation done.",
	    "SDLC created and sent to UAT team.",
	    "All bugs were fixed with their root causes (beta and notes) and validated by the tester.",
	    "Ensure that the bug type has been provided.",
	    "Regression test (if necessary).",
	    "Smoke Test in QA (if necessary).",
	    "Smoke Test in STAGE (if necessary).",
	    "Smoke Test in Prod (if necessary).",
	    "Insert work hour in Jira."
        ]
    },
    doneTest: {
        dor: [
	    "Ensure that all the tests plan are created.",
	    "Tester executed planned functional test cases on testing environment.",
	    "Ensure that all the bugs are fixed.",
	    "Validated basic and alternative flows.",
	    "Test execution on all browsers and devices (List here).",
	    "Test automation done.",
	    "SDLC created and sent to UAT team.",
	    "All bugs were fixed with their root causes (beta and notes) and validated by the tester.",
	    "Ensure that the bug type has been provided.",
	    "Regression test (if necessary).",
	    "Smoke Test in QA (if necessary).",
	    "Smoke Test in STAGE (if necessary).",
	    "Smoke Test in Prod (if necessary).",
	    "Insert work hour in Jira."
        ]
    },
    doingMts: {
        dod: [
	    "Code and DB moved to STAGE environment.",
	    "All bugs opened by UAT fixed with root causes.",
	    "Ensure that all the bugs are fixed.",
	    "Code and DB moved to Production.",
	    "Ensure that all database changes are done.",
	    "Ensure that all features/sync are executed.",
	    "Ensure that the code has been moved to Stage.",
	    "Smoke Test (if necessary).",
	    "Regression tests executed.",
	    "Insert work hour in Jira.",
	    "Sent an email to PO with SDLC and extra notes."
        ]
    },
    doneMts: {
        dor: [
	    "Code and DB moved to STAGE environment.",
	    "All bugs opened by UAT fixed with root causes.",
	    "Ensure that all the bugs are fixed.",
	    "Code and DB moved to Production.",
	    "Ensure that all database changes are done.",
	    "Ensure that all features/sync are executed.",
	    "Ensure that the code has been moved to Stage.",
	    "Smoke Test (if necessary).",
	    "Regression tests executed.",
	    "Insert work hour in Jira.",
	    "Sent an email to PO with SDLC and extra notes."
        ]
    }
};

