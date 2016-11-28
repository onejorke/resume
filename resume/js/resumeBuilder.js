/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#main").append("onejoke");
 var bio = {
 	"name": "onejoke",
 	"role": "student",
 	"contacts": {
 		"mobile": "18408249174",
 		"email": "18408249174@163.com",
 		"github": "https://github.com/onejorke",
 		"location": "chengdu"
 	},
  "biopic":"images/fry.jpg",
 	"welcomeMessage": "thanks for your viewing",
  "skills":["web development","machine learning"]
 }
var education = {
	"schools": [{
		"name": "cuit",
		"location": "chengdu",
		"degree": "bachelor",
		"majors": "applied physics",
		"dates": 2017
	}]
}
var work = {
	"jobs": [

		{
      "employer":"cuit",
			"title": "student union",
			"dates": 201309,
			"description": "secretary of gym department"
		}
	]
}
var projects = {
	"projects": [{
		"title": "mock",
		"description": "bootstrap"
	}, {
		"title": "resume",
		"description": "jquery"
	}]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").prepend(formattedLocation);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").prepend(formattedgithub);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").prepend(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").prepend(formattedMobile);
var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedbiopic);
var formattedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedmsg);
$("#header").append(HTMLskillsStart);
var formattedskills = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedskills);
var formattedskills = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedskills);

$("#workExperience").append(HTMLworkStart);
var formattedworkemployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
$(".work-entry:last").append(formattedworkemployer);
var formattedworktitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
$(".work-entry:last").append(formattedworktitle);
var formattedworkdates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
$(".work-entry:last").append(formattedworkdates);
var formattedworkdescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);
$(".work-entry:last").append(formattedworkdescription);


$("#projects").append(HTMLprojectStart);
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[0].title);
$(".project-entry:last").append(formattedProjectTitle);
var formattedProjectdescription = HTMLprojectDescription.replace("%data%", projects.projects[0].description);
$(".project-entry:last").append(formattedProjectdescription);
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[1].title);
$(".project-entry:last").append(formattedProjectTitle);
var formattedProjectdescription = HTMLprojectDescription.replace("%data%", projects.projects[1].description);
$(".project-entry:last").append(formattedProjectdescription);


$("#education").append(HTMLschoolStart);
var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[0].name);
$(".education-entry:last").append(formattedschoolname);
var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
$(".education-entry:last").append(formattedschooldegree);
var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
$(".education-entry:last").append(formattedschooldates);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
$(".education-entry:last").append(formattedschoolLocation);
var formattedschoolmajors = HTMLschoolMajor.replace("%data%", education.schools[0].majors);
$(".education-entry:last").append(formattedschoolmajors);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
