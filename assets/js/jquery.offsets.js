$(function() {
    $('.anchor-sidebar ul li a').on('click', function(e) {
        e.preventDefault();
        target = this.hash;
        console.log(target);
        $.scrollTo(target, 1000, {offset: -60});
   });
	   $('.data-center-dots > .dot > a').on('click', function(e) {
        e.preventDefault();
        target = this.hash;
        console.log(target);
        $.scrollTo(target, 1000, {offset: -60});
   });
	 $('.sub ul li a').on('click', function(e) {
        e.preventDefault();
        target = this.hash;
        console.log(target);
        $.scrollTo(target, 1000, {offset: -110});
   });
});