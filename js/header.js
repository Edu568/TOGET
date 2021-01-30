$ ('document').ready(function($){
    let menuHeader = $('.menu-icon'),
    menu = $('.navigation-ul');

    menuHeader.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show')
        }else {
            menu.addClass('show') 
        }
        menu.addClass('show')
    })

});