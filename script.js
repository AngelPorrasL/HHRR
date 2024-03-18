// Add event listener to hiring form
document.getElementById("hiring-form").addEventListener("submit", function(event) {
	event.preventDefault();

	// Get form data
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const resume = document.getElementById("resume").files[0];
	const coverLetter = document.getElementById("cover-letter").value;

	// Display form data
	console.log("Name:", name);
	console.log("Email:", email);
	console.log("Resume:", resume.name);
	console.log("Cover Letter:", coverLetter);
});

// Add event listener to performance form
document.getElementById("performance-form").addEventListener("submit", function(event) {
	event.preventDefault();

	// Get form data
	const employee = document.getElementById("employee").value;
	const goals = document.getElementById("goals").value;
	const accomplishments = document.getElementById("accomplishments").value;
	const improvements = document.getElementById("improvements").value;

	// Display form data
	console.log("Employee:", employee);
	console.log("Goals:", goals);
	console.log("Accomplishments:", accomplishments);
	console.log("Improvements:", improvements);
});

// Add event listener to training form
document.getElementById("training-form").addEventListener("submit", function(event) {
	event.preventDefault();

	// Get form data
	const employee = document.getElementById("employee").value;
	const course = document.getElementById("course").value;
	const certification = document.getElementById("certification").value;
	const skills = document.getElementById("skills").value;

	// Display form data
	console.log("Employee:", employee);
	console.log("Course:", course);
	console.log("Certification:", certification);
	console.log("Skills:", skills);
});