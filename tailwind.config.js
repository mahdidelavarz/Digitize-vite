/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "login-page": "url('/src/images/login.jpg')",
      },
      boxShadow: {
        sdt: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      },
      colors:{
       'main-gray': '#1f2937',
       'text-gray': '#cbd5e1',
       'border-slate' :'#334155',
       'shadow-slate' : '#475569',
      },
    },
  },
  plugins: [],
};