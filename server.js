{
    /*const express = require('express');
    const compression = require('compression');
    const path = require('path');
    const app = express();

    app.use(compression());
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    });
    */
}

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);