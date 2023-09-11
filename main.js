function getCurrentDayOfTheWeek() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date();
  return daysOfWeek[today.getUTCDay()];
}

function updateUTCTime() {
  const utcTimeMilliseconds = Date.now();
  const element = document.querySelector('[data-testid="currentUTCTime"]');

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  };
  const formattedUTC = new Intl.DateTimeFormat('en-US', options).format(
    new Date(utcTimeMilliseconds)
  );

  element.textContent = `Current UTC Time: ${formattedUTC}Z`;
}

updateUTCTime();

setInterval(updateUTCTime, 1000);
// Function to update the content of the specified elements
function updatePageContent() {
  const slackNameElement = document.querySelector(
    '[data-testid="slackUserName"]'
  );

  const currentDayOfTheWeekElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );

  const myTrackElement = document.querySelector('[data-testid="myTrack"]');

  slackNameElement.textContent = 'Tolabigboy';

  currentDayOfTheWeekElement.textContent = `Current day of the week: ${getCurrentDayOfTheWeek()}`;

  myTrackElement.textContent = 'Track: Frontend';
}

// Call the updatePageContent function when the page loads
window.addEventListener('load', updatePageContent);
