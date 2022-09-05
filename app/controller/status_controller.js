const status = require("../mongo/status")
const statusService = new status.Status()


class StatusController {
    async serverStatus(req, res) {
        statusService.serverStatus().then((stats) => {
                res.json(stats)
            }
        );
    }
}

module.exports = {StatusController}
