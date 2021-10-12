const clickBanner = document.querySelector(`.fas`);
const arrow = document.querySelector(`.arrow`);
const menuM = document.querySelector(`.menu`);
const dark = document.querySelector(`dark`);

clickBanner.addEventListener(`click`, () =>
{
   console.log("klikam w FAS");
   menuM.style.height = `300px`;
   menuM.style.transition = `0.5s`;
   clickBanner.classList.toggle(`on`);
   // clickBanner.style.transition = `0.5s`;

})