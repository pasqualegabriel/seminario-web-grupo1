exports.logsUrl = process.env.LOGS_PORT ? `${process.env.LOGS_PORT}/api/active` : 'localhost:8003/api/active';
exports.notifyUrl = process.env.NOTIFY_PORT ? `${process.env.NOTIFY_PORT}/api/active` : 'localhost:8001/api/active';
exports.slackUrl = 'https://hooks.slack.com/services/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';
