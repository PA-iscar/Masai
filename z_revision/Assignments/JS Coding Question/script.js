const container = document.body.querySelector(".container");
let count = 1;
function load(num = 25) {
  let i = 0;
  while (i < num) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = `Masai Student ${count++}`;
    container.append(box);
    i++;
  }
}
load();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    load();
  }
});
