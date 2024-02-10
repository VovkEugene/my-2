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

//-------------------------------MixItUp (project section)---------------
const containerEl = document.querySelector(".projects__container");

var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});

mixer.filter("*");

//-------------------------------Swiper (testimonials section)-----------
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

//-------------------------------Navbar Toggle/Burger---------------------
const navMenuNode = document.querySelector(".nav__menu");
const navOpenButtonNode = document.querySelector(".nav__toggle_open");
const navCloseButtonNode = document.querySelector(".nav__toggle_close");

navOpenButtonNode.addEventListener("click", openNavHandler);
navCloseButtonNode.addEventListener("click", closeNavHandler);

function openNavHandler() {
  navMenuNode.style.display = "flex";
  navOpenButtonNode.style.display = "none";
  navCloseButtonNode.style.display = "inline-block";
}

function closeNavHandler() {
  navMenuNode.style.display = "none";
  navCloseButtonNode.style.display = "none";
  navOpenButtonNode.style.display = "inline-block";
}

//----------close nav-menu on clock of nav-link on small screens-----------
const navItems = navMenuNode.querySelectorAll("a");

if (window.innerWidth < 768) {
  navItems.forEach((item) => {
    item.addEventListener("click", closeNavHandler);
  });
}

//-------------------------------Navbar Toggle/Burger---------------------
const themeButton = document.querySelector(".nav__theme-button");

themeButton.addEventListener("click", () => {
  let bodyClass = document.body.className;

  if (!bodyClass) {
    bodyClass = "dark";
    document.body.className = bodyClass;
    //change toggle icon
    themeButton.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
  } else {
    bodyClass = "";
    document.body.className = bodyClass;
    themeButton.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
});
