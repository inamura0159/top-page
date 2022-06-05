'use strict';

$(function() {
  $(window).on('scroll', function() {
    const sliderHeight = $(".bl_fv").height();
    if (sliderHeight - 60 < $(this).scrollTop()) {
      $('.bl_headerNav_link').addClass('is_scroll');
      $('.bl_hamburger').addClass('is_black');
    } else {
      $('.bl_headerNav_link').removeClass('is_scroll');
      $('.bl_hamburger').removeClass('is_black');
    }
  });
});

//ハンバーガーメニュー
$(function() {
  $('.bl_hamburger').on('click', function() {
    $('.bl_headerNav').toggleClass('is_active');
    $('.bl_hamburger').toggleClass('is_close');
    $('.bl_hamburger').toggleClass('is_black');
  });
});


//プルダウンメニュー

const lang = document.querySelector('html').lang;

if (lang === 'ja') {
  document.querySelector('option[value="index.html"]').selected = true;
} else if (lang === 'en') {
  document.querySelector('option[value="index-en.html"]').selected = true;
}

document.getElementById('form').select.onchange = function() {
  location.href = document.getElementById('form').select.value;
}


//スライドショー
const images = ['img/fv.png', 'img/fv02.png', 'img/fv03.png'];
images.forEach(function(item, index) {
  preloadImage(item);
});
let current = 0;

function changeImage(num) {
  if (current + num >= 0 && current + num < images.length) {
    current += num;
    document.getElementById('fv_image').src = images[current];
  }
};

function preloadImage(path) {
  let imgTag = document.createElement('img');
  imgTag.src = path;
}


document.getElementById('prev').onclick = function() {
  changeImage(-1);
};

document.getElementById('next').onclick = function() {
  changeImage(1);
};
