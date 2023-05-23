/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


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

})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map