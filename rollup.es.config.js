import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/main.ts',
    output: {
        file: 'lib/es5/ip.js',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        typescript({ lib: ['es5', 'es6', 'dom'], target: 'es5', declaration: true }),
        babel()
    ]
};