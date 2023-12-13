import withMT from '@material-tailwind/react/utils/withMT'

const config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      fontSize: {
        xs:['0.75rem'],
        sm:['0.875rem'],
        base:['1rem'],
        lg:['1.125rem'],
        xl:['1.25rem'],
        '2xl':['1.5rem'],
        '3xl':['1.875rem'],
        '4xl':['2.25rem'],
        '5xl': ['3rem'],
        '6xl': ['3.75rem'],
        '7xl': ['4.5rem'],
        '8xl': ['6rem'],
        '9xl': ['8rem'],
      }
  },
  plugins: [],
})
export default config