import { City } from "./city";

export class DataService {
  private data = [
    {
      located: "London",
      weather: {
        coord: { lon: -0.13, lat: 51.51 },
        weather: [
          {
            id: 300,
            main: "Drizzle",
            description: "light intensity drizzle",
            icon: "09d"
          }
        ],
        base: "stations",
        main: {
          temp: 280.32,
          pressure: 1012,
          humidity: 81,
          temp_min: 279.15,
          temp_max: 281.15
        },
        visibility: 10000,
        wind: { speed: 4.1, deg: 80 },
        clouds: { all: 90 },
        dt: 1485789600,
        sys: {
          type: 1,
          id: 5091,
          message: 0.0103,
          country: "GB",
          sunrise: 1485762037,
          sunset: 1485794875
        },
        id: 2643743,
        name: "London",
        cod: 200
      }
    }
  ];

  loadData(locationName) {
    console.log("LOAD");
    this.loadFetch(locationName);
    // this.addData(locationName);
  }

  addData(name: string, dataWether) {
    this.data.push({ located: name, weather: dataWether });
    console.log("add new city:", this.data);
  }

  loadFetch(locationName = "Moskva") {
    const keyApi = "&APPID=5baf5448a135ea4bda7e758af88b0136";
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      locationName +
      keyApi;

    const myInit = {
      method: "GET",
      cache: "default"
    };
    let dataWether;

    async function fetchAsync(url) {
      const dataJson = await fetch(url, myInit);
      return (dataWether = await dataJson.json());
    }
    fetchAsync(url).then(() => {
      console.log(dataWether);
      this.addData(locationName, dataWether);
    });
    //answer
    /*
{"coord":{"lon":-0.13,"lat":51.51},
"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],
"base":"stations",

"main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},
"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,
"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}
*/
  }

  getData() {
    return this.data;
  }
}