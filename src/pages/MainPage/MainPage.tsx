import React from "react";
import Container from "../../components/Container";
import GradientWallpaper from "../../components/GradientWallpaper";
import {
  InfoContainer,
  InfoCard,
  FlagContainer,
  Flag,
  CountryName,
  CaseContainer,
  Subject,
  Count,
} from "../../components/Information";
import {
  ChartHintContainer,
  ChartHintCard,
  HintLogo,
  Hint,
} from "../../components/ChartHint";
import { Doughnut } from "react-chartjs-2";
import useHint from "../../hooksANDtools/hint";
import getCovidData from "./getCovidData";
import getChartObject from "./getChartObject";
import { useTranslation } from "react-i18next";

import kFormatter from "../../hooksANDtools/kFormatter";
import Loading from "../Loading/Loading";

//reducer
import initialState from "./reducer/reducerInitialState";
import reducer from "./reducer/reducer";
//reducer

function MainPage() {
  const { t, i18n } = useTranslation();
  const { country } = JSON.parse(window.localStorage.getItem("data")!);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const getLang = () => {
    if (i18n.language === "en") return "en";
    else if (i18n.language === "de") return "de";
    else if (i18n.language === "fa") return "fa";
    return "en";
  };

  const { wait, randomHint } = useHint(getLang());

  const { cases, deaths, recovered, flagPath, isLoading } = state;

  React.useEffect(() => {
    getCovidData(country).then((response) => {
      const { data } = response;
      dispatch({
        type: "setData",
        payload: {
          cases: data?.cases,
          deaths: data?.deaths,
          flagPath: data?.countryInfo?.flag,
          recovered: data?.recovered,
        },
      });
    });
  }, [country]);

  if (isLoading) return <Loading />;
  return (
    <Container style={{ backgroundImage: "url('/images/background.png')" }}>
      <GradientWallpaper>
        <InfoContainer>
          <InfoCard>
            <FlagContainer>
              <Flag url={flagPath} />
              <CountryName>{country}</CountryName>
            </FlagContainer>

            <CaseContainer>
              <Subject fontSize="2.8rem" color="#454545" bold={true}>
                {t("cases")}:
              </Subject>
              <Count fontSize="2.8rem" color="red" bold={true}>
                {cases}
              </Count>
            </CaseContainer>

            <Subject fontSize="2.8rem" color="#2D2D2D">
              {t("recovered")}:
            </Subject>
            <Count fontSize="2.8rem" color="green">
              {kFormatter(recovered)}
            </Count>

            <Subject fontSize="2.8rem" color="#2D2D2D">
              {t("deaths")}:
            </Subject>
            <Count fontSize="2.8rem" color="red">
              {kFormatter(deaths)}
            </Count>
          </InfoCard>
        </InfoContainer>

        <ChartHintContainer>
          <ChartHintCard>
            <Doughnut
              data={getChartObject(cases, recovered, deaths, [
                t("cases"),
                t("recovered"),
                t("deaths"),
              ])}
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
            />
          </ChartHintCard>

          <ChartHintCard>
            <HintLogo />
            <Hint>{wait ? "Loading..." : randomHint}</Hint>
          </ChartHintCard>
        </ChartHintContainer>
      </GradientWallpaper>
    </Container>
  );
}

export default MainPage;
