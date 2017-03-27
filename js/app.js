console.log('wired up!')
console.log($)
console.log(_)
console.log(Backbone)

$(".sidebar-btn").click( function(a){
      $(".wrapper").toggleClass("sideDisplay");

});


$("mobile-nav").hover(
    function () {
      $(this).toggleClass('datWhiteClass');
    },
   function () {
       $(this).toggleClass('datWhiteClass');
    }
  );
