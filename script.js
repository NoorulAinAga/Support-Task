function toggleOffer(id) {
  document
    .querySelectorAll(".offer-box")
    .forEach((box) => box.classList.remove("active"));
  document.getElementById("offer-" + id).classList.add("active");

  // Close all details first
  document
    .querySelectorAll(".extra-details")
    .forEach((d) => (d.style.display = "none"));

  // Open the selected one
  let selectedDetails = document.getElementById("details-" + id);
  if (selectedDetails) selectedDetails.style.display = "block";

  // Update price
  updateTotal(id);
}

function updateTotal(id) {
  let price = {
    1: 10,
    2: 18,
    3: 24
  };

  document.getElementById("total-price").innerText = `$${price[id]}.00 USD`;
}
