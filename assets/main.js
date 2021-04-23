const ytForm = document.getElementById('yt-form');
const ytQuery = document.getElementById('yt-query');
const vmForm = document.getElementById('vm-form');
const vmQuery = document.getElementById('vm-query');
const youtube = 'https://www.youtube.com/results?search_query=';
const vimeo = 'https://vimeo.com/search?q=';

function ytSubmitted(event) {
  event.preventDefault();
  const url = youtube + ytQuery.value;
  const win = window.open(url);
  win.focus();
}

function vmSubmitted(event) {
  event.preventDefault();
  const url = vimeo + vmQuery.value;
  const win = window.open(url);
  win.focus();
}

ytForm.addEventListener('submit', ytSubmitted);
vmForm.addEventListener('submit', vmSubmitted);
