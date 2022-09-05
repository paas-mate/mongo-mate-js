const mongoHome = process.env.MONGO_HOME
const mongoMate = mongoHome + "/mate"
const mongoScripts = mongoMate + "/scripts"
const startStandAloneScript = mongoScripts + "/start-mongo-stand-alone.sh"
const startConfigScript = mongoScripts + "/start-mongo-config.sh"
const startRouterScript = mongoScripts + "/start-mongo-router.sh"
const startShardScript = mongoScripts + "/start-mongo-shard.sh"

exports.mongoHome = mongoHome
exports.mongoMate = mongoMate
exports.mongoScripts = mongoScripts
exports.startStandAloneScript = startStandAloneScript
exports.startConfigScript = startConfigScript
exports.startRouterScript = startRouterScript
exports.startShardScript = startShardScript
