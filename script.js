fetch('http://api.openweathermap.org/data/2.5/weather?q=Zaporizhzhya,ua&appid=fa9fbfeec6f88f5e8e1cc967ad07b9fc')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name-1').textContent = data.name;
        document.querySelector('.price-1').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer-1').textContent = data.weather[0]['description'];
        document.querySelector('.features-1').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    });

fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fa9fbfeec6f88f5e8e1cc967ad07b9fc')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name-2').textContent = data.name;
        document.querySelector('.price-2').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer-2').textContent = data.weather[0]['description'];
        document.querySelector('.features-2').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    });

fetch('http://api.openweathermap.org/data/2.5/weather?q=Berlin,de&appid=fa9fbfeec6f88f5e8e1cc967ad07b9fc')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name-3').textContent = data.name;
        document.querySelector('.price-3').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer-3').textContent = data.weather[0]['description'];
        document.querySelector('.features-3').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    });


fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&appid=fa9fbfeec6f88f5e8e1cc967ad07b9fc')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name-4').textContent = data.name;
        document.querySelector('.price-4').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer-4').textContent = data.weather[0]['description'];
        document.querySelector('.features-4').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    });
fetch('http://api.openweathermap.org/data/2.5/weather?q=Istanbul,tr&appid=fa9fbfeec6f88f5e8e1cc967ad07b9fc')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name-5').textContent = data.name;
        document.querySelector('.price-5').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer-5').textContent = data.weather[0]['description'];
        document.querySelector('.features-5').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    });


fetch('http://api.openweathermap.org/data/2.5/weather?q=Zakopane,pl&appid=fa9fbfeec6f88f5e8e1cc967ad07b9fc')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name-6').textContent = data.name;
        document.querySelector('.price-6').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer-6').textContent = data.weather[0]['description'];
        document.querySelector('.features-6').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    });

    fetch('http://api.openweathermap.org/data/2.5/weather?q=Sankt Petersburg,rul&appid=fa9fbfeec6f88f5e8e1cc967ad07b9fc')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name-7').textContent = data.name;
        document.querySelector('.price-7').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer-7').textContent = data.weather[0]['description'];
        document.querySelector('.features-7').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    });

    
fetch('http://api.openweathermap.org/data/2.5/weather?q=Krakow,pl&appid=fa9fbfeec6f88f5e8e1cc967ad07b9fc')
.then(function (resp) { return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.city-name-8').textContent = data.name;
    document.querySelector('.price-8').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.disclaimer-8').textContent = data.weather[0]['description'];
    document.querySelector('.features-8').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
.catch(function () {

});



