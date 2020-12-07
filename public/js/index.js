console.log("hello world");

const url =
  "http://api.weatherstack.com/current?access_key=12534f6792e2cb28937e639b50923875&query=&limit=1";

const weatherfeatch = document.querySelector("form");

const search = document.querySelector("input");
const tittle = document.querySelector(".tittle");
const foc = document.querySelector(".foc");
const tem = document.querySelector(".tem");
const fel = document.querySelector(".fel");


tittle.textContent = "Loading ... "
tittle.textContent =' '
foc.textContent = ' '
tem.textContent = ' '
fel.textContent = ' '

weatherfeatch.addEventListener("submit", (e) => {
  e.preventDefault();
  const loc = search.value;
  fetch("/weather?address=" + loc).then((response) => {
    response.json().then((data) => {
      if (data.err) { 
          tittle.textContent = data.err
      } else {
        tittle.textContent = data.name
        foc.textContent = "its "+data.description+" day"
        tem.textContent = "currently "+data.temperature + " degree"
        fel.textContent = "it feel like " +data.feelslike + " degree"
      }
    });
  });
});

