import styled from "styled-components";

interface SubmitBTNProps {
  margin?: string;
}

const SubmitBTN = styled.button`
  width: 130px;
  height: 40px;
  border: none;
  border-radius: 8px;
  margin: ${(props: SubmitBTNProps) => props.margin ?? undefined};
  cursor: pointer;
  font-size: 1.5em;
  transition: ease-in-out 0.3s;
  &:focus {
    outline: none;
    transform: scale(1.1);
    background: #ff6666;
  }
`;

export default SubmitBTN;
