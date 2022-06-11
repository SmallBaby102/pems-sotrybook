module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        SeabiscuitWhiteThemeColor: '#FFFFFF',
        SeabiscuitWhite100ThemeColor: '#FEFEFF',
        SeabiscuitMainThemeColor: "#F7074F",
        SeabiscuitSecondaryThemeColor: '#FFDEE8',
        SeabiscuitGreenThemeColor: '#00B6AA',
        SeabiscuitDarkThemeColor: '#3C4B71',
        SeabiscuitDark100ThemeColor: '#1F4173',
        SeabiscuitDark200ThemeColor: '#122B46',
        SeabiscuitDark300ThemeColor: "#141736",
        SeabiscuitDark400ThemeColor: '#383449',
        SeabiscuitDark500ThemeColor: '#171766',
        SeabiscuitDark600ThemeColor: '#120D26',
        SeabiscuitLightGrayThemeColor: "#F1F3F8",
        SeabiscuitGrayThemeColor: '#F6F7FB',
        SeabiscuitGray100ThemeColor: '#979797',
        SeabiscuitGray200ThemeColor: '#807A7A',
        SeabiscuitGray300ThemeColor: '#747688',
        SeabiscuitGray400ThemeColor: '#D9D9D9',
        SeabiscuitGray500ThemeColor: '#D3DAEE',
        SeabiscuitGray600ThemeColor: '#777E85',
        SeabiscuitRedThemeColor: '#E80000',
        SeabiscuitBlackThemeColor: '#000000',
        SeabiscuitIconThemeColor: '#1F4173', // @TODO Change this name
        SeabiscuitProgressBarThemeColor: '#E6EAF2', // @TODO Change this name
        SeabiscuitGrayLightThemeColor: '#BCC6D5',
        SeabiscuitGrayLight100ThemeColor: '#DADADA',
        SeabiscuitGrayLight200ThemeColor: '#E5E5E5',
        SeabiscuitGrayLight300ThemeColor: '#DDDDDD',
        SeabiscuitBlueThemeColor: '#5669FF',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
