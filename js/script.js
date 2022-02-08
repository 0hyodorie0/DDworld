$(function() {
    // 미니홈피 메뉴 선택 색상변경
    $('.minihome_menu a').on('click', function(e) {
        e.preventDefault();
        $(this).parents('li').css('border', '1px solid red');
        $(this).addClass('active');
    });
});