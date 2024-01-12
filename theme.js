// Theme button

const darkTheme = document.querySelector(".moon");
const lightTheme = document.querySelector(".sun");
const lightHero = document.querySelector(".hero-light");
const darkHero = document.querySelector(".hero-dark");
const taskinput = document.querySelector(".create-task");
const taskContanier = document.querySelector(".container-task-creator");
const statuses = document.querySelector(".container-task-list-statuses");
const count = document.getElementById("count");

const heroMobileLight = document.querySelector(".mob-2");
const heroMobileDark = document.querySelector(".mob-1");

// The mobile query px size cutoff
const screenThreshHold = 800;

// This fucntion updates the screen size in real time instead of the making the user refresh the broswer to do so.
function updateScreenWidth() {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // Setting what image to display dependant on the provided condition.
  lightTheme.addEventListener("click", function () {
    if (screenWidth < screenThreshHold) {
      heroMobileLight.style.display = "block";
      heroMobileDark.style.display = "none";

      lightHero.style.display = "none";
      darkHero.style.display = "none";
    } else {
      heroMobileLight.style.display = "none";
      heroMobileDark.style.display = "none";

      lightHero.style.display = "block";
      darkHero.style.display = "none";
    }
  });

  darkTheme.addEventListener("click", function () {
    if (screenWidth < screenThreshHold) {
      heroMobileLight.style.display = "none";
      heroMobileDark.style.display = "block";

      lightHero.style.display = "none";
      darkHero.style.display = "none";
    } else {
      heroMobileLight.style.display = "none";
      heroMobileDark.style.display = "none";

      lightHero.style.display = "none";
      darkHero.style.display = "block";
    }
  });
}

// Initial call to set screenWidth on page load
updateScreenWidth();

// An event listener for window resize
window.addEventListener("resize", updateScreenWidth);

lightTheme.addEventListener("click", function () {
  // Changing themes
  darkTheme.style.display = "block";
  lightTheme.style.display = "none";

  // Changing containers
  taskContanier.style.background = "white";
  taskinput.style.background = "white";
  taskinput.style.color = "black";

  // todos container
  statuses.style.background = "white";
  document.body.style.background = "hsl(0, 0%, 98%)";

  const allStatus = document.querySelector(".all");
  const activeStatus = document.querySelector(".activee");
  const completedStatus = document.querySelector(".completed");
  const clrStatus = document.querySelector(".clr");

  allStatus.addEventListener("mouseover", () => {
    allStatus.style.color = "black";
  });

  allStatus.addEventListener("mouseout", () => {
    allStatus.style.color = "";
  });

  activeStatus.addEventListener("mouseover", () => {
    activeStatus.style.color = "black";
  });

  activeStatus.addEventListener("mouseout", () => {
    activeStatus.style.color = "";
  });

  completedStatus.addEventListener("mouseover", () => {
    completedStatus.style.color = "black";
  });

  completedStatus.addEventListener("mouseout", () => {
    completedStatus.style.color = "";
  });

  clrStatus.addEventListener("mouseover", () => {
    clrStatus.style.color = "black";
  });

  clrStatus.addEventListener("mouseout", () => {
    clrStatus.style.color = "";
  });

  document.body.classList.add("black-theme");
});

/*------------------Dark theme-------------- */
darkTheme.addEventListener("click", function () {
  darkTheme.style.display = "none";
  lightTheme.style.display = "block";

  taskContanier.style.background = "hsl(235, 24%, 19%)";
  taskinput.style.background = "hsl(235, 24%, 19%)";
  taskinput.style.color = "white";

  statuses.style.background = "hsl(235, 24%, 19%)";
  document.body.style.background = "hsl(235, 21%, 11%)";
  document.body.classList.remove("black-theme");
});
