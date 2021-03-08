const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('requ recue');
    next();
});

app.use((req, res, next) => {
   res.json({message: 'votre req recu'});
});

module.exports = app;