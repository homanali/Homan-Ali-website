const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

const toggleBtn = document.getElementById("toggleTheme");
let darkMode = false;

toggleBtn.addEventListener("click", () => {
  const root = document.documentElement;
  darkMode = !darkMode;

  if (darkMode) {
    root.style.setProperty("--bg-color", "#d3d3d3");
    root.style.setProperty("--text-color", "#111");
    root.style.setProperty("--box-color", "#fff");
    root.style.setProperty("--menu-bg", "#000");

  } else {
    root.style.setProperty("--bg-color", "#121212");
    root.style.setProperty("--text-color", "#f4f4f4");
    root.style.setProperty("--box-color", "#808080");
    root.style.setProperty("--menu-bg", "#1a1a1a");
  }
});

// Welcome Message
const welcomeText = "ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللهِ وَبَرَكَاتُهُ";
let i = 0;

function typeWriter() {
  if (i < welcomeText.length) {
    document.getElementById("welcomeText").innerHTML += welcomeText.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
window.addEventListener("DOMContentLoaded", typeWriter);