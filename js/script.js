$(function() {
    // 미니홈피 메뉴 선택 색상변경
    $('.minihome_menu li').first().find('a').addClass('active');
    $('.minihome_menu a').on('click', function(e) {

        if ($(this).hasClass('active')) {
            $(this).parents().find('a').removeClass('active')
        } else {
            $(this).parents().find('a').removeClass('active')
            $(this).addClass('active');
        }
    });
});