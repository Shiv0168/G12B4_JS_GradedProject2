// USER INFO SAVE ON LOCAL STORAGE
document.querySelector("#username").addEventListener("input", function () {
  localStorage.setItem("username", this.value);
});
document.querySelector("#password").addEventListener("input", function () {
  localStorage.setItem("password", this.value);
});

// VALIDATE CREDENTIALS
//  USERNAME = admin
//  PASSWORD = admin
function login() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  console.log(username);
  console.log(password);
  if (username == "admin" && password == "admin") {
    window.open("resumePage.html", "_self");
  } else {
    alert("Invalid Username/Password :(");
  }
}

// STOP FROM GOING BACK
function preventBack() {
  window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function () {
  null;
};
