const client = require("./client");

const db = "ttbb"

class Status {

    isConnected

    mongoClient

    constructor() {
        this.isConnected = false
        this.mongoClient = client.newClient()
    }

    async connect() {
        if (this.isConnected) {
            return
        }
        await this.mongoClient.connect()
    }

    async serverStatus() {
        await this.connect()
        return this.mongoClient.db(db).admin().serverStatus()
    }
}

module.exports = {Status}
