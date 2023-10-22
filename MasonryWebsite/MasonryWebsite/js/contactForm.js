document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent blank submission

  // get data from form
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  // process form and output to console
  console.log("Name: " + name);
  console.log("Phone Number: " + phone);
  console.log("Email: " + email);
});
