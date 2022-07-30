/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Particles/Dots for Index Page Animation */

// Dots (Index Page) || Id: "dots-js"

particlesJS(
	"dots-js",

	{
		particles: {
			number: {
				value: 30,
				density: {
					enable: true,
					value_area: 600,
				},
			},
			color: {
				value: "#E8FFFF",
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#000000",
				},
				polygon: {
					nb_sides: 6,
				},
				image: {
					src: "img/logo.svg",
					width: 50,
					height: 50,
				},
			},
			opacity: {
				value: 1,
				random: true,
				anim: {
					enable: true,
					speed: 1,
					opacity_min: 0.4,
					sync: false,
				},
			},
			size: {
				value: 8,
				random: true,
				anim: {
					enable: true,
					speed: 10,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: false,
				distance: 150,
				color: "#ffffff",
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: 8,
				direction: "top",
				random: true,
				straight: false,
				out_mode: "out",
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: false,
					mode: "repulse",
				},
				onclick: {
					enable: false,
					mode: "push",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3,
				},
				repulse: {
					distance: 200,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
		config_demo: {
			hide_card: false,
			background_color: "#fafafa",
			background_image: "",
			background_position: "50% 50%",
			background_repeat: "no-repeat",
			background_size: "cover",
		},
	}
);
