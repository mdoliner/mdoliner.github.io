(function () {
  if (typeof MD === "undefined") {
    window.MD = {};
    MD.currentSel = "#root";
  }

  MD.startUp = function () {
    $(".logo").animate({"opacity": "1"}, 2200, "swing", function () {
    });
    setTimeout(function () {
      $("#root-nav").animate({"top": "0", "opacity": "1"}, 410, "swing", function () {
        $("#portfolio-nav").animate({"top": "0", "opacity": "1"}, 410, "swing", function () {
          $("#resume-nav").animate({"top": "0", "opacity": "1"}, 410, "swing", function () {
            $("#contact-nav").animate({"top": "0", "opacity": "1"}, 410, "swing", function () {
              $("#content").html($("#root").clone());
              $("#content").animate({"opacity": "1"}, 1000);
              $(".footer").animate({"opacity": "1"}, 1000);
            })
          })
        })
      })
    }, 550);
    MD.active = $("#root-nav");
  };



  MD.switchContent = function (selector) {
    if (MD.currentSel !== selector) {
      MD.active.removeClass("active");
      MD.currentSel = selector;
      MD.active = $(selector + "-nav");
      MD.active.addClass("active");
      $("#content").animate({"opacity": "0"}, 400, function () {
        $("#content").html($(selector).clone());
        $("#content").animate({"opacity": "1"}, 400);
      });
    }
  };

})()
