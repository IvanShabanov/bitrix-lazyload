$(document).ready(function () {
    initLazyload()
});

function initLazyload() {
    const doc = $('body')[0];
    const MutationObserver    = window.MutationObserver;
    const myObserver = new MutationObserver(lazyLoad);
    const obsConfig = { childList: true, characterData: true, attributes: true, subtree: true };
    myObserver.observe (doc, obsConfig);
    lazyLoad();
    $(window).scroll(function () {
        lazyLoad();
    });
    /* Бывает что стоит в css что body {min-height: 100%}, для этого делаем то что ниже */
    $('body').scroll(function () {
        lazyLoad();
    });
    $(window).resize(function () {
        lazyLoad();
    });
}

function lazyLoad() {
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const top = (windowHeight * -2); /* 2 экрана вверх */
    const bottom = (windowHeight * 3); /* 3 экрана вниз */
    $('img[data-src]').each(function () {
        const imgRect = this.getBoundingClientRect();
        if ((top < imgRect.top) && (bottom > imgRect.top)) {
            /* Картинка попадает в область просмотра и мы её загрузим */
            var src = $(this).data('src');
            $(this).attr("srcset", src);
            $(this).removeAttr('data-src');
        }
    });
};
