/* ********************************************************** */
// All Api Libraries Data Object
/* ********************************************************** */

let apiData = [
	// {
	// 	id: 1,
	// 	lib_name: "",
	// 	lib_details: "",
	// 	lib_color: "",
	// 	lib_link: "",
	// },
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
