const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const mainSlider = document.querySelector("#main-slider");
let slider = [
  {
    home_article_title: "Another article on the wayy",
    home_article_paragraph: "loremloremloremloremloremloremlorem",
    home_article_image_name: "accolades-lifestyle.jpg",
    home_article_image_path: null,
  },
  {
    home_article_title: "Esports article ",
    home_article_paragraph: "loremloremloremloremloremloremlorem",
    home_article_image_name: "HomeImageEsports.webp",
    home_article_image_path: null,
  },
  {
    home_article_title: "Borderlands article ",
    home_article_paragraph:
      "loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    home_article_image_name: "HomeImageBorderlands.webp",
    home_article_image_path: null,
  },
];
let index = 0;
let sliderTitle = document.querySelector(".main-slider-h1");
let sliderParagraph = document.querySelector(".slider-paragraph");
let sliderBackgroundImg;

leftBtn.addEventListener("click", () => {
  index -= 1;
  if (index < 0) {
    index = slider.length - 1;
  }

  sliderTitle.textContent = articleTitle = slider[index].home_article_title;
  sliderParagraph.textContent = articleParagraph =
    slider[index].home_article_paragraph;
  sliderBackgroundImg = "../Images/" + slider[index].home_article_image_name;
  mainSlider.style.backgroundImage = `url(${sliderBackgroundImg})`;
});

rightBtn.addEventListener("click", () => {
  index += 1;
  if (index > slider.length - 1) {
    index = 0;
  }
  sliderTitle.textContent = articleTitle = slider[index].home_article_title;
  sliderParagraph.textContent = articleParagraph =
    slider[index].home_article_paragraph;
  sliderBackgroundImg = "../Images/" + slider[index].home_article_image_name;
  mainSlider.style.backgroundImage = `url(${sliderBackgroundImg})`;
});

document.addEventListener("DOMContentLoaded", () => {
  sliderTitle.textContent = articleTitle = slider[0].home_article_title;
  sliderParagraph.textContent = articleParagraph =
    slider[0].home_article_paragraph;
  sliderBackgroundImg = "../Images/" + slider[0].home_article_image_name;
  mainSlider.style.backgroundImage = `url(${sliderBackgroundImg})`;
});
