import axios from "axios";

function getCovidData(country: string) {
  return axios({
    method: "GET",
    url: `https://corona.lmao.ninja/v2/countries/${country}`,
  });
}

export default getCovidData;
