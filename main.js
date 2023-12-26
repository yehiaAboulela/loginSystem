const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("passInput");

const loginBtn = document.getElementById("loginBtn");

const wrongInputAlert = document.getElementById("wrongInputAlert");

let signedUpUsers = [];
if (localStorage.getItem("usersList")) {
  signedUpUsers = JSON.parse(localStorage.getItem("usersList"));
}
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailInput.value.length === 0 || passInput.value.length === 0) {
    wrongInputAlert.innerHTML = `<span class="mt-2 text-danger">inputs cant be empty</span>`;
  } else {
    for (let i = 0; i < signedUpUsers.length; i++) {
      if (
        signedUpUsers[i].email === emailInput.value &&
        signedUpUsers[i].password === passInput.value
      ) {
        localStorage.setItem("currentUser", signedUpUsers[i].name);
        window.location = "./welcome/welcome.html";
      } else {
        wrongInputAlert.innerHTML = `<span class="mt-2 text-danger">incorrect password or email</span>`;
      }
    }
  }
});
