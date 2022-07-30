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
