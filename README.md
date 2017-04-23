# NCI Web Design Project 2017

##### Alan O'Neill | Mark Hanlon  | Jonas Stein #####

### Contents ###

* [Introduction]()
* [Research]()
* [Overview of the Site]()
* [Wireframe & Sitemap]()
* [Site Details]()
* [Production Details]()
* [Project Blog](https://github.com/oneillal/nci-web-project/blob/master/docs/index.md)  
* [Logged Issues](https://github.com/oneillal/nci-web-project/issues?utf8=%E2%9C%93&q=is%3Aissue)  
* [Bluemix Deploy & Maven Build Instructions](https://github.com/oneillal/nci-web-project/blob/master/docs/Bluemix_Maven.md)  
* [Third Party Resources Reference](https://github.com/oneillal/nci-web-project/blob/master/docs/3rd_PARTY_REFERENCES.md)  

###Introduction###  
Welcome to our web design project, which we envision will serve the purpose of building a website promoting the commercial space tourism startup - "Aurora Ireland".  

"Aurora Ireland" is being launched with the aim of joining the new frontier of affordable private space travel, and the company website will reflect that ambition.   

The basic function of the website will be to attract interest from prospective space travellers, so appearance and functionality will be crucial to meet that objective. Therefore we will focus on content which can immediately grab the attention of site visitors, but also want to have crisp, clear site navigation.  

###Research###  
In the course of our research, we have identified 3 key competitors in our field, namely:  

[SpaceX](www.spacex.com)  
SpaceX designs, manufactures and launches advanced rockets and spacecraft.  

[Virgin Galactic](www.virgingalactic.com)  
The world's first commercial spaceline.  

[Blue Origin](www.blueorigin.com)  
Developing ground-breaking spaceflight systems.  

All of these sites are Commerically developed, likely with large budgets containing a lot of functionality. They make heavy use of video and photographic content and would be expected from real-world Space Tourism companies. Most use simple navbar styles in the case of two and 'burger' menu on another.

Our goal is to develop a site that looks professional, contains some interesting content and have some fun elements about Space Tourism.  


###Overview of the Site###  
It has a Space theme.  

###Wireframe & Sitemap###  
![Wireframe](https://github.com/oneillal/nci-web-project/raw/master/docs/index_wireframe_desktop.png)

![Sitemap](https://github.com/oneillal/nci-web-project/raw/master/docs/sitemap.jpg)

###Site Details###

_**index.html**_</span>

Main page which introduces the user to the company. 
It contains a buton that scrolls the page down to the marketing information.  

_**liftoff.html**_  
Pages that lets the user learn about Space exploration.  

_**blog.html**_  
A page that tells the user news about the what is happening (presented in the form of a mission log).  

_**register.html**_  
A page with a form to allow the user to register interest. In a real world siutation this form would register the user in a company contact database and send a confirmation eamil to the user.  

_**about.html**_  
About the Company  

###Production Details###  
We looked at competitor web sites to get an idea of what kind of functionality and information similar sites provide. We tried to take the best ideas for those and implement on our site. We added some of those as enhancements in the Issues section on github. We implemented most of what we set out in our design and wireframe. One good idea that we had which we did not have time to implement was a countdown to lauch timer. Mark implemented this but we did get it on to the main site due to time constraints.  

Our overall approach to developing the project includes wireframing and building a sitemap, having decided as a team on the proposed basic layout of the site. Once we assign tasks amongst the team and begin to work individually and also during working session to write code and develop the site. We utilised Git and Github to maintain version control whilst sharing code.  

We divided up the development with Jonas taking the lead on Javascript, Mark responsible for HTML and Alan primarily working on the CSS. Mark played the role of the researcher/stake holder and defined what requirements the site should fulfill. He also setup the Twitter account so that we could have a twitter timeline in our Mission Log page. We have a real Twitter follower!

Jonas did a lot of research on how to add functionality to the site such as the scrolling effect in the Home page when the 'Learn More' button is clicked and also the responsive mode menu.

We also used GitHub issues to track defects and made good use of the comments etc to collaborate and we also kept a diary of the project in our [Project Blog].

Overall we worked very well as a team to produce a website that we are happy with. We spent more time than was probably needed tweaking the lkook and feel and less time on the content. We feel that we could have planned better in order to have more time to add additonal content.  


###Highlights of JS/CSS etc.###  
Some of the highlights in our website development are:  
* The javascript scrolling effect on the Home page
* 'Read More' functionality for the Mission Log posts that allowed us to keep the page shorter and gave the user the option to only expand the article section that they are interested in.
* CSS based Responsive Mode Sidebar Menu


###Validation Errors###  
We ran CSS3 and HTML5 validation a number of times over the project and resolve those as needed. These included missing ALT atributes on images and missing header tags when using HTML5 section and article tags.  

We have attached the validation reports that shows that all our errors were resolved.  
 

###Website Deployment Details###    
We decided to use Bluemix as our website hosting platform because we wanted to learn and understand this more. We found that we needed to add a simple servlet to our project in order to make this work. We also used Apache Maven to build our resources in order to deploy to Bluemix. Maven is used to build the web archive (WAR) file. 

We also used Cloud Foundry tools to deploy to Bluemix. We documented the HowTo for Bluemix, Maven and cf in our Depployment readme in GitHub.






