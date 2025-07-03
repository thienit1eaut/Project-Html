var PROGRAM = (function() {
    var animation = function(){
        var wow = new WOW();
        wow.init();
    }
    var backToTop = function(){
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) $("#btn-scroll-top").fadeIn();
        else $("#btn-scroll-top").fadeOut();
      });
      $("#btn-scroll-top").click(function () {
        $("body,html").animate({ scrollTop: 0 }, "slow");
      });
    }
    
    return {
        _: function() {
            // animation();
            // backToTop();
        }
    };
})();

window.onload = function() {
    PROGRAM._();
};
