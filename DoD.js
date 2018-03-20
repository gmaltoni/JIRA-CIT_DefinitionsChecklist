confirmDod = function(dod) {
  return confirm("Did you fulfill the DoD?\n" + dod);
};

reload = function(time) {
  window.setTimeout(function(){window.location.reload() ;}, time);
};

dodBacklog = "Backlog:\n\
1. Prioritization has been completed.";

dodBusinessGrooming = "Business Grooming:\n\
1. Story slicing.\n\
2. CPs calculated.\n\
3. Story details reach and requirements.\n\
4. Story Open, Tech Grooming, Business Grooming were created.\n\
5. Acceptance criteria created.\n\
6. Log hours on sub-ticket Requirement.\n\
7. All Blocks have been resolved.";

dodTechnicalGrooming = "Technical Grooming:\n\
1. Solution has been reviewed with the team.\n\
2. Impact analysis for this solution has been done.\n\
3. POCs were created (if necessary).\n\
4. Resolution was documented on JIRA.\n\
5. Acceptance Criteria updated.\n\
6. Validate with Data Business Analytics if it requires Google Tag Manager updates.\n\
7. Log hours on sub-ticket Tech Solution.\n\
8. SCM and CI.\n\
9. Story was split into sub-tasks.";

dodDevelopment = "In Progress:\n\
1. Story Open rite was done.\n\
2. Story was split into sub-tasks.\n\
3. Check if the Original Estimate Hours is equal zero.\n\
4. Issues on Sonar, Lint and PHPCS were fixed.\n\
5. Verify and fix warnings/errors on Drupal watchdog and/or PHP logs.\n\
6. Verify project standards.\n\
7. Validate if cache solution defined for the task is working.\n\
8. Updated task status, commented relevant informations.\n\
9. Validate if the development reaches the Acceptance Criteria.\n\
10. [Unit Tests] Validate if the development reaches the Test Cases.\n\
11. Root cause analysis for bugs.\n\
12. Logged hours on task (Sub-Imp).\n\
13. All items on Acceptance Criteria are OK.\n\
14. The code was committed and merged/cherry-picked.\n\
15. Ran build and validated code on Acquia DEV or DEV2 environment.\n\
16. It was tested on devices and supported browsers.\n\
17. Console log was checked (there’s no error/warning/messages).\n\
18. Peer review was done (if applicable).\n\
19. Behat peer review was done (if applicable).\n\
20. Check if the Estimate Hours is equal to zero in the Story.";

dodCodeReview = "Code Review:\n\
1. Verify if SCM, code and database standards were followed.\n\
2. Hours logged in Code review Sub-imp.\n\
3. Bugs tickets were closed (if applicable).\n\
4. Check if the Estimate Hours is equal to zero in the Story.\n\
5. Story status was updated.";

dodQA = "QA:\n\
1. Test cases were closed on Jira.\n\
2. Tests were executed and hours logged on sub-ticket.\n\
3. Bugs tickets were closed (if applicable).\n\
4. Check if the Remaining Hours is equal to zero in the Story.\n\
5. Story status was updated.";

dodBugFixing = "Bug Fixing:\n\
1. Bug’s Root Cause was filled.\n\
2. Bug’s Root Cause notes was filled.\n\
3. Resolution field of bug was filled.\n\
4. Logged hours on task.";

dodInMTS = "In MTS:\n\
1. All requirements were executed and delivered to customer.\n\
2. All changes in db were made.\n\
3. All code were committed to STG environment.\n\
4. Were realized a SMOKE or REGRESSION Test (whatever is needed).\n\
5. The customer was notified with all needed documents SDLC to UAT.";

dodInUAT = "In UAT:\n\
1. The tests were done by customer.\n\
2. Bugs were opened? If YES, Development PHASE should be UAT.\n\
3. All opened bugs were closed.\n\
4. The SDLC files with testing checklist = PASSED were sent.";

dodInMTP = "In MTP:\n\
1. All requirements were executed and delivered to customer.\n\
2. All changes in db were made.\n\
3. All code were committed to PROD environment.\n\
4. Were realized a SMOKE or REGRESSION Test.";
