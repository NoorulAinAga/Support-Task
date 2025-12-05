const priceMap = { 1: 10, 2: 18, 3: 24 };
const offerBoxes = document.querySelectorAll(".offer-box");
const totalPriceEl = document.getElementById("total-price");

offerBoxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent document click

    const id = box.dataset.id;

    // Close all boxes first
    offerBoxes.forEach((b) => {
      b.classList.remove("active");
      const d = b.querySelector(".extra-details");
      if (d) d.style.display = "none";

      // Deselect radio
      const radio = b.querySelector('input[type="radio"]');
      if (radio) radio.checked = false;
    });

    // Open clicked box
    box.classList.add("active");
    const details = document.getElementById(`details-${id}`);
    if (details) details.style.display = "block";

    // Select radio of clicked box
    const radio = box.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;

    // Update total price
    totalPriceEl.textContent = `$${priceMap[id]}.00 USD`;
  });
});

// Close when clicking outside
document.addEventListener("click", () => {
  offerBoxes.forEach((b) => {
    b.classList.remove("active");
    const d = b.querySelector(".extra-details");
    if (d) d.style.display = "none";

    // Deselect radio
    const radio = b.querySelector('input[type="radio"]');
    if (radio) radio.checked = false;
  });

  totalPriceEl.textContent = "$0.00 USD"; // reset price
});
