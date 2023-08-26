$(document).ready(function() {
  const popUpContainer = $('#threeInOne-popup-container');
  console.log(popUpContainer);
  let popupShown = false;
  $('.popup-button').click(function(){
    if(!popupShown){
      $.get('../Views/threeInOnePage.html', function(data){
        popUpContainer.html(data);
        popupShown = true;
        $('#threeinone').removeClass('inactive-popup');
      })
    }else{
      $('#threeinone').toggleClass('inactive-popup');
    }
  })
});
// $(document).ready(function() {
//   const popUpContainer = $('#threeInOne-popup-container');
//   let popupShown = false;

//   $('.popup-button').click(function(){
//     if(!popupShown){
//       $.get('../Views/threeInOnePage.html', function(data){
//         popUpContainer.html(data);
//         popupShown = true;
//         $('#threeinone').removeClass('inactive-popup');

//         const buttonId = $(this).attr('id');
//         const sectionId = `${buttonId}-section`;
//         scrollToSection(sectionId);
//       }.bind(this));
//     }else{
//       $('#threeinone').toggleClass('inactive-popup');
//     }
//   });

//   function scrollToSection(sectionId) {
//     const scrollTopPosition = $(`#${sectionId}`).offset().top - popUpContainer.offset().top;
//     console.log(scrollTopPosition);
//     console.log($(`#${sectionId}`).offset().top);
//     console.log($('#threeInOne-popup-container'))
//     $('#threeInOne-popup-container').animate({
//       scrollTop: $(`#${sectionId}`).offset().top
//     }, 500); 
//   }
// });
