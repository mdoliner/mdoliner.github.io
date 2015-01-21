(function () {
  if (typeof MD === "undefined") {
    window.MD = {};
    MD.currentSel = "#root";
  }

  MD.startUp = function () {
    $(".logo").animate({"opacity": "1"}, 2000, "swing", function () {
      $("#root-nav").animate({"top": "0", "opacity": "1"}, 450, "swing", function () {
        $("#portfolio-nav").animate({"top": "0", "opacity": "1"}, 450, "swing", function () {
          $("#resume-nav").animate({"top": "0", "opacity": "1"}, 450, "swing", function () {
            $("#contact-nav").animate({"top": "0", "opacity": "1"}, 450, "swing", function () {
              $("#content").html($("#root").clone());
              $("#content").animate({"opacity": "1"}, 1000);
            })
          })
        })
      })
    });
  };

  MD.switchContent = function (selector) {
    if (MD.currentSel !== selector) {
      MD.currentSel = selector;
      $("#content").animate({"opacity": "0"}, 750, function () {
        $("#content").html($(selector).clone());
        $("#content").animate({"opacity": "1"}, 750);
      });
    }
  };

})()
