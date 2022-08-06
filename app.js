let today = new Date("2020-01-01 00:00:00");
let isPause = true;
let setIntervalId =
    setInterval(() => {

    if (!isPause) {
    today.setMilliseconds(today.getMilliseconds() + 40)
     }

    document.querySelector("#stopwatch").innerText =
moment(today).format('H:mm:ss: SSS');
}, 40);

function pause() {
isPause = !isPause ;
}

function reset() {
today = new Date("2020-01-01 00:00:00");
isPause = true;
}

function stop() {
clearInterval(setIntervalId)
}
