module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Worklets plugin (replaces the old reanimated plugin) must be last.
    plugins: ['react-native-worklets/plugin'],
  };
};
