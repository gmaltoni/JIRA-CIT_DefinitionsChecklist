/**
 * Set all configurations - REQUIRED
 */

/**
 * consideredIssueTypes: script will only work for the configured issues types
 *   Example:
 *     consideredIssueTypes = [
 *       "1º Issue Type"
 *     ];
 */
consideredIssueTypes = [
  "Content Change",
  "Epic",
  "Improvement",
  "New Feature",
  "Requirement",
  "Story",
  "Legacy Bug",
  "Non Functional Task"
];

/**
 * definitionsByIssuesStatus: script will only work for the configured relations
 *   Example:
 *     definitionsByIssuesStatus = {
 *       issueStatus: {
 *         dor: [
 *           "1º Item"
 *         ],
 *         dod: [
 *           "1º Item"
 *         ],
 *         ...
 *       },
 *       ...
 *     };
 */
definitionsByIssuesStatus = {
  backlog: {
    dod: [
      "Prioritization has been completed."
    ]
  },
  doingBusinessGrooming: {
    dod: [
      "Story slicing.",
      "CPs calculated.",
      "Story details reach and requirements.",
      "Story Open, Tech Grooming, Business Grooming were created.",
      "Acceptance criteria created.",
      "Log hours on sub-ticket Requirement.",
      "All Blocks have been resolved."
    ]
  },
  doneBusinessGrooming: {
    dor: [
      "Story slicing.",
      "CPs calculated.",
      "Story details reach and requirements.",
      "Story Open, Tech Grooming, Business Grooming were created.",
      "Acceptance criteria created.",
      "Log hours on sub-ticket Requirement.",
      "All Blocks have been resolved."
    ]
  },
  doingTechGrooming: {
    dod: [
      "Solution has been reviewed with the team.",
      "Impact analysis for this solution has been done.",
      "POCs were created (if necessary).",
      "Resolution was documented on JIRA.",
      "Acceptance Criteria updated.",
      "Validate with Data Business Analytics if it requires Google Tag Manager updates.",
      "Log hours on sub-ticket Tech Solution.",
      "SCM and CI.",
      "Story was split into sub-tasks."
    ]
  },
  doneTechGrooming: {
    dor: [
      "Solution has been reviewed with the team.",
      "Impact analysis for this solution has been done.",
      "POCs were created (if necessary).",
      "Resolution was documented on JIRA.",
      "Acceptance Criteria updated.",
      "Validate with Data Business Analytics if it requires Google Tag Manager updates.",
      "Log hours on sub-ticket Tech Solution.",
      "SCM and CI.",
      "Story was split into sub-tasks."
    ]
  },
  doingDev: {
    dod: [
      "Story Open rite was done.",
      "Story was split into sub-tasks.",
      "Check if the Original Estimate Hours is equal zero.",
      "Issues on Sonar, Lint and PHPCS were fixed.",
      "Verify and fix warnings/errors on Drupal watchdog and/or PHP logs.",
      "Verify project standards.",
      "Validate if cache solution defined for the task is working.",
      "Updated task status, commented relevant informations.",
      "Validate if the development reaches the Acceptance Criteria.",
      "[Unit Tests] Validate if the development reaches the Test Cases.",
      "Root cause analysis for bugs.",
      "Logged hours on task (Sub-Imp).",
      "All items on Acceptance Criteria are OK.",
      "The code was committed and merged/cherry-picked.",
      "Ran build and validated code on Acquia DEV or DEV2 environment.",
      "It was tested on devices and supported browsers.",
      "Console log was checked (there’s no error/warning/messages).",
      "Peer review was done (if applicable).",
      "Behat peer review was done (if applicable).",
      "Check if the Estimate Hours is equal to zero in the Story."
    ]
  },
  doneDev: {
    dor: [
      "Story Open rite was done.",
      "Story was split into sub-tasks.",
      "Check if the Original Estimate Hours is equal zero.",
      "Issues on Sonar, Lint and PHPCS were fixed.",
      "Verify and fix warnings/errors on Drupal watchdog and/or PHP logs.",
      "Verify project standards.",
      "Validate if cache solution defined for the task is working.",
      "Updated task status, commented relevant informations.",
      "Validate if the development reaches the Acceptance Criteria.",
      "[Unit Tests] Validate if the development reaches the Test Cases.",
      "Root cause analysis for bugs.",
      "Logged hours on task (Sub-Imp).",
      "All items on Acceptance Criteria are OK.",
      "The code was committed and merged/cherry-picked.",
      "Ran build and validated code on Acquia DEV or DEV2 environment.",
      "It was tested on devices and supported browsers.",
      "Console log was checked (there’s no error/warning/messages).",
      "Peer review was done (if applicable).",
      "Behat peer review was done (if applicable).",
      "Check if the Estimate Hours is equal to zero in the Story."
    ]
  },
  doingCR: {
    dod: [
      "Verify if SCM, code and database standards were followed.",
      "Hours logged in Code review Sub-imp.",
      "Bugs tickets were closed (if applicable).",
      "Check if the Estimate Hours is equal to zero in the Story.",
      "Story status was updated."
    ]
  },
  doneCR: {
    dor: [
      "Verify if SCM, code and database standards were followed.",
      "Hours logged in Code review Sub-imp.",
      "Bugs tickets were closed (if applicable).",
      "Check if the Estimate Hours is equal to zero in the Story.",
      "Story status was updated."
    ]
  },
  doingTest: {
    dod: [
      "Test cases were closed on Jira.",
      "Tests were executed and hours logged on sub-ticket.",
      "Bugs tickets were closed (if applicable).",
      "Check if the Remaining Hours is equal to zero in the Story.",
      "Story status was updated."
    ]
  },
  doneTest: {
    dor: [
      "Test cases were closed on Jira.",
      "Tests were executed and hours logged on sub-ticket.",
      "Bugs tickets were closed (if applicable).",
      "Check if the Remaining Hours is equal to zero in the Story.",
      "Story status was updated."
    ]
  },
  doingMts: {
    dod: [
      "All requirements were executed and delivered to customer.",
      "All changes in db were made.",
      "All code were committed to STG environment.",
      "Were realized a SMOKE or REGRESSION Test (whatever is needed).",
      "The customer was notified with all needed documents SDLC to UAT."
    ]
  },
  doneMts: {
    dor: [
      "All requirements were executed and delivered to customer.",
      "All changes in db were made.",
      "All code were committed to STG environment.",
      "Were realized a SMOKE or REGRESSION Test (whatever is needed).",
      "The customer was notified with all needed documents SDLC to UAT."
    ]
  },
  doingUat: {
    dod: [
      "The tests were done by customer.",
      "Bugs were opened? If YES, Development PHASE should be UAT.",
      "All opened bugs were closed.",
      "The SDLC files with testing checklist = PASSED were sent."
    ]
  },
  doneUat: {
    dor: [
      "The tests were done by customer.",
      "Bugs were opened? If YES, Development PHASE should be UAT.",
      "All opened bugs were closed.",
      "The SDLC files with testing checklist = PASSED were sent."
    ]
  },
  doingMtp: {
    dod: [
      "All requirements were executed and delivered to customer.",
      "All changes in db were made.",
      "All code were committed to PROD environment.",
      "Were realized a SMOKE or REGRESSION Test."
    ]
  },
  doneMtp: {
    dor: [
      "All requirements were executed and delivered to customer.",
      "All changes in db were made.",
      "All code were committed to PROD environment.",
      "Were realized a SMOKE or REGRESSION Test."
    ]
  },
  bugFixing: {
    dod: [
      "Bug’s Root Cause was filled.",
      "Bug’s Root Cause notes was filled.",
      "Resolution field of bug was filled.",
      "Logged hours on task."
    ]
  }
};
