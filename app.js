// init Github
const github = new Github();
// init UI
const ui = new UI();

// Search Input
const searchInput = document.getElementById("searchUser");

// Add event listner
searchInput.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert(`User Not Found`, "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear the input
    ui.clearProfile();
  }
});
