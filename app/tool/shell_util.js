const shell = require("shelljs");
module.exports = {
    callScript: function callScript(script) {
        console.log("start script ", script)
        shell.exec("/bin/bash " + script)
    }
}
