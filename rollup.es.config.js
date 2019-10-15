import typescript from 'rollup-plugin-typescript';

export default {
    input: 'src/ip.ts',
    output: {
        file: 'lib/es5/ip.js',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        typescript({ lib: ['es5', 'es6', 'dom'], target: 'es5', declaration: true }),
    ],
    external: ['os']
};