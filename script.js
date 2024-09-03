function toggleMenu() {
  var menu = document.getElementById("fullscreenMenu");
  var bars = document.querySelector(".menu-bars");

  if (menu.style.display === "flex") {
    menu.style.opacity = "0";
    setTimeout(function () {
      menu.style.display = "none";
    }, 300);
  } else {
    menu.style.display = "flex";
    setTimeout(function () {
      menu.style.opacity = "1";
    }, 10);
  }

  bars.classList.toggle("change");
}
function openModal(src) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  modalImage.src = src;
  modal.classList.add("show");
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.classList.remove("show");
}
