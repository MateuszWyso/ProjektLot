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

 
 
const urlParams = new URLSearchParams(window.location.search);
const departurePlace = urlParams.get('departure');
const destinationPlace = urlParams.get('destination');
const departureDate = urlParams.get('date');
const passengerCount = urlParams.get('passengers');

document.getElementById('departure-place').textContent = departurePlace;
document.getElementById('destination-place').textContent = destinationPlace;
document.getElementById('departure-date').textContent = departureDate;
document.getElementById('passenger-count').textContent = passengerCount;

const selectedDestination = destinationPlace;

fetch('/assets/json/destinations.json') 
  .then(response => response.json())
  .then(destinations => {
    if (destinations[selectedDestination]) {
      const description = destinations[selectedDestination].description;
      
      const descriptionElement = document.getElementById('destination-info');
      descriptionElement.textContent = description;
    }
  })
  .catch(error => {
    console.log('Błąd wczytywania pliku JSON:', error);
  });

  const destinationPrices = {
    Amsterdam: 399,
    NewYork: 1290,
    Katowice: 119
  };
  
  const luggagePrices = {
    podręczny: 10,
    rejestrowany: 99
  };

  document.addEventListener('DOMContentLoaded', function() {
    const passengersData = JSON.parse(localStorage.getItem('passengersData'));
  
    const departurePlaceElement = document.getElementById('departure-place');
    const destinationPlaceElement = document.getElementById('destination-place');
    const departureDateElement = document.getElementById('departure-date');
    const passengerCountElement = document.getElementById('passenger-count');
  
    departurePlaceElement.textContent = passengersData.departurePlace;
    destinationPlaceElement.textContent = passengersData.destinationPlace;
    departureDateElement.textContent = passengersData.departureDate;
    passengerCountElement.textContent = passengersData.passengerCount;
  
    const passengerListElement = document.getElementById('passenger-list');
    const passengerCount = passengersData.passengerCount;


    let totalPrice = 0;
    for (let i = 1; i <= passengerCount; i++) {
      const passengerNumber = i;
      const passengerDiv = document.createElement('div');
      const passengerName = `Passenger ${passengerNumber}`;
      const questionText = `Rodzaj bagażu dla ${passengerName}:`;
      const questionId = `luggage-question-${passengerNumber}`;
      const departureTimeText = `Godzina wylotu:`;
      const ticketPriceText = `Cena biletu:`;
  
      const questionLabel = document.createElement('label');
      questionLabel.setAttribute('for', questionId);
      questionLabel.textContent = questionText;
  
      const selectElement = document.createElement('select');
      selectElement.id = questionId;
      selectElement.name = `luggage-passenger-${passengerNumber}`;
      const option1 = document.createElement('option');
      option1.value = 'podręczny';
      option1.textContent = 'Bagaż podręczny';
      const option2 = document.createElement('option');
      option2.value = 'rejestrowany';
      option2.textContent = 'Bagaż rejestrowany';
      selectElement.appendChild(option1);
      selectElement.appendChild(option2);
  
      const priceElement = document.createElement('p');

      selectElement.addEventListener('change', function() {
        const destinationPrice = destinationPrices[passengersData.destinationPlace];
        const luggagePrice = luggagePrices[selectElement.value];
        const ticketPrice = destinationPrice + luggagePrice;
        priceElement.textContent = `Cena biletu: ${ticketPrice} zł`;
        totalPrice += ticketPrice;
      });
  
      passengerDiv.appendChild(questionLabel);
      passengerDiv.appendChild(selectElement);
      passengerDiv.appendChild(priceElement);
  
      passengerListElement.appendChild(passengerDiv);
    }
  
    const totalPriceElement = document.createElement('p');
    totalPriceElement.textContent = `Łączna cena: ${totalPrice} zł`;
    passengerListElement.appendChild(totalPriceElement);
  });

  const cityPanoramaImages = {
    amsterdam: 'amsterdam.jpg',
    nowyJork: 'nowyjork.jpg',
    katowice: 'katowice.jpg'
  };
  
  const selectedCity = destinationPlace.toLowerCase();
  const cityPanoramaImage = cityPanoramaImages[selectedCity];
  
  const panoramaContainer = document.getElementById('city-panorama');
  const panoramaImage = new Image();
  panoramaImage.src = `/assets/img/${cityPanoramaImage}`;
  panoramaImage.alt = 'Panorama miasta';
  panoramaContainer.appendChild(panoramaImage);
})();

/******/ })()
;
//# sourceMappingURL=summary.bundle.js.map