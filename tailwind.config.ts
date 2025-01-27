import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {   
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
        xl: "1800px"
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1800px"
    },
    extend: {
      boxShadow: {
        'custom': '0px 1px 12px 1px #6a329f', 
        'purple-custom': '0px 4px 20px 4px rgba(140,69,255,0.5)',
        'custom-inset': 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
        'bento-card': '1px 1px 20px 1px rgba(140,69,255,0.5)',
        'purple-custom2': '0px 0px 100px 10px rgba(140,69,255,0.5)',
        'purple-custom3': '0px 0px 50px 6px rgba(140,69,255,0.5)'
      },
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      keyframes:{
        'border-spin': {
          '100%':{
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation:{
        'border-spin': 'border-spin 7s linear infinite',
      }
    },
  },
  plugins: [],
};

export default config;
