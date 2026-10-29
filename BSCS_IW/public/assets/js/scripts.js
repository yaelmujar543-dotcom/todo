  
  
  
  
  
  var navLinks = document.getElementById("navLinks");
    function showMenu(){
      navLinks.style.right = "0";
    }
    function hideMenu(){
      navLinks.style.right = "-200px";
    }

    
const signUpBtn = document.getElementById("signUpBtn");


signUpBtn.addEventListener("click", function (event) {
  
  event.preventDefault();

  
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const agree = document.getElementById("agree").checked;

  
  if (firstName === "" || lastName === "") {
    alert("Please enter your first and last name.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (!agree) {
    alert("You must agree to the Terms of Service.");
    return;
  }

 
  alert("Account created! Redirecting to login...");
  window.location.href = "login.html";
});

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");
const loginBtn = document.getElementById("loginBtn");


togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.replace("fa-eye-slash", "fa-eye");
  }
});


loginBtn.addEventListener("click", function () {
  const email = emailInput.value.trim();
  const password = passwordInput.value;


  message.textContent = "";
  message.style.color = "red";

  if (email === "") {
    message.textContent = "Please enter your email.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email.";
    return;
  }

  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    return;
  }


  message.style.color = "green";
  message.textContent = "Login successful! Redirecting...";

  setTimeout(function () {
    window.location.href = "home.html"; // change to your real page
  }, 1000);
});
 let slideIndex = 0;

    function carousel() {
      const slides = document.querySelectorAll(".hero");

      
      slides.forEach(slide => {
        slide.style.display = "none";
      });

      
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      
      slides[slideIndex - 1].style.display = "block";

      
      setTimeout(carousel, 2000);
    }

    carousel(); // simulan ang slideshow
    
    var navLinks = document.getElementById("navLinks");
    function showMenu(){
      navLinks.style.right = "0";
    }
    function hideMenu(){
      navLinks.style.right = "-200px";
    }