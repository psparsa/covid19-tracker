import styled from "styled-components";

interface ChartHintProps {
  width?: string;
  height?: string;
}

export const ChartHintContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
  overflow: hidden;
`;

export const ChartHintCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  width: 500px;
  height: 290px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1000px) {
    width: 80% !important;
  }
  @media (max-width: 600px) {
    width: 85% !important;
  }
  @media (max-height: 1100px) {
    margin: 10px;
  }
`;

export const HintLogo = styled.div`
  width: 75px;
  height: 75px;
  background-image: url("/images/HintLogo.png");
  background-size: cover;
  background-position: center center;
`;

export const Hint = styled.p`
  width: 80%;
  text-align: center;
  font-size: 1.5rem;
  color: black;
`;