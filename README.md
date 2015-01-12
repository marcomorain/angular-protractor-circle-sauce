# Trouble running AngularJS Protractor test on CircleCI / SauceLabs

Hello Sauce Labs / Circle CI,

This repository contains an AngularJS application with a Protractor test. I'm looking to use CircleCI with Sauce to run the test as part of continuous integration. The test passes on my computer, but produces an error when run through Circle / Sauce. I need help in finding out why it doesn't work on Circle / Sauce.

You'll find instructions below for how to install the application, run the test, and a copy of the error message. Are you able to reproduce the issue on Circle / Sauce? What's the resolution?

Thank you!


# Installation and test execution

To install the application and run its test on your computer, please follow these steps:

    $ git clone git@github.com:prendergast/angular-protractor-circle-sauce.git
    $ npm test
    $ npm 

This, however, is not where the problem occurs. It happens when on Circle / Sauce. To run the application and its test on CircleCI / Sauce:

1. Navigate your web browser to https://github.com/prendergast/angular-protractor-circle-sauce

2. Click the button that says "fork."

3. Navigate to http://circleci.com, sign into your account, and click "add projects." Select your Github account and check the box in step two which says "show forks." Click the "build project" button next to the project.

4. Click the gear symbol next to the project, open the environment variables menu under "tweaks" and enter the variables with the following names (with corresponding values from your Sauce account): `SAUCE_ACCESS_KEY` and `SAUCE_USERNAME`

5. Re-run the build. Click on the "x" towards the upper left on the CircleCI web interface, click into your build, and press "rebuild."

An error message will result from the build step described below.


# Error message

Here's what would seem to be the most important part of the error message:

    UnknownError: javascript error: document unloaded while waiting for result

Here's the full error message:

    $ $(npm bin)/protractor tests/protractor.conf.js Exit code: 1

    Starting selenium standalone server...
    [launcher] Running 1 instances of WebDriver
    Selenium standalone server started at http://10.0.4.1:41512/wd/hub
    F
    
    Failures:
    
      1) angular-protractor-circle-sauce index should display the correct title
       Message:
         UnknownError: javascript error: document unloaded while waiting for result
      (Session info: chrome=38.0.2125.122)
      (Driver info: chromedriver=2.13.307649 (bf55b442bb6b5c923249dd7870d6a107678bfbb6),platform=Linux 3.14.28-031428-generic x86_64) (WARNING: The server did not provide any stacktrace information)
    Command duration or timeout: 87 milliseconds
    Build info: version: '2.44.0', revision: '76d78cf', time: '2014-10-23 20:02:37'
    System info: host: 'box18', ip: '127.0.0.1', os.name: 'Linux', os.arch: 'amd64', os.version: '3.14.28-031428-generic', java.version: '1.7.0_55'
    Session ID: d49ba787f31e37528847f60df27cb5de
    Driver info: org.openqa.selenium.chrome.ChromeDriver
    Capabilities [{platform=LINUX, acceptSslCerts=true, javascriptEnabled=true, browserName=chrome, chrome={userDataDir=/tmp/.com.google.Chrome.6mIQjW}, rotatable=false, locationContextEnabled=true, mobileEmulationEnabled=false, version=38.0.2125.122, takesHeapSnapshot=true, cssSelectorsEnabled=true, databaseEnabled=false, handlesAlerts=true, browserConnectionEnabled=false, webStorageEnabled=true, nativeEvents=true, applicationCacheEnabled=false, takesScreenshot=true}]
       Stacktrace:
         UnknownError: javascript error: document unloaded while waiting for result
      (Session info: chrome=38.0.2125.122)
      (Driver info: chromedriver=2.13.307649 (bf55b442bb6b5c923249dd7870d6a107678bfbb6),platform=Linux 3.14.28-031428-generic x86_64) (WARNING: The server did not provide any stacktrace information)
    Command duration or timeout: 87 milliseconds
    Build info: version: '2.44.0', revision: '76d78cf', time: '2014-10-23 20:02:37'
    System info: host: 'box18', ip: '127.0.0.1', os.name: 'Linux', os.arch: 'amd64', os.version: '3.14.28-031428-generic', java.version: '1.7.0_55'
    Session ID: d49ba787f31e37528847f60df27cb5de
    Driver info: org.openqa.selenium.chrome.ChromeDriver
    Capabilities [{platform=LINUX, acceptSslCerts=true, javascriptEnabled=true, browserName=chrome, chrome={userDataDir=/tmp/.com.google.Chrome.6mIQjW}, rotatable=false, locationContextEnabled=true, mobileEmulationEnabled=false, version=38.0.2125.122, takesHeapSnapshot=true, cssSelectorsEnabled=true, databaseEnabled=false, handlesAlerts=true, browserConnectionEnabled=false, webStorageEnabled=true, nativeEvents=true, applicationCacheEnabled=false, takesScreenshot=true}]
    ==== async task ====
    Protractor.waitForAngular()
        at [object Object].<anonymous> (/home/ubuntu/angular-protractor-circle-sauce/tests/e2e/index.tests.js:9:22)
    ==== async task ====
    Asynchronous test function: it()
    Error
        at [object Object].<anonymous> (/home/ubuntu/angular-protractor-circle-sauce/tests/e2e/index.tests.js:7:5)
        at [object Object].<anonymous> (/home/ubuntu/angular-protractor-circle-sauce/tests/e2e/index.tests.js:6:3)
        at Object.<anonymous> (/home/ubuntu/angular-protractor-circle-sauce/tests/e2e/index.tests.js:1:63)
    
    Finished in 1.213 seconds
    1 test, 1 assertion, 1 failure
    
    Shutting down selenium standalone server.
    [launcher] 0 instance(s) of WebDriver still running
    [launcher] chrome #1 failed 1 test(s)
    [launcher] overall: 1 failed spec(s)
    [launcher] Process exited with error code 1 $(npm bin)/protractor tests/protractor.conf.js returned exit code 1