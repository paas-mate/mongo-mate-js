const path = require("./path");
const config = require("./config");
const shell = require("./tool/shell_util");
module.exports = {
    start: function () {
        console.log("platform is ", process.platform)
        if (process.platform === "darwin") {
            return
        }
        let deployType = config.DEPLOY_TYPE;
        console.log("deploy type is ", deployType)
        if (deployType === "stand-alone") {
            startStandAlone()
        } else if (deployType === "config") {
            startConfig()
        } else if (deployType === "router") {
            startRouter()
        } else if (deployType === "shard") {
            startShard()
        }
    }
}

function startStandAlone() {
    console.log("start stand alone mongo")
    shell.callScript(path.startStandAloneScript)
}

function startConfig() {

}

function startRouter() {

}

function startShard() {

}
