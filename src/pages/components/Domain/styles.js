import styled from "styled-components";

export const RegisterButton = styled.a`
  background: #ff5043;
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color ease-in 0.2s;

  &:hover {
    background-color: rgba(255, 80, 67, 0.75);
  }
`;

export const ResultTitle = styled.p`
  font-weight: 900;
  font-size: 3rem;
  max-width: 380px;
  word-break: break-all;
  text-align: center;
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100%;
  flex-direction: column;

  @media (max-width: 840px) {
    & p {
      font-size: 2rem;
    }
  }
`;

export const ResultInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 440px) {
    gap: 1.5rem;
  }
`;

export const ResultInfoLabel = styled.p`
  text-align: center;
  font-weight: 600;
`;
