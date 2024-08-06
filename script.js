document.addEventListener("DOMContentLoaded", () => {
  const hoursInput = document.getElementById("hours");
  const minutesInput = document.getElementById("minutes");
  const secondsInput = document.getElementById("seconds");
  const startButton = document.getElementById("start-timer");
  const timerDisplay = document.getElementById("timer");

  let countdownInterval;

  const startTimer = () => {
    // Clear any existing intervals
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    // Get the time from inputs
    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;

    // Convert time to total seconds
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) {
      alert("Please enter a valid time.");
      return;
    }

    // Countdown logic
    countdownInterval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        alert("Time is up!");
        timerDisplay.textContent = "00:00:00";
        return;
      }

      totalSeconds--;

      const hrs = Math.floor(totalSeconds / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;

      timerDisplay.textContent = `${formatTime(hrs)}:${formatTime(
        mins
      )}:${formatTime(secs)}`;
    }, 1000);
  };

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  startButton.addEventListener("click", startTimer);
});
