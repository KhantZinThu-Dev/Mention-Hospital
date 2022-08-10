$(document).ready(function () {
  // Start Info Section
  $(window).scroll(function () {
    let getscrollcount = $(this).scrollTop();
    // console.log(getscrollcount);

    if (getscrollcount >= 280) {
      $(".info-text-cs").addClass("from-left-cs");
      $(".info-pic-cs").addClass("from-right-cs");
    } else {
      $(".info-text-cs").removeClass("from-left-cs");
      $(".info-pic-cs").removeClass("from-right-cs");
    }
  });
  // End Info Section

  // ********************

  // Start Adv Section

  $("#modal-video").click(function () {
    let getmodal = $(this).data("bs-target");
    // console.log(getmodal);
    let getvideosrc = $(this).data("video");
    // console.log(getvideosrc);
    let videoUrlWithAutoplay = getvideosrc + "?autoplay=1";
    // console.log(videoUrlWithAutoplay);
    $(getmodal + " iframe").attr("src", videoUrlWithAutoplay);

    // Modal box video background play off when click modal dismiss button
    $(getmodal + " button.btn-close").click(function () {
      $(getmodal + " iframe").attr("src", getvideosrc);
    });

    // Modal box video background play off when click somewhere of overlay
    $(getmodal).click("hidden.bs.overlay", function () {
      $(getmodal + " iframe").attr("src", getvideosrc);
    });
  });

  // End Adv Section

  // ********************

  // Start Premises Section
  $("#lightslider")
    .lightSlider({
      auto: true,
      item: 4,
      loop: true,
      slideMove: 1,
      speed: 600,
    })
    .play();
  // End Premises Section

  // ********************

  // Start Pricing Section
  $(window).scroll(function () {
    let scrollcount = $(this).scrollTop();
    // console.log(scrollcount);

    if (scrollcount >= 2450) {
      $(".card-one").addClass("move-from-left");
      $(".card-two").addClass("move-from-bottom");
      $(".card-three").addClass("move-from-right");
    } else {
      $(".card-one").removeClass("move-from-left");
      $(".card-two").removeClass("move-from-bottom");
      $(".card-three").removeClass("move-from-right");
    }
  });
  // End Pricing Section

  // ********************

  // Start Join Us Section
  $("#accordion").accordion();
  // End Join Us Section

  // ********************

  // Start Footer Section
  // let getCurrentYear = new Date().getUTCFullYear();
  // let getyear = $("#getyear");
  // getyear.append(getCurrentYear);
  $("#getyear").text(new Date().getUTCFullYear());
  // End Footer Section

  // ********************

  // Start Progress Percentage Circle Section
  let getProgress = $("#progress");
  let getProgressValue = $(".progress-value-cs");

  $(window).scroll(function () {
    let getscrollcount = $(this).scrollTop();
    // console.log(getscrollcount);

    // By jQuery Method
    // let getScrollHeight = $(document).height();
    // // console.log(getScrollHeight);
    // let getClientHeight = $(window).height();
    // // console.log(getClientHeight);
    // let calcHeight = getScrollHeight - getClientHeight;
    // let getFinalHeight = Math.round((getscrollcount * 100) / calcHeight);
    // console.log(getFinalHeight);

    // By JavaScript
    let getScrollHeight = document.documentElement.scrollHeight;
    // console.log(getScrollHeight);
    let getClientHeight = document.documentElement.clientHeight;
    // console.log(getClientHeight);
    let calcHeight = getScrollHeight - getClientHeight;
    // console.log(getFinalHeight);
    let getFinalHeight = Math.round((getscrollcount * 100) / calcHeight);
    // console.log(getFinalHeight);

    getProgressValue.text(`${getFinalHeight}%`);

    getProgress.css({
      background: `conic-gradient(steelblue ${getFinalHeight}%, #eee ${getFinalHeight}%)`,
    });
  });
  // End Progress Percentage Circle Section
});
