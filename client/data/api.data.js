/* ********************************************************** */
// All Api Libraries Data Object
/* ********************************************************** */

let apiData = [
	{
		id: 1,
		lib_name: "OpenWeatherMap",
		lib_details: "Simple, fast, free and best API for weather forecast",
		lib_color: "#6610f2",
		lib_link: "https://openweathermap.org/",
	},
    {
		id: 2,
		lib_name: "API FOOTBALL",
		lib_details: "Restful API for Football data with competitions, Livescore, teams, statistics, predictions etc.",
		lib_color: "#6610f2",
		lib_link: "https://www.api-football.com/",
	},
    {
		id: 3,
		lib_name: "MessageBird",
		lib_details: "API for seamless SMS, Chat, Voice functionalities for websites and applications",
		lib_color: "#6610f2",
		lib_link: "https://developers.messagebird.com/",
	},
    {
		id: 4,
		lib_name: "Newscatcher",
		lib_details: "News API that provides a real-time coverage feed to directly use the news data",
		lib_color: "#6610f2",
		lib_link: "https://newscatcherapi.com/",
	},
    {
		id: 5,
		lib_name: "SendGrid",
		lib_details: "Cloud-based Web API that allows to send email without having to maintain email servers",
		lib_color: "#6610f2",
		lib_link: "https://sendgrid.com/",
	},
    {
		id: 6,
		lib_name: "WordPress API",
		lib_details: "The WordPress REST API provides the posts, pages, taxonomies, and other built-in WordPress data types",
		lib_color: "#6610f2",
		lib_link: "https://sendgrid.com/",
	},
    {
		id: 7,
		lib_name: "Domainr API",
		lib_details: "The Domainr API lets you retrieve instant domain search results and availability status",
		lib_color: "#6610f2",
		lib_link: "https://domainr.com/docs/api",
	},
    {
		id: 8,
		lib_name: "WordsAPI",
		lib_details: "Retrieve information about English words, including definitions, synonyms, rhymes, pronunciation etc",
		lib_color: "#6610f2",
		lib_link: "https://www.wordsapi.com/",
	},
    {
		id: 9,
		lib_name: "BoxDev",
		lib_details: "Allows developers to build applications that can run in the cloud",
		lib_color: "#6610f2",
		lib_link: "https://developer.box.com/",
	},
    {
		id: 10,
		lib_name: "Stripe API",
		lib_details: "Payment API that provides payments, billing, invoicing etc. functionalities",
		lib_color: "#6610f2",
		lib_link: "https://stripe.com/in",
	},
    {
		id: 11,
		lib_name: "paybook",
		lib_details: "Financial hub that provides API for Fintech developers",
		lib_color: "#6610f2",
		lib_link: "https://www.paybook.com/",
	},
    {
		id: 12,
		lib_name: "Google Cloud Storage",
		lib_details: "Simple, JSON-backed API for accessing and manipulating Cloud Storage",
		lib_color: "#6610f2",
		lib_link: "https://cloud.google.com/storage/docs/json_api",
	},
    {
		id: 13,
		lib_name: "Spotify API",
		lib_details: "Provides user-friendly music metadata and playlists for using in web and applications",
		lib_color: "#6610f2",
		lib_link: "https://developer.spotify.com/",
	},
    {
		id: 14,
		lib_name: "Google Maps",
		lib_details: "Helps developers to take the power of Google Maps and put it directly on web and applications",
		lib_color: "#6610f2",
		lib_link: "https://developers.google.com/maps",
	},
    {
		id: 15,
		lib_name: "IMDb API",
		lib_details: "Provides developers the database of information about movies and TV shows",
		lib_color: "#6610f2",
		lib_link: "https://imdb-api.com/",
	},
];

/* ********************************************************** */
// All Api Libraries Preview Mapping
/* ********************************************************** */

let apiLibrary = document.querySelector(".libraries");

Object.values(apiData).map((val) => {
	apiLibrary.innerHTML += `
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
