import bitcoinApi from "./modules/bitcoin-api.js";
import initAnimalsApi from "./modules/animals-api.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initTimeOperation from "./modules/time-operation.js";
import initScrollAnimation from "./modules/scroll-animation.js";
// import initAccordionNav from "./modules/accordion-nav.js";

import SmoothScroll from "./modules/smooth-scroll.js";
const smoothScroll = new SmoothScroll("[data-smooth-scroll] a[href^='#']");
smoothScroll.init()
import TabNav from "./modules/tab-nav.js";
const tabNav = new TabNav("[data-tab-menu] img", "[data-tab-content] li")
tabNav.init()
import Modal from "./modules/modal.js";
const modal = new Modal("[data-modal-open]", "[data-modal-close]", "[data-modal-container]");
modal.init()
import MenuMobile from "./modules/menu-mobile.js";
const menuMobile = new MenuMobile("[data-menu-mobile]", "[data-menu-list]");
menuMobile.init()
import AccordionNav from "./modules/accordion-nav.js";
const accordionNav = new AccordionNav("[data-accordion-nav] button", "[data-accordion-nav] dd");
accordionNav.init()

bitcoinApi("https://blockchain.info/ticker", "[data-bitcoin]");
initAnimalsApi()
initDropdownMenu();
initTimeOperation();
initScrollAnimation();
// initAccordionNav();



















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
