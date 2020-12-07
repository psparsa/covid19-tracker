import React from "react";
import SelectCountry from "./pages/SelectCountry/SelectCountry";
import MainPage from "./pages/MainPage/MainPage";
import { useTranslation } from "react-i18next";
import Loading from "./pages/Loading/Loading";

function App() {
  const localStorage = window.localStorage.getItem("data");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [hasInit, setHasInit] = React.useState<boolean>(false);
  const { i18n } = useTranslation();

  React.useEffect(() => {
    if (localStorage) {
      const lang = JSON.parse(localStorage)?.language;
      i18n.changeLanguage(lang);
      setHasInit(true);
    } else {
      setHasInit(false);
    }
    setLoading(false);
  }, [localStorage, i18n]);

  if (loading) return <Loading />;
  if (hasInit) return <MainPage />;
  return <SelectCountry setHasInit={setHasInit} />;
}

export default App;
