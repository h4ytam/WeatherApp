const ApiKey = "b466f5226759fcbf017b5baf57b7acc3";
const searchButton=document.querySelector('button')
const results=document.querySelector('.results')


async function getWeather() {
    results.innerHTML = "<p>Loading...";
        const city=document.querySelector('.change-city').value
        try{
            const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`)
             const data = await getData.json()
             console.log(data);

             const state=data.weather[0].main
             const description=data.weather[0].description;
             const name=data.name;
             const temp=data.main.temp;
             const humidity=data.main.humidity;
             let html=''
             html+=`
                 <div>
                     <h1>City:${name}</h1>
                     <div class="state">State:${state}</div>
                     <p>Description:${description}</p>
                     <div class="data-temp">
                         <p>Temperature:${temp}</p>
                         <p>humidity:${humidity}</p>
                     </div>
                 </div>
             `
             results.innerHTML=html
        }
        catch{
            console.log(results.innerHTML = "<p>Not Data is Found...")
        }



}

searchButton.addEventListener('click',getWeather)
