// ORDER BUTTON ALERT
document.getElementById("orderBtn").addEventListener("click", function () {
  alert("Redirecting to McDelivery Partners!");
});

// EMAIL VALIDATION
const subscribeBtn = document.getElementById("subscribeBtn");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

subscribeBtn.addEventListener("click", function () {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailValue === "") {
    emailError.style.color = "red";
    emailError.textContent = "Email field cannot be empty.";
  } else if (!emailPattern.test(emailValue)) {
    emailError.style.color = "red";
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.style.color = "green";
    emailError.textContent = "Successfully Subscribed!";
    emailInput.value = "";
  }
});

// READ MORE TOGGLE
const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

readMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    readMoreBtn.textContent = "Read less";
  } else {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read more";
  }
});

// DARK MODE TOGGLE
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// CITY TOOLTIP HIDE
document.getElementById("citySelect").addEventListener("click", function () {
  document.querySelector(".tooltip").style.display = "none";
});
