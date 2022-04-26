/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

 const { getDefaultConfig } = require('metro-config');

 const config = async () => {
  const {
    resolver: { sourceExts, assetExts, blacklistRE },
  } = await getDefaultConfig();

  // requred for polkadot libraries.
  sourceExts.push('cjs');
  assetExts.push('cjs');
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      blacklistRE: blacklistRE,
      assetExts: assetExts,
      sourceExts: sourceExts,
    },
  }
}
 

module.exports = config();
