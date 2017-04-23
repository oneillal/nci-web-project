# NCI Web Design Project 2017 #

### Authors: ###
* Alan O'Neill (Id: 16134427)
* Mark Hanlon (Id: 16135571)
* Jonas Stein (Id: 16136306)

### Site URL: [http://aurorairl.mybluemix.net](http://aurorairl.mybluemix.net) ###
![aurorairl.mybluemix.net](https://github.com/oneillal/nci-web-project/blob/master/docs/aurorairl_mybluemix_net.png)


# Project Report #

### Contents ###

* _Introduction_
* _Research_
* _Overview of the Site_
* _Wireframe & Sitemap_
* _Site Details_
* _Production Details_
* _Highlights of the Project_
* _Validation Errors_
* _Website Deployment Details_
* _References_

### Introduction ###  
Welcome to our web design project, which we envision will serve the purpose of building a website promoting the commercial space tourism startup - "Aurora Ireland".  

"Aurora Ireland" is being launched with the aim of joining the new frontier of affordable private space travel, and the company website will reflect that ambition.   

The basic function of the website will be to attract interest from prospective space travellers, so appearance and functionality will be crucial to meet that objective. Therefore we will focus on content which can immediately grab the attention of site visitors, but also want to have crisp, clear site navigation.  

### Research ###  
In the course of our research, we have identified 3 key competitors in our field, namely:  

[SpaceX](www.spacex.com)  
SpaceX designs, manufactures and launches advanced rockets and spacecraft.  

[Virgin Galactic](www.virgingalactic.com)  
The world's first commercial spaceline.  

[Blue Origin](www.blueorigin.com)  
Developing ground-breaking spaceflight systems.  

All of these sites are Commercially developed, likely with large budgets containing a lot of functionality. They make heavy use of video and photographic content and would be expected from real-world Space Tourism companies. Most use simple NavBar styles in the case of two and 'burger' menu on another.

Our goal is to develop a site that looks professional, has a Space theme in its colour scheme, contains some interesting content and has some fun elements about Space Tourism.  

### Wireframe & Sitemap ###  
![Wireframe](https://github.com/oneillal/nci-web-project/raw/master/docs/index_wireframe_desktop.png)

![Sitemap](https://github.com/oneillal/nci-web-project/raw/master/docs/sitemap.jpg)

### Site Details ###

_**index.html**_  
Main page which introduces the user to the company. 
It contains a button that scrolls the page down to the marketing information.  

_**liftoff.html**_  
Pages that lets the user learn about Space exploration.  

_**blog.html**_  
A page that tells the user news about the what is happening (presented in the form of a mission log).  

_**contact.html**_  
A page with a form to allow the user to register interest. In a real world situation this form would register the user in a company contact database and send a confirmation email to the user.  

_**about.html**_  
About the Company  

### Production Details ###  
We looked at competitor web sites to get an idea of what kind of functionality and information these sites provided. We tried to take the best ideas from those and implement in our website. We tracked these as enhancement ideas in the [Issues](https://github.com/oneillal/nci-web-project/issues?utf8=%E2%9C%93&q=) section on GitHub.  

Our overall approach to developing the project started with building our [wireframe](https://github.com/oneillal/nci-web-project/blob/master/docs/index_wireframe_desktop.png) and [sitemap](https://github.com/oneillal/nci-web-project/blob/master/docs/sitemap.jpg). Having decided as a team on the proposed basic layout of the site, we assign tasks amongst the team and begin to work both individually and also during working session to write code and develop the site. We utilised Git and GitHub to maintain version control for our codebase and also for all our [other documentation](https://github.com/oneillal/nci-web-project/tree/master/docs). We made good use of slack and setup a WhatsApp group to collaborate on the project.

We divided up the development with Jonas taking a lead on Javascript, Mark responsible for HTML and Alan primarily working on the CSS. Mark also played the role of the researcher/stake holder and defined what requirements the site should fulfil. He also setup the Twitter account so that we could have a twitter timeline in our Mission Log page. We have a real Twitter follower!

Jonas did a lot of research on how to add functionality to the site such as the scrolling effect in the Home page when the 'Learn More' button is clicked and also the responsive mode menu and Alan worked on the Bluemix build and deployment and documenting the project report in GitHub. We also used GitHub issues to track defects and made good use of the comments etc. to collaborate and we also kept a diary of the project in our [Project Blog](https://github.com/oneillal/nci-web-project/blob/master/docs/index.md).

We were able to implement most of what we set out in our design and wireframe. One good idea that we had which we did not have time to implement was a [Countdown to Launch Timer](https://github.com/oneillal/nci-web-project/issues/5). We had this in our [wireframe](https://github.com/oneillal/nci-web-project/blob/master/docs/index_wireframe_desktop.png) and Mark [implemented it](https://github.com/oneillal/nci-web-project/tree/master/src/main/webapp/countdown_basic) but we did not have enough time to incorporate this into the main site as we ran into problems with this in responsive mode.

Overall we worked very well as a team to produce a website that we are happy with. We spent more time than was probably needed tweaking the look and feel and less time on the content. We feel that we could have planned better in order to have more time to add additional content.  


### Highlights of Project ###  
Some of the highlights in our website development are:  
* We are very happy with the overall look and feel of the site. The colours and layout work well.
* The javascript scrolling effect on the Home page.
* The docking NavBar in desktop mode.
* 'Read More' functionality for the Mission Log posts that allowed us to keep the page shorter and gave the user the option to only expand the article section that they are interested in.
* CSS based Responsive Mode Sidebar Menu


### Validation Errors ###  
We ran CSS3 and HTML5 validation a number of times over the project and resolve those as needed. These included missing ALT attributes on images and missing header tags when using HTML5 section and article tags.  

We have attached our validation reports to show that all our errors were resolved. The reports are stored [here](https://github.com/oneillal/nci-web-project/raw/master/docs/w3_validation_20170423.zip).  


### Website Deployment Details ###    
We decided to use Bluemix as our website hosting platform because we wanted to learn and understand this more. We found that we needed to add a simple servlet to our project in order to make this work. We also used Apache Maven to build our resources in order to deploy to Bluemix. Maven is used to build the web archive (WAR) file. 

We also used Cloud Foundry tools to deploy to Bluemix. We documented the HowTo for Bluemix, Maven and cf in our [Bluemix Deploy & Maven Build Instructions](https://github.com/oneillal/nci-web-project/blob/master/docs/Bluemix_Maven.md) on GitHub.

### References ###

* [Project Blog](https://github.com/oneillal/nci-web-project/blob/master/docs/index.md)  
* [GitHub Issues](https://github.com/oneillal/nci-web-project/issues?utf8=%E2%9C%93&q=is%3Aissue)  
* [Bluemix Deploy & Maven Build Instructions](https://github.com/oneillal/nci-web-project/blob/master/docs/Bluemix_Maven.md)  
* [Third Party Resources Reference](https://github.com/oneillal/nci-web-project/blob/master/docs/3rd_PARTY_REFERENCES.md)  




