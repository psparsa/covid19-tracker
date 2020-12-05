import styled from "styled-components";

interface InformationProps {
  width?: string;
  height?: string;
  url?: string;
  bold?: boolean;
  fontSize?: string;
  color?: string;
}

export const InfoContainer = styled.div`
  width: 50%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
  overflow: hidden;
`;

export const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  height: 700px;
  width: 400px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 390px) {
    width: 300px;
  }
  @media (max-width: 300px) {
    width: 90%;
  }
  @media (max-height: 690px) {
    margin: 20px 0;
  }
`;

export const FlagContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flag = styled.div`
  width: 200px;
  height: 120px;
  border-radius: 10px;
  background: url("${(props: InformationProps) => props.url ?? 'data:image/jpeg;base64,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'}");
  background-size: cover;
  background-position: center center;
`;

export const CountryName = styled.h1`
  font-size: 1.75rem;
  text-align: center;
  margin-top: 15px;
`;

export const CaseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Subject = styled.p`
  font-size: ${(props: InformationProps) => props.fontSize ?? undefined};
  font-weight: ${(props: InformationProps) => props.bold ? "bold" : undefined};
  color: ${(props: InformationProps) => props.color ?? undefined};
`;

export const Count = styled.p`
  font-size: ${(props: InformationProps) => props.fontSize ?? undefined};
  font-weight: ${(props: InformationProps) => props.bold ? "bold" : undefined};
  color: ${(props: InformationProps) => props.color ?? undefined};
`;