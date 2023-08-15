

const citysearchdata = () => {
    const input_city = document.querySelector('#search-container').value;
    fetapidata(input_city);

    return false;
}




const tempdata = document.querySelector('#tempdata');
const namelocation = document.querySelector('#name-location');
const fetapidata = async (input_city) => {
    const api_key = '72c6494d1b5b32aebc5f8ff746d89cae';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input_city}&appid=${api_key}`;
    const res = await fetch(url, {
        method: 'GET'
    })
    if (res.status === 404) {
        window.alert('City Not found Pleased enter other city');

    }
    const data = await res.json();
    console.log(data)
    tempdata.innerHTML = data.main.temp + " C"
    namelocation.innerHTML = data.name
}
