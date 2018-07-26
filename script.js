var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json(); 
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var liEl = document.createElement('li');
        var hEl = document.createElement('h4');
        var pCap = document.createElement('p');
        var pPop = document.createElement('p');
        hEl.innerText = item.name;
        pCap.innerText = 'Capital: ' + item.capital;
        pPop.innerText = 'Population: ' + item.population;
        countriesList.appendChild(liEl);
        liEl.appendChild(hEl);
        liEl.appendChild(pCap);
        liEl.appendChild(pPop);
    });
}