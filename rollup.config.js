import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss'

export default {
    input: './src/main.ts',

    plugins: [
        typescript({ tsconfig: "tsconfig.json" }),
        scss({
            output: 'public/css/style.css',
            include: 'src/style/**/*.scss',
        }),
    ],

    watch: {
        exclude: ['node_modules/**']
    }
}
