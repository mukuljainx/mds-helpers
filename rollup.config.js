import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import path from 'path';
import packageJSON from './package.json';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';

const banner = () => {

  const {
    version,
    name,
    license,
    homepage,
  } = packageJSON;

  const banner = `
  /**
   * Generated on: ${Date.now()} 
   *      Package: ${name}
   *      Version: v${version}
   *      License: ${license}
   *         Docs: ${homepage}
   */

    `;
  return banner;

}

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const formats = ['esm', 'umd'] // 'cjs'

function globals() {
  return {
    'react': 'React',
    'react-dom': 'ReactDOM',
    // 'classnames': 'classNames',
    // 'react-popper': 'ReactPopper',
    '@innovaccer/design-system': 'InnovaccerDesignSystem'
  };
}

export default [{
  input: './src/index.tsx',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ['react', 'react-dom', '@innovaccer/design-system'],

  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve('./src') },
      ]
    }),

    // Allows node_modules resolution
    resolve({ extensions, preferBuiltins: false }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ['src/**/*'] }),

    json(),

    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    postcss({
      extensions: ['.css'],
    }),
  ],

  output: formats.map(format => ({
    file: `dist/index.${format}.js`,
    format,
    name: `MDSHelpers`,
    globals: globals(),
    banner: banner(),
  }))
}, {
  input: './src/index.tsx',

  external: ['react', 'react-dom', '@innovaccer/design-system'],

  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve('./src') },
      ]
    }),

    json(),

    // Allows node_modules resolution
    resolve({ extensions }),

    typescript({
      typescript: require('ttypescript'),
      tsconfig: path.resolve(__dirname, './tsconfig.type.json'),
    }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ['src/**/*'] }),

    postcss({
      extensions: ['.css'],
    }),
  ],

  output: {
    dir: 'dist',
    format: 'umd',
    name: `MDSHelpers`,
    globals: globals(),
    banner: banner(),
    sourcemap: true,
  }
}];