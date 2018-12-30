const axios = require('axios');
const getClima = async(lat, lng) => {

    console.log(lat);
    console.log(lng);
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b48575d0fa09004728b2b8586fb151e6`);

    return response.data.main.temp;
    // if (response.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay resultados para la ciuda ${direccion}`)
    // }

    // let location = response.data.results[0];
    // let coordenadas = location.geometry.location;
    // console.log('direccion:', location.formatted_address);
    // console.log('latitud:', coordenadas.lat);
    // console.log('longitud:', coordenadas.lng);

    // return {
    //     'direccion:': location.formatted_address,
    //     'latitud:': coordenadas.lat,
    //     'longitud:': coordenadas.lng
    // };

}
module.exports = {
    getClima
}