$(window).on("ready resize", function () {
  if ($(window).width() < 768) {
    $(".css-tooltip").click(function () {
      $(".css-tooltip .tooltiptext").removeClass("active");
      $(this).find(".tooltiptext").addClass("active");
    });
  } else {
    $(".css-tooltip").hover(
      function () {
        $(this).find(".tooltiptext").addClass("active");
      },
      function () {
        $(this).find(".tooltiptext").removeClass("active");
      }
    );
  }

  $(window).scroll(function () {
    if ($(window).width() < 768) {
      $(".css-tooltip .tooltiptext").removeClass("active");
    } else {
      $(".css-tooltip .tooltiptext.active").hide();
      setTimeout(function () {
        $(".css-tooltip .tooltiptext").removeAttr("style");
      }, 1000);
    }
  });
});
