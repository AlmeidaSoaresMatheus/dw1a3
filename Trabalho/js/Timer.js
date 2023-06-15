// Variáveis
var minutes;
var seconds;
var interval;

// Função para reproduzir o som de alarme
function playAlarmSound() {
    var audio = new Audio('assets/timer.mp3');
  alarmSound.play();
}

// Função para iniciar o temporizador
function startTimer() {
    var inputMinutes = document.getElementById('inputMinutes').value;
  
    // Verificar se o campo está vazio
    if (inputMinutes === '') {
      inputMinutes = 25; // Valor padrão de 25 minutos
    }
  
    timer(inputMinutes);
  }

// Função quando o tempo está em execução
function timer(x) {
  minutes = x;
  seconds = 0;

  audio = new Audio('assets/timer.mp3');

  interval = setInterval(function() {
    var time = document.getElementById('timer');

    if (seconds === 0 && minutes === 0) {
      clearInterval(interval);
      time.innerHTML = '00:00';
      audio.play();
    } else if (seconds === 0) {
      minutes = minutes - 1;
      seconds = 59;
      time.innerHTML = minutes + ':' + seconds;
      document.title = minutes + ':' + seconds;
    } else if (seconds < 11) {
      seconds = seconds - 1;
      time.innerHTML = minutes + ':0' + seconds;
    } else if (seconds > 0) {
      seconds = seconds - 1;
      time.innerHTML = minutes + ':' + seconds;
      document.title = minutes + ':' + seconds;
    }
  }, 1000);
}

// Função para parar o timer
function stop() {
  minutes = 0;
  seconds = 0;
  var time = document.getElementById('timer');
  playAlarmSound(); // Reproduz o som de alarme

  clearInterval(interval);
  time.innerHTML = '00:00';
}
