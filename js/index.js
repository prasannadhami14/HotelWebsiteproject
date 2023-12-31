const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
function validateForm() {
  // Clear any existing error messages and reset border colors
  clearErrorsAndBorders();

  // Get input values
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const description = document.getElementById("description").value;

  let isValid = true;

  // Validate email
  if (!isValidEmail(email)) {
    displayError("emailError", "Please enter a valid email address.");
    setInputBorder("email", false);
    isValid = false;
  } else {
    setInputBorder("email", true);
  }

  // Validate phone number (you can add your own validation logic here)
  if (!isValidPhoneNumber(phoneNumber)) {
    displayError("phoneNumberError", "Please enter a valid phone number.");
    setInputBorder("phoneNumber", false);
    isValid = false;
  } else {
    setInputBorder("phoneNumber", true);
  }

  // Validate description (you can add your own validation logic here)
  if (description.trim() === "") {
    displayError("descriptionError", "Description is required.");
    setInputBorder("description", false);
    isValid = false;
  } else {
    setInputBorder("description", true);
  }

  if (isValid) {
    // Form is valid
    alert("Form submitted successfully!");
  }
}
// Placeholder email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Placeholder phone number validation function
function isValidPhoneNumber(phoneNumber) {
  return phoneNumber.match(/^\d{10}$/); // 10-digit phone number
}
function setInputBorder(inputId, isValid) {
  const inputElement = document.getElementById(inputId);
  if (!isValid) {
    inputElement.style.border = "2px solid red"; // Invalid input, red border
  }
}
// Placeholder function to display error messages
function displayError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
  errorElement.style.color = "red";
}
function clearErrorsAndBorders() {
  const errorElements = document.querySelectorAll(".input__error");
  errorElements.forEach((element) => {
    element.textContent = "";
  });

  const inputElements = document.querySelectorAll(".input__field");
  inputElements.forEach((element) => {
    element.style.border = "1px solid #ccc"; // Reset border to the default color
  });
}
// video play on hover

        // Targeting video element  
        let clip = document.querySelector(".vid") 
  
        /* Applying mouseover event on video clip  
        and then we call play() function to play  
        the video when the mouse is over the video */ 
        clip.addEventListener("mouseover", function (e) { 
            clip.play(); 
        }) 
  
        /* Applying mouseout event on video clip  
        and then we call pause() function to stop  
        the video when the mouse is out the video */ 
        clip.addEventListener("mouseout", function (e) { 
            clip.pause(); 
        }) 
