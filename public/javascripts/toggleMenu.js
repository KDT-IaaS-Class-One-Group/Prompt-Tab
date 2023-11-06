function toggleNav() {
  var sidenav = document.getElementById("sidenav");
  if (sidenav.style.width === "250px") {
      sidenav.style.width = "0";
  } else {
      sidenav.style.width = "250px";
  }
}