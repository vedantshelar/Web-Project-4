let cityName = document.querySelector("#userInp");
let searchBtn = document.querySelector(".search");
let W_Data = document.querySelector("#W_Data");
let H_Data = document.querySelector("#H_Data");
let W_S_Data = document.querySelector("#W_S_Data");
let city = document.querySelector("#countryName");
let climentImg = document.querySelector(".img1"); 

let url = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=7a4335fbd3936101fede6aab1bea587f&units=metric`;

getWeatherData(url,changeClimentImg);

searchBtn.addEventListener("click", () => {

    if (cityName.value == "") {
        alert("Please enter city...")
    } else {
        W_Data.innerText = `...`;
        H_Data.innerText = `...%`;
        W_S_Data.innerText = `... km/h`;
        city.innerText=`...`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=7a4335fbd3936101fede6aab1bea587f&units=metric`;
        setTimeout(()=>{
            getWeatherData(url,changeClimentImg);
            city.innerText=cityName.value.toLowerCase(); 
            cityName.value="";
        },500);
    } 

})

async function getWeatherData(url,callback) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        W_Data.innerText = data.main.temp;
        H_Data.innerText = `${data.main.humidity}%`;
        W_S_Data.innerText = `${data.wind.speed} km/h`;
        callback(data.main.temp);
    } catch (err) {
        confirm("Network Issue...")
    }
}

function changeClimentImg(range){
    if(range>=40){ 
        climentImg.src=`img/img6.png`;  
    }else if(range>=30 && range<40){
        climentImg.src=`img/img2.png`;
    }else if(range>=19 && range<30){
        climentImg.src=`img/img7.png`;
    }else if(range>=14 && range<19){
        climentImg.src=`img/img1.png`;
    }else if(range>=7 && range<14){
        climentImg.src=`img/img3.png`;
    }else{
        climentImg.src=`img/img5.png`
    }
} 