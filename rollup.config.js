import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import {defineConfig} from 'rollup';

/**
 * Rollup configuration for the TypeScript library.
 * @returns {Promise<RollupOptions>}
 */
export default defineConfig({
  input: './src/index.ts', // Entry point of the library
  output: {
    file: './dist/index.js', // Output file
    format: 'esm', // Output format (ES Modules)
    sourcemap: true, // Generate sourcemaps for easier debugging
  },
  plugins: [
    resolve(), // Resolves node_modules packages
    commonjs(), // Converts CommonJS modules to ES6
    typescript({tsconfig: './tsconfig.build.json'}), // Compiles publishable TypeScript files
    terser(), // Minifies the output for smaller bundle size
  ],
});
