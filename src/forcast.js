const key = 'wI2R6wIUmly2XaU0Rg3eFuhypzZvSikZ';

// get weather information
const getWeather = async (location) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${location}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};


// get city code
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

getCity('helsinki').then(data => {
    return getWeather(data.Key)
}).then(data => {
    console.log(data);
})
.catch(err => console.log(err));
