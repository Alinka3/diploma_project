const eventsStore = [
    { title: "INFJ Personality Type - Coffee Shop Meet & Greet", date: "2024-03-23", type: "offline", category: "Hobbies and Passions", distance: 50 },
    { title: "NYC AI Users - AI Tech Talks, Demo & Social", date: "2024-03-23", type: "offline", category: "Technology", distance: 25 },
    { title: "Book 40+ Appointments Per Month Using AI", date: "2024-03-16", type: "online", category: "Technology", distance: 10 },
    { title: "Dump writing group weekly meetup", date: "2024-03-13", type: "online", category: "Business", distance: 100 }
];

function renderEvents(events) {
    const eventsList = document.getElementById("events-list");
    eventsList.innerHTML = "";
    events.forEach(event => {
        const eventItem = document.createElement("div");
        eventItem.className = "event-item";
        eventItem.innerHTML = `<h3>${event.title}</h3><p>${event.date} | ${event.type} | ${event.category} | ${event.distance} km</p>`;
        eventsList.appendChild(eventItem);
    });
}

document.getElementById("apply-filters").addEventListener("click", () => {
    const category = document.getElementById("category-filter").value;
    const distance = document.getElementById("distance-filter").value;
    const type = document.getElementById("type-filter").value;
    const date = document.getElementById("date-filter").value;

    const filteredEvents = eventsStore.filter(event => {
        return (!category || event.category === category) &&
               (!distance || event.distance == distance) &&
               (!type || event.type === type) &&
               (!date || event.date === date);
    });

    renderEvents(filteredEvents);
});

window.onload = () => renderEvents(eventsStore);
