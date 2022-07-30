// Loader Event ************************************************************

$(window).on("load", () => {
	$("#preloader").css({
		opacity: "0",
		visibility: "hidden",
		transitionDelay: "0.6s",
	});
	$(".loader").css({
		opacity: "0",
		transitionDelay: "0.3s",
	});
	$("main").css({
		opacity: "1",
		visibility: "visible",
		transitionDelay: "0.8s",
	});

	setTimeout(() => {
		$(".loaded").addClass("active");
	}, 1000);
});

// Menu Btn Click **********************************************************

$(".menu_icon").click(function () {
	$(".menu_candy").toggleClass("menu_active");
	$("#backdrop_bg").toggleClass("backdrop_active");
});
$(".nav_items .nav_links").click(function () {
	$(".menu_candy").removeClass("menu_active");
	$("#backdrop_bg").removeClass("backdrop_active");
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
