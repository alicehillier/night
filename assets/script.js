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
    pageOne();
  }, 3000);
}

function pageOne() {
  title.style.display = "none";
  startBtn.style.display = "none";
  let intro1 = document.createElement('p')
  intro1.setAttribute('id', 'intro1');
  intro1.setAttribute('class', 'fade-in');
  intro1.innerHTML = "MONDAY";
  let intro2 = document.createElement('p')
  intro2.setAttribute('id', 'intro2');
  intro2.setAttribute('class', 'fade-in');
  intro2.innerHTML = "00:42";
  let main = document.getElementsByTagName('main');
  main[0].append(intro1, intro2);
}