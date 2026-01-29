module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    // other plugins (e.g. 'nativewind/babel')
    'react-native-worklets/plugin', // must be last
  ],
};   