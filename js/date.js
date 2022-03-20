let today = new Date();
let year = today.getFullYear(); // 년도
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = monthNames[today.getMonth()]; //월
let date = String(today.getDate()).padStart(2, "0"); // 날짜
const WEEKDAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; //요일
let day = WEEKDAY[today.getDay()];

const bigDate = document.querySelector("#now .date");
bigDate.innerText = date;
const bigDay = document.querySelector(".day span:first-child");
bigDay.innerText = day;
const bigMonth = document.querySelector(".day span:last-child");
bigMonth.innerText = `${month}, ${year}`;
