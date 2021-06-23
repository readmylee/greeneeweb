
  //픽시드 헤더
  
  const headerEl = document.querySelector('header')
  const topEl = document.querySelector('.top')
  const topBgEl = document.querySelector('#top_bg')
  const logoEl = document.querySelector('.logo')
  const naviEl = document.querySelector('.navi')
  const gnbEl = document.querySelector('.gnb')
  
  window.addEventListener('scroll',_.throttle(function(){
    if(window.scrollY > 160){
      gsap.to(naviEl, .1, {
        width: "80%",
        margin: 0,
        "justify-content": "flex-start",
        "padding-top": "20px" ,
        "font-size": "20px"
      });
      gsap.to(logoEl, .1, {
        "font-size": "44px",
        width: "20%"
      });
      gsap.to(topEl, .1, {
        "flex-direction": "row",
        "justify-content": "flex-start"
      });
      gsap.to(topBgEl, .1, {
        height: "230px"
      });
      gsap.to(headerEl, .1, {
        position: "fixed",
        background: "rgba(257, 253, 253, .7)",
        "box-shadow": "2px 2px 20px #bbb"
      })
    } else{
      gsap.to(naviEl, .1, {
       "justify-content": "center",
       width: "60%",
       margin: "0 auto",
       "padding-top": 0
     })
     gsap.to(logoEl, .1, {
      "font-size": "80px" ,
      width: "100%"
    })
      gsap.to(topEl, .1, {
        "flex-direction": "column",
        "justify-content": "center"
      });
      gsap.to(topBgEl, .1, {
        height: 0
      })
      gsap.to(headerEl, .1, {
        "background":"transparent",
        position: "absolute",
        "box-shadow": "none"
      })
    }
  },300));
  

  //네비서브메뉴
  $('.navi>li').mouseover(function(){        
    $(this).find('.submenu').stop().slideDown(500);
    $('#top_bg').stop().fadeIn(0);
  }).mouseout(function(){
    $('.submenu').stop().slideUp(500);
    $('#top_bg').stop().fadeOut(1000);
  })


  //푸터 카피라이트의 올해연도
  const thisYear = document.querySelector('.this-year')
  thisYear.textContent = new Date().getFullYear()


  // 탑버튼
  const toTopEl= document.querySelector('#to-top')
  
  window.addEventListener('scroll',_.throttle(function(){
    if(window.scrollY > 1000){
      gsap.to(toTopEl, .2, {
        opacity: 1
      });
    } else{
      gsap.to(toTopEl, .2, {
        opacity: 0
      });
    }
  },300));
  
  toTopEl.addEventListener('click', function(){
    gsap.to(window, .5, {
      scrollTo: 0
    });
  });
