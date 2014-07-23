/// <reference path="parallax.js" />
/// <reference path="jquery-1.8.3.min.js" />

$(function () {
    // Change some default parallax behavior
    parallax.slideBackground = function (newLocation) {
        if (typeof this.background !== 'undefined' && typeof newLocation !== 'undefined') {
            $(this.background).animate({
                backgroundPosition: '+=' + (newLocation.left > 0 ? -500 : 500) + 'px'
            }, 800, parallax.easing);
        }
    };

    // Config Settings
    parallax.background = $(".hero");
    parallax.easing = "easeOutQuad";
    parallax.height = 340;
    parallax.speed = 1000;

    // Add slides
    parallax.add($("#slide1"))
            .add($("#slide2"))
            .add($("#slide3"))
            .add($("#slide4"));

    //Setting up page navigation
    parallax.slide1.onload = function () {
        setRight("slide2", "Slide 2");
        setLeft("slide4", "Slide 4");
    };
    parallax.slide2.onload = function () {
        setRight("slide3", "Slide 3");
        setLeft("slide1", "Slide 1");
    };
    parallax.slide3.onload = function () {
        setRight("slide4", "Slide 4");
        setLeft("slide2", "Slide 2");
    };
    parallax.slide4.onload = function () {
        setRight("slide1", "Slide 1");
        setLeft("slide3", "Slide 3");
    };

    // Slide 1 Animations
    parallax.slide1.preload = function () {
        $slide = $("#slide1");
        $slide.find(".btn").css({opacity: 0});
    };
    parallax.slide1.loaded = function () {
        $slide = $("#slide1");
        $slide.find(".btn").delay(100).animate({ opacity: 1 }, 400);
    };
    parallax.slide1.pageLoading = function () {
        $slide = $("#slide1");
        $slide.find("h1").hide();
        $slide.find("p").hide();
        $slide.find(".btn").css({ opacity: 0 });
    };
    parallax.slide1.pageLoaded = function () {
        $slide = $("#slide1");
        $slide.find("h1").delay(200).fadeIn(1000);
        $slide.find("p").delay(400).fadeIn(1000);
        $slide.find(".btn-primary").delay(600).animate({ opacity: 1 }, 900);
        $slide.find(".btn-inverse").delay(800).animate({ opacity: 1 }, 900);
    };


    // Slide 2 Animations
    parallax.slide2.preload = function () {
        $slide = $("#slide2");
        $slide.find(".btn").css({ opacity: 0 });
        $slide.find("#icon1").hide();
        $slide.find("#icon2").hide();
        $slide.find("#icon3").hide();
        $slide.find("#icon4").hide();
        $slide.find("#icon5").hide();
    };
    parallax.slide2.loaded = function () {
        $slide = $("#slide2");
        $slide.find(".btn").delay(0).animate({ opacity: 1 }, 400);
        $slide.find("#icon1").delay(50).fadeIn(600, "linear");
        $slide.find("#icon2").delay(100).fadeIn(600, "linear");
        $slide.find("#icon3").delay(150).fadeIn(600, "linear");
        $slide.find("#icon4").delay(300).fadeIn(600, "linear");
        $slide.find("#icon5").delay(350).fadeIn(600, "linear");
    };
    parallax.slide2.pageLoading = function () {
        $slide = $("#slide2");
        $slide.find("h1").hide();
        $slide.find(".btn").css({ opacity: 0 });
        $slide.find("#icon1").hide();
        $slide.find("#icon2").hide();
        $slide.find("#icon3").hide();
        $slide.find("#icon4").hide();
        $slide.find("#icon5").hide();
    };
    parallax.slide2.pageLoaded = function () {
        $slide = $("#slide2");
        $slide.find("h1").delay(200).fadeIn(1000);
        $slide.find(".btn-primary").delay(400).animate({ opacity: 1 }, 900);
        $slide.find(".btn-inverse").delay(600).animate({ opacity: 1 }, 900);
        $slide.find("#icon1").delay(700).fadeIn(700, "linear");
        $slide.find("#icon2").delay(800).fadeIn(700, "linear");
        $slide.find("#icon3").delay(900).fadeIn(700, "linear");
        $slide.find("#icon4").delay(1000).fadeIn(700, "linear");
        $slide.find("#icon5").delay(1100).fadeIn(700, "linear");
    };

    // Slide 3 Animations
    parallax.slide3.preload = function () {
        $slide = $("#slide3");
        $slide.find(".btn").css({ opacity: 0 });
        $slide.find("img").css({opacity: "0", top: 500 });
    };
    parallax.slide3.loaded = function () {
        $slide = $("#slide3");
        $slide.find(".btn").animate({ opacity: 1 }, 400);
        $slide.find("img").animate({ opacity: "1", top: 0 }, 600);
    };
    parallax.slide3.pageLoading = function () {
        $slide = $("#slide3");
        $slide.find("h1").hide();
        $slide.find(".btn").css({ opacity: 0 });
        $slide.find("img").css({ opacity: "0", top: 500 });
    };
    parallax.slide3.pageLoaded = function () {
        $slide = $("#slide3");
        $slide.find("h1").delay(200).fadeIn(1000);
        $slide.find(".btn-primary").delay(400).animate({ opacity: 1 }, 900);
        $slide.find(".btn-inverse").delay(600).animate({ opacity: 1 }, 900);
        $slide.find("img").delay(800).animate({ opacity: "1", top: 0 }, 600);
    };

    // Slide 4 Animations
    parallax.slide4.preload = function () {
        $slide = $("#slide4");
        $slide.find(".btn").css({ opacity: 0 });
        $("#dots").hide();
        $("#dots li").hide();
    };
    parallax.slide4.loaded = function () {
        $slide = $("#slide4");
        $slide.find(".btn").animate({ opacity: 1 }, 400);
        $("#dots").delay(100).fadeIn(400);
        $("#dots li").delay(401).fadeIn(function () {
            $(this).find("a").tooltip();
        });
    };
    parallax.slide4.pageLoading = function () {
        $slide = $("#slide4");
        $slide.find("h1").hide();
        $slide.find("p").hide();
        $slide.find(".btn").css({ opacity: 0 });
        $("#dots").hide();
        $("#dots li").hide();
    };
    parallax.slide4.pageLoaded = function () {
        $slide = $("#slide4");
        $slide.find("h1").delay(200).fadeIn(1000);
        $slide.find("p").delay(400).fadeIn(1000);
        $slide.find(".btn-primary").delay(600).animate({ opacity: 1 }, 900);
        $slide.find(".btn-inverse").delay(800).animate({ opacity: 1 }, 900);
        $("#dots").delay(1100).fadeIn(600);

        $("#dots li").delay(1701).each(function (idx) {
            $this = $(this);
            $this.delay(idx * 100).fadeIn(function () {
                $(this).find("a").tooltip();
            });
        });
    };


    // Setting up nav
    $(".slide-nav a").click(function (event) {
        event.preventDefault();
        delayRotate(60000);
        if (!parallax.sliding) {
            var slide = $(this).attr("data-slide");
            parallax[slide].right();
            UpdateNavigation(slide);
        }
    });
    function UpdateNavigation(slide) {
        $(".slide-nav li").removeClass("active");
        $($("[data-slide=" + slide + "]").parent()).addClass("active");
        currentSlide = slide.substring(5);
    }

    //Sets the correct triggers for the arrows
    function setRight(nextPage, text) {
        $(".controls.right").unbind('click').click(function () {
            delayRotate(60000);
            parallax[nextPage].right();
            UpdateNavigation(nextPage);
        });
    }
    function setLeft(nextPage, text) {
        $(".controls.left").unbind('click').click(function () {
            delayRotate(60000);
            parallax[nextPage].left();
            UpdateNavigation(nextPage);
        });
    }

	// randomize starting slide
    // var slideToShow = Math.floor(Math.random() * 4) + 1;
    
    var slideToShow = 1;

    switch (slideToShow) {
        case 1:
            parallax.slide1.makeFirst();
            UpdateNavigation("slide1");
            break;
        case 2:
            parallax.slide2.makeFirst();
            UpdateNavigation("slide2");
            break;
        case 3:
            parallax.slide3.makeFirst();
            UpdateNavigation("slide3");
            break;
        case 4:
            parallax.slide4.makeFirst();
            UpdateNavigation("slide4");
            break;
    }


    /* Auto Ratate them */
    var autoRotateTimer = setInterval(rotate, 10000),
        currentSlide = slideToShow, 
        delayTimer;

    function rotate() {
        var toShow, slideID;
        toShow = currentSlide;
        toShow >= 4 ? toShow = 1 : toShow++;
        slideID = "slide" + toShow;
        parallax[slideID].right();
        UpdateNavigation(slideID);
        currentSlide = toShow;
    }

    function delayRotate(delay) {
        if (delayTimer) {
            clearTimeout(delayTimer);
        }
        if (autoRotateTimer) {
            clearInterval(autoRotateTimer);
        }
        delayTimer = setTimeout(function () {
            // if they are navigating clear timer and wait 60 seconds before resuming
            autoRotateTimer = setInterval(rotate, 10000);
        }, delay);
    }

});
