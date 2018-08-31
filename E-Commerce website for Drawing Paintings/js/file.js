$(window).load(function(){
    
   
    
   $(".overlay .sk-cube-grid").fadeOut(4000,function(){
       
       $(this).parent().fadeOut(4000,function(){
           
           $("body").css("overflow","auto");   
          
       });
       
       
       
   });
       
                       
    
});
 $("body").awesomeCursor('paint-brush',{
    color: '#34db33',
    size: 32
  });