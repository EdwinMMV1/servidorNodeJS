import App from './config/app.js';

//const express = require('express');
//const dotenv = require('dotenv');
//const app = express();

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json())
//dotenv.config();

//const port = process.env.APP_PORT || 8081;


/*app.get('/', (req, res) => {
    res.send("Hola mundo");
});*/

/*app.post('/data', function(req, res) {
    const data = req.body;
    console.log(req.body);
    res.json({
        ok: true,
        message: 'datos recibidos con éxito'
    });
});*/

/*app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});*/

const port = process.env.APP_PORT || 8081;

App.app.listen(port, () => console.log(`Api es running ${port}`));