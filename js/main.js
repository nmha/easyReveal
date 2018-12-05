//************************************
//**** VOIR SOLUTION OLIVIER PHOTO DU 5/12/18 */
//**************************** */


//*********************
//******** MA SOLU inspirée de http://jsfiddle.net/nmha/ZyKar/8169/ */
$(document).ready(function() {
    $(window).scroll( function(){
        $('.revealable').each( function(i){
            var milieu = $(this).position().top + ($(this).outerHeight()/3);
            var bas = $(window).scrollTop() + $(window).height();
            if( bas > milieu ){
                $(this).animate({'opacity':'1'},300);
            }
        }); 
    });
});