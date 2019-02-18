$(document).ready(function () {
    $('div.flex-tabs').on('click', 'a:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.box').find('main.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

});

