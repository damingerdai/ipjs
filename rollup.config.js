import typescript from 'rollup-plugin-typescript'

export default {
    input: 'src/main.ts',
    output: {
        file: 'lib/ip.js',
        format: 'cjs'
    },
    plugins: [
        typescript({ lib: ['es5', 'es6', 'dom'], target: 'es5' })
    ]
};