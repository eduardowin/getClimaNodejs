const { argv } = require('./config/yargs');
const luga = require('./lugar/luga');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let coordenadas = await luga.getLugarLatLon(direccion);
        console.log(coordenadas);

        let infoClima = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

        return `El clima en ${coordenadas.direccion} es de ${infoClima}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}
getInfo(argv.direccion).then((resultado) => {
    console.log(resultado);

}).catch(e => {
    console.log(e);
});