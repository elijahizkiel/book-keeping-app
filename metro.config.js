// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const expoConfig = getDefaultConfig(__dirname);

module.exports = withNativeWind(expoConfig, { input: './global.css' });
