/* ********************************************************** */
// All Images Libraries Data Object
/* ********************************************************** */

let imgData = [
	{
		id: 1,
		lib_name: "Unsplash",
		lib_details:
			"Beautiful free images and photos that you can download and use for any project.",
		lib_color: "#767676",
		lib_link: "https://unsplash.com/",
	},
	{
		id: 2,
		lib_name: "Pixabay",
		lib_details: "Stunning high quality images, videos, music, illustrations, vector graphics.",
		lib_color: "#02be6e",
		lib_link: "https://pixabay.com/",
	},
	{
		id: 3,
		lib_name: "Pexels",
		lib_details: "The best free stock photos & videos shared by awesome creators for projects.",
		lib_color: "#05a081",
		lib_link: "https://pexels.com/",
	},
	{
		id: 4,
		lib_name: "Freepik",
		lib_details:
			"Millions of graphic resources of vectors, photos, PSD, icons for creative projects.",
		lib_color: "#1273EB",
		lib_link: "https://freepik.com/",
	},
	{
		id: 5,
		lib_name: "Vecteezy",
		lib_details:
			"Million vectors, clipart graphics, art images, design templates, illustrations.",
		lib_color: "#ff7900",
		lib_link: "https://vecteezy.com/",
	},
	{
		id: 6,
		lib_name: "UnDraw",
		lib_details:
			"A open-source illustrations depoy for any idea/design you can imagine and create.",
		lib_color: "#665df5",
		lib_link: "https://undraw.co/",
	},
	{
		id: 7,
		lib_name: "Dribbble",
		lib_details:
			"Discover the world’s top designs & creatives, to find & design creative works.",
		lib_color: "#ea4c89",
		lib_link: "https://dribbble.com/",
	},
	{
		id: 8,
		lib_name: "CleanPNG",
		lib_details:
			"Discover transparent background images and illustrations for to use in your project.",
		lib_color: "#bd081c",
		lib_link: "https://cleanpng.com/",
	},
	{
		id: 9,
		lib_name: "LottieFiles",
		lib_details:
			"LottieFiles is a toolkit & collection of interactive animations & design crafted.",
		lib_color: "#18C8CA",
		lib_link: "https://lottiefiles.com/",
	},
	{
		id: 10,
		lib_name: "Get Waves",
		lib_details: "A SVG wave generator to make unique SVG waves for your next web design!",
		lib_color: "#0073FF",
		lib_link: "https://getwaves.io/",
	},
	{
		id: 11,
		lib_name: "Blobmaker",
		lib_details: "Make organic, unique SVG shapes & blobs for your next ui/ux or web design!",
		lib_color: "#FF0066",
		lib_link: "https://www.blobmaker.app/",
	},
	{
		id: 12,
		lib_name: "Code Carbon",
		lib_details:
			"Carbon is the easiest way to create and share beautiful images of source code.",
		lib_color: "#121212",
		lib_link: "https://carbon.now.sh/",
	},
	{
		id: 13,
		lib_name: "Color Hunt",
		lib_details:
			"A open platform for color inspiration with trendy hand-picked color palettes.",
		lib_color: "#ecd900",
		lib_link: "https://colorhunt.co/",
	},
	{
		id: 14,
		lib_name: "Gradient Hunt",
		lib_details:
			"Limitless trendy fresh color gradients for your next design project updated daily.",
		lib_color: "#5D5FE4",
		lib_link: "https://gradienthunt.com/",
	},
	{
		id: 15,
		lib_name: "Eggradients",
		lib_details:
			"Ready to use cool gradient background colors as per to the latest design trends.",
		lib_color: "#4844a3",
		lib_link: "https://eggradients.com/",
	},
	{
		id: 16,
		lib_name: "SlidesGo",
		lib_details: "Free Google Slides and PowerPoint templates to boost your presentations.",
		lib_color: "#5F5FF6",
		lib_link: "https://slidesgo.com/",
	},
	{
		id: 17,
		lib_name: "Paaatterns",
		lib_details: "Free collection of handcrafted beautiful patterns for all vector formats.",
		lib_color: "#000000",
		lib_link: "https://products.ls.graphics/paaatterns/index.html",
	},
	{
		id: 18,
		lib_name: "Storyset",
		lib_details: "Awesome free customizable illustrations for your next project.",
		lib_color: "#1F5A97",
		lib_link: "https://storyset.com/",
	},
	{
		id: 19,
		lib_name: "BGJar",
		lib_details: "Free svg background generator for your websites, blogs and app.",
		lib_color: "#0E2A47",
		lib_link: "https://bgjar.com/",
	},
];

/* ********************************************************** */
// All Images Libraries Preview Mapping
/* ********************************************************** */

let imgLibrary = document.querySelector(".libraries");

Object.values(imgData).map((val) => {
	imgLibrary.innerHTML += `
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
