let deployType = process.env.DEPLOY_TYPE
if (deployType === undefined) {
    deployType = "stand-alone"
}

module.exports = Object.freeze({
        DEPLOY_TYPE: deployType
    }
)
