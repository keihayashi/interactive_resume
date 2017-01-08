
// var name = "Kei Hayashi";
// var role = "Backend Software Engineer";

var bio = {
  "name" : "Kei Hayashi",
  "role" : "Backend Software Engineer",
  "contacts" : {
    "mobile" : "-",
    "email" : "-",
    "github" : "keihayashi",
    "twitter" : "@ke1hayash1",
    "location" : "San Bruno"
  },
  "welcomeMessaege" : "Welcome to my resume page.",
  "skills" : ["C++", "Python", "Bootstrap", "Grunt", "jQuery", "Git/Github", "Machine Learning"],
  "biopic" : "images/me.jpg"
}

var projects = {
  "projects" : [
    {
      "title" : "Multi User Blog",
      "dates" : "Dec 2016",
      "description" : "Simple multi-user blog using Google App Engine  and webapp2 framework.",
      "images" : []
    }, {
      "title" : "Tournament results",
      "dates" : "Nov 2016",
      "description" : "Demonstrated swiss-system tournament using vagrant VM and PostgreSQL. Udacity provided the unit test.",
      "images" : []
    } , {
      "title" : "Portfolio Site",
      "dates" : "Nov 2016",
      "description" : "Built a portfolio site using bootstrap framework.",
      "images" : []
    }, {
      "title" : "Chouchou Ponytail",
      "dates" : "Oct 2015",
      "description" : "Collaborated with others to create a hair ornament device to communicate mental state.",
      "images" : []
    }
  ]
}

var work = {
  "jobs" : [
      {
      "title" : "STEP intern",
      "employer" : "Google Japan",
      "location" : "Tokyo",
      "dates" : "Oct-Dec 2015",
      "description" : "Enabled Google Now Application not to show card groups  which seems  not interesting to a user."
    }, {
      "title" : "Exchange researcher",
      "employer" : "Harvard School of Public Health",
      "location" : "Boston",
      "dates" : "Jan-Mar 2015",
      "description" : "Collaborated with Prof. Kawachi about the relationship between laughter and health."
    }
  ]
}

var education = {
  "schools" : [
    {
      "name" : "University of Tokyo",
      "location" : "Tokyo",
      "dates" : "2010-2016",
      "degree" : "BA",
      "url" : "http://www.u-tokyo.ac.jp/en/academics/facultyofmedicine.html",
      "majors" : ["Medicine"]
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Full Stack Engineer nanodegree program",
      "school" : "Udacity",
      "dates" : "Oct 2016 - Jan 2017",
      "url" : "https://www.udacity.com"
    }
  ]
}

// show place of cursol
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// button to change style of name
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPicture);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
  }
}

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
  }
}
projects.display();

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    for (i = 0; i < education.schools[school].majors.length; i++) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
      $(".education-entry:last").append(formattedMajor);
    }
  }
  $("#education").append(HTMLonlineClasses);
  for (online in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
    $(".education-entry:last").append(formattedTitle);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
    $(".education-entry:last").append(formattedURL);
  }
}
education.display();
$("#mapDiv").append(googleMap);
