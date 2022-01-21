/* ********************************************************** */
// All Css Libraries Data Object
/* ********************************************************** */

let cssData = [
	{
		id: 1,
		lib_name: "Bootstrap",
		lib_details: "A popular toolkit for quickly design responsive sites with Bootstrap.",
		lib_color: "#6610f2",
		lib_link: "https://getbootstrap.com/",
	},
	{
		id: 2,
		lib_name: "Materialize",
		lib_details: "A modern responsive front-end framework based on Material Design.",
		lib_color: "#ee6e73",
		lib_link: "https://materializecss.com/",
	},
	{
		id: 3,
		lib_name: "Tailwind CSS",
		lib_details: "A utility-first CSS framework packed with classes to build any design.",
		lib_color: "#06b6d4",
		lib_link: "https://tailwindcss.com/",
	},
	{
		id: 4,
		lib_name: "UI Kit",
		lib_details:
			"A modular front-end framework for developing fast and powerful web interfaces.",
		lib_color: "#1e87f0",
		lib_link: "https://getuikit.com/",
	},
	{
		id: 5,
		lib_name: "Halfmoon CSS",
		lib_details: "A Front-end framework with a built-in dark mode great for build site panels.",
		lib_color: "#111417",
		lib_link: "https://www.gethalfmoon.com/",
	},
	{
		id: 6,
		lib_name: "Primer",
		lib_details: "Design, build, and create with GitHub’s design system.",
		lib_color: "#2188ff",
		lib_link: "https://primer.style/",
	},
	{
		id: 7,
		lib_name: "AOS",
		lib_details: "A toolkit for animate on scrolling around your website with AOS Library.",
		lib_color: "#FF4081",
		lib_link: "https://michalsnik.github.io/aos/",
	},
	{
		id: 8,
		lib_name: "Swiper",
		lib_details:
			"The most modern mobile & web touch slider with amazing transitions & flexible.",
		lib_color: "#6332f6",
		lib_link: "https://swiperjs.com/",
	},
	{
		id: 9,
		lib_name: "Animate.css",
		lib_details:
			"A library of ready-to-use, cross-browser CSS animations for your web projects.",
		lib_color: "#e69138",
		lib_link: "https://animate.style/",
	},
	{
		id: 10,
		lib_name: "AnimXYZ",
		lib_details: "A limitless unique & complex animations with first CSS animation toolkit.",
		lib_color: "#98a7d4",
		lib_link: "https://animxyz.com/",
	},
	{
		id: 11,
		lib_name: "Tasty Hamburgers",
		lib_details: "Hamburgers is a collection of tasty CSS-animated hamburger icons & editable.",
		lib_color: "#81B214",
		lib_link: "https://jonsuh.com/hamburgers/",
	},
	{
		id: 12,
		lib_name: "Highlight JS",
		lib_details:
			"Highlight.js is a code/syntax highlighter for web & have wide range of languages.",
		lib_color: "#8d0000",
		lib_link: "https://highlightjs.org/",
	},
	{
		id: 13,
		lib_name: "Slick",
		lib_details:
			"A simple responsive carousel library with multiple breakpoints for your site.",
		lib_color: "#3498db",
		lib_link: "https://kenwheeler.github.io/slick/",
	},
	{
		id: 14,
		lib_name: "Pattern.css",
		lib_details: "A CSS only library to fill your empty background with beautiful patterns.",
		lib_color: "#89E089",
		lib_link: "https://bansal.io/pattern-css",
	},
	{
		id: 15,
		lib_name: "Morphext",
		lib_details:
			"'Morphing + Text = Morphext', simplest text rotator powered by jQuery and Animate.css",
		lib_color: "#FF6B6B",
		lib_link: "https://morphext.fyianlai.com/",
	},
	{
		id: 16,
		lib_name: "CSShake",
		lib_details: "Some CSS classes to move your DOM!",
		lib_color: "#2AB8AC",
		lib_link: "https://elrumordelaluz.github.io/csshake/",
	},
	{
		id: 17,
		lib_name: "Animista",
		lib_details: "Animista - CSS Animations on Demand",
		lib_color: "#3F3F3F",
		lib_link: "https://animista.net/",
	},
	{
		id: 18,
		lib_name: "Magic Effects",
		lib_details: "Magic Effects Animation for CSS",
		lib_color: "#fc297f",
		lib_link: "https://www.minimamente.com/project/magic/",
	},
];

/* ********************************************************** */
// All Css Libraries Preview Mapping
/* ********************************************************** */

let cssLibrary = document.querySelector(".libraries");

Object.values(cssData).map((val) => {
	cssLibrary.innerHTML += `
        <!-- Library ${val.id} -->
        <div class="lib_card">
            <h2>${val.lib_name}</h2>
            <p>${val.lib_details}</p>
            <a
                href="${val.lib_link}"
                class="btn lib_link"
                target="_blank"
            >
                See Now
            </a>
        </div>
    `;
});
