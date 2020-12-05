import styled from "styled-components";

const InputLnaguageContainer = styled.div`
  width: 500px;
  margin: ${(props: { margin?: string }) => props.margin ?? null};
  @media (max-width: 1500px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 60%;
  }
`;

export default InputLnaguageContainer;
