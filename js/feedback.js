const reviewsBar = document.querySelector(".feedback__list"); //список переключалок
const reviewsItems = document.querySelectorAll(".feedback__item");
const reviewWrapp = document.querySelectorAll(".feedback__item__one");

reviewsItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const currentPeople = e.currentTarget;

    const currentPeopleId = currentPeople.id;

    for (const iterator of reviewsItems) {
      if (iterator !== currentPeople) {
        iterator.classList.remove("feedback__item--active");
      }
    }

    if (!currentPeople.classList.contains("feedback__item--active")) {
      currentPeople.classList.add("feedback__item--active");
    }

    reviewWrapp.forEach(function (wrapp) {
      if (currentPeopleId === wrapp.id) {
        wrapp.classList.add("feedback__item__one--activ");
      } else {
        wrapp.classList.remove("feedback__item__one--activ");
      }
    });
  });
});
