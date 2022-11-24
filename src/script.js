"use strict";

AOS.init();

const upload = document.getElementById("upload"),
  file = document.getElementById("file"),
  drop__dawnMenu = document.getElementById("bars");

upload.onclick = () => file.click();

const Navbar = document.createElement("div");
Navbar.className = "navbar";
Navbar.innerHTML = `
    <div class="back" id="back">
        <i class="fas fa-times"></i>
    </div>
`;
document.body.appendChild(Navbar);

const downMenu = () => {
  Navbar.classList.add("active");
};

drop__dawnMenu.addEventListener("click", downMenu);
const back = document.getElementById("back");
back.onclick = () => {
  Navbar.classList.remove("active");
};
