
// $(document).ready(function () {
//   console.log("We are using jQuery");

//   // $('selector').action();
//   $('p').click(function () {
//     console.log("clicked!");
//     $(this).hide();
//   })
// })
// Or
$(function() {
  console.log("We are using jQuery");

// $('selector').action();
// $('p').click(function() {
//   console.log("clicked!", this);
//   // $(this).hide();
// })

// $('p').dblclick(function() {
//   console.log("you double clicked! on ", this);
//   // $(this).hide();
// })

// $('p').mouseenter(function() {
//   console.log("you entered on ", this);
//   // $(this).hide();
// })
// $('p').mouseleave(function() {
//   console.log("you left your mouse", this);
//   // $(this).hide();
// })


// $('p').hover(function() {
//     console.log("you hovered on", this);
//     // $(this).hide();
// })


// There are three main types of element selector in jQuery
// 1 Element Selector 
// 2 Id selector
// 3 Class selector


// 2 This is an example of Id Selector 
// $('#second').click()

// 3 This is an example of Class Selector
// $('.odd').click();


// Other Selectors
// $('*').click() // clicks on all the elements
// $('p.odd').click();
// $('p:first').click();

  // Jquery Events
 // Mouse Events = click, dbclick, mouseenter, mouseleave
 // Keyboard Events = keypress, keydown, MediakeyStatusMap
 // form Events = submit, change, focus, blur
 // document/window events = load, resize , scroll, unload


 //demoing the method
 $('p').on(  
  {
    click :  function() {
   console.log("Thanks for clicking!", this);
   },
   mouseleave : function() {
     console.log("you have left the mouse");
   }
});

// $('#wiki').click(function () {
//   $(this).hide(1000);
// })
// $('#wiki').click(function () {
//   $(this).show(1000);
// })
// $('#wiki').show(1000, function () {
//   console.log("hidden will be shown now");
// })

// $('#toggle').click(function () {
//   // $('#wiki').fadeToggle(600);
//   // $('#wiki').slideUp(1000);
//   $('#wiki').slideToggle(1000);
// })

// Animate function in jQuery

// $('#wiki').animate({
//   opacity : .3,
//   height : '150px',
//   width : '350px',
// }, 1000)

// $('#wiki').animate({opacity : .3}, 4000);
// $('#wiki').animate({opacity : .9}, 4000);
// $('#wiki').animate({width : '350px'}, 12000);


// $('#wiki').text("This is set Text");
// $('#wiki').css('background-color', 'red');

//Ajax using JQuery  
// $.get('https://code.jquery.com/jquery-3.6.0.js', function(data, status){
//   alert(data);
// });

$.post('https://code.jquery.com/jquery-3.6.0.js', {name : 'Abhi', age : 19}, function(data, status) {
  alert(status);
})


});

