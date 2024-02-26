const INVALID_TIMER_ID = -1;
const THREE_MINUTES_IN_MS = 180000;
const REFRESH_INTERVAL_IN_MS = THREE_MINUTES_IN_MS;
let activeTimerId = -1;

function isTokenValid() {
  console.log("--- --- .isTokenValid()");

  return true;
}

function getUserOptions() {
  console.log("--- --- .getUserOptions()");
}

function getUserRepositories() {
  console.log("--- --- .getUserRepositories()");
}

function getUserTokenFromStorage() {
  console.log("--- --- .getUserTokenFromStorage()");
}

function refresh() {
  console.log("+++ +++ .refresh()");

  scheduleRefresh();
  getUserTokenFromStorage();
  isTokenValid();
  getUserRepositories();
}

function init() {
  getUserTokenFromStorage();
  isTokenValid();
  getUserOptions();
  getUserRepositories();
}

function scheduleRefresh() {
  console.log("+++ --- .scheduleRefresh()");
  if (activeTimerId !== INVALID_TIMER_ID) {
    activeTimerId = INVALID_TIMER_ID;
  }

  activeTimerId = setTimeout(refresh, REFRESH_INTERVAL_IN_MS);
}

(() => {
  console.log("+++ Background");

  init();
  scheduleRefresh();
})();
