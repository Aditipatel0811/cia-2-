document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;
  
    var isValid = true;
  
    // Validate name
    if (name.trim() === "") {
      isValid = false;
      alert("Please enter your name.");
    }
  
    // Validate email
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      alert("Please enter a valid email address.");
    }
  
    // Validate comments
    if (comments.trim() === "") {
      isValid = false;
      alert("Please enter your comments.");
    }