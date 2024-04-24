/* Al clickar tendrá que validar con el middleware `validarHora.js`si la hora es correcta 
para poder continuar. Solo se podrá acceder a `/endroute` si la hora es está entre las 12h 
de la mañana y las 24h. */

const validarHora = (req,res,next) => {
    const currentHour = req.dateType;
    const hour = parseInt(currentHour.split(':')[0]);
    const minutes = parseInt(currentHour.split(':')[1]);
    if(hour >=12 && hour <= 23) {
        next()
    }else {
        const mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`;
        res.redirect(`/?mensaje=${encodeURIComponent(mensaje)}`);

    }
}

module.exports = validarHora;