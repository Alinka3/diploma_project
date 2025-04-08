document.addEventListener("DOMContentLoaded", function () {
  const typeFilter = document.getElementById("typeFilter");
  const distanceFilter = document.getElementById("distanceFilter");
  const categoryFilter = document.getElementById("categoryFilter");

  const events = document.querySelectorAll(".event");

  function filterEvents() {
    const typeVal = typeFilter.value.toLowerCase();
    const distanceVal = distanceFilter.value;
    const categoryVal = categoryFilter.value.toLowerCase();

    events.forEach(event => {
      const categoryText = event.querySelector(".event-category")?.textContent.toLowerCase() || '';

      const matchesType = !typeVal || categoryText.includes(typeVal);
      const matchesDistance = !distanceVal || categoryText.includes(`(${distanceVal} km)`);
      const matchesCategory = !categoryVal || categoryText.includes(categoryVal);

      if (matchesType && matchesDistance && matchesCategory) {
        event.style.display = "flex";
      } else {
        event.style.display = "none";
      }
    });
  }

  typeFilter.addEventListener("change", filterEvents);
  distanceFilter.addEventListener("change", filterEvents);
  categoryFilter.addEventListener("change", filterEvents);
});




  
  
  