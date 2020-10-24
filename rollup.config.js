import typescript from 'rollup-plugin-typescript2';

export default {
    input: './src/main.ts',

    output: {
      file: 'public/js/main.js',
    },

    plugins: [
        typescript({ tsconfig: "tsconfig.json" }),
    ],

    watch: {
        exclude: ['node_modules/**']
    }
}
