import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const messages = {
  es: localeEsMessages,
  en: localeEnMessages,
};

const App = () => {
  const [locale, setLocale] = useState(navigator.language || 'en'); // Valor por defecto si navigator.language es undefined

  useEffect(() => {
    setLocale(navigator.language || 'en');
  }, []);

  const getMessages = (locale) => {
    return locale.startsWith("es") ? messages["es"] : messages["en"];
  };

  return (
    <IntlProvider locale={locale} messages={getMessages(locale)}>
      <JobsList locale={locale || 'en'} /> {/* Valor predeterminado si locale no está definido */}
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
