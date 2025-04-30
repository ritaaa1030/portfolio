const $works = $('#works');
$(window).on('scroll',() => {
  const isInView = $works.inView('topOnly',50);
  if(isInView && !$works.hasClass
    ('in_view')){
      $works.addClass('in_view');
    }
});

$('.site_header_navbtn').on('click',() => {
  $('body').toggleClass('is_nav_open');
});


$('.site_header_nav a').on('click', function () {
  $('body').removeClass('is_nav_open');

  // ヘッダーの高さをリアルタイム取得
  let headerHeight = $('header').outerHeight();
  let target = $(this).attr('href');
  let position = $(target).offset().top - headerHeight - 10;

  $('html, body').animate({ scrollTop: position }, 600);

  return false;
});

/*タイムラインの表示*/
const button = document.getElementById("toggleTimelineBtn");
  const timeline = document.getElementById("timeline");

  button.addEventListener("click", () => {
    timeline.classList.toggle("show");
    timeline.classList.toggle("hidden");

    // ボタンの表示テキストを変更する（任意）
    if (timeline.classList.contains("show")) {
      button.textContent = "年表を閉じる";
    } else {
      button.textContent = "年表を見る";
    }
  });