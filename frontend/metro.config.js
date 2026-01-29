const { getDefaultConfig } = require('expo/metro-config'); // or '@react-native/metro-config'

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('cjs');
config.resolver.unstable_enablePackageExports = false;

module.exports = config;   