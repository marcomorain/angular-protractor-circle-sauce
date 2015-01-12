# Trouble running AngularJS Protractor test on CircleCI / SauceLabs

Hello Sauce Labs / Circle CI,

This repository contains an AngularJS application with a Protractor test. I'm looking to use CircleCI with Sauce to run the test as part of continuous integration. The test passes on my computer, but produces an error when run through Circle / Sauce. I need help in finding out why it doesn't work on Circle / Sauce.

I've read the [document from Circle](https://circleci.com/docs/browser-testing-with-sauce-labs) and the [document from Sauce](https://docs.saucelabs.com/ci-integrations/circleci/) on this subject. They were helpful in getting me to this point, but provide no guidance on this predicament.

You'll find instructions below for how to install the application, run the test, and a copy of the error message. What's the solution to resolve this issue?

Thank you!


# Installation and test execution

The problem occurs on Circle / Sauce. To run the application and its test on CircleCI / Sauce:

1. **Fork the project.** Navigate your web browser to https://github.com/prendergast/angular-protractor-circle-sauce and click the button that says "fork."

2. **Add the project to Circle.** Navigate to http://circleci.com, sign into your account, and click "add projects." Select your Github account and check the box in step two which says "show forks." Click the "build project" button next to the project.

3. **Set the environment variables in Circle.** Click the gear symbol next to the project, open the environment variables menu under "tweaks" and enter the variables with the following names (with corresponding values from your Sauce account): `SAUCE_ACCESS_KEY` and `SAUCE_USERNAME`

4. **Execute the test.** You'll need to re-run the build. Click on the "x" towards the upper left on the CircleCI web interface, click into your build, and press "rebuild."

An error message will result from the build step, as described below.


# Error message

Here's (what would seem to be) the most important part of the error message:

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

# Note

You can also install this application and run its tests on your machine, if you'd like. However, this produces no errors for me and the test passses. The problem only happens on Circle / Sauce.

Keep in mind: This will simply use the web browser on your local machine to run the test. It doesn't connect to Sauce Labs by Sauce Connect. (So it's not an accurate representation of what I'm looking to achieve.)

    $ git clone git@github.com:prendergast/angular-protractor-circle-sauce.git
    $ npm install
    $ npm test

