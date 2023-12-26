const welcomeUser = document.getElementById("welcomeUser");

welcomeUser.innerText = `welcome ${localStorage.getItem("currentUser")}`;
