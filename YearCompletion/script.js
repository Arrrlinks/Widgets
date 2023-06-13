document.addEventListener('DOMContentLoaded', function() {
    time();
    setInterval(time, 10000);
});

function time(){
    const today = new Date();
    const YearPourcent = ((((today - new Date(today.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24)) +1) / 366 * 100).toFixed(2);
    const yearDiv = document.getElementById("yearProgression");
    yearDiv.style.width = YearPourcent + "%";
    const yearSpan = document.getElementById("yearTxt");
    yearSpan.innerHTML = `Year: <br>${YearPourcent}%`;
    const month = today.getMonth();
    const monthPourcent = ((((today - new Date(today.getFullYear(), month, 1)) / (1000 * 60 * 60 * 24)) +1) / 31 * 100).toFixed(2);
    const monthDiv = document.getElementById("monthProgression");
    monthDiv.style.width = monthPourcent + "%";
    const monthSpan = document.getElementById("monthTxt");
    monthSpan.innerHTML = `Month: <br>${monthPourcent}%`;
    const dayOfTheWeek = today.getDay()-1;
    const weekPourcent = ((((dayOfTheWeek*24) + today.getHours()) / 168) * 100).toFixed(2);
    const weekDiv = document.getElementById("weekProgression");
    weekDiv.style.width = weekPourcent + "%";
    const weekSpan = document.getElementById("weekTxt");
    weekSpan.innerHTML = `Week: <br>${weekPourcent}%`;
    const dayPourcent = (((today.getSeconds() + (today.getMinutes()*60) + (today.getHours()*3600)) / 86400) * 100).toFixed(2);
    const dayDiv = document.getElementById("dayProgression");
    dayDiv.style.width = dayPourcent + "%";
    const daySpan = document.getElementById("dayTxt");
    daySpan.innerHTML = `Day: <br>${dayPourcent}%`;
}