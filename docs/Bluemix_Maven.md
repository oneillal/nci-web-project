Instructions below on how to build and deploy the web app to Bluemix.

## Run the webapp locally

1. [Install Apache Maven][]
+ [Install Apache Tomcat][]
+ cd into this project's root directory
+ Run `mvn clean install` to build the `target/skeleton55.war` file
+ Copy `target/skeleton55.war` to your Tomcat's `webapps` folder
+ Start Tomcat by running its `bin/startup.sh` script
+ Access the running app in a browser at <http://localhost:8080/skeleton55/>
 
[Install Apache Maven]: http://maven.apache.org/
[Install Apache Tomcat]: http://tomcat.apache.org/


## Bluemix & Cloud Foundry Setup

1. [Install the cf tools][]

[Install the cf tools]: https://github.com/cloudfoundry/cli/releases

2. Configure local authentication with Bluemix:

`$ cf api https://api.ng.bluemix.net`
`Setting api endpoint to https://api.ng.bluemix.net...`
`OK`

`API endpoint:   https://api.ng.bluemix.net`
`API version:    2.54.0`

`$ cf login -u [ibm email] -o [ibm email] -s nci -sso`

`One Time Code (Get one at https://login.ng.bluemix.net/UAALoginServerWAR/passcode)>`  

Go to above URL to get SSO passcode and enter at the prompt to continue authentication.

`Authenticating...`
`OK`

`Targeted org alan.oneill@ie.ibm.com`

`Targeted space nci`
               
`API endpoint:   https://api.ng.bluemix.net (API version: 2.54.0)`
`User:           alan.oneill@ie.ibm.com`
`Org:            alan.oneill@ie.ibm.com`
`Space:          nci`
