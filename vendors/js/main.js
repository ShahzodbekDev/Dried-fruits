$(document).ready(function () {
  $(".arrow_left").click(function () {
    $(".review_img").attr("src", "../../images/otzivi/otzivi_1.jpg");
    $(".review_text").html(
      "Заказываю сухофрукты на этот сайт уже третий год! И очень доволен качеством продукции. К тому же центы не очень высокие."
    );
    $(".review_name").html("Смирнов Владимир");
  });

  $(".arrow_right").click(function () {
    $(".review_img").attr("src", "../../images/otzivi/otzivi_3.jpg");
    $(".review_text").html(
      "Широкий выбор орешков, мне очень нравится, все подробно написано, Доставка всегда работает отлично. Заказываю <br> только тут!"
    );
    $(".review_name").html("Иванова Татьяна");
  });
});

$(document).ready(function () {
  $(".on_manu").hover(
    function () {
      setTimeout(function () {
        $(".sub_manu").addClass("on_manu");
      }, 300);
    },
    function () {
      setTimeout(function () {
        $(".sub_manu").removeClass("on_manu");
      }, 2000);
    }
  );
});

$(window).on("resize", function () {
  let w = $(window).width();

  if (w <= 992) {
 


    $(".location_text2").html($(".location_text").text());

  }
});


$(".moblie_menu_btn").on("click", function () {
  $('.mobile_manu').addClass('active');

  $("html, body").css("overflow", "hidden");
});
$('.exit_btn').on('click', function () {
  $('.mobile_manu').removeClass('active');
  $("html, body").css("overflow", "auto");
  
})


