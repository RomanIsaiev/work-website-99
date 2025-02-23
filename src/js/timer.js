function getTimeRemaining(endtime) {
  const t = endtime - new Date().getTime();
  const milliseconds = Math.floor((t % 1000) / 10);
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    total: t,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
  };
}

function declensionNum(number, words) {
  if (number > 10 && number < 20) return words[2];
  const n = number % 10;
  if (n === 1) return words[0];
  if (n > 1 && n < 5) return words[1];
  return words[2];
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  const millisecondsSpan = clock.querySelector('.milliseconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    millisecondsSpan.innerHTML = ('0' + t.milliseconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      minutesSpan.innerHTML = '00';
      secondsSpan.innerHTML = '00';
      millisecondsSpan.innerHTML = '00';
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 10);
}

const deadline = new Date(Date.parse(new Date()) + 10 * 60 * 1000);
initializeClock('countdown-one', deadline);
initializeClock('countdown-two', deadline);
