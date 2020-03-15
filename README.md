# mocha-done-issue

An example project showing that mocha does not recognize exceptions once done has been called. Requires a [nodejs](https://nodejs.org/en/) installation.


Excecute **npm install** then **npm run mocha** and observe that the test passes. Repeat after reversing the done() call and the expect call and observe that the test fails.