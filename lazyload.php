<?php
AddEventHandler("main", "OnEndBufferContent", "ChangeContentForLazyLoad");
function ChangeContentForLazyLoad(&$content){
    $content = preg_replace('|(<img[^>]*)(src="[^"]*")|i','$1 srcset="/lazyload.png" data-$2 $2',$content);
}