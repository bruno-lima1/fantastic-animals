import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
// import initNumberAnimation from "./modules/number-animation.js";
import initAccordionNav from "./modules/accordion-nav.js";
import initScrollAnimation from "./modules/scroll-animation.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initTimeOperation from "./modules/time-operation.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimalsApi from "./modules/animals-api.js";

import SmoothScroll from "./modules/smooth-scroll.js";
const smoothScroll = new SmoothScroll("[data-smooth-scroll] a[href^='#']");
smoothScroll.init()

initTabNav()
initModal();
// initNumberAnimation();
initAccordionNav();
initScrollAnimation();
initDropdownMenu();
initTimeOperation();
initMenuMobile();
initFetchBitcoin();
initAnimalsApi()















// import TabNav from "./modules/tab-nav.js";
// const tabNav = new TabNav("[data-tab-menu] img", "[data-tab-content] li")
// tabNav.init()

// import Modal from "./modules/modal.js";
// const modal = new Modal("[data-modal-open]", "[data-modal-close]", "[data-modal-container]", "active");
// modal.init()
