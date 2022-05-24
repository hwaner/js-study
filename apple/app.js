document
  .getElementsByClassName('navbar-toggler')[0]
  .addEventListener('click', function () {
    document.getElementsByClassName('list-group')[0].classList.toggle('show');
  });

$('#login').on('click', function () {
  $('.black-bg').addClass('show-modal');
});

$('#close').on('click', function () {
  $('.black-bg').removeClass('show-modal');
});

$('form').on('submit', function (e) {
  if (document.getElementById('email').value == '') {
    alert('아이디를 입력하세요.');
  }
  if (document.getElementById('pw').value == '') {
    alert('비밀번호를 입력하세요.');
  }
  if (document.getElementById('pw').value.length < 6) {
    alert('비밀번호는 6자리 이상입니다.');
  }
});

var cnt = 0;

$('.badge').on('click', function () {
  cnt++;
  if (cnt % 2 == 1) {
    $('.badge').html('Light');
  } else {
    $('.badge').html('Dark');
  }
});
