const horaMiddleware = (req,res,next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours} : ${minutes}`;
    req.dateType = `${formattedTime}`;
    next();
}

module.exports = horaMiddleware;