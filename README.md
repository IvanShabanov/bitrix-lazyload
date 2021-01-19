# bitrix-lazyload
Lazyload для битрикс

Надо чтобы в теге img атррибут src всегда указывал на правильную картинку.

А реализация отложенной загрузхки надо делать используя аттрибут srcset.

Т.е.



в коде картинки должны быть, до попадания картинки в область просмотра

    <img src="fullsizeimg.jpg" srcset="placeholder.png" data-src="fullsizeimg.jpg" alt="fullsizeimg" title="fullsizeimg">

А после попадания картинки в область просмотра

    <img src="fullsizeimg.jpg" srcset="fullsizeimg.jpg" alt="fullsizeimg" title="fullsizeimg">

Таким образом современные браузеры будут подгружать сначала

placeholder.png - какой нить прозрачный пиксель

и после прокрутки до изображения уже

fullsizeimg.jpg

И САМОЕ ГЛАВНОЕ поисковые системы нормально возьмут кортинку из аттрибута src и проиндексируют.

