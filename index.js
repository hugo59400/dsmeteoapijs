 ///hugo coleau 
 // récupere les éléments du DOM
 let input = document.querySelector('.text');
 let container = document.querySelector('.conteneur')
 let bouton = document.querySelector('.submit');
 // ma cle api 
 let cle_api = "86165458d789e9618eaf25ed195a4349"
     // attacher un gestionnaire d'événement à un élément spécifié
 bouton.addEventListener('click', function(name) {
     //  récupère les infos de l'api
     fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&units=metric&appid=' + cle_api)
         // réponse de l'api en json 
         .then(response => response.json())

     .then(json => {
             // boucle for pour repeter 20 fois 
             for (let item = 0; item < 20; item++) {
                 // recuperation des donnees du json avec l'api ci dessous 
                 let nomDeLaVille = json.city.name
                 let temperature = json.list[item].main.temp
                 let temperatureMin = json.list[item].main.temp_min
                 let temperatureMax = json.list[item].main.temp_max
                 let pressure = json.list[item].main.pressure
                 let description = json.list[item].weather[0].description
                 let heure = json.list[item].dt_txt
                 let humidite = json.list[item].main.humidity
                     // id de l'icone  ci dessous 
                 let icon = json.list[item].weather[0].icon

                 // affichage sur la page html
                 container.innerHTML += `<div class="carte">
            <h1 class="nom" id="nom">Vous avez choisi  : ${nomDeLaVille}</h1>
            <p class="heure">Heure complète  :  ${heure}</p>
            <p class="température">Température °C  : ${temperature} °C </p>
            <p class="description">Description : ${description}</p>
            <p class="humidite">Humidite : ${humidite}</p>
            <p class="température">Température min °C  : ${temperatureMin} °C </p>
            <p class="température">Température max °C  : ${temperatureMax} °C </p>
            <p class="icone">ID de l'icone  : ${icon} °C </p>
            <p class="pressure">Pression hPa : ${pressure} hPa </p>
         
          </div>`
             }
         })
         //verification de l'existance de la ville 
         .catch(err => alert("Entre une ville qui existe stp"));
 })