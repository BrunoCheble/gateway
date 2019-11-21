const express = require('express');
var connect_datadog = require('connect-datadog')({
    'response_code': true,
    'tags': ['app:my_app']
});

const routes = require('./routes');

require('./database');

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {

        // Add the datadog-middleware before your router
        this.server.use(connect_datadog);
        //this.server.use(router);

        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;
