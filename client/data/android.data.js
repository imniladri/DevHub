/* ********************************************************** */
// All Android Libraries Data Object
/* ********************************************************** */

let androidData = [
	// {
	// 	id: 1,
	// 	lib_name: "",
	// 	lib_details: "",
	// 	lib_color: "",
	// 	lib_link: "",
	// },
];

/* ********************************************************** */
// All Android Libraries Preview Mapping
/* ********************************************************** */

let androidLibrary = document.querySelector(".libraries");

Object.values(androidData).map((val) => {
	androidLibrary.innerHTML += `
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
