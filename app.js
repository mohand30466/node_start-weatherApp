const path = require("path");
const express = require("express");
const hbs = require("hbs");
const weather = require("./public/stack/weather");

const dirpath = path.join(__dirname, "./public");
const app = express();

const genaralpath = path.join(__dirname, "./public/templets/views");
const partialsPath = path.join(__dirname, "./public/templets/partials");

app.set("view engine", "hbs");

app.set("views", genaralpath);

app.use(express.static(dirpath));
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", {
    tittle: "Weather App",
    name: "Mohand Abdo",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    tittle: "The best wep app provide weather",
    name: "Mohand",
    age: 44,
    address: "tel aviv",
    phone: 939393939,
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      err: "you must enter addres",
    });
  }

  weather(req.query.address, (error, { body }) => {
    if (error) {
      return res.send({ error });
    }
    res.send({
      name: body.location.name,
      country: body.location.country,

      lat: body.location.lat,
      lon: body.location.lon,
      localtime: body.location.localtime,
      temperature: body.current.temperature,
      wind_speed: body.current.wind_speed,
      feelslike: body.current.feelslike,
      description: body.current.weather_descriptions[0],
    });
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    tittle: "here you can find any help that you need ",
    name: "Mohnd Abdalmoneim",
  });
});

app.get("/*", (req, res) => {
  res.send("hello please enter the correct path");
});

app.listen(3000, () => {
  console.log("hello from the consle");
});
