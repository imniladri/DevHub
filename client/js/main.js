// Loader Event ************************************************************

$(window).on("load", () => {
	$("#preloader").css({
		opacity: "0",
		transitionDelay: "0.6s",
		visibility: "hidden",
	});
	$(".loader").css({
		opacity: "0",
		transitionDelay: "0.3s",
	});
	$("#particles-js").css({
		opacity: "0",
	});

	setTimeout(() => {
		$(".loaded").addClass("active");
	}, 1000);
});

// Menu Btn Click **********************************************************

$(".menu_icon").click(function () {
	$(".menu_candy").toggleClass("menu_active");
});
$(".nav_items .nav_links").click(function () {
	$(".menu_candy").removeClass("menu_active");
});

// Swal Alert Msg **********************************************************

$("a[href='javascript:void(0)']").click(() => {
	swal("Sorry", "We are working on it!");
});

// Search Function of Library **********************************************

$("form input#search").on("keyup", function () {
	let value = $(this).val().toLowerCase();
	$("div.lib_card").filter(function () {
		$(this).toggle($(this).find("h2").text().toLowerCase().indexOf(value) > -1);
	});
});

// Go Back *****************************************************************

$("a.btn_back").click(() => {
	window.history.back();
});

// Source Change of Text Object SVG ****************************************

$(window).ready(function () {
	if (screen.width < 992) {
		$("object.text").attr("data", "./img/text_portrait.svg");
	} else {
		$("object.text").attr("data", "./img/text_landscape.svg");
	}
});

// Set Theme for Theme Picker Buttons

function setTheme(name) {
	document.querySelector(`.${name}`).onclick = () => {
		// Set theme for website
		const root = document.documentElement;
		root.style.setProperty("--primarycolor", `var(--primarycolor${name})`);
		root.style.setProperty("--secondarycolor", `var(--secondarycolor${name})`);
		root.style.setProperty("--tertiarycolor", `var(--tertiarycolor${name})`);
		// Store current theme locally
		localStorage.setItem("theme", `${name}`);
	};
}

// Function calls to add event listeners for all themes

setTheme("theme1");
setTheme("theme2");
setTheme("theme3");
setTheme("theme4");

// Set Theme for Page Reloads from Local Storage

function fetchTheme(name) {
	// Get theme for website
	const root = document.documentElement;
	root.style.setProperty("--primarycolor", `var(--primarycolor${name})`);
	root.style.setProperty("--secondarycolor", `var(--secondarycolor${name})`);
	root.style.setProperty("--tertiarycolor", `var(--tertiarycolor${name})`);
	// Store current theme locally
	localStorage.setItem("theme", `${name}`);
}

// Function call to set theme for page reload from local storage

localStorage.getItem("theme") === null
	? fetchTheme("theme1")
	: fetchTheme(localStorage.getItem("theme"));


// Floating back to top button

$(window).scroll(function () {
    if ($(this).scrollTop() > 0 && $(window).width() > 992) {
      $(".navbar").addClass("nav-sticky");
    } else if ($(window).width() < 992) {
      $(".navbar").addClass("nav-sticky");
    } else $(".navbar").removeClass("nav-sticky");
  });
  
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});