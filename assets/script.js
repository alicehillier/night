let audioIcon = document.getElementsByClassName('audio-icon');
audioIcon[0].addEventListener('click', playAudio);

let startBtn = document.getElementById('start');
startBtn.addEventListener('click', start)

/*Stops background music.*/
function stopAudio() {
  let audio = document.getElementById('music');
  audio.pause();
  audioIcon[0].classList.remove('fa-volume-high');
  audioIcon[0].classList.add('fa-volume-xmark');
  audioIcon[0].removeEventListener('click', stopAudio);
  audioIcon[0].addEventListener('click', playAudio);
}

/*Starts background music.*/
function playAudio() {
  let audio = document.getElementById('music');
  audio.play();
  audioIcon[0].classList.remove('fa-volume-xmark');
  audioIcon[0].classList.add('fa-volume-high');
  audioIcon[0].removeEventListener('click', playAudio);
  audioIcon[0].addEventListener('click', stopAudio);
}

/*Removes main content of title page and shows next page.*/
function start() {
  let title = document.getElementById('title');
  title.classList.add('fade-out');
  startBtn.removeAttribute('class', 'fade-in-out');
  startBtn.classList.add('fade-out');
  setTimeout(() => {
    title.style.display = "none";
    startBtn.style.display = "none";
  }, 3000);
}