//scrolin arrow function
function scroling() {
  window.scrollTo({
    top: 910,
    left: 0,
    behavior: "smooth",
  });
}
// auto write my name
let counter = 1;
const autowriting = () => {
  let title = "Ehab Y Lasheen";
  document.getElementById("auto-title").innerHTML = title.slice(0, counter);
  counter++;
  if (counter > title.length) {
    counter = 1;
  }
};
const stop = setInterval(autowriting, 300);
