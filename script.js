const menu = document.querySelector(".menu");
const nav = document.querySelector(".header nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".header nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const form = document.getElementById("bookingForm");
const message = document.getElementById("message");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  message.textContent = `Thank you, ${data.get("name")}. Your booking request is ready to connect to Firebase.`;
  form.reset();
});
