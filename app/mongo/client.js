const {MongoClient} = require("mongodb")

const uri = "mongodb://localhost:27017"

module.exports = {
    newClient: function newClient() {
        return new MongoClient(uri)
    }
}
