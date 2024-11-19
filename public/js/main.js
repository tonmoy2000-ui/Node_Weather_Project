const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please Enter City Name Before Search`;
        datahide.classList.add("data_hide");
    } else {
        try {
            // let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4b5f68d8a718fdbd6c706bbab1ff0a3b`;
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4b5f68d8a718fdbd6c706bbab1ff0a3b`;
            const response = await fetch(url);
            const data = await response.json()
            const arrData = [data];

            // city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
            // temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;


            // Update DOM with valid data
            city_name.innerText = `${data.name}, ${data.sys.country}`;
            temp.innerHTML = `${data.main.temp}<sup>°C</sup>`;
            temp_status.innerText = data.weather[0].main;

            const tempMod = arrData[0].weather[0].main


            if (tempMod === "Clear") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMod === "Clouds") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #dfe4ea;'></i>";
            } else if (tempMod === "Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-showers-heavy' style='color: #a4b0be;'></i>";
            } else if (tempMod === "Smoke") {
                temp_status.innerHTML = "<i class='fa-solid fa-smog' style='color: #95a5a6;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
            }
            
            datahide.classList.remove("data_hide");
        } catch{
            city_name.innerText = `Please Enter City Name Properly`;
            datahide.classList.add("data_hide");
        }
    }
    }

submitBtn.addEventListener('click', getInfo)