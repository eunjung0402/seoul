$(function(){

  $('#langBtn').click(function(){
    url = $("#langSelect").val();
    window.open(url);
  })

  $('.close_btn').click(function(){
    $('.group_banner').hide();
    $('.group_menu').css({'margin-top':'0'});
  })

  const mainSlide = new Swiper(".main-slide", {
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  // 상단 메인 슬라이드 일시정지 이벤트
  let topSw=0;
  $('.sc_visual .btn_nav.pause').click(function(){
    if(topSw==0){
      $(this).removeClass('pause');
      $(this).addClass('restart');
      mainSlide.autoplay.stop();
      topSw = 1;
    }else{
        $(this).addClass('pause');
        $(this).removeClass('restart');
        mainSlide.autoplay.start();
        topSw = 0;
    }
  })

  $('.sc_visual .slide_nav').click(function(){

    idx = $(this).data('idx');

    $(this).addClass('active').siblings().removeClass('active');
    mainSlide.slideToLoop(idx);
  })

  mainSlide.on('slideChange', function(){
    idx = this.realIndex;
    $('.sc_visual .slide_nav').removeClass('active');
    if (idx >= 2) {
      $('.sc_visual .slide_nav.join').addClass('active');
    } else {
      $('.sc_visual .slide_nav.news').addClass('active');
    }
  })

  

  // 하단 3개 슬라이드
  const subswiper = new Swiper(".sub-slide", {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".btn_nav.next",
        prevEl: ".btn_nav.prev",
      },
      
    });

    // 하단 3개 슬라이드 일시정지 이벤트
    let btSw=0;
    $('.sub-slide .btn_nav.pause').click(function(){
      if(btSw==0){
        $(this).removeClass('pause');
        $(this).addClass('restart');
        subswiper.autoplay.stop();
        btSw = 1;
      }else{
          $(this).addClass('pause');
          $(this).removeClass('restart');
          subswiper.autoplay.start();
          btSw = 0;
      }
    })

    

    // 픽스버튼
    $('.fix_btn_box').click(function(e){
      e.preventDefault();
      window.scrollTo({top:0,behavior:"smooth"})
    })

    
    


    // footer menu
    $('footer .link_item.arrow').click(function(e){
      e.preventDefault();
      if(!$(this).hasClass('on')){
        $(this).addClass('on').siblings().removeClass('on');
        $('.sub_link_wrap').slideUp();
        $(this).find('.sub_link_wrap').slideDown();
      } else {
        $(this).find('.sub_link_wrap').slideUp();
        $(this).removeClass('on');
      }
    })
})

// 픽스버튼 스크롤 위치 이벤트
$(window).scroll(function () {
  let tmp = $(this).scrollTop();
  console.log(tmp);
  if(tmp>10) {
    $('.fix_btn_box').addClass("down");
  }else {
    $('.fix_btn_box').removeClass("down");
  }
})