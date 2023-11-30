import React from "react";

export const CurrentTemperatureUnitContext = React.createContext();

export const currentTemperatureUnit = {};

//  translationContext.js

// export const TranslationContext = React.createContext();

// export const translations = {
//   en: {
//     greeting: 'Hello World',
//   },
//   ru: {
//     greeting: 'Привет, мир!',
//   },
// };

// // App.js

// // import the context object
// import { TranslationContext, translations } from './translationContext';

// function App() {
//   // state responsible for the current language
//   const [lang, setLang] = React.useState('en');

//   return (
//         // Use data from translations[lang] using Context.Provider
//     <TranslationContext.Provider value={translations[lang]}>
//             {/* The subtree, in which the context will be accessed */}
//       <Main />
//     </TranslationContext.Provider>
//   );
// }
