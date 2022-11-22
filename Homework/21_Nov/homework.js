// const axios = require("axios");

// async function doGetRequest() {
//   let res = await axios.get("http://webcode.me");

//   let data = res.data;
//   console.log(data);
// }

// doGetRequest();

// get latitude and longitude using fetch request

async function getData() {
  // current location function
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  async function showPosition(position) {
    // console.log("Latitude: " + position.coords.latitude);

    // console.log("Longitude: " + position.coords.longitude);
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const data = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
    )
      .then((result) => {
        if (!result.ok) throw new Error("the country has no neighbours.");
        return result.json();
      })
      .then((data1) => {
        console.log(data1);
        console.log(`You are in  ${data1.city}`);
      })
      .catch((err) => console.log(err));
  }
}
getData();
