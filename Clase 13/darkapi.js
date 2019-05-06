let request = require('request');

function getWeather(lat,long){
    let url = 'https://api.darksky.net/forecast/f2bb3c5446342afa6dead5b5af16129f/'+lat+','+long;
    request(url, function(err, response, body){
        if(err) throw err;
        else{
            let x =JSON.parse(body);
            console.log(x.currently.temperature-32*(5/9));
        }
    });
}

getWeather(37.8267,-122.4233);
