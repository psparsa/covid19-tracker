import styled from "styled-components";

const GradientWallpaper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    50deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 9, 75, 0.7) 0%,
    rgba(121, 9, 75, 0.7) 10%,
    rgba(0, 138, 255, 0.8) 100%
  );
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export default GradientWallpaper;
