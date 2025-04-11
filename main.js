document.addEventListener("DOMContentLoaded", function () {
  const typeFilter = document.getElementById("typeFilter");
  const distanceFilter = document.getElementById("distanceFilter");
  const categoryFilter = document.getElementById("categoryFilter");

  const events = document.querySelectorAll(".event");

  function filterEvents() {
    const selectedType = typeFilter.value.toLowerCase();
    const selectedDistance = distanceFilter.value;
    const selectedCategory = categoryFilter.value.toLowerCase();

    events.forEach(event => {
      const typeEl = event.querySelector(".event-type");
      const categoryEl = event.querySelector(".event-category");

      if (!typeEl || !categoryEl) {
        event.style.display = "none";
        return;
      }

      const eventType = typeEl.textContent.trim().toLowerCase();
      const fullCategory = categoryEl.textContent.trim();

      // Разделим на категорию и дистанцию
      let eventCategory = fullCategory;
      let eventDistance = "";

      const match = fullCategory.match(/^(.+?)\s*\((\d+)\s*km\)$/);
      if (match) {
        eventCategory = match[1].trim();
        eventDistance = match[2].trim();
      }

      eventCategory = eventCategory.toLowerCase();

      const matchesType = !selectedType || eventType === selectedType;
      const matchesCategory = !selectedCategory || eventCategory === selectedCategory;
      const matchesDistance = !selectedDistance || eventDistance === selectedDistance;

      if (matchesType && matchesCategory && matchesDistance) {
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








  
  
  