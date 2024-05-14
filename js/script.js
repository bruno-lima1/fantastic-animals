import TabNav from "./modules/tab-nav.js";
const tabNav = new TabNav("[data-tab-menu] img", "[data-tab-content] li")
tabNav.init()

import AccordionNav from "./modules/accordion-nav.js";
const accordionNav = new AccordionNav("[data-accordion-nav] button", "[data-accordion-nav] dd")
accordionNav.init()

import SmoothScroll from "./modules/smooth-scroll.js";
const smoothScroll = new SmoothScroll("[data-smooth-scroll] a[href^='#']");
smoothScroll.init()







import Modal from "./modules/modal.js";
const modal = new Modal("[data-modal-open]", "[data-modal-close]", "[data-modal-container]");
modal.init()

import DropdownMenu from "./modules/dropdown-menu.js";
const dropdownMenu = new DropdownMenu("[data-dropdown-menu]");
dropdownMenu.init()

import MenuMobile from "./modules/menu-mobile.js";
const menuMobile = new MenuMobile("[data-menu-mobile]", "[data-menu-list]");
menuMobile.init()

import TimeOperation from "./modules/time-operation.js";
const timeOperation = new TimeOperation("[data-days]")
timeOperation.init()

import animalsData from "./modules/animals-data.js";
animalsData("./animals-data.json", "[data-number]")

import bitcoinApi from "./modules/bitcoin-api.js";
bitcoinApi("https://blockchain.info/ticker", "[data-bitcoin]");

import Slide from "./slide.js";
const slide = new Slide("[data-wrapper]", "[data-slide]");
slide.init()












































// import ScrollAnimation from "./modules/scroll-animation.js";
// const scrollAnimation = new ScrollAnimation("[data-scroll-animation]");
// scrollAnimation.init();
