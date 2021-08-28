const countriesName = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(Response => Response.json())
        .then(data => Display(data))
}
countriesName();



const Display = (data) => {

    const Country = document.getElementById('countriesName');
    data.forEach(Countryname => {
        const div = document.createElement('div');
        div.classList.add('CName');
        Country.appendChild(div);
        div.innerHTML = `
        <h3>${Countryname.name}</h3>
        <p>${Countryname.capital}</p>
        <button onclick="LoadDetails('${Countryname.name}')" >Show Details</button>
        `;


        // const h3 = document.createElement('h3');
        // h3.innerText = Countryname.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = Countryname.capital;
        // div.appendChild(p);

    });



}


const LoadDetails = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => DisplayDetails(data[0]))







}
const DisplayDetails = data => {

    const Details = document.getElementById('Country-Details');
    Details.innerHTML = `
    <h3>Name: ${data.name}</h3>
    <p>Population: ${data.population}</p>
    <img width=200px class='img-fluid' src="${data.flag}">

    `;

}