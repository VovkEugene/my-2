const servicesButtonsNode = document.querySelectorAll(".service__item");
const servicesDetailNode = document.querySelector(".services__right");

getService("frontend");

servicesButtonsNode.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveClass();

    const serviceClass = item.classList[1];

    getService(serviceClass);

    item.classList.add("active");
  });
});

function getService(category) {
  const details = servicesData.find((item) => item.category === category);

  servicesDetailNode.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description
      .map((paragraph) => "<p>" + paragraph + "</p>")
      .join("")}`;
}

function removeActiveClass() {
  servicesButtonsNode.forEach((button) => {
    button.classList.remove("active");
  });
}
