let audioIcon = document.getElementsByClassName('audio-icon');
audioIcon[0].addEventListener('click', playAudio);

function stopAudio() {
  let audio = document.getElementById('music');
  audio.pause();
  audioIcon[0].classList.remove('fa-volume-high');
  audioIcon[0].classList.add('fa-volume-xmark');
  audioIcon[0].removeEventListener('click', stopAudio);
  audioIcon[0].addEventListener('click', playAudio);
}

function playAudio() {
  let audio = document.getElementById('music');
  audio.play();
  audioIcon[0].classList.remove('fa-volume-xmark');
  audioIcon[0].classList.add('fa-volume-high');
  audioIcon[0].removeEventListener('click', playAudio);
  audioIcon[0].addEventListener('click', stopAudio);
}