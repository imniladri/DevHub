/* ********************************************************** */
// All Fonts Libraries Data Object
/* ********************************************************** */

let fontsData = [
	{
		id: 1,
		lib_name: "Google Fonts",
		lib_details:
			"Google Fonts makes it easy to bring personality and performance to your websites and products.",
		lib_link: "https://fonts.google.com/",
	},
	{
		id: 2,
		lib_name: "Font Space",
		lib_details:
			"Free downloads of legally licensed fonts that are perfect for your design projects.",
		lib_link: "https://www.fontspace.com/",
	},
	{
		id: 3,
		lib_name: "Freepik Fonts",
		lib_details:
			"Discover our fonts and, include them in your projects and make incredible designs!",
		lib_link: "https://www.freepik.com/fonts",
	},
	{
		id: 4,
		lib_name: "Font Fabric",
		lib_details:
			"A digital type foundry crafting retail fonts and custom typography for various brands.",
		lib_link: "https://www.fontfabric.com/",
	},
	{
		id: 5,
		lib_name: "Envato Fonts",
		lib_details: "Stunning Premium Fonts for every project.",
		lib_link: "https://elements.envato.com/fonts",
	},
	{
		id: 6,
		lib_name: "Font Bundles",
		lib_details: "The Go-to Marketplace for Premium & Affordable Font Resources.",
		lib_link: "https://fontbundles.net/",
	},
	{
		id: 7,
		lib_name: "Dafont",
		lib_details: "Free fonts for everyone to use, get it here.",
		lib_link: "https://www.dafont.com/",
	},
	{
		id: 8,
		lib_name: "Font Squirrel",
		lib_details: "Free fonts for everyone to use, get it here.",
		lib_link: "https://www.fontsquirrel.com/",
	},
	{
		id: 9,
		lib_name: "Urban Fonts",
		lib_details: "Free fonts for everyone to use, get it here.",
		lib_link: "https://www.urbanfonts.com/",
	},
	{
		id: 10,
		lib_name: "Cufon Fonts",
		lib_details: "Free fonts for everyone to use, get it here.",
		lib_link: "https://www.cufonfonts.com/",
	},
];

/* ********************************************************** */
// All Fonts Libraries Preview Mapping
/* ********************************************************** */

let fontsLibrary = document.querySelector(".libraries");

Object.values(fontsData).map((val) => {
	fontsLibrary.innerHTML += `
        <!-- Library ${val.id} -->
        <div class="lib_card">
            <h2>${val.lib_name}</h2>
            <p>${val.lib_details}</p>
            <a href="${val.lib_link}" class="btn lib_link" target="_blank">
                See Now
            </a>
        </div>
    `;
});
