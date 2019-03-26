// Essa função é para travar a barra de rolagem(scroll) ao carregar a página.
// onLoad = hidden()
 // function hidden() { document.body.style.overflow = 'hidden'; }

// Essa função é para destravar a barra de rolagem(scroll) ao carregar a página.
function LiberarBotao() {
  document.body.style.overflow = "scroll";
}

//Função para o toggle da página
var theToggle = document.getElementById('toggle');

// hasClass
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
}
// removeClass
function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  } else {
    elem.className += ' ' + className;
  }
}

theToggle.onclick = function () {
  toggleClass(this, 'on');
  return false;
}

var audio = document.getElementById('audio');
var isPlaying = false;

// tocar/pausar a música
$('.btn-play-music').click(function () {
  $(this).toggleClass('pause');
  $(this).parent('.music-box').toggleClass('playing');
  $(this).find('.fa').toggleClass('fa-pause');
  if (isPlaying) {
    audio.pause()
  } else {
    audio.play();
  }
});
audio.onplaying = function () {
  isPlaying = true;
};
audio.onpause = function () {
  isPlaying = false;
};

$('.btn-sm').click(function () {
  $(this).toggleClass('pause');
  $(this).parent('.music-box').toggleClass('playing');
  $(this).find('.fa').toggleClass('fa-pause');
  if (isPlaying) {
    audio.pause()
  } else {
    audio.play();
  }
});
audio.onplaying = function () {
  isPlaying = true;
};
audio.onpause = function () {
  isPlaying = false;
};