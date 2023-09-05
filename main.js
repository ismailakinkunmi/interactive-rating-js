const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const submit = document.querySelector(".submit");
const numbers = document.querySelectorAll(".number");

// const userRateValue = () => {
//   numbers.forEach((number) =>
//     number.addEventListener("click", () => number.innerHTML)
//   );
// };

numbers.forEach((number) =>
  number.addEventListener("click", () => console.log(number.innerHTML))
);

const interactiveState = () => {
  const ratedContainer = document.createElement("div");
  ratedContainer.classList.add("thank-you");

  const image = document.createElement("img");
  image.src = "./images/illustration-thank-you.svg";
  image.alt = "thank-you svg";

  ratedContainer.appendChild(image);

  const userSelected = document.createElement("p");
  userSelected.innerHTML = numbers.forEach((number) =>
    number.addEventListener("click", () => number.innerHTML)
  ); //userRateValue(); //`You selected ${userRateValue()} out of 5`;
  ratedContainer.appendChild(userSelected);

  const thank = document.createElement("p");
  thank.innerHTML = "Thank you!";
  ratedContainer.appendChild(thank);

  const appreciate = document.createElement("p");
  appreciate.innerHTML =
    "We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!";
  ratedContainer.appendChild(appreciate);

  container.appendChild(ratedContainer);
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  container.removeChild(wrapper);
  interactiveState();
});
