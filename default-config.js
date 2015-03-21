var nodeplayerConfig = require('nodeplayer').config;

var defaultConfig = {};

defaultConfig.algorithm = 'sha256';
defaultConfig.key = nodeplayerConfig.getBaseDir() + path.sep + 'nodeplayer-key.pem';
defaultConfig.iterations = 1000;
defaultConfig.keyLen = 256;

module.exports = defaultConfig;
