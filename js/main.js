
    //메인슬라이드
  new Swiper('.mainSlide .swiper-container',{
    loop: true,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.mainSlide .swiper-pagination',
      clickable: true, 
    },
    navigation: {
      nextEl: '.mainSlide .nextBtn',
      prevEl: '.mainSlide .prevBtn',
    }
  });
  
  //아이템스와이퍼
  new Swiper('.items .swiper-container',{
    autoplay: true,
    loop: true, 
    spaceBetween: 10,
    slidesPerView: 4, 
    navigation: {
      prevEl: '.items .prevBtn',
      nextEl: '.items .nextBtn',
    }
  })


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
 