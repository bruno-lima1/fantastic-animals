import TabNav from "./modules/tab-nav.js";
const tabNav = new TabNav("[data-tab-menu] img", "[data-tab-content] li")
tabNav.init()

import AccordionNav from "./modules/accordion-nav.js";
const accordionNav = new AccordionNav("[data-accordion-nav] button", "[data-accordion-nav] dd")
accordionNav.init()

import MenuMobile from "./modules/menu-mobile.js";
const menuMobile = new MenuMobile("[data-menu-mobile]", "[data-menu-list]");
menuMobile.init()

import SmoothScroll from "./modules/smooth-scroll.js";
const smoothScroll = new SmoothScroll("[data-smooth-scroll] a[href^='#']");
smoothScroll.init()

import Modal from "./modules/modal.js";
const modal = new Modal("[data-modal-open]", "[data-modal-close]", "[data-modal-container]");
modal.init()

import bitcoinApi from "./modules/bitcoin-api.js";
bitcoinApi("https://blockchain.info/ticker", "[data-bitcoin]");



import initAnimalsApi from "./modules/animals-api.js";
initAnimalsApi()
import initDropdownMenu from "./modules/dropdown-menu.js";
initDropdownMenu();
import initTimeOperation from "./modules/time-operation.js";
initTimeOperation();
import initScrollAnimation from "./modules/scroll-animation.js";
initScrollAnimation();











// import animalsApi from "./modules/animals-api.js";
// animalsApi("./animals-api.json", "[data-number]")

// import DropdownMenu from "./modules/dropdown-menu.js";
// const dropdownMenu = new DropdownMenu("[data-dropdown-menu]", "active")
// dropdownMenu.init()

// import TimeOperation from "./modules/time-operation.js";
// const timeOperation = new TimeOperation("[data-days]", "active");
// timeOperation.init()

// import ScrollAnimation from "./modules/scroll-animation.js";
// const scrollAnimation = new ScrollAnimation("[data-scroll-animation]", "active");
// scrollAnimation.init();
