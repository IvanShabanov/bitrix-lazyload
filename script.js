
$(document).ready(function () {
    lazyLoad();
    $(window).scroll(function () {
        /* Если скроллиться */
        lazyLoad();
    });
    $(window).resize(function () {
        /* При изменении размера*/
        lazyLoad();
    });
    $('body').bind("DOMSubtreeModified", function () {
        /* Если что-то поменялось в DOM */
        lazyLoad();
    });
});

function lazyLoad() {
    var top = $(document).scrollTop() - ($(window).height() * 2); /* 2 экрана в верх */
    var bottom = $(document).scrollTop() + ($(window).height() * 3); /* 3 экрана вниз */
    $('img[data-src]').each(function () {
        if ((top < $(this).offset().top) && (bottom > $(this).offset().top)) {
            /* Картинка попадает в область просмотра и мы её загрузим */
            var src = $(this).data('src');
            $(this).attr("srcset", src);
            $(this).removeAttr('data-src');
        }
    });
};
