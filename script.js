function showNewTeamInput() {
  var newTeamInputContainer = document.getElementById("newTeamInputContainer");
  newTeamInputContainer.style.display = "block"; // Show the input field container
}

function addNewTeam() {
  var newTeamInput = document.getElementById("newTeamInput");
  var teamMembersInput = document.getElementById("teamMembersInput");
  var newTeamInputContainer = document.getElementById("newTeamInputContainer");
  var teamList = document.getElementById("teamList");

  // Check if input fields are empty
  if (
    newTeamInput.value.trim() === "" ||
    teamMembersInput.value.trim() === ""
  ) {
    newTeamInput.placeholder = "Enter new team name"; // Set placeholder
    teamMembersInput.placeholder = "Enter number of team members";
    return; // Exit function
  }

  // Create a new <a> element for the team name
  var newTeamLink = document.createElement("a");
  newTeamLink.href = "#";
  newTeamLink.classList.add("list-group-item", "list-group-item-action");
  newTeamLink.textContent = newTeamInput.value;

  // Create a span element for the number of team members
  var teamMembersSpan = document.createElement("span");
  teamMembersSpan.classList.add("team-members");
  teamMembersSpan.textContent = teamMembersInput.value;

  // Append the span element to the new team list item
  newTeamLink.appendChild(teamMembersSpan);

  // Append the new <a> element to the team list
  teamList.appendChild(newTeamLink);

  // Clear the input fields
  newTeamInput.value = "";
  teamMembersInput.value = "";

  // Hide the input field container
  newTeamInputContainer.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var teamList = document.getElementById("teamList");

  // Add click event listeners to team list items
  var teamItems = teamList.querySelectorAll(".list-group-item");
  teamItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Get the team name and current number of members
      var teamName = item.textContent.trim();
      var currentMembers = parseInt(
        item.querySelector(".team-members").textContent
      );

      // Prompt the user to enter a new number of members
      var newMembers = window.prompt(
        "Enter new number of members for " + teamName,
        currentMembers
      );

      // Update the number of members if the input is valid
      if (newMembers !== null && !isNaN(newMembers) && newMembers !== "") {
        item.querySelector(".team-members").textContent = newMembers;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const folders = document.querySelectorAll(".folder-name");
  folders.forEach(function (folder) {
    folder.addEventListener("click", function () {
      const subfolders = this.nextElementSibling;
      this.classList.toggle("open");
      if (subfolders) {
        subfolders.classList.toggle("open");
      }
    });
  });
});

const profileImage = document.getElementById("profile-image");
const profileDialog = document.getElementById("profile-dialog");
const signOutBtn = document.getElementById("sign-out-btn");
let timeoutId;

// Show dialog box when mouse enters profile image
profileImage.addEventListener("mouseenter", function () {
  clearTimeout(timeoutId); // Clear previous timeout
  profileDialog.style.display = "block";
});

// Hide dialog box when mouse leaves profile image or dialog box
profileImage.addEventListener("mouseleave", startHideTimeout);
profileDialog.addEventListener("mouseleave", startHideTimeout);

function startHideTimeout() {
  timeoutId = setTimeout(() => {
    profileDialog.style.display = "none";
  }, 2000);
}

signOutBtn.addEventListener("mouseenter", function () {
  clearTimeout(timeoutId); // Clear the hide timeout
});

signOutBtn.addEventListener("mouseleave", startHideTimeout);

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".brand-checkbox");
  const countSpan = document.getElementById("selectedCount");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      let count = 0;
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          count++;
        }
      });
      countSpan.textContent = count;
    });
  });
});

// JavaScript code for search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const brandRows = document.querySelectorAll(".brand-row");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    brandRows.forEach((row) => {
      const brandName = row.querySelector("td").textContent.toLowerCase();
      if (brandName.includes(searchTerm)) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    });
  });
});

const darkModeEnabled = localStorage.getItem("darkModeEnabled");
if (darkModeEnabled === "true") {
  document.body.classList.add("dark-mode");
}
