const starsComponent = document.getElementById("stars_component");
const thanksComponent = document.getElementById("thanks_component");
const btn = document.getElementById("btn");
const ratingComponent = document.getElementById("rating_component");
const rateGreeting = document.getElementById("rate_greeting");

let rate = 0;

for (let i of [1, 2, 3, 4, 5]) {
  let divChild = document.createElement("div");
  divChild.id = `star${i}`;
  divChild.className = "rate";
  ratingComponent.appendChild(divChild);
  divChild.innerHTML = `<span class="rate_number">${i}</span>`;
  divChild.addEventListener("click", () => {
    for (let i of [1, 2, 3, 4, 5]) {
      document.getElementById(`star${i}`).className = "rate";
    }
    divChild.classList.add("rate_choose");
    rate = i;
  });
}

btn.addEventListener("mouseover", () => {
  if (rate == 0) {
    btn.style.cursor = "not-allowed";
  } else {
    btn.style.cursor = "pointer";
  }
});

btn.addEventListener("click", () => {
  if (rate != 0) {
    starsComponent.style.display = "none";
    thanksComponent.style.display = "block";
    rateGreeting.innerHTML = `You selected ${rate} out of 5`;
  }
});
