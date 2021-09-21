/*
	👑Solopreneur 🖥️Full-Stack Developer 💸Freelancer
	Author : Nitin Chakraborty.
	eMail : nitin.chakraborty13@gmail.com
*/

// Menu
const navigationMenu = document.getElementById("navigation-menu"),
	navigationToggle = document.getElementById("navigation-toggle"),
	navigationClose = document.getElementById("navigation-close");

/* Menu - Show (Validate If Constant Exists!) */
if (navigationToggle) {
	navigationToggle.addEventListener("click", () => {
		navigationMenu.classList.add("show-menu");
	});
}

/* Menu - Hide (Validate If Constant Exists!) */
if (navigationClose) {
	navigationClose.addEventListener("click", () => {
		navigationMenu.classList.remove("show-menu");
	});
}

// Remove Menu Mobile
const navigationLink = document.querySelectorAll(".navigation__link");

function linkAction() {
	const navigationMenu = document.getElementById("navigation-menu");

	// When We Click On Each "navigation__link", We Remove The "show-menu" Class!
	navigationMenu.classList.remove("show-menu");
}
navigationLink.forEach((n) => n.addEventListener("click", linkAction));

// Change Background Header
function scrollHeader() {
	const header = document.getElementById("header");

	// When The Scroll Is Greater Than "50 Viewport Height", Add The "scroll-header" Class To The Header Element!
	if (this.scrollY >= 50) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// Show Scroll Up
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");

	// When The Scroll Is Higher Than "200 Viewport Height", Add The "show-scroll" Class To The Anchor Element With The "scroll-top" Class!
	if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;

		sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".navigation__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".navigation__menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

// Scroll Reveal Animation
const scrollReveal = ScrollReveal({
	distance: "60px",
	duration: 2500,
	delay: 400,
	// reset: true
});

scrollReveal.reveal(`.home__header, .section__title`, { delay: 600 });
scrollReveal.reveal(`.home__footer`, { delay: 700 });
scrollReveal.reveal(`.home__image`, { delay: 900, origin: "top" });

scrollReveal.reveal(
	`.sponsor__image, .products__card, .footer__logo, .footer__content, .footer__copyright`,
	{
		origin: "top",
		interval: 100,
	}
);

scrollReveal.reveal(`.specifications__data, .discount__animate`, { origin: "left", interval: 100 });
scrollReveal.reveal(`.specifications__image, .discount__image`, { origin: "right" });
scrollReveal.reveal(`.case__image`, { origin: "top" });
scrollReveal.reveal(`.case__data`);
