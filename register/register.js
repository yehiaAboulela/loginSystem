const inputs = document.getElementById("inputs");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("passInput");

const signUpBtn = document.getElementById("signUpBtn");

const wrongInputAlert = document.getElementById("wrongInputAlert");

let users = [];
let emailsList = [];
if (localStorage.getItem("usersList")) {
  users = JSON.parse(localStorage.getItem("usersList"));
  for (let i = 0; i < users.length; i++) {
    emailsList.push(users[i].email);
  }
}

signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    nameInput.value.length === 0 ||
    emailInput.value.length === 0 ||
    passInput.value.length === 0
  ) {
    wrongInputAlert.innerHTML = `<span class="mt-2 text-danger">all inputs are required</span>`;
  } else if (emailsList.includes(emailInput.value)) {
    wrongInputAlert.innerHTML = `<span class="mt-2 text-danger">this user email already exists</span>`;
  } else {
    let obj = {
      name: nameInput.value,
      email: emailInput.value,
      password: passInput.value,
    };
    users.push(obj);
    emailsList.push(obj.email);
    localStorage.setItem("usersList", JSON.stringify(users));
    wrongInputAlert.innerHTML = `<span class="mt-2 text-danger">Success</span>`;
  }
  console.log(users, emailsList);
});
