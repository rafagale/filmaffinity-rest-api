var faparser = require('faparser');
const express = require("express");
const app = express();
const error = { "error": true }

app.get('/api/title/:query', function (req, res, next) {
    let query = req.params.query;
    faparser.search({ query: query, lang: 'es', type: faparser.TITLE, start: 0, orderByYear: false })
        .then(function (response) {
            res.send(response.result[0]);
        }).catch(function (e) {
            res.send(error);
            console.log(e);
        });
});

app.get('/api/id/:id', function (req, res, next) {
    let id = req.params.id;
    faparser.preview({ id: id, lang: 'es' })
        .then(function (response) {
            res.send(response);
        }).catch(function (e) {
            res.send(error);
            console.log(e);
        });
});


var server = app.listen(5000, function () {
    console.log('Server is running...');
});