module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      'expo-router/babel',
      [
        'module-resolver',
        {
          root: ['./app'],
          alias: {
            screens: './app/screens',
            components: './app/components',
            assets: './assets',
          },
        },
      ],
    ],
  };
};
