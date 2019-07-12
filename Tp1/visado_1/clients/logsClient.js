const rp = require('request-promise');

class LogsClient {

    save(level, message) {
        const options = {
            url: '127.0.0.1:8003/save',
            qs: {
                level: level,
                message: message
            }
        }

        rp.post(options)
    }

}