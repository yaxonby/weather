export class DataService {
  data;
  /*
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
*/

  addData(name: string, dataWether) {
    // this.data.push({ located: name, weather: dataWether });
    this.data = { located: name, weather: dataWether };

    console.log("add new city:", this.data);
    this.getData();
  }
  /*
  loadData(locationName, url) {
    const loadPromise = new Promise((resolve, reject) => {
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
        resolve({ located: locationName, weather: dataWether });
      });
    });
    
    loadPromise.then(result => {
      this.citys = result;
      console.log("this.citys--", this.citys);
      this.store.dispatch(
        new cityAction.AddOne({
          ids: this.citys.weather.id,
          citys: {
            id: this.citys.weather.id,
            name: this.citys.weather.name,
            description: this.citys.weather.weather[0].description,
            temperature: this.citys.weather.main.temp,
            wind: this.citys.weather.wind.speed,
            precipitation: this.citys.weather.clouds.all
          }
        })
      );
      this.locationName = "";
    });
    
  }
*/
  getData() {
    return this.data;
  }
}
