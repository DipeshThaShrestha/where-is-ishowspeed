// Sample historical place data only. This does not show live location.
const places = [
  {
    name: "United States",
    year: "Early career",
    description: "Early streaming career and content creation."
  },
  {
    name: "United Kingdom",
    year: "2022",
    description: "Football-related public content and creator appearances."
  },
  {
    name: "Japan",
    year: "2023",
    description: "Travel videos, public content, and fan moments."
  },
  {
    name: "Brazil",
    year: "2024",
    description: "Public travel and entertainment content."
  },
  {
    name: "Qatar",
    year: "2022",
    description: "Football World Cup-related public content."
  }
];

// Sample estimated net worth data for a simple learning project.
const netWorthTimeline = [
  {
    age: "1-14",
    year: "2006-2019",
    netWorth: "No public data",
    note: "Childhood and early life."
  },
  {
    age: "15",
    year: "2020",
    netWorth: "No public data",
    note: "Early content creation."
  },
  {
    age: "16",
    year: "2021",
    netWorth: "Estimated $50,000",
    note: "Growing livestream audience."
  },
  {
    age: "17",
    year: "2022",
    netWorth: "Estimated $500,000",
    note: "Larger public attention and creator growth."
  },
  {
    age: "18",
    year: "2023",
    netWorth: "Estimated $2 million",
    note: "Major online creator year."
  },
  {
    age: "19",
    year: "2024",
    netWorth: "Estimated $5 million",
    note: "More travel, music, and entertainment content."
  },
  {
    age: "20",
    year: "2025",
    netWorth: "Estimated $10 million",
    note: "Sample estimate for educational display."
  }
];

const placesTimeline = document.querySelector("#placesTimeline");
const netWorthTimelineList = document.querySelector("#netWorthTimeline");
const netWorthTable = document.querySelector("#netWorthTable");
const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
const currentYear = document.querySelector("#currentYear");

function showPlaces() {
  places.forEach(function (place) {
    const item = document.createElement("article");
    item.className = "timeline-item";

    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <p class="timeline-date">${place.year}</p>
        <h3>${place.name}</h3>
        <p>${place.description}</p>
      </div>
    `;

    placesTimeline.appendChild(item);
  });
}

function showNetWorthTimeline() {
  netWorthTimeline.forEach(function (item) {
    const timelineItem = document.createElement("article");
    timelineItem.className = "timeline-item";

    timelineItem.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <p class="timeline-date">Age ${item.age} • ${item.year}</p>
        <h3>${item.netWorth}</h3>
        <p>${item.note}</p>
      </div>
    `;

    netWorthTimelineList.appendChild(timelineItem);

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.age}</td>
      <td>${item.year}</td>
      <td>${item.netWorth}</td>
      <td>${item.note}</td>
    `;

    netWorthTable.appendChild(row);
  });
}

function setupMobileMenu() {
  menuButton.addEventListener("click", function () {
    const menuIsOpen = navLinks.classList.toggle("show");
    menuButton.setAttribute("aria-expanded", menuIsOpen);
  });

  navLinks.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("show");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

showPlaces();
showNetWorthTimeline();
setupMobileMenu();
currentYear.textContent = new Date().getFullYear();
