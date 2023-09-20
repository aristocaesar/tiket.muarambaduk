import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      'wild-sand': {
        '50': '#f7f7f7',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
      },
      blumine: {
        '50': '#f3f7fc',
        '100': '#e6eff8',
        '200': '#c7def0',
        '300': '#95c2e4',
        '400': '#5da3d3',
        '500': '#3887bf',
        '600': '#286ca1',
        '700': '#20537e',
        '800': '#1f4a6d',
        '900': '#1f3f5b',
        '950': '#14293d',
      },
      'cod-gray': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#1e1e1e',
      },
    },
    extend: {
      maxWidth: {
        'screen-sm': '480px !important',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
