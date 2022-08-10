import { Options } from 'tsup';

const config: Options = {
  entry: ['src/index.ts'],
  dts: {
    resolve: true,
  },
};

export default config;
