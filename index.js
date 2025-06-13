// Elements
const container = document.querySelector(".container");
const hero = document.querySelector(".hero");
const heroImg = document.querySelector(".hero__img");
const heroHiddenImg = document.querySelector(".hero__hidden-img");
const contentTitle = document.querySelector(".content__title");
const contentSubtitle = document.querySelector(".footer__copy--white");

// Event Listeners

hero.addEventListener("mouseover", () => {
    container.style.marginBottom = "4rem";
    heroHiddenImg.style.display = "block";
    contentTitle.style.color = "#00FFF8";
    contentSubtitle.style.color = "#00FFF8";
})

hero.addEventListener("mouseout", () => {
    container.style.marginBottom = "0";
    heroHiddenImg.style.display = "none";
    contentTitle.style.color = "#FFFFFF";
    contentSubtitle.style.color = "#8BACD9";
})