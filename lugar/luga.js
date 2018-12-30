const axios = require('axios');
const getLugarLatLon = async(direccion) => {

    let encodeUri = encodeURI(direccion);
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUri}&key=AIzaSyC752QhqETsCqzPjf-q7nxQMKw0w-kQ0Cg`);

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciuda ${direccion}`)
    }

    let location = response.data.results[0];
    let coordenadas = location.geometry.location;
    console.log(coordenadas);

    return {
        'direccion': location.formatted_address,
        'latitud': coordenadas.lat,
        'longitud': coordenadas.lng
    };

}
module.exports = {
    getLugarLatLon
}