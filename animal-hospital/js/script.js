
$('.header_navbtn').on('click',() => {
  $('body').toggleClass('is_nav_open');
});


$('.header_nav a').on('click', function () {
  $('body').removeClass('is_nav_open');

  // ヘッダーの高さをリアルタイム取得
  let headerHeight = $('header').outerHeight();
  let target = $(this).attr('href');
  let position = $(target).offset().top - headerHeight - 10;

  $('html, body').animate({ scrollTop: position }, 600);

  return false;
});


//planのイヌネコボタンの切り替え
window.addEventListener('DOMContentLoaded', function () {
  const dogRadio = document.getElementById('tab_dog');
  const catRadio = document.getElementById('tab_cat');
  const dogBtn = document.getElementById('dogBtn');
  const catBtn = document.getElementById('catBtn');

  function updateButtonImages() {
    if (dogRadio.checked) {
      dogBtn.src = 'images/plan/dog-button.png';
      catBtn.src = 'images/plan/cat-button.png';
    } else if (catRadio.checked) {
      dogBtn.src = 'images/plan/dog-button2.png';
      catBtn.src = 'images/plan/cat-button2.png';
    }
  }

  // 最初に一回実行
  updateButtonImages();

  // ラジオボタンが変わった時に画像を切り替え
  dogRadio.addEventListener('change', updateButtonImages);
  catRadio.addEventListener('change', updateButtonImages);
});
