import style from "./css/index.scss";

const today = new Date().toISOString().split("T")[0];
document.getElementById("departure-date").setAttribute("min", today);

const destinationSelect = document.getElementById('to');
const departureDateInput = document.getElementById('departure-date');
const passengersSelect = document.getElementById('passengers');
const searchFlightsBtn = document.getElementById('search-flights-btn');

destinationSelect.addEventListener('change', updateSearchButtonState);
departureDateInput.addEventListener('change', updateSearchButtonState);
passengersSelect.addEventListener('change', updateSearchButtonState);

searchFlightsBtn.addEventListener('click', handleSearchFlights);

function updateSearchButtonState() {
  const isDestinationSelected = destinationSelect.value !== '';
  const isDepartureDateSelected = departureDateInput.value !== '';
  const isPassengersSelected = passengersSelect.value !== '';

  if (isDestinationSelected && isDepartureDateSelected && isPassengersSelected) {
    searchFlightsBtn.disabled = false;
  } else {
    searchFlightsBtn.disabled = true;
  }
}

function handleSearchFlights(event) {
  event.preventDefault();

  const departurePlace = document.getElementById('departure').value;
  const destinationPlace = document.getElementById('to').value;
  const departureDate = document.getElementById('departure-date').value;
  const numberOfPassengers = document.getElementById('passengers').value;

  const passengersData = {
    departurePlace,
    destinationPlace,
    departureDate,
    passengerCount: numberOfPassengers
  };
  localStorage.setItem('passengersData', JSON.stringify(passengersData));

  window.location.href = `summary.html?departure=${departurePlace}&destination=${destinationPlace}&date=${departureDate}&passengers=${numberOfPassengers}`;
}
