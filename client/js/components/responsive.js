/*====================================================================================================================*/

// Site Responsive JS : If not responsive apply this js file to the site.
/* <script src="js/responsive.js"></script> */

// Responsive Jquery Function

// Browser Load/Ready
$(window).ready(function () {
    var width = window.outerWidth;

    if ($(this).width() < 992) {
        swal({
            title: "Opps! Sorry:(",
            text:
                "My Site is yet not Responsive for your Display of " +
                width +
                "PX.",
            icon: "info",
            buttons: "Alright!",
        }).then((e) => {
            swal({
                title: "Phew!",
                text: "Do you want to close this Window/Site?",
                icon: "warning",
                buttons: ["Not Now", "Close"],
            }).then((close) => {
                if (close) {
                    window.close();
                } else {
                    swal(
                        "Okay, You can manually close it by yourself! \n Thank You for Visiting (:",
                        { button: "Okay!" }
                    );
                }
            });
        });

        $("main").hide();
    } else {
        $("main").show();
    }
});

// Browser Resize
$(window).resize(function () {
    var width = window.outerWidth;

    if ($(this).width() < 992) {
        swal({
            title: "Opps! Sorry:(",
            text:
                "My Site is yet not Responsive for your Display of " +
                width +
                "PX.",
            icon: "info",
            buttons: "Alright!",
        }).then((e) => {
            swal({
                title: "Phew!",
                text: "Do you want to close this Window/Site?",
                icon: "warning",
                buttons: ["Not Now", "Close"],
            }).then((close) => {
                if (close) {
                    window.close();
                } else {
                    swal(
                        "Okay, You can manually close it by yourself! \n Thank You for Visiting (:",
                        { button: "Okay!" }
                    );
                }
            });
        });

        $("main").hide();
    } else {
        $("main").show();
    }
});

/*====================================================================================================================*/
