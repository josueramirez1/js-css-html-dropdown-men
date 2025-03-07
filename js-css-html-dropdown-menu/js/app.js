const dropdownBtn = document.querySelector("#dropdown-button");
const dropdownList = document.querySelector(".nav-links-container");

function toggle() {
  dropdownList.classList.toggle("hidden");
}

dropdownBtn.addEventListener("click", toggle);
