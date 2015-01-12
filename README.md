# AngularJS Protractor test on CircleCI not working with SauceLabs

Hello Sauce Labs / Circle CI,

This repository contains an AngularJS application with a Protractor test. I'm looking to use CircleCI with Sauce to run the test as part of continuous integration. The test passes when run through Circle / Sauce. However, no record of the test shows up in the Sauce Labs web console. This leads me to believe that there was a failure to use Sauce Connect to gain access to Sauce. I need help in finding out why it apparently doesn't connect to Sauce.

I've read the [document from Circle](https://circleci.com/docs/browser-testing-with-sauce-labs) and the [document from Sauce](https://docs.saucelabs.com/ci-integrations/circleci/) on this subject. They were helpful in getting me to this point, but provide no guidance on this predicament.

You'll find instructions below for how to install the application and run the test. What's the solution to resolve this issue?

Thank you!

Note: I originally was experiencing an error message, but that's now been fixed. This commit to the repository documents the issue as it currently stands.  


# Installation and test execution

To run the application and its test on CircleCI / Sauce:

1. **Fork the project.** Navigate your web browser to https://github.com/prendergast/angular-protractor-circle-sauce and click the button that says "fork."

2. **Add the project to Circle.** Navigate to http://circleci.com, sign into your account, and click "add projects." Select your Github account and check the box in step two which says "show forks." Click the "build project" button next to the project.

3. **Set the environment variables in Circle.** Click the gear symbol next to the project, open the environment variables menu under "tweaks" and enter the variables with the following names (with corresponding values from your Sauce account): `SAUCE_ACCESS_KEY` and `SAUCE_USERNAME`

4. **Execute the test.** You'll need to re-run the build. Click on the "x" towards the upper left on the CircleCI web interface, click into your build, and press "rebuild."

The test will pass. However, when you check your Sauce Labs web console, you'll see no record of the test having been run. This leads me to speculate that Sauce Connect was not used in running the test, and thus Sauce was never invoked.

# Note

You can also install this application and run its tests on your machine, if you'd like.

Keep in mind: The following procedure will simply use the web browser on your local machine to run the test. It doesn't connect to Sauce Labs by Sauce Connect. (So it's not an accurate representation of what I'm looking to achieve, a Sauce Labs / Circle CI integration via Sauce Connect.)

    $ git clone git@github.com:prendergast/angular-protractor-circle-sauce.git
    $ npm install
    $ npm test

