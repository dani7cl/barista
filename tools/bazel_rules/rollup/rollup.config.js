import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default (args) => {
  return {
    plugins: [
      resolve({
        preferBuiltins: true,
        mainFields: [
          'es2015',
          'module',
          'browser',
          'jsnext',
          'jsnext:main',
          'main',
        ],
        extensions: ['.mjs', '.js'],
      }),
      commonjs(),
    ],
  };
};
