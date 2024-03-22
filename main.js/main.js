/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion-nav.js":
/*!*************************************!*\
  !*** ./js/modules/accordion-nav.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordionNav)\n/* harmony export */ });\nfunction initAccordionNav() {\r\n  const askings = document.querySelectorAll(\"[data-accordion-nav] button\");\r\n  const responses = document.querySelectorAll(\"[data-accordion-nav] dd\");\r\n  if (askings.length && responses.length) {\r\n    responses[0].classList.add(\"active\");\r\n    askings.forEach((asks) => {\r\n      asks.addEventListener(\"click\", handleClick);\r\n      function handleClick(event) {\r\n        const controls = event.target.getAttribute(\"aria-controls\");\r\n        const response = document.getElementById(controls);\r\n        response.classList.toggle(\"active\");\r\n        const active = response.classList.contains(\"active\");\r\n        asks.setAttribute(\"aria-expanded\", active);\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://clone/./js/modules/accordion-nav.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n  const menu = document.querySelector(\"[data-dropdown-menu]\");\r\n  if (menu) {\r\n    menu.addEventListener(\"click\", handleClick);\r\n    function handleClick(event) {\r\n      event.preventDefault();\r\n      menu.classList.toggle(\"active\");\r\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menu, () => {\r\n      menu.classList.remove(\"active\");\r\n      })\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://clone/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n  const bitcoinValue = document.querySelector(\"[data-bitcoin]\");\r\n  if (bitcoinValue) {\r\n    async function showBitcoinValue() {\r\n      try {\r\n        const response = await fetch(\"https://blockchain.info/ticker\");\r\n        const data = await response.json();\r\n        bitcoinValue.innerText = (100 / data.BRL.sell).toFixed(4);\r\n      } catch (erro) {\r\n        console.log(erro);\r\n      }\r\n    }\r\n    showBitcoinValue();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://clone/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const button = document.querySelector(\"[data-menu-mobile]\");\r\n  const menu = document.querySelector(\"[data-menu-list]\");\r\n  if (button && menu) {\r\n    button.addEventListener(\"click\", handleClick);\r\n    function handleClick() {\r\n      button.classList.add(\"active\");\r\n      menu.classList.add(\"active\");\r\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menu, () => {\r\n        button.classList.remove(\"active\");\r\n        menu.classList.remove(\"active\");\r\n      });\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://clone/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const open = document.querySelector(\"[data-modal-open]\");\r\n  const close = document.querySelector(\"[data-modal-close]\");\r\n  const container = document.querySelector(\"[data-modal-container]\");\r\n  if (open && close && container) {\r\n    open.addEventListener(\"click\", handleClick);\r\n    close.addEventListener(\"click\", handleClick);\r\n    container.addEventListener(\"click\", hideModal);\r\n    function handleClick(event) {\r\n      event.preventDefault();\r\n      container.classList.toggle(\"active\")\r\n    }\r\n    function hideModal(event) {\r\n      return event.target === this ? container.classList.remove(\"active\") : undefined;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://clone/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/number-animation.js":
/*!****************************************!*\
  !*** ./js/modules/number-animation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumberAnimation)\n/* harmony export */ });\nfunction initNumberAnimation() {\r\n  const numberAnimation = () => {\r\n    const numbersList = document.querySelectorAll(\".numeros span\");\r\n    numbersList.forEach((number) => {\r\n      const numbers = +number.innerText;\r\n      let start = 0;\r\n      const increment = Math.floor(numbers / 100);\r\n      const timer = setInterval(() => {\r\n        start += increment;\r\n        number.innerText = start;\r\n        if (start >= numbers) {\r\n          clearInterval(timer);\r\n          number.innerText = numbers;\r\n        }\r\n      }, 50 * Math.random());\r\n    });\r\n  };\r\n  const handleNumberAnimation = (mutation) => {\r\n    if (mutation[0].target.classList.contains(\"active\")) {\r\n      numberAnimation();\r\n    }\r\n  };\r\n  const observer = new MutationObserver(handleNumberAnimation);\r\n  const observerTarget = document.querySelector(\".numeros\");\r\n  observer.observe(observerTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://clone/./js/modules/number-animation.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initOutsideClick)\n/* harmony export */ });\nfunction initOutsideClick(element, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n  if (!element.hasAttribute(outside)) {\r\n    setTimeout(() => html.addEventListener(\"click\", hideMenu));\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n  function hideMenu(event) {\r\n    if (!element.contains(event.target)) {\r\n      html.removeEventListener(\"click\", hideMenu);\r\n      element.removeAttribute(outside);\r\n      callback();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://clone/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animation.js":
/*!****************************************!*\
  !*** ./js/modules/scroll-animation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollAnimation)\n/* harmony export */ });\nfunction initScrollAnimation() {\r\n  const sections = document.querySelectorAll(\"[data-scroll-animation]\");\r\n  if (sections.length) {\r\n    const screenHalf = window.innerHeight * 0.6;\r\n    sections.forEach((section) => {\r\n      window.addEventListener(\"scroll\", showSections);\r\n      function showSections() {\r\n        const sectionIsVisible =\r\n          section.getBoundingClientRect().top - screenHalf < 0;\r\n        section.classList.toggle(\"active\", sectionIsVisible);\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://clone/./js/modules/scroll-animation.js?");

/***/ }),

