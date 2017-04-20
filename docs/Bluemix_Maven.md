Instructions below on how to build and deploy the web app to Bluemix.

App URL: http://aurorairl.mybluemix.net/

## Running the webapp locally

1. Install Apache Maven [http://maven.apache.org/](http://maven.apache.org/)
2. Install Apache Tomcat [http://tomcat.apache.org/](http://tomcat.apache.org/)

For cmd-line do the following:

  + cd into this project's root directory
  + Run `mvn clean install` to build the `target/aurorairl.war` file
  + Copy `target/aurorairl.war` to your Tomcat's `webapps` folder
  + Start Tomcat by running its `bin/startup.sh` script
  + Access the running app in a browser at <http://localhost:8080/aurorairl/>

If using Eclipse just add Tomcat server and setup Maven Run Configuration as show below.  
![](https://raw.githubusercontent.com/oneillal/nci-web-project/master/docs/Screenshot_2017-04-20_12-29-38.png)

## Bluemix & Cloud Foundry Setup

1. [Install the cf tools][]

[Install the cf tools]: https://github.com/cloudfoundry/cli/releases

2. Configure local authentication with Bluemix:
  
  ```
  $ cf api https://api.ng.bluemix.net
  Setting api endpoint to https://api.ng.bluemix.net...
  OK

  API endpoint:   https://api.ng.bluemix.net
  API version:    2.54.0

  $ cf login -u [ibm email] -o [ibm email] -s nci -sso

  One Time Code (Get one at https://login.ng.bluemix.net/UAALoginServerWAR/passcode)>
  ```  
Go to above URL to get SSO passcode and enter at the prompt to continue authentication.

  ```
  Authenticating...
  OK

  Targeted org alan.oneill@ie.ibm.com

  Targeted space nci
               
  API endpoint:   https://api.ng.bluemix.net (API version: 2.54.0)
  User:           alan.oneill@ie.ibm.com
  Org:            alan.oneill@ie.ibm.com
  Space:          nci
  ```

## Bluemix Deployment

Push the App as follows. This should work as long as nothing changes in the ![Manifest File](https://github.com/oneillal/nci-web-project/blob/master/manifest.yml)

  ```
  cf push aurorairl
  Using manifest file /home/oneillal/dev/workspace/nci-web-project/manifest.yml
  
  Updating app aurorairl in org alan.oneill@ie.ibm.com / space nci as alan.oneill@ie.ibm.com...
  OK
  
  Using route aurorairl.mybluemix.net
  Uploading aurorairl...
  Uploading app files from: /tmp/unzipped-app268040517
  Uploading 1.1M, 47 files
  Done uploading               
  OK
  
  Stopping app aurorairl in org alan.oneill@ie.ibm.com / space nci as alan.oneill@ie.ibm.com...
  OK
  
  Starting app aurorairl in org alan.oneill@ie.ibm.com / space nci as alan.oneill@ie.ibm.com...
  Downloading java_buildpack...
  Downloaded java_buildpack
  Successfully created container
  Downloading app package...
  Downloading build artifacts cache...
  Staging...
  -----> Java Buildpack Version: v3.6 | https://github.com/cloudfoundry/java-buildpack.git#5194155
  -----> Downloading Open Jdk JRE 1.8.0_91-unlimited-crypto from https://java-buildpack.cloudfoundry.org/openjdk/trusty/x86_64/openjdk-1.8.0_91-unlimited-crypto.tar.gz (found in cache)
         Expanding Open Jdk JRE to .java-buildpack/open_jdk_jre (1.4s)
  -----> Downloading Open JDK Like Memory Calculator 2.0.2_RELEASE from https://java-buildpack.cloudfoundry.org/memory-calculator/trusty/x86_64/memory-calculator-2.0.2_RELEASE.tar.gz (found in cache)
         Memory Settings: -Xmx160M -XX:MaxMetaspaceSize=64M -Xss853K -Xms160M -XX:MetaspaceSize=64M
         Expanding Tomcat Instance to .java-buildpack/tomcat (0.1s)
  -----> Downloading Tomcat Lifecycle Support 2.5.0_RELEASE from https://java-buildpack.cloudfoundry.org/tomcat-lifecycle-support/tomcat-lifecycle-support-2.5.0_RELEASE.jar (found in cache)
  -----> Downloading Tomcat Access Logging Support 2.5.0_RELEASE from https://java-buildpack.cloudfoundry.org/tomcat-access-logging-support/tomcat-access-logging-support-2.5.0_RELEASE.jar (found in cache)
  Staging complete
  Uploading droplet, build artifacts cache...
  Uploaded build artifacts cache (61.9M)
  Destroying container
  Uploading complete
  Successfully destroyed container
  
  0 of 1 instances running, 1 starting
  1 of 1 instances running
  
  App started
  
  
  OK
  
  App aurorairl was started using this command `CALCULATED_MEMORY=$($PWD/.java-buildpack/open_jdk_jre/bin/java-buildpack-memory-calculator-2.0.2_RELEASE -memorySizes=metaspace:64m.. -memoryWeights=heap:75,metaspace:10,native:10,stack:5 -memoryInitials=heap:100%,metaspace:100% -totMemory=$MEMORY_LIMIT) &&  JAVA_HOME=$PWD/.java-buildpack/open_jdk_jre JAVA_OPTS="-Djava.io.tmpdir=$TMPDIR -XX:OnOutOfMemoryError=$PWD/.java-buildpack/open_jdk_jre/bin/killjava.sh $CALCULATED_MEMORY -Daccess.logging.enabled=false -Dhttp.port=$PORT" exec $PWD/.java-buildpack/tomcat/bin/catalina.sh run`
  
  Showing health and status for app aurorairl in org alan.oneill@ie.ibm.com / space nci as alan.oneill@ie.ibm.com...
  OK
  
  requested state: started
  instances: 1/1
  usage: 256M x 1 instances
  urls: aurorairl.mybluemix.net
  last uploaded: Thu Apr 20 11:43:53 UTC 2017
  stack: cflinuxfs2
  buildpack: java_buildpack
  
       state     since                    cpu    memory          disk           details
  #0   running   2017-04-20 12:44:49 PM   0.0%   96.1M of 256M   139.2M of 1G
  ```  
