$(function () {
  //메뉴 버튼 클릭 시
  $('ul#menu li').click(function (event) {
    event.preventDefault();
    //변수 ht에 브라우저의 높이값 저장
    let ht = $(window).height();
    //변수 i에 클릭한 li의 순서값 저장
    let i = $(this).index();
    //브라우저의 높이값 * 인덱스값은 현재 박스의 스크롤 위치값과 동일
    let nowTop = i * ht;
    $('html, body').stop().animate({
      scrollTop: nowTop,
    }, 1300, 'easeOutBack');
  });

  //스크롤 이벤트 - 메뉴 on class
  $(window).on('scroll', function () {
    let ht = $(this).height();
    let sct = $(this).scrollTop();
    const sectionLength = $('#wrap section').length;
    for (let i = 0; i < sectionLength; i++) {
      if (sct >= ht * i && sct < ht * (i + 1)) {
        $('ul#menu li').removeClass('on');
        $('ul#menu li').eq(i).addClass('on');
      }
    }
  });

  //마우스 휠 이벤트
  $('section').on('wheel', function (e) {
    e.preventDefault();
    let nav;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      nav = $(this).prev();
    } else {
      nav = $(this).next();
    }
    if (nav.length) {
      let moveTop = nav.offset().top;
      $('html, body').stop().animate({
        scrollTop: moveTop,
      }, 1300, 'easeOutBack');
      console.log(nav);
    }
  });

    /* aos */
    $(document).ready(function () {
      AOS.init();
    });
});