const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  swiper.on('slideChange', function () {
    const aktivSlaydRaqami = swiper.realIndex;
    if(aktivSlaydRaqami ==0) {
        document.body.style.backgroundColor = "rgb(239, 191, 123)"
    }else if (aktivSlaydRaqami == 1) {
        document.body.style.backgroundColor = "rgb(121, 121, 121)"
    } else if (aktivSlaydRaqami == 2) {
        document.body.style.backgroundColor = "rgb(146, 194, 118)"
    } else if(aktivSlaydRaqami == 3) {
        document.body.style.backgroundColor = "rgb(223, 139, 139)"
    }
  })

//   function changeBackground(index) {
//     const colors = [
//         'linear-gradient(to right, rgb(227, 236, 205), rgb(229, 245, 8))',
//         'linear-gradient(to right, #cfd9df, rgb(107, 107, 107))',
//         'linear-gradient(to right, #a8e063, #56ab2f)',
//         'linear-gradient(to right, #ff512f, #dd2476)'
//     ];

//     document.body.style.background = colors[index];
// }
