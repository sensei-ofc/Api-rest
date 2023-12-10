const fs = require('fs');

global.creator = 'Zeeoneofc'; // tu nombre
global.MONGO_DB_URI = ""; // base de datos MongoDB
global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10"; // cualquier valor que desees
global.your_email = "misaelk354@gamil.com"; // correo electrónico
global.email_password = "misaelpi0912"; // contraseña de la aplicación del correo electrónico
global.limitCount = 10000;
global.YOUR_PORT = 8000;
global.loghandler = {
    noapikey: {
        status: 403,
        message: 'Parámetro de entrada apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Servicio no disponible, en reparación',
        creator: `${creator}`
    },
    apikey: {
        status: 403,
        message: 'Prohibido, apikey no válido',
        creator: `${creator}`
    },
    noturl: {
        status: 403,
        message: 'Prohibido, URL no válida, ingrese el parámetro de URL',
        creator: `${creator}`,
    }
};

let file = require.resolve(__filename);

fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Actualizado '${__filename}'`);
    delete require.cache[file];
    require(file);
});
