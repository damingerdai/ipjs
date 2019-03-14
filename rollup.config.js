import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/main.ts',
    output: {
        file: 'lib/ip.js',
        format: 'cjs',
    },
    plugins: [
        typescript({ lib: ['es5', 'es6', 'dom'], target: 'es5' }),
        babel()
    ]
};