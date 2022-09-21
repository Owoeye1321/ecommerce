const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://quomo.p.rapidapi.com/',
  headers: {'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY', 'X-RapidAPI-Host': 'quomo.p.rapidapi.com'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});