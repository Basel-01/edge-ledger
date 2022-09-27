// Sticky menu background
window.addEventListener('scroll', () => {
  if (window.scrollY > 160) {
    document.querySelector('header').style.backgroundColor = "rgb(51, 51, 51, 90%)";
  } else {
    document.querySelector('header').style.backgroundColor = "rgb(51, 51, 51)";
  }
});

// Responsive list
document.querySelector("header nav i").addEventListener("click", () => {
  document.querySelector("header nav ul").classList.toggle("show")
});

// Scroll Btn
let scrollBtn = document.querySelector("header .scroll-top");
window.onscroll = () => {
  if(window.scrollY > 200) {
    scrollBtn.classList.add("show-s");
  } else {
    scrollBtn.classList.remove("show-s");
  }
}
scrollBtn.addEventListener("click", () => {
  window.scrollTo ({
    top: 0,
    behavior:"smooth"
  });
});

// Form Session
let form = document.querySelector(".contact form");
let inputs = document.querySelectorAll(".contact form [name]");

window.onload = () => {
  inputs.forEach(input => {
    input.value = window.sessionStorage.getItem(input.name);
  });
}
form.onsubmit = () => {
  window.sessionStorage.clear();
}
inputs.forEach(input => {
  input.oninput = () => {
    window.sessionStorage.setItem(input.name, input.value);
  }
});

// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 43.957643, lng: -90.974681 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}