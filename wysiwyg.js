// Create an array of objects that represents famous people (see structure below).

var people = [
	{Name: "Justin Timberlake", 
	Title: "Singer/Songwriter",
	Bio: "some data", 
	Image: "https://lh4.googleusercontent.com/-5mAippdj-C8/UkHaPz4zNgI/AAAAAAAAClY/OGpiN9xzEN8/w995-h995/tko%2Bno%2Btext.jpg", 
	Lifespan: "1981 - Present"},
	{Name: "Elvis Presley", 
	Title: "Singer/Songwriter",
	Bio: "some data", 
	Image: "https://s-media-cache-ak0.pinimg.com/736x/4e/2a/32/4e2a32720af661fa786d0ebe332fd2b7.jpg", 
	Lifespan: "1935-1977"},
	{Name: "Bessie Smith", 
	Title: "Singer/Songwriter",
	Bio: "some data", 
	Image: "http://cdn.thedailybeast.com/content/dailybeast/articles/2015/05/16/why-blues-titan-bessie-smith-still-kills-it/jcr:content/image.img.2000.jpg/1431747526777.cached.jpg", 
	Lifespan: "1894-1937"},
	{Name: "Al Gore", 
	Title: "Former Vice President",
	Bio: "some data", 
	Image: "https://lh3.googleusercontent.com/-L1jq5iRO8F0/AAAAAAAAAAI/AAAAAAAAADg/_jNY1FCEXSM/s0-c-k-no-ns/photo.jpg", 
	Lifespan: "1948 - Present"},
	{Name: "Reese Witherspoon", 
	Title: "Actress",
	Bio: "some data", 
	Image: "https://images-production.global.ssl.fastly.net/uploads/posts/image/49163/reese-witherspoon.jpg", 
	Lifespan: "1976 - Present"},
	{Name: "Usher", 
	Title: "Singer/Songwriter",
	Bio: "some data", 
	Image: "http://popcrush.com/files/2014/12/usher.jpg?w=630", 
	Lifespan: "1978 - Present"}
];

var peopleHolder = document.getElementById("peopleHolder");
var peopleString = "";
var currentPerson;
console.log(people);
// function addPeople(){

for (var i = 0; i < people.length; i++) {
	currentPerson = people[i];
	peopleString += `<div><p>${people[i].Name}</p>`;
	peopleString += `<p>${people[i].Title}</p>`;
	peopleString += `<p>${people[i].Bio}</p>`;
	peopleString += `<img src="${people[i].Image}">`;
	peopleString += `<p>${people[i].Lifespan}</p>`;
}
peopleString += "</div>";
peopleHolder.innerHTML += peopleString;
// }

// addPeople();
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
