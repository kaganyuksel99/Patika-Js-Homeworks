function askName() {
  let myname = document.querySelector("#myName");
  let name = prompt("Adınız nedir?");
  myname.innerHTML = `${name}`;
}

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let day = date.getDay();
  if (day == 1) {
    day = "Pazartesi";
  } else if (day == 2) {
    day = "Salı";
  } else if (day == 3) {
    day = "Çarşamba";
  } else if (day == 4) {
    day = "Perşembe";
  } else if (day == 5) {
    day = "Cuma";
  } else if (day == 6) {
    day = "Cumartesi";
  } else if (day == 7) {
    day = "Pazar";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let result = `${h} : ${m} : ${s} ${day}`;
  let timeandday = document.getElementById("myClock");
  timeandday.innerHTML=result;
  setTimeout(showTime,1000);
}
askName();
showTime();