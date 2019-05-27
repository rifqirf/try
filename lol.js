var list = document.getElementsByClassName("YOUTUBE-iframe-video")[0];
var old_src = image.getAttribute('src');
image.setAttribute('data-src', old_src);
image.removeAttribute('src');
