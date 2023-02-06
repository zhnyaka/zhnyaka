$(function () {
  SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
  });

  function is_fully_shown(target) {
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var eh = $(target).height();
    var et = $(target).offset().top;

    if (et >= wt && et + eh <= wh + wt) {
      return true;
    } else {
      return false;
    }
  }

  $(window).scroll(function () {
    $(".car-block__box").each(function () {
      if (is_fully_shown($(this))) {
        $(this).addClass("visible");
      } else {
        $(this).removeClass("visible");
      }
    });
  });
});