/***/ "./js/modules/smooth-scroll.js":
/*!*************************************!*\
  !*** ./js/modules/smooth-scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmoothScroll)\n/* harmony export */ });\nclass SmoothScroll {\r\n  constructor(links, options) {\r\n    this.internalLinks = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.activeScroll = this.activeScroll.bind(this);\r\n  }\r\n  activeScroll(event) {\r\n    event.preventDefault();\r\n    const href = event.target.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n  addLinkEvent() {\r\n    this.internalLinks.forEach((link) => {\r\n      link.addEventListener(\"click\", this.activeScroll);\r\n    });\r\n  }\r\n  init() {\r\n    if (this.internalLinks.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://clone/./js/modules/smooth-scroll.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const images = document.querySelectorAll(\"[data-tab-menu] img\");\r\n  const contents = document.querySelectorAll(\"[data-tab-content] li\");\r\n  if (images.length && contents.length) {\r\n    contents[0].classList.add(\"active\");\r\n    images.forEach((image, index) => {\r\n      image.addEventListener(\"click\", () => {\r\n        handleClick(index);\r\n      });\r\n      function handleClick(index) {\r\n        contents.forEach((content) => {\r\n          content.classList.remove(\"active\");\r\n        });\r\n        contents[index].classList.add(\"active\");\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://clone/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/time-operation.js":
/*!**************************************!*\
  !*** ./js/modules/time-operation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTimeOperation)\n/* harmony export */ });\nfunction initTimeOperation() {\r\n  const timeOperation = document.querySelector(\"[data-days]\");\r\n  if (timeOperation) {\r\n    const daysOpen = timeOperation.dataset.days.split(\", \").map(Number);\r\n    const hoursOpen = timeOperation.dataset.hours.split(\", \").map(Number);\r\n    const currentDate = new Date();\r\n    const currentDay = currentDate.getDay();\r\n    const currentHour = currentDate.getHours();\r\n    const dayIsOpen = daysOpen.indexOf(currentDay) !== -1;\r\n    const hourIsOpen = hoursOpen[0] <= currentHour && hoursOpen[1] > currentHour;\r\n    if (dayIsOpen && hourIsOpen) {\r\n      timeOperation.classList.add(\"active\");\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://clone/./js/modules/time-operation.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/smooth-scroll.js */ \"./js/modules/smooth-scroll.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_accordion_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion-nav.js */ \"./js/modules/accordion-nav.js\");\n/* harmony import */ var _modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-animation.js */ \"./js/modules/scroll-animation.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_time_operation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/time-operation.js */ \"./js/modules/time-operation.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_number_animation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/number-animation.js */ \"./js/modules/number-animation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst smoothScroll = new _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-smooth-scroll] a[href^='#']\");\r\nsmoothScroll.init();\r\n\r\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_accordion_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_time_operation_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_number_animation_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n\n\n//# sourceURL=webpack://clone/./js/script.js?");

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;