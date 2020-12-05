import React from "react";
import Axios from "axios";
import langs from "./langs";
import Container from "../../components/Container";
import InputCountryContainer from "../../components/InputCountryContainer";
import InputLnaguageContainer from "../../components/InputLnaguageContainer";
import SubmitBTN from "../../components/SubmitBTN";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import swal from "sweetalert2";

type selectOptions = {
  value: string;
  label: string;
}[];
interface SelectCountryProps {
  setHasInit: (val: boolean) => void;
}

function SelectCountry({ setHasInit }: SelectCountryProps) {
  const { t, i18n } = useTranslation();
  const [data, setData] = React.useState<undefined | selectOptions>(undefined);
  const [state, setState] = React.useState({
    country: "",
    language: "",
  });

  React.useEffect(() => {
    Axios({
      url: "https://corona.lmao.ninja/v2/countries",
    })
      .then((res) => {
        if (res.status !== 200) return;
        let countries: selectOptions = [];
        res.data.forEach((element: { country: string }) => {
          countries.push({
            value: element.country,
            label: element.country,
          });
        });
        setData(countries);
      })
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: t("serverError"),
            footer: t("apiProviderError"),
          });
        } else {
          // Something happened in setting up the request that triggered an Error
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: t("serverError"),
          });
        }
      });
  }, [i18n, t]);

  const handleActiveBTN = () => {
    if (state.country && state.language) return false;
    return true;
  };

  const handleSubmit = () => {
    window.localStorage.setItem("data", JSON.stringify(state));
    setHasInit(true);
  };

  if (data)
    return (
      <Container style={{ backgroundImage: "url('/images/background.png')" }}>
        <InputCountryContainer>
          <Select
            options={data}
            onChange={({ value }: any) => {
              setState((prev) => ({ ...prev, country: value }));
            }}
            placeholder="Select Your Country"
          />
        </InputCountryContainer>
        <InputLnaguageContainer margin="30px 0 0 0">
          <Select
            options={langs}
            onChange={({ value }: any) => {
              i18n.changeLanguage(value);
              setState((prev) => ({ ...prev, language: value }));
            }}
            placeholder="Select Your Language"
          />
        </InputLnaguageContainer>
        <SubmitBTN
          margin="50px 0 0 0"
          disabled={handleActiveBTN()}
          onClick={handleSubmit}
        >
          {t("submit")}
        </SubmitBTN>
      </Container>
    );
  return <></>;
}

export default SelectCountry;
