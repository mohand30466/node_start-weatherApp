const { json } = require("body-parser");
const request = require("request");

const weather = (address, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=12534f6792e2cb28937e639b50923875&query=" +
    address +
    "limit=1";

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to location ", undefined);
    } else if (body.location.length == 0) {
      callback("unable to find the address try another searsh", undefined);
    }
    callback(undefined, {
      body
    });
  });
};

module.exports = weather;
