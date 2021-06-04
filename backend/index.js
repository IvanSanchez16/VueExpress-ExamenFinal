const express = require('express');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3000);

require('./src/config/connection');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use(require('./src/routes'));

app.listen(app.get('port'), (error) => {
    if (error) 
        console.log(error);
    else
        console.log(`Servidor en puerto: ${app.get('port')}`);
});