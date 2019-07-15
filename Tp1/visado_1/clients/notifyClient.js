const rp = require('request-promise');

class NotifyClient {

    constructor() {
        this.url = "http://127.0.0.1",
        this.port = "8001"
    }

    send(listaDeMails) {
        const options = {
            url: `${this.url}:${this.port}/notify`,
            qs: {
                mails: listaDeMails,
            }
        };

        return options;
    }

module.exports = {
    NotifyClient,
};