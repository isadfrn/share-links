const headerImageLightUrl = "./assets/img/isa-light.png";
const headerImageLDarkUrl = "./assets/img/isa-dark.png";
const lightBulb = "./assets/img/light-bulb.svg";
const darkBulb = "./assets/img/dark-bulb.svg";

const theme = document.querySelector(".theme");
const switcher = document.querySelector(".switcher");
const headerImage = document.querySelector(".header__image");
const headerThemeSwitcherButton = document.querySelector(
  ".header__theme__switcher-btn"
);
const headerThemeSwitcherImage = document.querySelector(
  ".header__theme__switcher__image"
);
const socialIcons = document.querySelectorAll(".social__icon-image");

const changeTheme = (themeIsLight) => {
  if (themeIsLight) {
    theme.classList.remove("theme-light");
    theme.classList.add("theme-dark");

    headerImage.classList.add("header__image-dark");
    headerImage.src = headerImageLDarkUrl;

    headerThemeSwitcherButton.classList.add("header__theme__switcher-btn-dark");
    headerThemeSwitcherImage.src = darkBulb;

    socialIcons.forEach((icon) => {
      icon.classList.add("social__icon-image-dark");
    });
  } else {
    theme.classList.add("theme-light");
    theme.classList.remove("theme-dark");

    headerImage.classList.remove("header__image-dark");
    headerImage.src = headerImageLightUrl;

    headerThemeSwitcherButton.classList.remove(
      "header__theme__switcher-btn-dark"
    );
    headerThemeSwitcherImage.src = lightBulb;

    socialIcons.forEach((icon) => {
      icon.classList.remove("social__icon-image-dark");
    });
  }
};

switcher.addEventListener("click", () => {
  const themeUsedIsLight = theme.classList.contains("theme-light");
  changeTheme(themeUsedIsLight);
});
